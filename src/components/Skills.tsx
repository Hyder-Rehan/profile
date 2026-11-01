import React, { useState } from 'react';
import { 
  Code2, 
  Palette, 
  FileCode2, 
  Smartphone, 
  GitBranch, 
  Atom, 
  Wind, 
  Box, 
  Cpu, 
  Layers, 
  Check, 
  ExternalLink 
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  // Map icon names to Lucide icons
  const renderSkillIcon = (iconName: string, color: string) => {
    const props = { className: 'w-6 h-6', style: { color } };
    switch (iconName) {
      case 'Code2':
        return <Code2 {...props} />;
      case 'Palette':
        return <Palette {...props} />;
      case 'FileCode2':
        return <FileCode2 {...props} />;
      case 'Smartphone':
        return <Smartphone {...props} />;
      case 'GitBranch':
        return <GitBranch {...props} />;
      case 'Atom':
        return <Atom {...props} />;
      case 'Wind':
        return <Wind {...props} />;
      case 'Box':
        return <Box {...props} />;
      default:
        return <Cpu {...props} />;
    }
  };

  return (
    <section id="skills" className="relative py-24 bg-[#080d19] border-t border-slate-800/80 overflow-hidden">
      {/* Background glow spots */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-3">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading tracking-tight text-white">
            Skills &amp; <span className="text-gradient">Technologies</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Grounded in core web foundations with an active focus on modern frontend architecture, 
            interactive animations, and clean modular code.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <button
                key={cat.title}
                type="button"
                onClick={() => setSelectedCategory(idx)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-heading font-medium transition-all duration-200 ${
                  selectedCategory === idx
                    ? 'text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Category Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES[selectedCategory].skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative rounded-2xl glass-panel-glow p-6 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              style={{
                borderColor: 'rgba(56, 189, 248, 0.15)',
              }}
            >
              {/* Subtle hover accent light */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at top right, ${skill.color}15, transparent 70%)`,
                }}
              />

              <div>
                {/* Header with Icon and Level Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="p-3 rounded-xl bg-slate-900/90 border border-slate-700/80 flex items-center justify-center shadow-lg transition-transform group-hover:scale-110"
                    style={{ borderColor: `${skill.color}40` }}
                  >
                    {renderSkillIcon(skill.icon, skill.color)}
                  </div>
                  <span
                    className="px-2.5 py-1 rounded-full text-[10px] font-mono font-medium border"
                    style={{
                      color: skill.color,
                      backgroundColor: `${skill.color}10`,
                      borderColor: `${skill.color}35`,
                    }}
                  >
                    {skill.level}
                  </span>
                </div>

                {/* Skill Name */}
                <h3 className="text-lg font-heading font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {skill.name}
                </h3>

                {/* Experience description */}
                <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                  {skill.experience}
                </p>
              </div>

              {/* Bottom status badge */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Verified in Projects</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
              </div>
            </div>
          ))}
        </div>

        {/* Future Roadmap / Expanding Arsenal Note */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-900/90 border border-cyan-500/20 backdrop-blur-md">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                  Continuous Learning Journey
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-950/60 border border-purple-500/30 text-purple-300">
                  Active
                </span>
              </div>
              <h4 className="text-base sm:text-lg font-heading font-bold text-white">
                Expanding Toolkit &amp; Emerging Web Technologies
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 max-w-3xl">
                Always eager to tackle new challenges. Currently deepening hands-on projects in React component systems, 
                state management, and Three.js 3D web visualizations.
              </p>
            </div>
            <a
              href="#projects"
              className="px-4 py-2 rounded-xl text-xs font-heading font-semibold text-cyan-300 bg-cyan-950/60 border border-cyan-500/40 hover:bg-cyan-900/50 hover:text-white transition-all shrink-0"
            >
              See Skills In Action →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
