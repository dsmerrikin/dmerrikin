// Server-side only. Works out which photo to show for each food entry.
// Order: explicit `photo` -> matching Instagram post -> recipe page's og:image -> placeholder.

import type { FoodEntry } from "../data/food";

export const PLACEHOLDER_PHOTO = "/images/food/placeholder.svg";

export interface ResolvedFoodEntry extends FoodEntry {
  photo: string;
  photoSource: "manual" | "instagram" | "recipe" | "placeholder";
  instagramUrl?: string;
}

interface InstagramPost {
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url?: string;
  thumbnail_url?: string;
  permalink: string;
}

const TIMEOUT_MS = 8000;

const normalize = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

// Pulls recent posts with the Instagram API (needs INSTAGRAM_ACCESS_TOKEN).
// Returns [] if there's no token or the call fails, so the page still renders.
async function fetchInstagramPosts(): Promise<InstagramPost[]> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!token) return [];

  const posts: InstagramPost[] = [];
  let next: string | undefined =
    "https://graph.instagram.com/me/media?fields=caption,media_type,media_url,thumbnail_url,permalink&limit=100&access_token=" +
    encodeURIComponent(token);

  // Up to 300 most recent posts is plenty.
  for (let page = 0; next && page < 3; page++) {
    try {
      const res = await fetch(next, { signal: AbortSignal.timeout(TIMEOUT_MS) });
      if (!res.ok) {
        console.error("Instagram API error:", res.status, await res.text());
        break;
      }
      const json = await res.json();
      posts.push(...(json.data ?? []));
      next = json.paging?.next;
    } catch (err) {
      console.error("Instagram fetch failed:", err);
      break;
    }
  }
  return posts;
}

function findInstagramPost(title: string, posts: InstagramPost[]) {
  const needle = normalize(title);
  if (!needle) return undefined;
  return posts.find((p) => p.caption && normalize(p.caption).includes(needle));
}

const decodeEntities = (s: string) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/&#x2F;/gi, "/");

// Grabs og:image / twitter:image from the recipe page.
async function fetchRecipeImage(url: string): Promise<string | undefined> {
  try {
    const res = await fetch(url, {
      signal: AbortSignal.timeout(TIMEOUT_MS),
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
        Accept: "text/html",
      },
    });
    if (!res.ok) return undefined;
    const html = await res.text();

    for (const tag of html.match(/<meta\b[^>]*>/gi) ?? []) {
      const key = tag.match(/(?:property|name)\s*=\s*["']([^"']+)["']/i)?.[1]?.toLowerCase();
      if (key !== "og:image" && key !== "og:image:url" && key !== "og:image:secure_url" && key !== "twitter:image") continue;
      const content = tag.match(/content\s*=\s*["']([^"']+)["']/i)?.[1];
      if (content) return new URL(decodeEntities(content), url).toString();
    }
  } catch (err) {
    console.error(`Recipe image fetch failed for ${url}:`, err);
  }
  return undefined;
}

export async function resolveFoodPhotos(entries: FoodEntry[]): Promise<ResolvedFoodEntry[]> {
  const needsLookup = entries.some((e) => !e.photo);
  const posts = needsLookup ? await fetchInstagramPosts() : [];

  return Promise.all(
    entries.map(async (entry): Promise<ResolvedFoodEntry> => {
      const post = findInstagramPost(entry.title, posts);
      const instagramUrl = post?.permalink;

      if (entry.photo) return { ...entry, photo: entry.photo, photoSource: "manual", instagramUrl };

      const igImage = post && (post.media_type === "VIDEO" ? post.thumbnail_url : post.media_url);
      if (igImage) return { ...entry, photo: igImage, photoSource: "instagram", instagramUrl };

      const recipeImage = entry.url ? await fetchRecipeImage(entry.url) : undefined;
      if (recipeImage) return { ...entry, photo: recipeImage, photoSource: "recipe", instagramUrl };

      return { ...entry, photo: PLACEHOLDER_PHOTO, photoSource: "placeholder", instagramUrl };
    })
  );
}
