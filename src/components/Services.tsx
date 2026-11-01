import React from 'react';
import { 
  Code, 
  Smartphone, 
  Sparkles, 
  RefreshCw, 
  Zap, 
  Gauge, 
  Check, 
  ArrowRight,
  Briefcase
} from 'lucide-react';
import { SERVICES, Service } from '../data/portfolioData';

interface ServicesProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getServiceIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6 text-cyan-400' };
    switch (iconName) {
      case 'Code':
        return <Code {...props} />;
      case 'Smartphone':
        return <Smartphone {...props} />;
      case 'Sparkles':
        return <Sparkles {...props} />;
      case 'RefreshCw':
        return <RefreshCw {...props} />;
      case 'Zap':
        return <Zap {...props} />;
      case 'Gauge':
        return <Gauge {...props} />;
      default:
        return <Briefcase {...props} />;
    }
  };

  const handleRequestService = (title: string) => {
    if (onSelectService) {
      onSelectService(title);
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="relative py-24 bg-[#080d19] border-t border-slate-800/80 overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-3">
            <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
            <span>SOLUTIONS &amp; EXPERTISE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading tracking-tight text-white">
            Professional <span className="text-gradient">Services</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Delivering high-standard frontend engineering, bespoke creative design, 
            and performance-optimized digital experiences tailored to your goals.
          </p>
        </div>

        {/* Services 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="group relative rounded-2xl glass-panel-glow p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/50"
            >
              <div>
                {/* Top Icon & Number */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3.5 rounded-xl bg-slate-900 border border-cyan-500/30 shadow-lg group-hover:scale-110 group-hover:bg-cyan-950/50 transition-all">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="font-mono text-xs text-slate-600 group-hover:text-cyan-400 transition-colors">
                    0{index + 1}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-heading font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Feature Deliverables List */}
                <div className="space-y-2 mb-6 pt-4 border-t border-slate-800/80">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => handleRequestService(service.title)}
                className="w-full mt-2 py-2.5 px-4 rounded-xl text-xs font-heading font-semibold text-slate-200 bg-slate-900/80 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 hover:text-white border border-slate-800 hover:border-transparent transition-all flex items-center justify-center gap-2 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]"
              >
                <span>Request Service</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
