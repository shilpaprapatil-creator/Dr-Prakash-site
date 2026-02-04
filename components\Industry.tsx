import React from 'react';

const IndustryIntegration: React.FC = () => {
  return (
    <section id="integration" className="py-12 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-sm font-bold text-cyan-500 uppercase tracking-[0.2em]">Synergy</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">Academic–Industry Integration</h3>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Dr. Prakash has built frameworks that enable high-impact, outcomes-focused collaborations that solve real-world industry problem statements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Joint Research', desc: 'Collaborative projects with Fortune 500 tech partners to drive innovation.' },
              { title: 'Sponsored Labs', desc: 'Infrastructure co-developed for niche certification and skill paths.' },
              { title: 'Venture Mentoring', desc: 'Incubation support for faculty and student-led deep-tech startups.' }
            ].map((item, idx) => (
              <div key={idx} className="group p-8 rounded-2xl border border-white/5 bg-slate-900/40 backdrop-blur-sm hover:border-cyan-500/20 transition-all text-center">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 font-bold mx-auto mb-6 group-hover:scale-110 transition-transform">
                  {idx + 1}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryIntegration;
