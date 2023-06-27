import Image from "next/image";
import Testimonial from "./Testimonial/Testimonial";
import { useState, useEffect } from "react";

const Testimonials = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("/api/testimonials"); // Fetch from the API endpoint
        const data = await response.json(); // Parse the response as JSON
        setItems(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchItems();
  }, []);

  return (
    <section
      id='testimonials'
      className='pt-[120px] pb-20 bg-[#f8f9ff]'
    >
      <div className='container'>
        <div className='flex flex-wrap mx-[-16px]'>
          <div className='w-full px-4'>
            <div className='max-w-[600px] mx-auto text-center mb-[50px]'>
              <span className='font-semibold text-lg text-primary block mb-2'>
                Awesome Testimonials
              </span>
              <h2 className='font-bold text-black text-3xl sm:text-4xl md:text-[45px] mb-5'>
                Hear From My Colleagues
              </h2>
              <p className='font-medium text-lg text-body-color'>
                Discover what others are saying about my work and expertise.
              </p>
              <p className='font-medium text-lg text-body-color'>
                Read their testimonials and experiences below.
              </p>
            </div>
          </div>
        </div>

        <div className='flex flex-wrap -mx-4'>
          {items?.length === 0 ? (
            <div>No items to display</div>
          ) : (
            items?.map((item) => (
              <Testimonial
                key={item.id}
                id={item.id}
                company={item.company}
                headshotUrl={item.headshotUrl}
                title={item.title}
                name={item.name}
                summary={item.summary}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
