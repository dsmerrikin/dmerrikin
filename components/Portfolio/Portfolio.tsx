import { useEffect, useState } from "react";
import PortfolioItem from "./PortfolioItem/PortfolioItem";

const Portfolio = () => {
  const [items, setItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("*");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`/api/${selectedCategory}/portfolioItems`);
        const data = await response.json();
        setItems(data.items);
        setCategories(data.categories);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchItems();
  }, [categories, selectedCategory]);

  const handleFilterClick = (category) => {
    setSelectedCategory(category.toLowerCase());
  };

  return (
    <section
      id='portfolio'
      className='pt-[120px] pb-[70px]  bg-black'
    >
      <div className='container'>
        <div className='flex flex-wrap mx-[-16px]'>
          <div className='w-full px-4'>
            <div className='max-w-[600px] mx-auto text-center mb-[50px]'>
              <h2 className='font-bold text-white text-3xl sm:text-4xl md:text-[45px] mb-5'>
                Recent Works
              </h2>
            </div>
          </div>
          <div className='w-full px-4'>
            {categories?.length !== 0 && (
              <div className='portfolio-buttons flex flex-wrap items-center justify-center mb-12'>
                <button
                  className={`sm:font-semibold text-sm sm:text-base block py-2 px-5 md:mx-2 mb-2 rounded-full text-white ${
                    selectedCategory === "*" ? "active" : ""
                  }`}
                  onClick={() => handleFilterClick("*")}
                >
                  All
                </button>
                {categories?.map((category) => (
                  <button
                    key={category}
                    className={`sm:font-semibold text-sm sm:text-base block py-2 px-5 md:mx-2 mb-2 rounded-full text-white ${
                      selectedCategory.toLowerCase() === category.toLowerCase()
                        ? "active"
                        : ""
                    }`}
                    onClick={() => handleFilterClick(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className='portfolio-container flex justify-center -mx-4'>
          <div className='w-full xl:w-10/12 px-4'>
            <div className='items-wrapper flex flex-wrap justify-center mx-[-16px]'>
              {items?.length === 0 ? (
                <div>No items to display</div>
              ) : (
                items?.map((item) => (
                  <PortfolioItem
                    key={item.id}
                    id={item.id}
                    imageSrc={item.imageSrc}
                    title={item.title}
                    description={item.description}
                    url={item.url}
                    category={item.category}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
