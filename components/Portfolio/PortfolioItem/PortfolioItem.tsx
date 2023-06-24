import Image from "next/image";

const PortfolioItem = () => {
  return (
    <div className='w-full md:w-1/2 px-4 item web app'>
      <div className='mb-12'>
        <div className='relative group mb-8 overflow-hidden shadow-service rounded-md'>
          <Image
            src='/images/portfolio/portfolio-01.jpg'
            alt='image'
            className='w-full'
            fill={true}
          />
          <div className='absolute w-full h-full top-0 left-0 bg-primary bg-opacity-[17%] flex items-center justify-center opacity-0 invisible group-hover:opacity-100 group-hover:visible transition'>
            <a
              href='/images/portfolio/portfolio-01.jpg'
              className='glightbox w-10 h-10 flex items-center justify-center bg-primary text-white rounded-full'
            >
              <svg
                width='14'
                height='14'
                viewBox='0 0 14 14'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z'
                  fill='white'
                />
              </svg>
            </a>
          </div>
        </div>
        <h3 className='mt-6'>
          <a
            href='portfolio-details.html'
            className='font-semibold text-black hover:text-primary text-xl inline-block mb-3'
          >
            Startup landing page
          </a>
        </h3>
        <p className='font-medium text-base text-body-color'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          vitae dolor ultrices libero.
        </p>
      </div>
    </div>
  );
};

export default PortfolioItem;
