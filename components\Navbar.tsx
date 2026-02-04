import React from 'react';
import { PROFILE_IMAGE_URL } from '../constants';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-slate-950/90 backdrop-blur-xl py-3 border-b border-white/10 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-4 group">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full blur opacity-0 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/20 bg-slate-900 shadow-lg">
              <img 
                src={PROFILE_IMAGE_URL} 
                alt="Dr. Prakash" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg md:text-xl font-bold tracking-tight text-white leading-tight">
              Dr. Prakash Sheelvanthmath
            </h1>
            <p className="text-[10px] md:text-[11px] text-cyan-400 font-bold uppercase tracking-wider opacity-90">
              Pro Vice Chancellor, Dayananda Sagar University
            </p>
          </div>
        </a>

        <div className="flex items-center gap-4">
          <div className={`w-2 h-2 rounded-full bg-cyan-500 transition-opacity duration-500 ${scrolled ? 'opacity-100 animate-pulse' : 'opacity-0'}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
