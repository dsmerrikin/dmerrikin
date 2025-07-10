import { filter } from "lodash";

export default function handler(req, res) {
  const items = [
    {
      id: 1,
      title: "PixelBurst Studio, LLC.",
      description:
        "The Growth Catalyst For Your Online Business. Co-Founder and CTO.",
      imageSrc: "/images/portfolio/pb_logo_color_for_dark.png",
      url: "https://pixelburststudio.com/",
      categories: ["wordpress"],
    },
    {
      id: 2,
      title: "Rocket21",
      description: "Rocket 21 Challenge |\nRocket Your Trading Skills",
      imageSrc: "/images/portfolio/r21.jpg",
      url: "https://rocket21challenge.com/",
      categories: ["wordpress", "e-commerce"],
    },
    {
      id: 3,
      title: "Fortunes Funding",
      description: "Fortunes Funding |\nA Fortune Awaits You",
      imageSrc: "/images/portfolio/ff.jpg",
      url: "https://fortunesfunding.com/",
      categories: ["wordpress", "e-commerce"],
    },
    {
      id: 4,
      title: "East Coast Content",
      description:
        "East Coast Content |\nDigital natives providing commercial and event videography",
      imageSrc: "/images/portfolio/eccfavicon.png",
      url: "https://eastcoastcontent.com/",
      categories: ["wordpress"],
    },
    {
      id: 5,
      title: "MGB Scholarship",
      description:
        "MGB Scholarship Foundation |\nProviding Scholarships Through Community Support",
      imageSrc: "/images/portfolio/mgbscholarshipMike.jpg",
      url: "https://mgbscholarship.org/",
      categories: ["wordpress"],
    },
    {
      id: 6,
      title: "JMcIntyre Photo",
      description: "JMcIntyre Photo |\nJim McIntyre Photography",
      imageSrc: "/images/portfolio/jmcintyrephoto.jpeg",
      url: "https://jmcintyrephoto.com/",
      categories: ["wordpress", "e-commerce"],
    },
  ];

  const categories = ["Wordpress", "e-Commerce"];

  const selectedCategory = req.query?.category?.toString();
  const filteredItems = filter(items, (item) => {
    return (
      item.categories.includes(selectedCategory) || selectedCategory === "*"
    );
  });

  const response = {
    items: filteredItems,
    categories: categories,
  };

  res.status(200).json(response);
}
