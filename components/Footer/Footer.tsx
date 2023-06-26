import { useState, useEffect } from "react";
import Social from "./Social/Social";

const Footer = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("/api/socials"); // Fetch from the API endpoint
        const data = await response.json(); // Parse the response as JSON
        setItems(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchItems();
  }, []);

  return (
    <footer className='bg-black pt-[100px] pb-12 relative z-10'>
      <div className='container'>
        <div className='mt-0 pt-12 border-t border-white border-opacity-10'>
          <div className='flex items-center justify-center mb-5 text-2xl'>
            {items?.length === 0 ? (
              <div>No items to display</div>
            ) : (
              items?.map((item) => (
                <Social
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  icon={item.icon}
                  url={item.url}
                />
              ))
            )}
          </div>
          <p className='font-medium text-base text-body-color text-center'>
            All rights reserved by © DMerrikin {new Date().getFullYear()}
          </p>
        </div>
      </div>

      <div
        className='absolute left-0 bottom-0 -z-1'
        aria-label='shape'
        data-name='shape'
      >
        <span className='hidden'>shape</span>
        <svg
          width='143'
          height='138'
          viewBox='0 0 143 138'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle
            cx='25'
            cy='118'
            r='101'
            stroke='url(#paint0_linear_52:83)'
            strokeWidth='34'
          />
          <defs>
            <linearGradient
              id='paint0_linear_52:83'
              x1='-12.7969'
              y1='-37.3359'
              x2='99.2109'
              y2='173.773'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#4A6CF7' />
              <stop
                offset='1'
                stopColor='#4A6CF7'
                stopOpacity='0'
              />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
