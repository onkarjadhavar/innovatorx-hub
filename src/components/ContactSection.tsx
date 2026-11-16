import React, { useState } from 'react';
import { Mail, MapPin, MessageSquare, Send, CheckCircle2, Sparkles, Phone } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Student Innovator',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', role: 'Student Innovator', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight">
            Connect With{' '}
            <span className="text-blue-600">Innovator X Hub.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Have questions about partnerships, campus incubation, mentorship, or our AI platform? Reach out to our founding team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-navy-950">
                Let's Build the Future of Student Entrepreneurship
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Whether you are a university student with a raw idea, a campus entrepreneurship cell, or an industry mentor eager to give back — we'd love to partner with you.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy-950">Email Inquiry</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Direct response within 24 hours</p>
                  <a href="mailto:contact@innovatorxhub.org" className="text-sm font-semibold text-blue-600 hover:text-blue-800 mt-1 inline-block">
                    contact@innovatorxhub.org
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy-950">Innovation Campus Office</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Hub for student founders & incubators</p>
                  <p className="text-sm font-medium text-slate-700 mt-1">
                    Student Venture Center, Tech Innovation Block, Knowledge City
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy-950">Community Channels</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Discord, Telegram & Weekly AMA sessions</p>
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md inline-block mt-1">
                    Active Discussions Every Friday
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm relative">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-navy-950">Message Received!</h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you for reaching out to Innovator X Hub. A member of our community team will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h4 className="text-xl font-bold text-navy-950 mb-2">Send Us a Direct Message</h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-navy-950 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Your Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@university.edu"
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-navy-950 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    I am a...
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-navy-950 focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="Student Innovator">Student Innovator / Aspiring Founder</option>
                    <option value="College Faculty / E-Cell">College Faculty / Campus E-Cell Leader</option>
                    <option value="Industry Mentor">Industry Professional / Potential Mentor</option>
                    <option value="Grant / Incubator Partner">Grant Provider / Incubator Representative</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Your Message or Project Idea
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project, idea, or how you'd like to collaborate..."
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-navy-950 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 shadow-md shadow-blue-500/25 transition-all duration-200"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
