import React from 'react';
import { ArrowUp, Github, Linkedin, Facebook, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#05070b] border-t border-slate-800/80 pt-16 pb-12 overflow-hidden text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80 items-start">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <a href="#home" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-600 p-[1px]">
                <div className="w-full h-full rounded-xl bg-[#090d16] flex items-center justify-center">
                  <span className="font-heading font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-indigo-300">
                    RH
                  </span>
                </div>
              </div>
              <div>
                <span className="font-heading font-bold text-white text-lg tracking-tight block">
                  {PERSONAL_INFO.name}
                </span>
                <span className="text-xs font-mono text-cyan-400">
                  {PERSONAL_INFO.role}
                </span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Software Engineering student crafting responsive, interactive, and high-performance 
              frontend web experiences.
            </p>

            {/* Social Icons Row: LinkedIn, GitHub, Facebook, Email */}
            <div className="flex items-center gap-2.5 pt-2">
              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/40 hover:bg-slate-800/80 transition-all duration-200"
                aria-label="LinkedIn profile"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              {/* GitHub */}
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 hover:bg-slate-800/80 transition-all duration-200"
                aria-label="GitHub profile"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              {/* Facebook */}
              <a
                href={PERSONAL_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/40 hover:bg-slate-800/80 transition-all duration-200"
                aria-label="Facebook profile"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>

              {/* Email */}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800/80 transition-all duration-200"
                aria-label="Send direct email"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-heading font-semibold text-white text-sm">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-cyan-400 transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Education & Status */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-heading font-semibold text-white text-sm">
              Status &amp; Availability
            </h4>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5 text-xs">
              <div className="flex items-center gap-2 text-emerald-400 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Open for Opportunities</span>
              </div>
              <p className="text-slate-400 text-[11px]">
                Undergraduate: BS Software Engineering
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© 2026 {PERSONAL_INFO.name}. All rights reserved.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
            aria-label="Back to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
