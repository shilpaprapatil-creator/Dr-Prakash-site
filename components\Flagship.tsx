import React from 'react';
import { FLAGSHIP_IMAGE_URL } from '../constants';

const Flagship: React.FC = () => {
  return (
    <section id="flagship" className="py-12">
      <div className="container mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-8 md:p-16">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan-500/10 to-transparent pointer-events-none"></div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="px-3 py-1 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold rounded">LIVE PROJECT</div>
                <h2 className="text-sm font-bold text-cyan-500 uppercase tracking-[0.2em]">Flagship Initiative</h2>
              </div>
              
              <h3 className="text-4xl md:text-5xl font-bold text-white">NVIDIA–DSU <br /> AI Factory</h3>
              
              <p className="text-lg text-slate-400 leading-relaxed">
                A state-of-the-art high-performance computing infrastructure designed to facilitate 
                enterprise-grade research. We bridge the gap between foundation models and applied 
                verticals like Healthcare and Climate science.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-300">
                {[
                  'HPC Research Infrastructure',
                  'Foundation Model Tuning',
                  'Healthcare & Climate Sims',
                  'Research-to-Patent Pipeline',
                  'Secure Enterprise Compute',
                  'Product Translation'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/5 bg-slate-800">
              <img 
                src={FLAGSHIP_IMAGE_URL} 
                alt="High Performance Computing Facility" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 max-w-sm">
                  <div className="text-cyan-400 font-bold mb-2 uppercase tracking-widest text-xs">High Performance Computing</div>
                  <div className="text-white text-sm font-light leading-relaxed">Scaling AI research throughput using proprietary GPU workload orchestration.</div>
                </div>
              </div>
              <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#22d3ee]"></div>
              <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-blue-400 animate-pulse shadow-[0_0_10px_#3b82f6]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Flagship;
