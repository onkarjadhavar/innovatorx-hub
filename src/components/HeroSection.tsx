import React from 'react';
import { ArrowRight, Sparkles, Rocket, Compass, CheckCircle2, Award, Users, Bot, Zap } from 'lucide-react';

interface HeroSectionProps {
  onOpenGetStarted: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenGetStarted }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elPos = el.getBoundingClientRect().top;
      const offsetPos = elPos + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPos, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-navy-950 text-white flex items-center">
      {/* Background radial gradients and grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[140px]" />
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370a_1px,transparent_1px),linear-gradient(to_bottom,#1f29370a_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-300 text-xs sm:text-sm font-medium tracking-wide shadow-sm shadow-blue-500/10">
              <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
              <span>Next-Gen Student & Youth Innovation Platform</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12]">
              Turn Your Innovative Ideas Into{' '}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                Reality.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              An AI-powered innovation ecosystem connecting students and young entrepreneurs with the right mentors, funding opportunities, competitions, industry connections, and resources — all in one place.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => scrollTo('opportunities')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Explore Opportunities</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => scrollTo('about')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-semibold text-slate-200 bg-navy-900/90 hover:bg-navy-800/90 border border-slate-700/80 hover:border-slate-500 hover:text-white transition-all duration-200 backdrop-blur-sm"
              >
                <Compass className="w-5 h-5 text-blue-400" />
                <span>Discover Innovator X</span>
              </button>
            </div>

            {/* Key Micro-Pill Benefits */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-3 max-w-xl mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-white tracking-tight">100%</div>
                <div className="text-xs text-slate-400">Student Focused</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-blue-400 tracking-tight">AI-Guided</div>
                <div className="text-xs text-slate-400">Idea to Prototype</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-purple-400 tracking-tight">Zero Cost</div>
                <div className="text-xs text-slate-400">Campus Initiative</div>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Innovation Ecosystem Graphic */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Center Core Node */}
            <div className="relative w-full max-w-[440px] aspect-square flex items-center justify-center">
              
              {/* Outer decorative orbit rings */}
              <div className="absolute inset-0 rounded-full border border-blue-500/20 border-dashed animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-8 rounded-full border border-purple-500/15" />
              <div className="absolute inset-20 rounded-full border border-slate-800/60" />

              {/* Central Glowing Hub Card */}
              <div className="relative z-10 w-44 h-44 rounded-3xl bg-gradient-to-br from-navy-900 via-navy-850 to-navy-950 border border-blue-500/40 p-5 flex flex-col items-center justify-center text-center shadow-2xl shadow-blue-600/25 group">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/40 mb-2 group-hover:scale-110 transition-transform duration-300">
                  <Bot className="w-7 h-7 text-white" />
                </div>
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">Core Hub</span>
                <span className="text-sm font-bold text-white">Innovator AI</span>
                <span className="text-[10px] text-slate-400 mt-0.5">Active Ecosystem</span>
              </div>

              {/* Floating Card 1: Top-Right (AI Feasibility) */}
              <div className="absolute -top-3 right-0 sm:right-2 z-20 bg-navy-900/90 border border-blue-500/30 rounded-2xl p-3.5 shadow-xl shadow-navy-950/60 backdrop-blur-md animate-float-slow max-w-[210px]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-slate-300">AI Feasibility Score</div>
                    <div className="text-sm font-bold text-emerald-400">96/100 (High)</div>
                  </div>
                </div>
              </div>

              {/* Floating Card 2: Bottom-Right (Seed Grant Match) */}
              <div className="absolute -bottom-4 right-2 sm:right-6 z-20 bg-navy-900/90 border border-purple-500/30 rounded-2xl p-3.5 shadow-xl shadow-navy-950/60 backdrop-blur-md animate-float-slow [animation-delay:1.5s] max-w-[220px]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-slate-300">Seed Grant Opportunity</div>
                    <div className="text-xs font-bold text-purple-300">$5,000 Equity-Free</div>
                  </div>
                </div>
              </div>

              {/* Floating Card 3: Middle-Left (Mentor Match) */}
              <div className="absolute top-1/2 -translate-y-1/2 -left-4 sm:-left-6 z-20 bg-navy-900/90 border border-blue-500/30 rounded-2xl p-3.5 shadow-xl shadow-navy-950/60 backdrop-blur-md animate-float-slow [animation-delay:3s] max-w-[210px]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-slate-300">Mentor Match</div>
                    <div className="text-xs font-bold text-blue-400">98% Compatibility</div>
                  </div>
                </div>
              </div>

              {/* Floating Badge: Top-Left (Hackathon Open) */}
              <div className="absolute top-2 -left-2 z-20 bg-navy-900/90 border border-amber-500/30 rounded-xl px-3 py-1.5 shadow-lg backdrop-blur-md flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-[11px] font-medium text-amber-200">Hackathons Open</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
