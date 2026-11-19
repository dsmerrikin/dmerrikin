import Head from "next/head";
import type { GetStaticProps } from "next";
import food from "../data/food";
import { resolveFoodPhotos, ResolvedFoodEntry } from "../lib/foodImages";

// Photos are looked up at build time and refreshed at most once an hour
// (Instagram image links expire, so they need periodic refreshing).
export const getStaticProps: GetStaticProps<{ entries: ResolvedFoodEntry[] }> = async () => {
  const entries = await resolveFoodPhotos(food);
  return {
    // JSON round-trip drops undefined fields, which Next can't serialize.
    props: { entries: JSON.parse(JSON.stringify(entries)) },
    revalidate: 3600,
  };
};

// Unlisted page: not linked anywhere on the site and marked noindex.

const Stars = ({ rating }: { rating: number }) => (
  <span className='inline-flex items-center' aria-label={`${rating} out of 5`}>
    <span className='relative text-lg tracking-wide leading-none'>
      <span className='text-body-color opacity-40'>★★★★★</span>
      <span
        className='absolute inset-0 overflow-hidden whitespace-nowrap text-yellow'
        style={{ width: `${(Math.min(Math.max(rating, 0), 5) / 5) * 100}%` }}
      >
        ★★★★★
      </span>
    </span>
    <span className='ml-2 text-sm text-body-color'>{rating}/5</span>
  </span>
);

const hostname = (url: string) => {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
};

const cardClass =
  "group block bg-dark rounded-md overflow-hidden shadow-service hover:-translate-y-1 transition";

// Cards link to the recipe when there is one; otherwise they're just a card.
const CardShell = ({ url, children }: { url?: string; children: React.ReactNode }) =>
  url ? (
    <a href={url} target='_blank' rel='noopener noreferrer' className={cardClass}>
      {children}
    </a>
  ) : (
    <div className={cardClass}>{children}</div>
  );

const FoodCard = ({ entry }: { entry: ResolvedFoodEntry }) => (
  <CardShell url={entry.url}>
    <div className='aspect-[4/3] overflow-hidden bg-black'>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={entry.photo}
        alt={entry.title}
        loading='lazy'
        referrerPolicy='no-referrer'
        className='w-full h-full object-cover group-hover:scale-105 transition duration-300'
      />
    </div>
    <div className='p-5'>
      <h2 className='font-semibold text-white text-lg mb-2 group-hover:text-primary transition'>
        {entry.title}
      </h2>
      {entry.rating != null ? (
        <Stars rating={entry.rating} />
      ) : (
        <span className='text-sm text-body-color'>Not rated yet</span>
      )}
      <p className='mt-2 text-sm text-body-color truncate'>
        {[entry.url && hostname(entry.url), entry.date].filter(Boolean).join(" · ")}
      </p>
    </div>
  </CardShell>
);

const Food = ({ entries }: { entries: ResolvedFoodEntry[] }) => (
  <>
    <Head>
      <title>Food | DMerrikin</title>
      <meta name='robots' content='noindex, nofollow' />
    </Head>
    <main className='min-h-screen bg-black py-16'>
      <div className='container'>
        <h1 className='text-white font-bold text-3xl sm:text-4xl mb-2'>Food</h1>
        <p className='text-body-color mb-10'>Stuff I&apos;ve made, and how it went.</p>
        {entries.length === 0 ? (
          <p className='text-body-color'>Nothing yet.</p>
        ) : (
          <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {entries.map((entry) => (
              <FoodCard key={`${entry.title}-${entry.date ?? ""}-${entry.photo}`} entry={entry} />
            ))}
          </div>
        )}
      </div>
    </main>
  </>
);

export default Food;
