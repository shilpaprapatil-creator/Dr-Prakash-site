import React from 'react';
import { PROFILE_IMAGE_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="pt-16 pb-8 bg-slate-950 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              Let's Engineer the <br /> <span className="gradient-text">Future of Education</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Open to high-impact collaborations, research partnerships, and institutional 
              strategy consults aimed at global transformation.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <div className="px-10 py-4 bg-white/10 text-slate-400 rounded-full font-bold cursor-default border border-white/5 pointer-events-none">
              Get in Touch
            </div>
            <div className="px-10 py-4 border border-white/10 text-slate-500 rounded-full font-bold cursor-default pointer-events-none">
              Institutional Partnership
            </div>
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-white/5 rounded-lg overflow-hidden border border-white/10 flex items-center justify-center font-bold text-white">
              <img src={PROFILE_IMAGE_URL} alt="Dr. Prakash" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Dr. Prakash Sheelvanthmath</p>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest">Pro Vice Chancellor • DSU</p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <a 
              href="https://www.linkedin.com/in/educationistprakash/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-bold text-slate-500 hover:text-cyan-400 uppercase tracking-widest transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-xs font-bold text-slate-500 lowercase tracking-normal">
              pvc-prakash@dsu.edu.in
            </span>
          </div>
          
          <div className="text-[10px] text-slate-600 uppercase tracking-widest">
            © {new Date().getFullYear()} All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
