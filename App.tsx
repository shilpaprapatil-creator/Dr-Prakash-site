import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Philosophy from './components/Philosophy';
import Flagship from './components/Flagship';
import CentersOfExcellence from './components/COE';
import IndustryIntegration from './components/Industry';
import Impact from './components/Impact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen selection:bg-cyan-500/30">
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <About />
        <Philosophy />
        <Flagship />
        <CentersOfExcellence />
        <IndustryIntegration />
        <Impact />
      </main>
      <Footer />
    </div>
  );
};

export default App;