
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Proteams from './components/Proteams/Proteams';
import Services from './components/Services/Services';
import Slider from './components/Slider/Slider';
import './index.css';

function App() {
  return (
   <> 
    <div className='bg-no-repeat bg-custom-size h-full w-full'
     style={{ backgroundImage: `url(/assets/Slider/Bubble_1.png)` }}>
      <Navbar />
      <Slider />
    </div>

    <Services/>
    <div className='bg-no-repeat bg-right w-full'
     style={{ backgroundImage: `url(/assets/About/Bubble_2.png)` }}>
    <About/>
    </div>

    <Proteams/>
    <div className='bg-no-repeat w-full'
     style={{ backgroundImage: `url(/assets/Contact/Bubble_3.png)` }}>
    <Contact/>
    </div>

    <Footer/>
   </>
  );
}

export default App;
