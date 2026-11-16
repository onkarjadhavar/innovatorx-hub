import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import { JOURNEY_STEPS } from '../data/content';

export const JourneySection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = JOURNEY_STEPS[activeStepIndex];

  return (
    <section id="journey" className="py-24 bg-navy-950 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Structured Pathway
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            The Innovation{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Journey.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            From your first idea to real-world impact, Innovator X Hub supports every step of your innovation journey.
          </p>
        </div>

        {/* Process Bar Flow: IDEA → DISCOVER → VALIDATE → CONNECT → DEVELOP → LAUNCH */}
        <div className="mb-12">
          {/* Desktop Horizontal Stepper */}
          <div className="hidden lg:grid grid-cols-6 gap-2 bg-navy-900/80 p-3 rounded-2xl border border-slate-800 backdrop-blur-md">
            {JOURNEY_STEPS.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={step.name}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`relative p-4 rounded-xl text-left transition-all duration-300 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-[1.02]'
                      : 'hover:bg-slate-800/60 text-slate-400 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[11px] font-mono font-bold ${isActive ? 'text-blue-200' : 'text-slate-500'}`}>
                      {step.stepNumber}
                    </span>
                    {idx < JOURNEY_STEPS.length - 1 && (
                      <ChevronRight className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-600'}`} />
                    )}
                  </div>
                  <div className="text-sm font-extrabold tracking-wider uppercase">
                    {step.name}
                  </div>
                  <div className={`text-[11px] truncate mt-0.5 ${isActive ? 'text-blue-100' : 'text-slate-500'}`}>
                    {step.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Mobile / Tablet Step Selector Pills */}
          <div className="lg:hidden flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar">
            {JOURNEY_STEPS.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={step.name}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`shrink-0 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-navy-900 text-slate-400 border border-slate-800'
                  }`}
                >
                  <span className="font-mono text-[10px] opacity-75">{step.stepNumber}</span>
                  <span>{step.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Detailed Spotlight Card */}
        <div className="bg-gradient-to-br from-navy-900 via-navy-850 to-navy-900 border border-slate-700/80 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            <div className="md:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-500/20 text-blue-400 border border-blue-500/30">
                  STAGE {activeStep.stepNumber} OF 06
                </span>
                <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
                  {activeStep.name}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {activeStep.title}
              </h3>

              <p className="text-base text-slate-300 leading-relaxed max-w-2xl">
                {activeStep.description}
              </p>

              <div className="pt-2 flex items-center gap-2 text-sm text-blue-300">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                <span className="font-semibold">Platform Deliverable:</span>
                <span className="text-slate-200">{activeStep.actionItem}</span>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col justify-center items-start md:items-end gap-3 border-t md:border-t-0 md:border-l border-slate-800 pt-6 md:pt-0 md:pl-8">
              <span className="text-xs text-slate-400">Step progress navigation</span>
              <div className="flex items-center gap-2">
                <button
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-navy-800 hover:bg-navy-700 disabled:opacity-40 disabled:cursor-not-allowed border border-slate-700 text-white transition-colors"
                >
                  Previous
                </button>
                <button
                  disabled={activeStepIndex === JOURNEY_STEPS.length - 1}
                  onClick={() => setActiveStepIndex((prev) => Math.min(JOURNEY_STEPS.length - 1, prev + 1))}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 disabled:opacity-40 disabled:cursor-not-allowed text-white shadow-sm transition-colors"
                >
                  Next Stage
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

