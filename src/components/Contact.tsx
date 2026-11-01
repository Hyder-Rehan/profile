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

        {/* Social Profile Links: LinkedIn, Facebook & WhatsApp */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-8 pt-8 border-t border-slate-800/80 max-w-lg mx-auto">
          {/* WhatsApp Direct Chat Link */}
          <a
            href={PERSONAL_INFO.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-heading font-medium text-slate-200 hover:text-white bg-slate-900/70 hover:bg-emerald-950/40 border border-slate-800 hover:border-emerald-500/50 transition-all duration-200 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 text-[#25D366] group-hover:scale-110 transition-transform"
              aria-hidden="true"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            <span>WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 transition-colors" />
          </a>

          {/* LinkedIn Link */}
          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-heading font-medium text-slate-200 hover:text-white bg-slate-900/70 hover:bg-blue-950/40 border border-slate-800 hover:border-blue-500/50 transition-all duration-200 group"
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
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-heading font-medium text-slate-200 hover:text-white bg-slate-900/70 hover:bg-indigo-950/40 border border-slate-800 hover:border-indigo-500/50 transition-all duration-200 group"
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
