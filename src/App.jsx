import React from 'react';
import './index.css';
import Navbar from './Components/Navbar/Navbar';
import { Hero } from './Components/Hero/Hero';
import { About } from './Components/About/About';
import { Technologies } from './Components/Technologies/Technologies';
import { Projects } from './Components/Projects/Projects';
import { Experience } from './Components/Experience/Experience';
import { Contact } from './Components/Contact/Contact';
import { Footer } from './Components/Footer/Footer';

function App() {
  return (
    <div className="bg-[#11071F] min-h-screen w-full overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
