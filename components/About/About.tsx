import { useState, useEffect } from "react";
import Social from "../Footer/Social/Social";

const About = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("/api/socials");
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchItems();
  }, []);

  return (
    <section
      id='about'
      className='pt-[145px] pb-[120px] relative z-10'
    >
      <div className='container'>
        <div className='flex flex-wrap mx-[-16px]'>
          <div className='w-full lg:w-1/2 xl:w-7/12 px-4 mb-8 lg:mb-0 xs:text-center sm:text-left'>
            <span className='font-bold text-primary text-lg md:text-xl mb-3'>
              {" "}
              ABOUT ME{" "}
            </span>
            <h2 className='max-w-[500px] sm:max-w-full font-bold text-black text-3xl sm:text-4xl md:text-[45px] leading-tight sm:leading-tight md:leading-tight mb-5'>
              Better development, better experience
            </h2>
            <p className='max-w-[570px] sm:max-w-full font-medium text-base text-body-color'>
              Throughout my decade-long career, I&apos;ve focused on expanding
              my expertise in software technologies to bring value to
              organizations as a collaborative team player. With an enthusiastic
              and positive attitude, I motivate my colleagues by showcasing my
              coding skills, adhering to best practices, and embracing
              constructive criticism. My unwavering desire for knowledge fuels
              my growth and ongoing education. Currently, I&apos;m actively
              involved in ReactJS and NextJS development.
            </p>
          </div>
          <div className='w-full lg:w-1/2 xl:w-5/12 px-4'>
            <h3 className='font-semibold text-black text-2xl md:text-3xl mb-6'>
              Connect With Me
            </h3>
            <p className='font-medium text-base text-body-color mb-10'>
              I&apos;m always open to expanding my professional network and
              connecting with like-minded individuals. Whether you want to
              discuss software technologies, collaborate on projects, or explore
              new opportunities, I&apos;m just a message away. Let&apos;s
              connect and foster meaningful connections in the tech community!
            </p>
            <div className='flex items-center'>
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
                    className='text-primary hover:text-black transition-colors duration-200'
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

export default About;
