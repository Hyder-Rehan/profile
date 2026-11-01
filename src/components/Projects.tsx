import React, { useState } from 'react';
import { 
  ExternalLink, 
  Github, 
  FolderGit2, 
  Sparkles, 
  Eye, 
  CheckCircle2, 
  X, 
  Maximize2, 
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'web-app' | 'tool' | 'clone'>('all');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-24 bg-[#07090e] border-t border-slate-800/80 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-cyan-600/10 via-purple-600/5 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>PORTFOLIO WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading tracking-tight text-white">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Explore my web applications and interactive tools, crafted with clean semantic code, 
            responsive layouts, and modern user experience.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'web-app', label: 'Web Applications' },
              { id: 'tool', label: 'Tools & Utilities' },
              { id: 'clone', label: 'Layout Clones' },
            ].map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-heading font-medium transition-all duration-200 ${
                  activeFilter === tab.id
                    ? 'text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative rounded-2xl glass-panel-glow border border-slate-800/80 hover:border-cyan-500/50 overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 shadow-2xl"
            >
              {/* Project Image / Visual Preview Window */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950 border-b border-slate-800/80">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090e1a] via-[#090e1a]/40 to-transparent" />

                {/* Top Overlay Badge: Category & Featured */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-slate-950/80 border border-slate-700/80 text-cyan-300 backdrop-blur-md">
                    {project.category.toUpperCase()}
                  </span>
                  {project.featured && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-cyan-950/80 border border-cyan-400/50 text-cyan-300 backdrop-blur-md shadow-lg shadow-cyan-950/40">
                      <Sparkles className="w-3 h-3 text-cyan-400" />
                      Featured
                    </span>
                  )}
                </div>

                {/* Quick inspect button on hover */}
                <button
                  type="button"
                  onClick={() => setActiveProjectModal(project)}
                  className="absolute bottom-4 right-4 p-2.5 rounded-xl bg-slate-900/90 hover:bg-cyan-500 hover:text-white border border-slate-700/80 text-slate-300 transition-all opacity-0 group-hover:opacity-100 duration-200 shadow-xl backdrop-blur-md"
                  title="Inspect project details"
                  aria-label={`Inspect ${project.title}`}
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400/90 mt-1 mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 mb-6">
                    {project.highlights.slice(0, 2).map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900/90 border border-slate-800 text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons: Live Demo & GitHub */}
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-800/80">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-heading font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-950/50 transition-all"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-heading font-semibold text-slate-300 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code Repo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Inspection Modal */}
      {activeProjectModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#090e1a] border border-cyan-500/30 p-6 sm:p-8 shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveProjectModal(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
                {activeProjectModal.category.toUpperCase()}
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mt-3">
                {activeProjectModal.title}
              </h3>
              <p className="text-sm font-mono text-cyan-400 mt-1">
                {activeProjectModal.subtitle}
              </p>
            </div>

            {/* Modal Image */}
            <div className="relative rounded-xl overflow-hidden aspect-video mb-6 border border-slate-800">
              <img
                src={activeProjectModal.image}
                alt={activeProjectModal.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Detailed Description */}
            <div className="space-y-4 mb-6">
              <h4 className="text-sm font-heading font-semibold text-slate-200 uppercase tracking-wider">
                Overview &amp; Architecture
              </h4>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {activeProjectModal.longDescription}
              </p>
            </div>

            {/* Highlights List */}
            <div className="space-y-3 mb-6 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                Key Technical Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeProjectModal.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {activeProjectModal.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-800/80 border border-slate-700 text-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Modal Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-800">
              <a
                href={activeProjectModal.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-6 rounded-xl text-center text-sm font-heading font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-950/50 transition-all flex items-center justify-center gap-2"
              >
                <span>Launch Live Demo</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={activeProjectModal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-6 rounded-xl text-center text-sm font-heading font-semibold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all flex items-center justify-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span>View Source Code</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
