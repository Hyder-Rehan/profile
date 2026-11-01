export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  category: 'web-app' | 'tool' | 'clone';
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
  featured: boolean;
  highlights: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    experience: string;
    icon: string;
    color: string;
  }[];
}

export const PERSONAL_INFO = {
  name: 'Rehan Hyder',
  role: 'Frontend Developer & Creative Web Developer',
  email: 'hyderrehan79@gmail.com',
  education: 'Currently enrolled in BS Software Engineering',
  location: 'Karachi, Pakistan',
  status: 'Available for Opportunities',
  languages: [
    { name: 'English', proficiency: 'Professional Working Proficiency' },
    { name: 'Urdu', proficiency: 'Native / Bilingual' },
  ],
  bio: 'A passionate Frontend Developer and Software Engineering undergraduate focused on creating visually stunning, responsive, and performance-driven web interfaces. Dedicated to clean architecture, modern UI design, and interactive 3D web experiences.',
  journey: 'My journey began with a deep curiosity about how lines of code translate into interactive visual interfaces. Over the course of my Software Engineering degree, I have honed my expertise in core web technologies including semantic HTML5, modern CSS3 layout systems, and JavaScript. I take pride in crafting clean, accessible, and responsive user experiences that work flawlessly across every screen size.',
  socials: {
    github: 'https://github.com/Hyder-Rehan',
    linkedin: 'https://www.linkedin.com/in/rehan-hyder-144675350/',
    facebook: 'https://www.facebook.com/shahzada.kamboh.790/',
  },
  stats: [
    { label: 'Featured Projects', value: '4+' },
    { label: 'Core Web Tech', value: '100%' },
    { label: 'Responsive Design', value: 'Pixel-Perfect' },
    { label: 'Commitment', value: '24/7 Passion' },
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Core Frontend Technologies',
    description: 'Foundational web standards powering robust client-side user interfaces.',
    skills: [
      {
        name: 'HTML5',
        level: 'Advanced',
        experience: 'Semantic structure, accessibility (ARIA), SEO best practices, modern audio/video APIs',
        icon: 'Code2',
        color: '#E34F26',
      },
      {
        name: 'CSS3',
        level: 'Advanced',
        experience: 'Flexbox, CSS Grid, custom keyframe animations, glassmorphism, responsive media queries',
        icon: 'Palette',
        color: '#1572B6',
      },
      {
        name: 'JavaScript (ES6+)',
        level: 'Proficient',
        experience: 'DOM manipulation, Async/Await, Fetch API, closures, event-driven programming, modular code',
        icon: 'FileCode2',
        color: '#F7DF1E',
      },
      {
        name: 'Responsive Web Design',
        level: 'Advanced',
        experience: 'Mobile-first methodology, fluid typography, cross-browser compatibility, touch interactions',
        icon: 'Smartphone',
        color: '#06B6D4',
      },
    ],
  },
  {
    title: 'Version Control & Ecosystem',
    description: 'Tools and workflows for maintainable collaborative software development.',
    skills: [
      {
        name: 'Git & GitHub',
        level: 'Proficient',
        experience: 'Branch management, pull requests, merge conflict resolution, repository architecture',
        icon: 'GitBranch',
        color: '#F05032',
      },
      {
        name: 'React Ecosystem',
        level: 'Active Practice',
        experience: 'Component hierarchy, hooks (useState, useEffect, useRef), props validation, SPA routing',
        icon: 'Atom',
        color: '#61DAFB',
      },
      {
        name: 'Tailwind CSS',
        level: 'Proficient',
        experience: 'Utility-first layout, custom design systems, responsive variants, dark mode integration',
        icon: 'Wind',
        color: '#38BDF8',
      },
      {
        name: 'Three.js & 3D Web',
        level: 'Developing',
        experience: 'Interactive 3D scenes, procedural meshes, PBR lighting, canvas particle systems',
        icon: 'Box',
        color: '#A855F7',
      },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'picseditz-ai',
    title: 'PicsEditz – AI Photo Editing Tools',
    subtitle: 'Modern Web Platform for Next-Gen Creative Image Tools',
    description:
      'A sleek, futuristic web application showcasing cutting-edge AI photo editing tools, smart image filters, background removal concepts, and responsive interactive creative tools.',
    longDescription:
      'PicsEditz is an AI-powered photo editing showcase platform designed with an ultra-modern aesthetic. It highlights various generative and enhancement tools, including background replacement, portrait retouching, style transfer, and real-time canvas adjustments. Built with responsive layouts and interactive tool card previews.',
    category: 'web-app',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'AI Tools', 'Responsive Design'],
    liveUrl: 'https://picseditz.vercel.app',
    githubUrl: 'https://github.com/Hyder-Rehan',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop',
    featured: true,
    highlights: [
      'Interactive showcase of AI image editing features',
      'Dynamic responsive gallery with smooth transitions',
      'Futuristic dark mode UI with neon glow accents',
      'Optimized asset loading and mobile touch support',
    ],
  },
  {
    id: 'forex-calculator',
    title: 'Forex Calculator',
    subtitle: 'Real-Time Foreign Currency Exchange & Conversion Tool',
    description:
      'An interactive financial utility tool that calculates currency exchange rates with live calculations, currency pairing, swap options, and clean formatted results.',
    longDescription:
      'A dedicated foreign exchange calculation utility engineered to help users instantly compute currency rates, spread calculations, and profit/loss conversions. Features a fast input listener, seamless currency swapping, and responsive financial display cards.',
    category: 'tool',
    tags: ['JavaScript', 'CSS Grid', 'Exchange API', 'Financial UI', 'HTML5'],
    liveUrl: 'https://forex-calculator-demo.vercel.app',
    githubUrl: 'https://github.com/Hyder-Rehan',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop',
    featured: true,
    highlights: [
      'Real-time calculated output on numeric input',
      'Currency switcher and reverse conversion shortcut',
      'Clean typography adhering to financial dashboard standards',
      'Validation against invalid numerical or negative entries',
    ],
  },
  {
    id: 'todo-list',
    title: 'Interactive To-Do List Website',
    subtitle: 'Productivity Task Manager with Local Persistence',
    description:
      'A clean, intuitive task management web application featuring task creation, status toggling, categories, priority badges, and persistent storage.',
    longDescription:
      'A productivity web application focused on minimalism and user speed. Allows adding, editing, completing, and filtering tasks across active and completed states. Designed with smooth micro-interactions and resilient localStorage saving.',
    category: 'web-app',
    tags: ['JavaScript', 'localStorage', 'UI/UX', 'CSS3', 'DOM APIs'],
    liveUrl: 'https://todo-list-rehan.vercel.app',
    githubUrl: 'https://github.com/Hyder-Rehan',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1000&auto=format&fit=crop',
    featured: true,
    highlights: [
      'Client-side state persistence across browser restarts',
      'Instant filtering by All, Active, and Completed tasks',
      'Accessible keyboard controls for rapid item entry',
      'Smooth entry and deletion card transitions',
    ],
  },
  {
    id: 'website-clones',
    title: 'Basic Website Clone Pages',
    subtitle: 'Pixel-Perfect Modern Layout Replicas & Architecture',
    description:
      'A curated collection of pixel-perfect landing page clones replicating modern tech brands, exploring intricate CSS layouts, flexbox alignments, and grid systems.',
    longDescription:
      'An architectural layout practice series reproducing modern landing pages from industry leaders. Focuses on exact typography scales, spacing metrics, navigation patterns, responsive breakpoints, and CSS animation details without third-party design bloat.',
    category: 'clone',
    tags: ['HTML5', 'CSS3', 'Flexbox', 'CSS Grid', 'Pixel-Perfect'],
    liveUrl: 'https://web-clones-showcase.vercel.app',
    githubUrl: 'https://github.com/Hyder-Rehan',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
    featured: false,
    highlights: [
      'Strict adherence to semantic HTML5 hierarchy',
      'Complex responsive navigation bars with mobile states',
      'Clean CSS architecture with custom CSS properties',
      'Zero-framework layout mastery demonstrating core fundamentals',
    ],
  },
];

export const SERVICES: Service[] = [
  {
    id: 'frontend-development',
    title: 'Frontend Website Development',
    description:
      'Building performant, scalable, and standards-compliant web interfaces with semantic HTML5, modern CSS3, and JavaScript.',
    iconName: 'Code',
    features: [
      'Semantic & accessible HTML structure',
      'Clean, modular JavaScript logic',
      'Cross-browser and multi-device support',
      'Integration with modern web APIs',
    ],
  },
  {
    id: 'responsive-design',
    title: 'Responsive Website Design',
    description:
      'Engineering fluid layouts that dynamically adapt to all screen sizes, from ultra-compact smartphones to 4K desktop monitors.',
    iconName: 'Smartphone',
    features: [
      'Mobile-first responsive architecture',
      'Dynamic fluid typography and spacing',
      'Touch-friendly navigation and buttons',
      'Zero horizontal overflow guarantees',
    ],
  },
  {
    id: 'landing-pages',
    title: 'Landing Page Development',
    description:
      'Crafting high-converting, visually striking landing pages designed to captivate visitors and drive user actions.',
    iconName: 'Sparkles',
    features: [
      'Compelling Hero visual compositions',
      'High conversion call-to-action flows',
      'Engaging interactive product showcases',
      'Sub-second first contentful paint',
    ],
  },
  {
    id: 'website-redesign',
    title: 'Website Redesign',
    description:
      'Transforming outdated or slow websites into modern, sleek, and high-impact digital experiences with fresh aesthetics.',
    iconName: 'RefreshCw',
    features: [
      'Modern dark & glassmorphic themes',
      'Revamped typography & visual hierarchy',
      'Elimination of legacy visual clutter',
      'Improved navigation and user experience',
    ],
  },
  {
    id: 'interactive-ui',
    title: 'Interactive UI Development',
    description:
      'Elevating web applications with fluid animations, micro-interactions, 3D elements, and smooth state transitions.',
    iconName: 'Zap',
    features: [
      'Interactive 3D elements via Three.js',
      'Smooth hover and scroll interactions',
      'Dynamic modals and micro-feedback',
      'Hardware-accelerated animations',
    ],
  },
  {
    id: 'optimization',
    title: 'Website Optimization',
    description:
      'Refining code, minimizing bundle sizes, optimizing images, and enhancing Core Web Vitals for blazing-fast speed and SEO.',
    iconName: 'Gauge',
    features: [
      'Lighthouse score optimization (90+)',
      'Asset compression & WebP imagery',
      'Elimination of layout shifts (CLS)',
      'Search engine friendly structured data',
    ],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Understanding Requirements',
    description:
      'Deep dive into project objectives, audience expectations, brand identity, and technical scope to ensure absolute clarity.',
    deliverables: ['Scope definition', 'Feature inventory', 'Target audience breakdown', 'Technical roadmap'],
  },
  {
    step: '02',
    title: 'Planning & Design',
    description:
      'Architecting layout wireframes, color schemes, typography hierarchies, and responsive navigation layouts for maximum impact.',
    deliverables: ['Visual moodboard', 'Component wireframing', 'Typography & color system', 'Responsive layouts'],
  },
  {
    step: '03',
    title: 'Development',
    description:
      'Writing clean, maintainable, modular code adhering to modern web standards, semantic guidelines, and interactive animation.',
    deliverables: ['Semantic HTML5 markup', 'Modern responsive CSS styling', 'Robust JavaScript logic', 'Interactive UI elements'],
  },
  {
    step: '04',
    title: 'Testing & Optimization',
    description:
      'Rigorous cross-browser verification, mobile responsiveness testing, performance audits, and accessibility validation.',
    deliverables: ['Cross-browser compatibility', 'Mobile screen testing', 'Lighthouse 90+ performance audit', 'SEO & meta verification'],
  },
  {
    step: '05',
    title: 'Final Delivery',
    description:
      'Deploying the production build to high-speed hosting (Vercel / Netlify), verifying live analytics, and handing over source code.',
    deliverables: ['Clean Git repository', 'Live production deployment', 'Documentation & handover', 'Post-launch verification'],
  },
];
