import React, { useState } from 'react';
import { Bot, Sparkles, Scale, TrendingUp, Map, Send, CheckCircle2, Lightbulb, MessageSquare, ArrowRight, CornerDownLeft } from 'lucide-react';
import { AI_CAPABILITIES } from '../data/content';
import { AICapability } from '../types';

export const AIAssistantSection: React.FC = () => {
  const [selectedCapabilityId, setSelectedCapabilityId] = useState<string>('idea-evaluator');
  const [customInput, setCustomInput] = useState<string>('');
  const [submittedQuery, setSubmittedQuery] = useState<string | null>(null);

  const selectedCapability = AI_CAPABILITIES.find((c) => c.id === selectedCapabilityId) || AI_CAPABILITIES[0];

  const getCapabilityIcon = (id: string) => {
    switch (id) {
      case 'idea-evaluator':
        return Scale;
      case 'idea-generator':
        return Sparkles;
      case 'business-model':
        return TrendingUp;
      case 'startup-roadmap':
        return Map;
      default:
        return Bot;
    }
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;
    setSubmittedQuery(customInput);
    setCustomInput('');
  };

  return (
    <section id="ai-assistant" className="py-24 bg-navy-950 text-white relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Bot className="w-3.5 h-3.5" />
            AI-Powered Co-Founder
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Meet Your Innovation Partner –{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Innovator AI.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            An intelligent AI assistant designed to help students transform their ideas into actionable startup concepts.
          </p>
        </div>

        {/* 4 Capabilities Grid / Switcher */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {AI_CAPABILITIES.map((cap) => {
            const Icon = getCapabilityIcon(cap.id);
            const isSelected = selectedCapabilityId === cap.id;
            return (
              <button
                key={cap.id}
                onClick={() => {
                  setSelectedCapabilityId(cap.id);
                  setSubmittedQuery(null);
                }}
                className={`p-5 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-blue-600/20 border-blue-500 shadow-lg shadow-blue-500/20'
                    : 'bg-navy-900/60 border-slate-800 hover:border-slate-700 hover:bg-navy-900/90'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isSelected ? 'bg-blue-600 text-white shadow-md' : 'bg-slate-800 text-slate-300'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    {isSelected && (
                      <span className="text-[10px] uppercase font-bold text-blue-400 tracking-wider">Active</span>
                    )}
                  </div>
                  <h4 className="text-base font-bold text-white mb-1">{cap.name}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{cap.shortDesc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center text-xs font-medium text-blue-400">
                  <span>View Demonstration</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Attractive AI Chat Interactive Preview Container */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-navy-900/90 border border-slate-700/80 shadow-2xl backdrop-blur-xl overflow-hidden">
          {/* Chat Window Top Bar */}
          <div className="px-6 py-4 bg-navy-850 border-b border-slate-700/80 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-xs text-slate-400 ml-2 font-mono">innovator-ai-session://student-v1</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Online & Ready
              </span>
            </div>
          </div>

          {/* Chat Conversation Thread */}
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* User Message Bubble */}
            <div className="flex items-start justify-end gap-3">
              <div className="max-w-xl bg-blue-600 text-white rounded-2xl rounded-tr-sm p-4 shadow-md">
                <div className="text-[11px] font-semibold text-blue-200 mb-1 flex items-center gap-1.5">
                  <span>Student Innovator</span>
                </div>
                <p className="text-sm font-medium leading-relaxed">
                  {submittedQuery || selectedCapability.sampleQuestion}
                </p>
              </div>
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-600 text-white flex items-center justify-center shrink-0 font-bold text-xs shadow-md">
                YOU
              </div>
            </div>

            {/* AI Response Bubble */}
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-blue-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-purple-500/30">
                <Bot className="w-5 h-5" />
              </div>
              <div className="flex-1 max-w-2xl bg-navy-850 border border-slate-700/80 rounded-2xl rounded-tl-sm p-5 sm:p-6 shadow-lg space-y-4">
                <div className="flex items-center justify-between border-b border-slate-700/60 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-blue-400">Innovator AI</span>
                    <span className="text-[11px] text-slate-400 font-mono">• {selectedCapability.name} Mode</span>
                  </div>
                  <span className="text-[10px] text-slate-400 bg-navy-900 px-2 py-0.5 rounded border border-slate-700">
                    Confidence: 98%
                  </span>
                </div>

                {/* Response Overview */}
                <p className="text-sm text-slate-200 leading-relaxed">
                  {selectedCapability.sampleResponse.overview}
                </p>

                {/* Structured Step Breakdown */}
                <div className="space-y-3 pt-2">
                  {selectedCapability.sampleResponse.steps.map((st, sIdx) => (
                    <div key={sIdx} className="bg-navy-900/80 border border-slate-800 rounded-xl p-3.5">
                      <h5 className="text-xs font-bold text-blue-300 mb-1 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                        {st.title}
                      </h5>
                      <p className="text-xs text-slate-300 leading-relaxed pl-5">
                        {st.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Actionable AI Tip Banner */}
                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-xs text-purple-200 flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>{selectedCapability.sampleResponse.aiTip}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Interactive Chat Input Simulator */}
          <div className="p-4 bg-navy-850/80 border-t border-slate-800">
            <form onSubmit={handleCustomSubmit} className="relative flex items-center">
              <input
                type="text"
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                placeholder="Ask Innovator AI anything (e.g. 'How do I validate my idea?')"
                className="w-full bg-navy-950 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors pr-24"
              />
              <button
                type="submit"
                className="absolute right-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-sm transition-colors"
              >
                <span>Ask</span>
                <Send className="w-3 h-3" />
              </button>
            </form>
            <div className="mt-2 flex items-center justify-between text-[11px] text-slate-400 px-1">
              <span>Interactive preview mode. Select a capability above to explore responses.</span>
              <span className="hidden sm:inline">Zero API setup needed for this demo</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
