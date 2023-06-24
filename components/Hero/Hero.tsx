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
                Hey There 👋 I am
                <span className='font-bold text-black text-3xl sm:text-3xl md:text-[45px] leading-tight sm:leading-tight md:leading-[50px] block mt-1'>
                  {" "}
                  Daniel Jack{" "}
                </span>
              </h1>
              <h2 className='font-medium text-body-color text-lg md:text-xl mb-5'>
                Professional
                <span className='text-black'>Graphic Designer </span>
              </h2>
              <p className='max-w-[470px] font-medium text-body-color text-base leading-relaxed mb-11'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                interdum consequat convallis.
              </p>
              <div className='flex items-center'>
                <a className='text-base font-semibold text-white bg-primary py-3 px-8 mr-4 hover:shadow-signUp hover:bg-opacity-90 rounded-full transition duration-300 ease-in-out'>
                  Contact Me
                </a>
                <a className='text-base font-semibold text-white bg-black py-3 px-8 hover:shadow-signUp hover:bg-opacity-90 rounded-full transition duration-300 ease-in-out'>
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className='w-full lg:w-1/2 self-end px-4'>
            <div className='relative mt-12 lg:mt-0 z-10 2xl:absolute 2xl:bottom-0 2xl:right-40'>
              <Image
                src='/images/hero/hero-image.png'
                alt='image'
                className='max-w-full mx-auto'
                fill={true}
              />
              <span className='absolute lefter-[-8px] bottom-2 -z-1'>
                <svg
                  width='40'
                  height='38'
                  viewBox='0 0 40 38'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M9.31451 3.18282L32.4926 6.24789C36.3084 6.75249 38.147 11.1986 35.8021 14.2508L21.5587 32.7911C19.2138 35.8434 14.444 35.2126 12.9731 31.6558L4.03852 10.0504C2.56762 6.49355 5.49873 2.67822 9.31451 3.18282Z'
                    stroke='#4A6CF7'
                    strokeWidth='6'
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <span className='absolute left-0 top-32 -z-1'>
          <svg
            width='48'
            height='95'
            viewBox='0 0 48 95'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle
              cx='0.5'
              cy='47.5'
              r='47.5'
              fill='url(#paint0_radial_6:121)'
            />
            <defs>
              <radialGradient
                id='paint0_radial_6:121'
                cx='0'
                cy='0'
                r='1'
                gradientUnits='userSpaceOnUse'
                gradientTransform='translate(0.5) rotate(90) scale(95)'
              >
                <stop stopColor='white' />
                <stop
                  offset='0.569'
                  stopColor='#F0F4FD'
                />
                <stop
                  offset='0.993'
                  stopColor='#D9E0F0'
                />
              </radialGradient>
            </defs>
          </svg>
        </span>
        <span className='absolute right-0 bottom-0 -z-1'>
          <svg
            width='491'
            height='490'
            viewBox='0 0 491 490'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
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
