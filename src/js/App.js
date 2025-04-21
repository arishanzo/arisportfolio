import logo from '../logo.svg';
import '../css/App.css';
import Navbar from '../component/navbar';
import HeroSection from '../component/herosection';
import About from '../component/about';
import Sertifkat from '../component/Sertifikat';
import Portfolio from '../component/portfolio';
import Footerapp from '../component/footer';
import Bahasa from '../component/Bahasa';

import { useEffect } from "react";


function App() {
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const animation = el.dataset.animate;
            el.classList.remove("opacity-0", "translate-x-full", "-translate-x-full");
            el.classList.add('fade-in');
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0 }
    );
  
    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });
  }, []);
  return (
    <div>
      <Navbar/>
     <HeroSection />
     <Bahasa/>
     <About />
     <Sertifkat />
     <Portfolio />
     <Footerapp/>
    </div>
  );
}

export default App;
