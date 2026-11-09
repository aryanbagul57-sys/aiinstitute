'use client';

import React, { useState } from 'react';
import { Award, Send, Check, MapPin, Phone, Mail, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export const LandingFooter: React.FC = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <footer className="bg-white dark:bg-[#070b16] text-slate-500 dark:text-slate-400 py-16 px-6 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand & Location section */}
        <div className="space-y-4">
          <div className="inline-block w-fit">
            <img 
              src="/logo-transparent.png" 
              alt="AI Institute Logo" 
              className="h-12 w-auto object-contain drop-shadow-md mix-blend-multiply dark:mix-blend-normal" 
              onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/logo-full.png'; }}
            />
          </div>
          <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
            India's premier outcome-driven training institute for Generative AI, Data Science, Machine Learning, and Full Stack Engineering. Building guaranteed careers.
          </p>
          <div className="space-y-2 pt-2 text-xs">
            <div className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
              <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <span>AI Institute Campus, Satana, Maharashtra, India</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
              <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
              <a href="tel:+919916961234" className="hover:underline">+91 99169 61234</a>
            </div>
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
              <Mail className="w-4 h-4 text-purple-600 shrink-0" />
              <a href="mailto:support@aiinstitute.in" className="hover:underline">support@aiinstitute.in</a>
            </div>
          </div>
        </div>

        {/* Programs section */}
        <div>
          <h4 className="text-xs uppercase font-extrabold text-slate-900 dark:text-white tracking-wider mb-4">
            Flagship Programs
          </h4>
          <ul className="space-y-2.5 text-xs">
            <li><a href="#courses" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-blue-500" /> Generative AI Masterclass</a></li>
            <li><a href="#courses" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-blue-500" /> AI &amp; Machine Learning Complete</a></li>
            <li><a href="#courses" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-blue-500" /> Data Science &amp; Power BI</a></li>
            <li><a href="#courses" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-blue-500" /> Full Stack Web Development</a></li>
            <li><a href="#courses" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-blue-500" /> Cyber Security &amp; Cloud IT</a></li>
          </ul>
        </div>

        {/* Quick Links section */}
        <div>
          <h4 className="text-xs uppercase font-extrabold text-slate-900 dark:text-white tracking-wider mb-4">
            Quick Navigation
          </h4>
          <ul className="space-y-2.5 text-xs">
            <li><a href="#why-choose" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">4-Step Career Blueprint</a></li>
            <li><a href="#mentors" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Senior Mentors &amp; Faculty</a></li>
            <li><a href="#testimonials" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Placement Records &amp; CTCs</a></li>
            <li><a href="#faq" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Frequently Asked Questions</a></li>
            <li><a href="/login/student" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-bold text-blue-600 dark:text-blue-400">Student Portal Login &gt;</a></li>
          </ul>
        </div>

        {/* Newsletter & Certification section */}
        <div className="space-y-4">
          <h4 className="text-xs uppercase font-extrabold text-slate-900 dark:text-white tracking-wider">
            Stay Connected
          </h4>
          <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
            Subscribe for upcoming live batch announcements, free demo invites, and placement notifications.
          </p>
          <form onSubmit={handleSubscribe} className="relative flex">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-800 dark:text-white focus:outline-none focus:border-blue-500 pr-10 shadow-xs"
              required
            />
            <button
              type="submit"
              className="absolute right-1 top-1 bottom-1 px-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-all flex items-center justify-center cursor-pointer"
            >
              {subscribed ? <Check className="w-4 h-4 text-emerald-300" /> : <Send className="w-4 h-4" />}
            </button>
          </form>

          <div className="pt-2 flex items-center gap-2 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
            <ShieldCheck className="w-4 h-4 shrink-0" />
            <span>ISO 9001:2015 Certified Training Institute</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
        <p>© 2026 AI Institute. All rights reserved. Placement statistics subject to skill readiness and attendance.</p>
        <div className="flex gap-6 mt-4 sm:mt-0 font-medium">
          <a href="#faq" className="hover:text-blue-600 dark:hover:text-white transition-colors">Privacy Policy</a>
          <a href="#faq" className="hover:text-blue-600 dark:hover:text-white transition-colors">Terms of Service</a>
          <a href="#enroll-track" className="hover:text-blue-600 dark:hover:text-white transition-colors">Contact Support</a>
        </div>
      </div>
    </footer>
  );
};
