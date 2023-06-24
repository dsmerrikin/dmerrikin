const CTA = () => {
  return (
    <section className='mt-[-160px]'>
      <div className='container'>
        <div className='bg-primary rounded-md relative overflow-hidden z-10 text-center py-[70px]'>
          <div className='max-w-[770px] mx-auto px-6'>
            <h2 className='font-bold text-white text-2xl md:text-[40px] leading-tight mb-10'>
              Want to work together and create amazing products with me?
            </h2>
            <form className='relative max-w-[480px] mx-auto'>
              <input
                type='email'
                placeholder='Enter your email'
                className='w-full rounded-full border border-white border-opacity-[13%] bg-white bg-opacity-[15%] px-8 py-4 text-white placeholder-white placeholder-opacity-70 outline-none focus-visible:shadow-none focus:border-opacity-100 transition text-center sm:text-left mb-5 sm:mb-0'
              />
              <button className='bg-white text-primary rounded-full font-semibold text-base py-4 sm:py-[10px] px-5 w-full sm:w-auto sm:absolute right-2 top-2'>
                Get a Quote
              </button>
            </form>
          </div>

          <div className='absolute bottom-0 left-0 right-0 w-full -z-1'>
            <svg
              width='818'
              height='286'
              viewBox='0 0 818 286'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='mx-auto'
            >
              <circle
                cx='409'
                cy='409'
                r='408.5'
                stroke='url(#paint0_linear_0:1)'
              />
              <circle
                cx='409'
                cy='409'
                r='349.5'
                stroke='url(#paint1_linear_0:1)'
              />
              <defs>
                <linearGradient
                  id='paint0_linear_0:1'
                  x1='-34.5'
                  y1='291.5'
                  x2='851'
                  y2='291.5'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop
                    stopColor='white'
                    stopOpacity='0.35'
                  />
                  <stop
                    offset='0.218415'
                    stopColor='white'
                    stopOpacity='0'
                  />
                  <stop
                    offset='0.728079'
                    stopColor='white'
                    stopOpacity='0'
                  />
                  <stop
                    offset='1'
                    stopColor='white'
                    stopOpacity='0.35'
                  />
                </linearGradient>
                <linearGradient
                  id='paint1_linear_0:1'
                  x1='29.4768'
                  y1='308.45'
                  x2='787.24'
                  y2='308.45'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop
                    stopColor='white'
                    stopOpacity='0.35'
                  />
                  <stop
                    offset='0.218415'
                    stopColor='white'
                    stopOpacity='0'
                  />
                  <stop
                    offset='0.777261'
                    stopColor='white'
                    stopOpacity='0'
                  />
                  <stop
                    offset='1'
                    stopColor='white'
                    stopOpacity='0.35'
                  />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
