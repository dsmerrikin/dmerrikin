import Image from "next/image";

const Hero = () => {
  return (
    <section
      id='home'
      className='relative z-10 pt-[150px] lg:pt-[100px] 2xl:flex items-center 2xl:h-[700px]'
    >
      <div className='container'>
        <div className='flex flex-wrap mx-[-16px]'>
          <div className='w-full lg:w-1/2 self-center px-4'>
            <div>
              <h1 className='text-base font-semibold text-primary mb-3'>
                Hey there 👋 I am
                <span className='font-bold text-black text-3xl sm:text-3xl md:text-[45px] leading-tight sm:leading-tight md:leading-[50px] block mt-1'>
                  {" "}
                  Derek Merrikin{" "}
                </span>
              </h1>
              <h2 className='font-medium text-body-color text-lg md:text-xl mb-5'>
                Senior
                <span className='text-black'> Software Engineer </span> |
                Aspiring <span className='text-black'>Chef</span>
              </h2>

              <p className='max-w-[470px] font-medium text-body-color text-base leading-relaxed mb-11'>
                Decade-Long Software Expert Empowering Teams with Inspiring
                Leadership and Cutting-Edge Technologies
              </p>
              <div className='flex items-center'>
                <a
                  href='#contact'
                  className='text-base font-semibold text-white bg-primary py-3 px-8 mr-4 hover:shadow-signUp hover:bg-opacity-90 rounded-full transition duration-300 ease-in-out'
                >
                  Contact Me
                </a>
                <a
                  href='#services'
                  className='text-base font-semibold text-white bg-black py-3 px-8 hover:shadow-signUp hover:bg-opacity-90 rounded-full transition duration-300 ease-in-out'
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className='w-full lg:w-1/2 self-end px-4'>
            <div className='relative mt-12 lg:mt-0 z-10 2xl:absolute 2xl:bottom-0 2xl:right-40'>
              <Image
                src='/images/hero/hero-image-derrick.png'
                alt='image'
                className='max-w-full mx-auto'
                width={500}
                height={500}
                sizes='(max-width: 767px) 100vw, (max-width: 991px) 480px, 600px'
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <span className='absolute right-0 bottom-0 -z-1'>
          <svg
            width='491'
            height='350'
            viewBox='0 0 491 490'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='sm:h-9 md:h-[425px] lg:h-[490px]'
          >
            <circle
              cx='356.5'
              cy='356.5'
              r='356.5'
              fill='url(#paint0_linear_6:37)'
            />
            <defs>
              <linearGradient
                id='paint0_linear_6:37'
                x1='356.5'
                y1='0'
                x2='356.5'
                y2='713'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#4A6CF7' />
                <stop
                  offset='1'
                  stopColor='#1E3BB3'
                />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </div>
    </section>
  );
};

export default Hero;
