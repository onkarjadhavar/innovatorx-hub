import React, { useState } from 'react';
import { Coins, Trophy, Users, Rocket, ArrowRight, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import { OPPORTUNITY_CATEGORIES } from '../data/content';
import { OpportunityCategory } from '../types';

interface OpportunitiesSectionProps {
  onSelectCategory: (category: OpportunityCategory) => void;
}

export const OpportunitiesSection: React.FC<OpportunitiesSectionProps> = ({ onSelectCategory }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Coins':
        return Coins;
      case 'Trophy':
        return Trophy;
      case 'Users':
        return Users;
      case 'Rocket':
        return Rocket;
      default:
        return Sparkles;
    }
  };

  const filteredCategories = activeFilter === 'all'
    ? OPPORTUNITY_CATEGORIES
    : OPPORTUNITY_CATEGORIES.filter((c) => c.id === activeFilter);

  return (
    <section id="opportunities" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              Empowering Student Ambition
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight">
              Opportunities That Move You{' '}
              <span className="text-blue-600">Forward.</span>
            </h2>
            <p className="text-base text-slate-600">
              Curated pathways for funding, competition readiness, mentorship, and incubation — designed specifically for university students and early-stage innovators.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeFilter === 'all'
                  ? 'bg-navy-950 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All Opportunities
            </button>
            {OPPORTUNITY_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeFilter === cat.id
                    ? 'bg-navy-950 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat.badge}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Professional Opportunity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCategories.map((category) => {
            const Icon = getIcon(category.iconName);
            return (
              <div
                key={category.id}
                className="group relative bg-white rounded-3xl p-7 border border-slate-200 hover:border-blue-400 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Header & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-colors duration-300 shadow-inner">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-slate-100 text-slate-700 group-hover:bg-blue-100 group-hover:text-blue-800 transition-colors">
                      {category.badge}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-bold text-navy-950 mb-3 group-hover:text-blue-600 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {category.shortDesc}
                  </p>

                  {/* Highlights Bullet Preview */}
                  <div className="space-y-2 mb-6">
                    {category.details.highlights.slice(0, 2).map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Explore Button */}
                <button
                  onClick={() => onSelectCategory(category)}
                  className="w-full inline-flex items-center justify-between px-5 py-3 rounded-xl text-sm font-semibold text-navy-950 bg-slate-50 hover:bg-blue-600 hover:text-white border border-slate-200 hover:border-blue-600 transition-all duration-200 group/btn mt-2"
                >
                  <span>Explore {category.badge}</span>
                  <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Opportunity Summary Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-navy-950">Looking for a specific competition or grant category?</h4>
              <p className="text-xs text-slate-600">Our ecosystem tracks student opportunities across 50+ universities and innovation programs.</p>
            </div>
          </div>
          <button
            onClick={() => onSelectCategory(OPPORTUNITY_CATEGORIES[0])}
            className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1 shrink-0 bg-white px-4 py-2.5 rounded-xl border border-blue-200 shadow-sm"
          >
            <span>View All Programs</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
