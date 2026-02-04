import React from 'react';
import { PROFILE_IMAGE_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="vision" className="relative min-h-screen flex items-center pt-24 pb-8 overflow-hidden hero-gradient">
      <div className="absolute top-[10%] -left-20 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[10%] -right-20 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-6 grid md:grid-cols-12 gap-12 items-center relative z-10">
        <div className="md:col-span-7 space-y-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-cyan-500/5 border border-cyan-500/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em]">Academic Leader & AI Strategist</span>
            </div>
            <div className="flex items-center gap-2 pl-2">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.3em]">TEDx Global Speaker</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-8xl font-bold leading-[1.1] text-white tracking-tight">
              Engineering the <br />
              <span className="gradient-text">Future of Higher Ed</span>
            </h1>
            <p className="text-lg lg:text-2xl text-slate-400 max-w-2xl leading-relaxed font-light">
              Dr. Prakash Sheelvanthmath is redefining global academic landscapes through 
              <span className="text-white font-medium"> AI-integration</span>, <span className="text-white font-medium">industry-fusion</span>, and <span className="text-white font-medium">innovation-first</span> leadership.
            </p>
          </div>
        </div>

        <div className="md:col-span-5 relative group mt-12 md:mt-0">
          <div className="absolute -inset-2 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-[2rem] blur-2xl opacity-40 group-hover:opacity-70 transition duration-1000"></div>
          <div className="relative aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden glass-card border-white/10 shadow-2xl">
            <img 
              src={PROFILE_IMAGE_URL} 
              alt="Dr. Prakash Sheelvanthmath" 
              className="w-full h-full object-cover grayscale-[10%] contrast-[1.05] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/10 to-transparent"></div>
            
            <div className="absolute bottom-4 left-4 right-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
               <div className="p-4 rounded-xl bg-slate-900/40 backdrop-blur-xl border border-white/10 shadow-lg">
                  <p className="text-white font-bold text-lg tracking-tight">Dr. Prakash Sheelvanthmath</p>
                  <p className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em] mt-0.5">Visionary Academic Strategist</p>
               </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-[9px] text-slate-500 uppercase tracking-[0.5em] font-bold">Discover</span>
        <div className="w-5 h-10 rounded-full border border-white/10 flex justify-center p-1">
          <div className="w-1 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
