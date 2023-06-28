import { useState, useEffect } from "react";
import ServiceItem from "./ServiceItem/ServiceItem";
import styles from "./Services.module.css";

const Services = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("/api/services");
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchItems();
  }, []);

  return (
    <section id='services'>
      <div className='container'>
        <div className='pt-[120px] pb-[90px] border-t border-[#E9ECF8]'>
          <div className='flex flex-wrap mx-[-16px]'>
            <div className='w-full px-4'>
              <div className='max-w-[600px] mx-auto text-center mb-[70px]'>
                <span className='font-semibold text-lg text-primary block mb-2'>
                  {" "}
                  What I Offer?{" "}
                </span>
                <h2 className='font-bold text-black text-3xl sm:text-4xl md:text-[45px] mb-5'>
                  My Services
                </h2>
                <p className='font-medium text-lg text-body-color'>
                  With a focus on delivering exceptional results, I offer a
                  comprehensive range of services tailored to meet your specific
                  needs. From concept development and design to implementation
                  and optimization, my expertise spans across various areas.
                  Whether you&apos;re looking for web development, UI/UX design,
                  or digital marketing strategies, I am dedicated to providing
                  innovative solutions that drive growth and success for your
                  business.
                </p>
              </div>
            </div>
          </div>

          <div className='flex flex-wrap -mx-4'>
            {items.length === 0 ? (
              <div>No items to display</div>
            ) : (
              items.map((item) => (
                <div
                  className='w-full sm:w-1/2 md:w-1/2 xl:w-1/4 px-4'
                  key={item.id}
                >
                  <div className={`h-full ${styles.serviceCard}`}>
                    <ServiceItem
                      id={item.id}
                      title={item.title}
                      icon={item.icon}
                      summary={item.summary}
                    />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
