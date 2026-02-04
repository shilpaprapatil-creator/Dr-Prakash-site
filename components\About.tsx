import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-12 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-sm font-bold text-cyan-500 uppercase tracking-[0.2em]">Leadership Experience</h2>
            <h3 className="text-4xl font-bold text-white leading-tight">
              Bridging Academic Rigor <br /> with Industrial Dynamism
            </h3>
            <p className="text-lg text-slate-400 leading-relaxed">
              As the Pro Vice Chancellor of Dayananda Sagar University, Dr. Prakash oversees 
              large-scale education ecosystems with a mission to transition institutions from 
              degree-centric models to research-intensive, industry-aligned powerhouses.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {[
                { title: 'AI Research', desc: 'Leading high-impact AI & Machine Learning research frameworks.' },
                { title: 'Transformation', desc: 'Institutional modernization through technology-first policies.' },
                { title: 'Skill Integration', desc: 'Bridging the talent gap with competency-based education.' },
                { title: 'Industry Connect', desc: 'Forging partnerships with global tech giants like NVIDIA.' }
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                  <h4 className="text-white font-bold mb-1">{item.title}</h4>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="glass-card p-8 rounded-2xl relative z-10 space-y-8">
              <div className="flex gap-6 items-start">
                <div className="text-5xl font-bold text-cyan-500/20">01</div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">The Mission</h4>
                  <p className="text-slate-400">To create a resilient ecosystem where innovation is the currency and applied research is the primary outcome.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="text-5xl font-bold text-blue-500/20">02</div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">The Vision</h4>
                  <p className="text-slate-400">Scaling Indian higher education to meet global standards through "AI Factory" methodologies.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="text-5xl font-bold text-indigo-500/20">03</div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">The Strategy</h4>
                  <p className="text-slate-400">Interconnecting infrastructure, policy, and pedagogy to foster a culture of perpetual discovery.</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-cyan-500/20 blur-[100px] rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
