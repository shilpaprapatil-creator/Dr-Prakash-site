import React from 'react';

const Impact: React.FC = () => {
  const stats = [
    { value: '26+', label: 'Scopus Publications' },
    { value: '02', label: 'Indian Patents' },
    { value: 'TEDx', label: 'Speaker' },
    { value: 'NEAT', label: 'AICTE Expert Member' }
  ];

  const recognitions = [
    'Member of AICTE–NEAT Expert Committee',
    'Multiple National Education Excellence Awards',
    'TEDx Speaker & Global Thought Leader',
    'Advisor to Leading EdTech Organizations',
    'SCI Indexed Research Contributor'
  ];

  return (
    <section id="impact" className="py-12 bg-slate-900/20 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 space-y-8">
            <h2 className="text-sm font-bold text-cyan-500 uppercase tracking-[0.2em]">Impact</h2>
            <h3 className="text-4xl font-bold text-white">Recognition & Academic Impact</h3>
            <p className="text-slate-400">
              A career dedicated to the intersection of technology, education policy, and 
              transformative leadership.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-[10px] font-bold text-cyan-500 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-8">
            <div className="glass-card rounded-3xl p-8 md:p-12 space-y-12">
              <div className="space-y-6">
                <h4 className="text-xl font-bold text-white flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-cyan-500"></span>
                  Professional Honors
                </h4>
                <div className="grid sm:grid-cols-2 gap-6">
                  {recognitions.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]"></div>
                      <p className="text-slate-300 text-sm font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-12 border-t border-white/5 space-y-6">
                <h4 className="text-xl font-bold text-white flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-blue-500"></span>
                  Selected Publications
                </h4>
                <div className="space-y-4">
                  {[
                    'AI-driven Resource Optimization in Distributed Higher Ed Networks (2023)',
                    'Impact of Smart Manufacturing Pedagogies on Graduate Employability (2022)',
                    'Blockchain Frameworks for Academic Credentialing in India (2021)'
                  ].map((pub, idx) => (
                    <div key={idx} className="group p-4 rounded-xl border border-white/5 hover:bg-white/[0.02] transition-colors flex justify-between items-center">
                      <span className="text-slate-400 text-sm italic group-hover:text-white transition-colors">"{pub}"</span>
                      <svg className="w-4 h-4 text-slate-600 group-hover:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
