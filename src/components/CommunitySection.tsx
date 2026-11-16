import React, { useState } from 'react';
import { Lightbulb, Layers, UserPlus, Users, Sparkles, ThumbsUp, MessageSquare, ArrowUpRight, Share2 } from 'lucide-react';
import { COMMUNITY_FEATURES } from '../data/content';

interface CommunitySectionProps {
  onOpenGetStarted: () => void;
}

export const CommunitySection: React.FC<CommunitySectionProps> = ({ onOpenGetStarted }) => {
  const [upvotedIds, setUpvotedIds] = useState<Record<string, number>>({
    'proj-1': 48,
    'proj-2': 36,
    'proj-3': 52,
  });

  const toggleUpvote = (id: string) => {
    setUpvotedIds((prev) => ({
      ...prev,
      [id]: prev[id] ? prev[id] + 1 : 1,
    }));
  };

  const sampleStudentProjects = [
    {
      id: 'proj-1',
      title: 'AgriSense IoT',
      tagline: 'Solar-powered smart soil telemetry for smallholder farmers.',
      category: 'Hardware & IoT',
      author: 'Aarav & Team (Govt. Engg. College)',
      status: 'Grant Recipient',
      statusColor: 'bg-emerald-100 text-emerald-800',
      upvotes: upvotedIds['proj-1'] || 48,
      comments: 12
    },
    {
      id: 'proj-2',
      title: 'EcoPack Bio',
      tagline: 'Biodegradable fungal mycelium packaging replacing styrofoam.',
      category: 'CleanTech',
      author: 'Maya Chen (Biochem Dept.)',
      status: 'Prototype Ready',
      statusColor: 'bg-blue-100 text-blue-800',
      upvotes: upvotedIds['proj-2'] || 36,
      comments: 8
    },
    {
      id: 'proj-3',
      title: 'NeuroFlow Study',
      tagline: 'Adaptive spatial repetition engine for engineering coursework.',
      category: 'EdTech & AI',
      author: 'Rohan Verma (CompSci)',
      status: 'Seeking Tech Co-Founder',
      statusColor: 'bg-purple-100 text-purple-800',
      upvotes: upvotedIds['proj-3'] || 52,
      comments: 19
    }
  ];

  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'Lightbulb':
        return Lightbulb;
      case 'Layers':
        return Layers;
      case 'UserPlus':
        return UserPlus;
      default:
        return Users;
    }
  };

  return (
    <section id="community" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5 text-blue-600" />
            Vibrant Peer Network
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight">
            Innovators Grow{' '}
            <span className="text-blue-600">Better Together.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Share ideas, showcase projects, discover talented students, find collaborators, and become part of a growing innovation community.
          </p>
        </div>

        {/* 3 Visual Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {COMMUNITY_FEATURES.map((feature, idx) => {
            const Icon = getFeatureIcon(feature.iconName);
            return (
              <div
                key={feature.id}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/20 mb-6">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-950 mb-3">{feature.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  
                  <div className="space-y-2.5 pt-4 border-t border-slate-100">
                    {feature.bulletPoints.map((bp, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                        <span>{bp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <button
                    onClick={onOpenGetStarted}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Join This Circle</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Community Spotlight Showcase */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-6 border-b border-slate-100 gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Live Community Spotlight</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-navy-950 mt-1">
                Recent Student Innovations
              </h3>
            </div>
            <button
              onClick={onOpenGetStarted}
              className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 self-start sm:self-auto"
            >
              <span>Submit Your Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sampleStudentProjects.map((proj) => (
              <div
                key={proj.id}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-400 hover:bg-white hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                      {proj.category}
                    </span>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${proj.statusColor}`}>
                      {proj.status}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-navy-950 mb-1">{proj.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{proj.tagline}</p>
                </div>

                <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
                  <span className="text-[11px] font-medium text-slate-600 truncate max-w-[140px]">
                    {proj.author}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleUpvote(proj.id)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 transition-colors"
                      title="Upvote Project"
                    >
                      <ThumbsUp className="w-3 h-3 text-blue-500" />
                      <span className="font-semibold">{proj.upvotes}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

