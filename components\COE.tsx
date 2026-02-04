import React from 'react';

const CentersOfExcellence: React.FC = () => {
  const coes = [
    { title: 'AI Maker Spaces', desc: 'Accelerated prototyping for next-gen intelligent agents.', icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' },
    { title: 'Robotics & Automation', desc: 'Collaborative robotics systems for industrial applications.', icon: 'M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0' },
    { title: 'Semiconductors', desc: 'VLSI design and high-density electronic systems research.', icon: 'M3 12h18M12 3v18' },
    { title: 'Smart Manufacturing', desc: 'Digital twins and IoT frameworks for Industry 4.0.', icon: 'M17 17l-5-5 5-5M7 7l5 5-5 5' },
    { title: 'Future Skills', desc: 'Curriculum innovation focused on talent readiness for 2030.', icon: 'M12 11l-8 4 8 4 8-4-8-4z M12 5l-8 4 8 4 8-4-8-4z' },
    { title: 'Healthcare Systems', desc: 'AI-driven diagnostics and personalized medicine platforms.', icon: 'M19 14l-7 7-7-7m14-8l-7 7-7-7' }
  ];

  return (
    <section id="coe" className="py-12 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm font-bold text-cyan-500 uppercase tracking-[0.2em]">Innovation Hubs</h2>
          <h3 className="text-4xl font-bold text-white">Centers of Excellence</h3>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Dr. Prakash has spearheaded the design of six domain-focused Centers of Excellence, creating a campus-wide innovation ecosystem focused on delivering measurable impact.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {coes.map((coe, idx) => (
            <div key={idx} className="group glass-card p-8 rounded-2xl glow-border transition-all duration-300">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center text-cyan-500 mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={coe.icon} />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{coe.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{coe.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CentersOfExcellence;
