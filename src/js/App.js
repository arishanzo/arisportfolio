
import '../css/App.css';
import Navbar from '../component/navbar';
import HeroSection from '../component/herosection';
import About from '../component/about';
import Sertifkat from '../component/Sertifikat';
import Portfolio from '../component/portfolio';
import Footerapp from '../component/footer';
import Bahasa from '../component/Bahasa';

function App() {
  
  
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
