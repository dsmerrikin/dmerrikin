import { filter } from "lodash";

export default function handler(req, res) {
  const items = [
    {
      id: 1,
      title: "MGB Scholarship",
      description:
        "MGB Scholarship Foundation |\nProviding Scholarships Through Community Support",
      imageSrc: "/images/portfolio/mgbscholarshipMike.jpg",
      url: "https://mgbscholarship.org/",
      categories: ["wordpress"],
    },
    {
      id: 2,
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
    // Check if the item's categories array includes the selected category or if the selected category is '*'
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
