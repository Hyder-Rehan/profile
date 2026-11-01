import React from 'react';
import { 
  GraduationCap, 
  Languages, 
  Terminal, 
  CheckCircle2, 
  Compass, 
  ArrowRight,
  Linkedin,
  Github,
  Facebook,
  Mail
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-20 sm:py-24 bg-[#07090e] border-t border-slate-800/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-cyan-400 mb-3">
            <Compass className="w-3.5 h-3.5 text-cyan-400" />
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading tracking-tight text-white">
            Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300">{PERSONAL_INFO.name}</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Frontend developer and Software Engineering student passionate about crafting clean, 
            responsive, and interactive web experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Clean Developer Profile Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="relative rounded-2xl bg-[#090e1a] border border-slate-800 p-6 sm:p-7 shadow-xl">
                {/* Visual Avatar / Identity Badge */}
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-slate-900 via-slate-850 to-slate-950 border border-slate-800 flex items-center justify-center mb-6">
                  <div className="relative z-10 flex flex-col items-center text-center p-4">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-[1.5px] shadow-lg mb-3">
                      <div className="w-full h-full rounded-2xl bg-[#0b101f] flex items-center justify-center">
                        <Terminal className="w-9 h-9 text-cyan-400" />
                      </div>
                    </div>
                    <span className="font-heading font-bold text-lg text-white">
                      {PERSONAL_INFO.name}
                    </span>
                    <span className="text-xs font-mono text-cyan-400 mt-0.5">
                      {PERSONAL_INFO.role}
                    </span>
                    <span className="mt-1 text-[11px] text-slate-400 font-medium">
                      BS Software Engineering
                    </span>
                  </div>
                </div>

                {/* Profile Details List */}
                <div className="space-y-3 font-mono text-xs mb-6">
                  <div className="flex items-center justify-between py-2 border-b border-slate-800/80">
                    <span className="text-slate-400">Specialization:</span>
                    <span className="text-cyan-300 font-semibold">Modern Frontend &amp; UI</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-slate-800/80">
                    <span className="text-slate-400">Education:</span>
                    <span className="text-slate-200">BS Software Engineering</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-slate-800/80">
                    <span className="text-slate-400">Languages:</span>
                    <span className="text-slate-200">English, Urdu</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-slate-400">Status:</span>
                    <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      Available for Work
                    </span>
                  </div>
                </div>

                {/* Social Links on Profile Card */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                  <span className="text-[11px] font-mono text-slate-400">Connect:</span>
                  <div className="flex items-center gap-2">
                    <a
                      href={PERSONAL_INFO.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/40 transition-colors"
                      title="LinkedIn"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={PERSONAL_INFO.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-colors"
                      title="GitHub"
                      aria-label="GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={PERSONAL_INFO.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/40 transition-colors"
                      title="Facebook"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                      title="Email"
                      aria-label="Email"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Journey, Education & Statistics */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                Designing Experiences that{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
                  Inspire and Perform
                </span>
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {PERSONAL_INFO.bio}
              </p>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                {PERSONAL_INFO.journey}
              </p>
            </div>

            {/* Key Information Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {/* Education Card */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-cyan-950/60 text-cyan-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h4 className="font-heading font-semibold text-white text-sm">
                    Education
                  </h4>
                </div>
                <p className="text-xs text-slate-200 font-medium">
                  BS in Software Engineering
                </p>
                <p className="text-[11px] text-slate-400 mt-1">
                  Enrolled undergraduate focusing on computer science, data structures, algorithms, and web engineering.
                </p>
              </div>

              {/* Languages Card */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-blue-950/60 text-blue-400">
                    <Languages className="w-5 h-5" />
                  </div>
                  <h4 className="font-heading font-semibold text-white text-sm">
                    Languages
                  </h4>
                </div>
                <div className="space-y-1 mt-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-200 font-medium">English</span>
                    <span className="text-[11px] text-cyan-400 font-mono">Professional Working</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-200 font-medium">Urdu</span>
                    <span className="text-[11px] text-blue-400 font-mono">Native / Fluent</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Values checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {[
                'Pixel-perfect responsive implementation',
                'Semantic, SEO-friendly HTML5 markup',
                'Performance and Core Web Vitals focused',
                'Active learner exploring modern React patterns',
              ].map((point, index) => (
                <div key={index} className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Quick Action Link */}
            <div className="pt-4 flex items-center gap-4">
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-xl text-xs font-semibold font-heading text-white bg-slate-900 border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800 transition-all flex items-center gap-2"
              >
                <span>View My Work</span>
                <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
              </a>
              <a
                href="#contact"
                className="text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors"
              >
                Get in Touch →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
