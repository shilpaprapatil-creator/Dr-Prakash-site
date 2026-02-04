import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-12 bg-slate-900/40 border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="400" cy="400" r="399.5" stroke="url(#paint0_linear_1_2)" />
          <defs>
            <linearGradient id="paint0_linear_1_2" x1="0" y1="400" x2="800" y2="400" gradientUnits="userSpaceOnUse">
              <stop stopColor="#22D3EE" />
              <stop offset="1" stopColor="#3B82F6" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
        <h2 className="text-sm font-bold text-cyan-500 uppercase tracking-[0.2em] mb-12">Leadership Philosophy</h2>
        
        <blockquote className="space-y-8">
          <p className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight italic">
            “Universities must evolve from teaching centers into <span className="text-cyan-400">discovery engines</span>—where talent, technology, and industry intersect.”
          </p>
          <footer className="flex flex-col items-center gap-4 mt-12">
            <div className="w-12 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500"></div>
            <cite className="not-italic">
              <span className="block text-xl text-white font-bold">Dr. Prakash Sheelvanthmath</span>
              <span className="text-slate-500 text-sm font-medium uppercase tracking-widest">Pro Vice Chancellor, DSU</span>
            </cite>
          </footer>
        </blockquote>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {[
            { label: 'Infrastructure', val: 'Future-Ready' },
            { label: 'Policy', val: 'Agile & Robust' },
            { label: 'Pedagogy', val: 'Skill-Centric' },
            { label: 'Partnerships', val: 'Global Reach' }
          ].map((item, idx) => (
            <div key={idx} className="group">
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">{item.label}</p>
              <p className="text-white text-lg font-bold group-hover:text-cyan-400 transition-colors">{item.val}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
