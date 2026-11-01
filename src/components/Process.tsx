import React, { useState } from 'react';
import { 
  GitCommit, 
  Workflow, 
  CheckCircle, 
  FileText, 
  Layout, 
  Code, 
  CheckSquare, 
  Rocket, 
  ArrowRight 
} from 'lucide-react';
import { PROCESS_STEPS, ProcessStep } from '../data/portfolioData';

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const getStepIcon = (index: number) => {
    const props = { className: 'w-5 h-5 text-cyan-400' };
    switch (index) {
      case 0:
        return <FileText {...props} />;
      case 1:
        return <Layout {...props} />;
      case 2:
        return <Code {...props} />;
      case 3:
        return <CheckSquare {...props} />;
      case 4:
        return <Rocket {...props} />;
      default:
        return <Workflow {...props} />;
    }
  };

  return (
    <section id="process" className="relative py-24 bg-[#07090e] border-t border-slate-800/80 overflow-hidden">
      {/* Background glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-600/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-3">
            <Workflow className="w-3.5 h-3.5 text-cyan-400" />
            <span>HOW I WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading tracking-tight text-white">
            Development <span className="text-gradient">Process</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            A structured, iterative 5-step engineering methodology ensuring transparency, 
            high quality, and on-time project execution.
          </p>
        </div>

        {/* Timeline Navigation Bar for Desktop & Mobile */}
        <div className="relative mb-12">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2 bg-slate-800 -z-0">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500"
              style={{ width: `${(activeStep / (PROCESS_STEPS.length - 1)) * 100}%` }}
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 relative z-10">
            {PROCESS_STEPS.map((step, idx) => (
              <button
                key={step.step}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between ${
                  activeStep === idx
                    ? 'bg-gradient-to-b from-cyan-950/70 to-slate-900 border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.25)]'
                    : 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                      activeStep === idx
                        ? 'bg-cyan-500 text-slate-950 shadow-md'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    STEP {step.step}
                  </span>
                  {getStepIcon(idx)}
                </div>
                <div>
                  <h3
                    className={`font-heading font-semibold text-xs sm:text-sm line-clamp-1 ${
                      activeStep === idx ? 'text-cyan-300' : 'text-slate-200'
                    }`}
                  >
                    {step.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Active Step Detailed Showcase Panel */}
        <div className="rounded-2xl glass-panel-glow border border-cyan-500/30 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Detailed Step Explanation */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-xs font-mono text-cyan-400">
                <span>PHASE {PROCESS_STEPS[activeStep].step} OF 05</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                {PROCESS_STEPS[activeStep].title}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {PROCESS_STEPS[activeStep].description}
              </p>

              {/* Step Navigation Controls */}
              <div className="flex items-center gap-3 pt-4">
                <button
                  type="button"
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                  className="px-4 py-2 rounded-xl text-xs font-mono bg-slate-900 border border-slate-700 text-slate-300 hover:text-white disabled:opacity-40 disabled:pointer-events-none transition-colors"
                >
                  ← Previous Step
                </button>
                <button
                  type="button"
                  disabled={activeStep === PROCESS_STEPS.length - 1}
                  onClick={() => setActiveStep(prev => Math.min(PROCESS_STEPS.length - 1, prev + 1))}
                  className="px-4 py-2 rounded-xl text-xs font-mono bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/30 disabled:opacity-40 disabled:pointer-events-none transition-colors"
                >
                  Next Step →
                </button>
              </div>
            </div>

            {/* Right Column: Key Deliverables Card */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-xl bg-slate-950/80 border border-slate-800 shadow-xl">
                <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  Key Phase Deliverables
                </h4>
                <div className="space-y-3">
                  {PROCESS_STEPS[activeStep].deliverables.map((item, dIdx) => (
                    <div
                      key={dIdx}
                      className="p-3 rounded-lg bg-slate-900/90 border border-slate-800/80 flex items-center gap-3 text-xs text-slate-200"
                    >
                      <span className="w-5 h-5 rounded-md bg-cyan-950 border border-cyan-500/30 flex items-center justify-center font-mono text-[10px] text-cyan-400 font-bold shrink-0">
                        {dIdx + 1}
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
