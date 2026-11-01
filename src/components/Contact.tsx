import React, { useState } from 'react';
import { Mail, Linkedin, Facebook, Copy, Check, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-24 bg-[#080d19] border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading tracking-tight text-white mb-4">
          Let's Connect
        </h2>

        {/* Short Inviting Sentence */}
        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mb-10 leading-relaxed">
          I'm currently available for frontend development opportunities and freelance projects. 
          Feel free to reach out directly via email or connect with me on social media.
        </p>

        {/* Interactive Contact Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
          {/* Email Button - opens mailto */}
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-heading font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-950/50 hover:shadow-cyan-900/60 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            aria-label="Send email to Rehan Hyder"
          >
            <Mail className="w-4 h-4" />
            <span>Send Email</span>
          </a>

          {/* Copy Email Button */}
          <button
            type="button"
            onClick={handleCopy}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-heading font-medium text-sm text-slate-300 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all duration-200"
            title="Copy email address"
            aria-label="Copy email address to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 font-mono text-xs">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-slate-400" />
                <span className="font-mono text-xs truncate max-w-[200px]">{PERSONAL_INFO.email}</span>
              </>
            )}
          </button>
        </div>

        {/* Social Profile Links: LinkedIn & Facebook */}
        <div className="flex items-center justify-center gap-4 mt-8 pt-8 border-t border-slate-800/80 max-w-md mx-auto">
          {/* LinkedIn Link */}
          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-heading font-medium text-slate-200 hover:text-white bg-slate-900/70 hover:bg-blue-950/40 border border-slate-800 hover:border-blue-500/50 transition-all duration-200 group"
          >
            <Linkedin className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 transition-colors" />
          </a>

          {/* Facebook Link */}
          <a
            href={PERSONAL_INFO.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-heading font-medium text-slate-200 hover:text-white bg-slate-900/70 hover:bg-indigo-950/40 border border-slate-800 hover:border-indigo-500/50 transition-all duration-200 group"
          >
            <Facebook className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform" />
            <span>Facebook</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-indigo-400 transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
};
