import { useEffect, useState } from "react";
import EducationItem from "./EducationItem/EducationItem";

const Education = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("/api/educationItems");
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
      id='education'
      className='pt-[120px] bg-white relative z-10'
    >
      <div className='container'>
        <div className='border-b border-[#E9ECF8] pb-[70px]'>
          <div className='flex flex-wrap mx-[-16px]'>
            <div className='w-full px-4'>
              <div className='max-w-[600px] mx-auto text-center mb-[50px]'>
                <span className='font-semibold text-lg text-primary block mb-2'>
                  Education & Experience
                </span>
                <h2 className='font-bold text-black text-3xl sm:text-4xl md:text-[45px] mb-5'>
                  My Resume
                </h2>
                <p className='font-medium text-lg text-body-color'>
                  From hands-on projects to collaborative team environments, I
                  have honed my abilities in problem-solving, critical thinking,
                  and effective communication. With a passion for learning and a
                  drive for excellence, I am constantly seeking new challenges
                  and opportunities to grow both personally and professionally.
                </p>
              </div>
            </div>
          </div>

          <div className='relative pt-12'>
            <span className='absolute top-0 block left-2 lg:left-1/2 w-[1px] h-full bg-[#d7dfff]'></span>

            <div className='flex flex-wrap -mx-4'>
              {items.length === 0 ? (
                <div>No items to display</div>
              ) : (
                items.map((item) => (
                  <EducationItem
                    key={item.id}
                    id={item.id}
                    company={item.company}
                    title={item.title}
                    date={item.date}
                    summary={item.summary}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      <div>
        <span className='absolute right-0 top-0 z-0'>
          <svg
            width='455'
            height='1307'
            viewBox='0 0 455 1307'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect
              opacity='0.08'
              width='332.05'
              height='1060.35'
              transform='matrix(-0.632736 -0.774367 -0.774367 0.632736 1031.2 139.128)'
              fill='url(#paint0_linear_0:1)'
            />
            <rect
              opacity='0.08'
              width='509.849'
              height='1060.35'
              transform='matrix(-0.632736 -0.774367 -0.774367 0.632736 1293.7 635.81)'
              fill='url(#paint1_linear_0:1)'
            />
            <defs>
              <linearGradient
                id='paint0_linear_0:1'
                x1='166.025'
                y1='0'
                x2='166.025'
                y2='1060.35'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#4A6CF7' />
                <stop
                  offset='1'
                  stopColor='#4A6CF7'
                  stopOpacity='0'
                />
              </linearGradient>
              <linearGradient
                id='paint1_linear_0:1'
                x1='254.924'
                y1='0'
                x2='254.924'
                y2='1060.35'
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
        </span>
        <span className='absolute left-0 bottom-0 z-[-1]'>
          <svg
            width='416'
            height='1453'
            viewBox='0 0 416 1453'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect
              opacity='0.08'
              width='332.05'
              height='1030.82'
              transform='matrix(0.632736 0.774368 0.774368 -0.632736 -603 1507.24)'
              fill='url(#paint0_linear_0:1)'
            />
            <rect
              opacity='0.08'
              width='791.583'
              height='1060.35'
              transform='matrix(0.632736 0.774368 0.774368 -0.632736 -906.263 670.922)'
              fill='url(#paint1_linear_0:1)'
            />
            <defs>
              <linearGradient
                id='paint0_linear_0:1'
                x1='166.025'
                y1='0'
                x2='166.025'
                y2='1030.82'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#4A6CF7' />
                <stop
                  offset='1'
                  stopColor='#4A6CF7'
                  stopOpacity='0'
                />
              </linearGradient>
              <linearGradient
                id='paint1_linear_0:1'
                x1='395.791'
                y1='0'
                x2='395.791'
                y2='1060.35'
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
        </span>
      </div>
    </section>
  );
};

export default Education;
