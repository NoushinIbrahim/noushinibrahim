import { BrowserRouter,  } from "react-router-dom";
import "./App.css";
import { Navbar, Hero, CenteredHero, Webflow, Customcode, Centercustom, About, Contact, Footer } from "./Indexx.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Hero/>
        <CenteredHero />
        <Webflow />
        <Customcode />
        <Centercustom />
        <About />
        <Contact />
        <Footer />


        
      </BrowserRouter>
    </>
  );
}

export default App;
