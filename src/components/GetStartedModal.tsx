import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, GraduationCap, Users2, Building2 } from 'lucide-react';

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GetStartedModal: React.FC<GetStartedModalProps> = ({ isOpen, onClose }) => {
  const [role, setRole] = useState<'student' | 'mentor' | 'partner'>('student');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    collegeOrOrg: '',
    projectIdea: ''
  });
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;
    setIsSuccess(true);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({ fullName: '', email: '', collegeOrOrg: '', projectIdea: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-850 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[11px] font-semibold border border-blue-500/30 mb-2">
            <Sparkles className="w-3 h-3 text-blue-400" />
            Join Innovator X Hub
          </div>
          <h3 className="text-2xl font-bold text-white">Start Your Innovation Journey</h3>
          <p className="text-xs text-slate-300 mt-1">
            Get instant access to AI tools, grant discovery, and our student founder community.
          </p>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-7">
          {isSuccess ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-navy-950">Welcome to Innovator X Hub!</h4>
                <p className="text-sm text-slate-600 mt-1.5 max-w-sm mx-auto">
                  Your early-access profile for <span className="font-semibold text-blue-600">{formData.email}</span> has been confirmed.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100 text-left text-xs text-slate-700 space-y-1.5">
                <div className="font-bold text-blue-900">Next Steps:</div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  <span>Explore the Opportunities tab to discover active student grants.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  <span>Test your project concept in the Innovator AI Assistant.</span>
                </div>
              </div>
              <button
                onClick={handleReset}
                className="w-full py-3 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-500/30 transition-colors"
              >
                Back to Website
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Role Selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">
                  Select Your Profile
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setRole('student')}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      role === 'student'
                        ? 'border-blue-600 bg-blue-50/80 text-blue-900 font-bold shadow-sm'
                        : 'border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <GraduationCap className="w-4 h-4 mx-auto mb-1 text-blue-600" />
                    <span className="text-xs block">Student</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setRole('mentor')}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      role === 'mentor'
                        ? 'border-blue-600 bg-blue-50/80 text-blue-900 font-bold shadow-sm'
                        : 'border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <Users2 className="w-4 h-4 mx-auto mb-1 text-purple-600" />
                    <span className="text-xs block">Mentor</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setRole('partner')}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      role === 'partner'
                        ? 'border-blue-600 bg-blue-50/80 text-blue-900 font-bold shadow-sm'
                        : 'border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <Building2 className="w-4 h-4 mx-auto mb-1 text-emerald-600" />
                    <span className="text-xs block">Incubator</span>
                  </button>
                </div>
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Maya Sharma"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-navy-950 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email (College or Personal) *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="maya@college.edu"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-navy-950 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                />
              </div>

              {/* College / Organization */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  College / Institution Name
                </label>
                <input
                  type="text"
                  value={formData.collegeOrOrg}
                  onChange={(e) => setFormData({ ...formData, collegeOrOrg: e.target.value })}
                  placeholder="e.g. National Institute of Technology"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-navy-950 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-500/25 transition-all flex items-center justify-center gap-2 mt-4"
              >
                <span>Get Early Access</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
