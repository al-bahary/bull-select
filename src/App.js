import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './style.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
