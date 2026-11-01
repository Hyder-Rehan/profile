import React from 'react';
import { 
  ArrowDown, 
  FolderKanban, 
  Send, 
  Linkedin, 
  Github, 
  Facebook, 
  Mail, 
  Sparkles,
  Terminal 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ThreeHeroScene } from './ThreeHeroScene';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-24 pb-16 flex items-center justify-center overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[450px] bg-gradient-to-tr from-cyan-600/10 via-blue-600/10 to-indigo-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading, Subtitle, Bio, Socials, CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start z-10 text-left">
            {/* Status indicator badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-mono text-cyan-300 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span>{PERSONAL_INFO.status}</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400">BS Software Engineering</span>
            </div>

            {/* Main Greeting & Name Heading */}
            <div className="space-y-2 mb-4">
              <span className="text-xs sm:text-sm font-mono text-cyan-400 tracking-wider uppercase flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                Frontend &amp; Creative Web Developer
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading tracking-tight leading-[1.15] text-white">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300">
                  {PERSONAL_INFO.name}
                </span>
              </h1>
            </div>

            {/* Attractive Introduction */}
            <p className="text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed mb-6">
              Crafting modern, responsive, and interactive web experiences. 
              Dedicated to clean architecture, fluid design, and high-performance digital craftsmanship.
            </p>

            {/* Social Media Links Row */}
            <div className="flex items-center gap-3 mb-8">
              <span className="text-xs font-mono text-slate-400 mr-1 hidden sm:inline">Connect:</span>
              
              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-blue-950/60 border border-slate-800 hover:border-blue-500/50 text-slate-300 hover:text-blue-400 transition-all duration-200"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              {/* GitHub */}
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-600 text-slate-300 hover:text-white transition-all duration-200"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              {/* Facebook */}
              <a
                href={PERSONAL_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-indigo-950/60 border border-slate-800 hover:border-indigo-500/50 text-slate-300 hover:text-indigo-400 transition-all duration-200"
                aria-label="Facebook Profile"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>

              {/* WhatsApp */}
              <a
                href={PERSONAL_INFO.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-emerald-950/60 border border-slate-800 hover:border-emerald-500/50 text-slate-300 hover:text-[#25D366] transition-all duration-200"
                aria-label="WhatsApp Chat"
                title="WhatsApp"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>

              {/* Direct Email */}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-cyan-950/60 border border-slate-800 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-400 transition-all duration-200"
                aria-label="Send direct email"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-heading font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-950/40 hover:shadow-cyan-900/50 transition-all duration-200 hover:-translate-y-0.5"
              >
                <FolderKanban className="w-4 h-4 text-white" />
                <span>Explore My Projects</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-heading font-semibold text-sm text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4 text-cyan-400" />
                <span>Let's Work Together</span>
              </a>
            </div>

            {/* Quick stats ribbon */}
            <div className="grid grid-cols-3 gap-4 pt-8 mt-8 border-t border-slate-800/80 w-full max-w-lg">
              <div>
                <div className="text-xl sm:text-2xl font-bold font-heading text-cyan-400">4+</div>
                <div className="text-xs text-slate-400">Featured Projects</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-heading text-blue-400">100%</div>
                <div className="text-xs text-slate-400">Pixel-Perfect UI</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-heading text-indigo-400">BS SE</div>
                <div className="text-xs text-slate-400">In Progress</div>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Scene Viewport */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="relative w-full rounded-2xl bg-slate-900/50 border border-slate-800 p-2 overflow-hidden shadow-xl">
              <div className="absolute top-3 left-4 z-20 flex items-center gap-2 pointer-events-none">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                <span className="ml-2 text-[11px] font-mono text-slate-400 hidden sm:inline">
                  rh_dev_station.three.js
                </span>
              </div>

              {/* Three.js interactive canvas component */}
              <ThreeHeroScene />
            </div>
          </div>
        </div>
      </div>

      {/* Smooth scroll down indicator */}
      <a
        href="#about"
        className="absolute bottom-3 left-1/2 -translate-x-1/2 p-2 rounded-full text-slate-400 hover:text-cyan-400 transition-colors focus:outline-none"
        aria-label="Scroll down to About section"
      >
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
};
