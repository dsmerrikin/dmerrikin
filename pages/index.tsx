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
import KonamiCode from "../components/KonamiCode/konamicode";

const Home = () => {
  const handleKonami = () => {
    const audio = new Audio('/sounds/Overworld.mp3');
    audio.play();
  };
  return (
    <>
      <KonamiCode onKonami={handleKonami} />
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <CTA />
      <Education />
      <Testimonials />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
};
export default Home;
