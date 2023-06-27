import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <Head>
        <title>DMerrikin</title>
        <meta
          name='description'
          content='Software Engineer | Aspiring Chef'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
        <meta charSet='UTF-8' />
        <meta
          httpEquiv='X-UA-Compatible'
          content='IE=edge'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        />
        <meta
          name='title'
          content='DMerrikin.com'
        />
        <meta
          name='description'
          content='Software Engineer | Aspiring Chef'
        />
        <meta
          property='og:type'
          content='website'
        />
        <meta
          property='og:url'
          content='https://dmerrikin.com'
        />
        <meta
          property='og:title'
          content='DMerrikin.com'
        />
        <meta
          property='og:description'
          content='Software Engineer | Aspiring Chef'
        />
        <meta
          property='og:image'
          content='/images/hero/dmerrikin.jpg'
        />
        <meta
          property='twitter:card'
          content='summary_large_image'
        />
        <meta
          property='twitter:url'
          content='https://dmerrikin.com'
        />
        <meta
          property='twitter:title'
          content='DMerrikin.com'
        />
        <meta
          property='twitter:description'
          content='Software Engineer | Aspiring Chef'
        />
        <meta
          property='twitter:image'
          content='/images/hero/dmerrikin.jpg'
        />
      </Head>
      <header className='header bg-transparent absolute top-0 left-0 z-40 w-full flex items-center transition'>
        <div className='container'>
          <div className='flex mx-[-16px] items-center justify-between relative'>
            <div className='px-4 w-60 max-w-full'>
              <a
                href='index.html'
                className='header-logo w-full block py-6 lg:py-8'
              >
                <Image
                  src='/images/logo/logo.svg'
                  alt='logo'
                  className='w-full'
                  height={175}
                  width={200}
                />
              </a>
            </div>
            <div className='flex px-4 justify-between items-center w-full'>
              <div>
                <button
                  id='navbarToggler'
                  name='navbarToggler'
                  aria-label='navbarToggler'
                  className='block absolute right-4 top-1/2 translate-y-[-50%] lg:hidden focus:ring-2 ring-primary px-3 py-[6px] rounded-lg'
                  onClick={toggleNav}
                >
                  <span className='relative w-[30px] h-[2px] my-[6px] block bg-dark'></span>
                  <span className='relative w-[30px] h-[2px] my-[6px] block bg-dark'></span>
                  <span className='relative w-[30px] h-[2px] my-[6px] block bg-dark'></span>
                </button>
                <nav
                  id='navbarCollapse'
                  className={`absolute py-5 lg:py-0 lg:px-4 xl:px-6 bg-white lg:bg-transparent shadow-lg rounded-lg max-w-[250px] w-full lg:max-w-full lg:w-full right-4 top-3/4 ${
                    isNavOpen ? "block" : "hidden"
                  } lg:block lg:static lg:shadow-none`}
                >
                  <ul className='blcok lg:flex'>
                    <li className='relative group'>
                      <Link
                        href='/'
                        className='menu-scroll text-base text-black group-hover:text-primary py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0'
                      >
                        {" "}
                        Home{" "}
                      </Link>
                    </li>
                    <li className='relative group'>
                      <Link
                        href='#about'
                        className='menu-scroll text-base text-black group-hover:text-primary py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0 lg:ml-8 xl:ml-12'
                      >
                        About
                      </Link>
                    </li>
                    <li className='relative group'>
                      <Link
                        href='#services'
                        className='menu-scroll text-base text-black group-hover:text-primary py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0 lg:ml-8 xl:ml-12'
                      >
                        Services
                      </Link>
                    </li>
                    <li className='relative group'>
                      <Link
                        href='#portfolio'
                        className='menu-scroll text-base text-black group-hover:text-primary py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0 lg:ml-8 xl:ml-12'
                      >
                        Recent Works
                      </Link>
                    </li>
                    <li className='relative group'>
                      <Link
                        href='#testimonials'
                        className='menu-scroll text-base text-black group-hover:text-primary py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0 lg:ml-8 xl:ml-12'
                      >
                        Testimonials
                      </Link>
                    </li>
                    <li className='relative group'>
                      <Link
                        href='#contact'
                        className='menu-scroll text-base text-black group-hover:text-primary py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0 lg:ml-8 xl:ml-12'
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className='sm:flex justify-end hidden pr-16 lg:pr-0'>
                <Link
                  href='/docs/derek-merrikin-resume.pdf'
                  target='_blank'
                  className='text-base font-bold text-white bg-primary rounded-full py-3 px-8 md:px-9 lg:px-8 xl:px-9 hover:shadow-signUp hover:bg-opacity-90 transition ease-in-out duration-300'
                >
                  Download CV
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
