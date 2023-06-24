import Head from "next/head";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Portfolio from "../components/Portfolio/Portfolio";
import Clients from "../components/Clients/Clients";
import CTA from "../components/CTA/CTA";
import Education from "../components/Education/Education";
import Pricing from "../components/Pricing/Pricing";
import Testimonials from "../components/Testimonials/Testimonials";
import Blog from "../components/Blog/Blog";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import BackToTop from "../components/BackToTop/BackToTop";

const Home = () => {
  return (
    <>
      <Head>
        <title>DMerrikin</title>
        <meta
          name='description'
          content='Software Engineer | Honey Badger'
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
      </Head>

      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Clients />
      <CTA />
      <Education />
      {/* <Pricing /> */}
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
};
export default Home;
