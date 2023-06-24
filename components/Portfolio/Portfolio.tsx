import PortfolioItem from "./PortfolioItem/PortfolioItem";

const Portfolio = () => {
  return (
    <section
      id='portfolio'
      className='pt-[120px] pb-[70px] bg-[#f8f9ff]'
    >
      <div className='container'>
        <div className='flex flex-wrap mx-[-16px]'>
          <div className='w-full px-4'>
            <div className='max-w-[600px] mx-auto text-center mb-[50px]'>
              <span className='font-semibold text-lg text-primary block mb-2'>
                Creative Portfolios
              </span>
              <h2 className='font-bold text-black text-3xl sm:text-4xl md:text-[45px] mb-5'>
                Recent Works
              </h2>
              <p className='font-medium text-lg text-body-color'>
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
          <div className='w-full px-4'>
            <div className='portfolio-buttons flex flex-wrap items-center justify-center mb-12'>
              <button
                className='sm:font-semibold text-sm sm:text-base block py-2 px-5 md:mx-2 mb-2 rounded-full text-body-color active'
                data-filter='*'
              >
                All
              </button>
              <button
                className='sm:font-semibold text-sm sm:text-base block py-2 px-5 md:mx-2 mb-2 rounded-full text-body-color hover:bg-primary hover:text-white'
                data-filter='.web'
              >
                Web Design
              </button>
              <button
                className='sm:font-semibold text-sm sm:text-base block py-2 px-5 md:mx-2 mb-2 rounded-full text-body-color hover:bg-primary hover:text-white'
                data-filter='.graphics'
              >
                Graphics
              </button>
              <button
                className='sm:font-semibold text-sm sm:text-base block py-2 px-5 md:mx-2 mb-2 rounded-full text-body-color hover:bg-primary hover:text-white'
                data-filter='.app'
              >
                App
              </button>
            </div>
          </div>
        </div>

        <div className='portfolio-container flex justify-center -mx-4'>
          <div className='w-full xl:w-10/12 px-4'>
            <div className='items-wrapper flex flex-wrap justify-center mx-[-16px]'>
              <PortfolioItem />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
