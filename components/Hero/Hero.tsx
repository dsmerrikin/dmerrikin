import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 pt-[150px] lg:pt-[100px] 2xl:flex items-center 2xl:h-[700px]"
      >
        <div className="container">
          <div className="flex flex-wrap mx-[-16px]">
            <div className="w-full lg:w-1/2 self-center px-4">
              <div>
                <h1 className="text-base font-semibold text-primary mb-3">
                  Hey there 👋 I am
                  <span className="font-bold text-black text-3xl sm:text-3xl md:text-[45px] leading-tight sm:leading-tight md:leading-[50px] block mt-1">
                    {" "}
                    Derek Merrikin{" "}
                  </span>
                </h1>
                <h2 className="font-medium text-body-color text-lg md:text-xl mb-5">
                  Senior
                  <span className="text-black"> Software Engineer </span> |
                  Aspiring <span className="text-black">Chef</span>
                </h2>

                <p className="max-w-[470px] font-medium text-body-color text-base leading-relaxed mb-11">
                  Decade-Long Software Expert Empowering Teams with Inspiring
                  Leadership and Cutting-Edge Technologies
                </p>
                <div className="flex items-center">
                  <a
                    href="#contact"
                    className="text-base xs:text-center font-semibold text-white bg-primary py-3 px-8 mr-4 hover:shadow-signUp hover:bg-opacity-90 rounded-full transition duration-300 ease-in-out"
                  >
                    Contact Me
                  </a>
                  <a
                    href="#services"
                    className="text-base xs:text-center font-semibold text-white bg-black py-3 px-8 hover:shadow-signUp hover:bg-opacity-90 rounded-full transition duration-300 ease-in-out"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 self-end px-4">
              <div className="relative mt-12 lg:mt-0 z-10 2xl:absolute 2xl:bottom-0 2xl:right-40">
                <Image
                  src="/images/hero/hero-image-derek.png"
                  alt="image"
                  className="max-w-full mx-auto"
                  width={500}
                  height={500}
                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 480px, 600px"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <span className="absolute right-0 bottom-0 -z-1 2xl:top-10 xl:top-10 lg:top-10 md:bottom-0 sm:bottom-0 sm:w-[80%] xs:bottom-0 xs:w-[60%] ">
            <Image
                  src="/images/hero/dmerrikin-hero-bg.png"
                  alt="image"
                  className="max-w-full ml-auto"
                  width={500}
                  height={500}
                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 480px, 600px"
                />
          </span>
        </div>
      </section>
    </>
  );
};

export default Hero;
