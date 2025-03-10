import About from "./about/page";
import Footer from "./footer/page";
import HeroSection from "./hero/page";
import ReviewCarousel from "./review/page";
import Service from "./services/page";
import Contact from "./contact/page";
import Projects from "./project/page";
import Portfolio from "./portfolio/page";
import Experience from "./experience/page";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <About />
      <Service />
      <Portfolio />
      <Experience />
      {/* <Projects /> */}
      <ReviewCarousel />
      <Contact />
      <Footer />
    </div>
  );
}
