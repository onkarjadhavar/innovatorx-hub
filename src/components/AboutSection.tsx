import React from 'react';
import { Users2, Compass, Cpu, TrendingUp, Sparkles, GraduationCap, Code2, Target } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: Users2,
      title: 'Connect',
      color: 'from-blue-600 to-cyan-500',
      badge: 'Network',
      description: 'Connect with mentors, industry experts, and fellow student innovators eager to collaborate.'
    },
    {
      icon: Compass,
      title: 'Discover',
      color: 'from-indigo-600 to-blue-500',
      badge: 'Opportunities',
      description: 'Explore startup opportunities, grants, hackathons, and competitions curated for your stage.'
    },
    {
      icon: Cpu,
      title: 'Innovate',
      color: 'from-purple-600 to-pink-500',
      badge: 'AI Partner',
      description: 'Generate, evaluate, and improve ideas using AI-powered assistance tuned for early validation.'
    },
    {
      icon: TrendingUp,
      title: 'Grow',
      color: 'from-emerald-600 to-teal-500',
      badge: 'Impact',
      description: 'Access resources, execution guidance, and industry connections to turn prototypes into startups.'
    }
  ];

  const targetAudiences = [
    {
      icon: GraduationCap,
      title: 'College Students',
      desc: 'Looking to turn classroom assignments & final-year projects into real-world applications.'
    },
    {
      icon: Code2,
      title: 'Engineering Innovators',
      desc: 'Hardware builders, software developers, and research creators seeking teams and grants.'
    },
    {
      icon: Target,
      title: 'Aspiring Startup Founders',
      desc: 'Early-stage entrepreneurs needing structured mentorship, incubator pathways, and seed funding.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative subtle background accents */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            About The Platform
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight">
            One Platform.{' '}
            <span className="text-blue-600">Endless Possibilities.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Finding the right opportunities, mentors, funding, and resources can be challenging for students and aspiring entrepreneurs. Innovator X Hub brings everything together in one accessible digital ecosystem, helping innovators move from ideas to execution.
          </p>
        </div>

        {/* Four Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group relative bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${pillar.color} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold text-slate-400 font-mono">0{idx + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-navy-950 mb-2 group-hover:text-blue-600 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-medium text-blue-600">{pillar.badge}</span>
                  <span className="w-2 h-2 rounded-full bg-blue-500/40 group-hover:bg-blue-600 transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Target Audience Showcase Banner */}
        <div className="bg-navy-900 rounded-3xl p-8 sm:p-10 border border-slate-800 text-white shadow-xl relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <div className="mb-6">
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">Built For Young Creators</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                Who Is Innovator X Hub For?
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {targetAudiences.map((aud) => {
                const AudIcon = aud.icon;
                return (
                  <div key={aud.title} className="bg-navy-850/80 rounded-2xl p-5 border border-slate-700/60 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                      <AudIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-white mb-1">{aud.title}</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">{aud.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
