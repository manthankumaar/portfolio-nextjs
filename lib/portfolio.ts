export const profile = {
  name: 'Manthan Kumar',
  title: 'Frontend Engineer',
  summary:
    'Frontend Engineer with nearly 3 years of experience building scalable AI SaaS products using React, Next.js, TypeScript and modern frontend architecture.',
  heroHeadline: 'Frontend',
  heroHeadlineAccent: 'Engineer',
  heroTyping:
    'Building high-performance interfaces, reusable component systems, and AI-powered workflows for production-grade SaaS products.',
  aboutHeadline: 'Building',
  aboutHeadlineAccent: 'Scalable Products',
  aboutParagraphs: [
    {
      before: "I'm a ",
      highlight: 'Frontend Engineer',
      after:
        ' with nearly 3 years of experience building scalable AI SaaS products using React, Next.js, TypeScript, and modern frontend architecture. I focus on high-performance interfaces, reusable component systems, and production-grade web applications.',
    },
    {
      before: 'Passionate about ',
      highlight: 'developer-focused products',
      after:
        ' with a strong emphasis on performance, usability, and clean architecture — shipping AI-enabled workflows in fast-paced startup environments.',
    },
  ],
  bio: 'Frontend Engineer building scalable AI SaaS products with React, Next.js, and TypeScript.',
  location: 'Bengaluru, India',
  locationHref: 'https://maps.app.goo.gl/XfTksSAPMndpuyDm8',
  email: 'maxmanthan111@gmail.com',
  phone: '+91 620 292 9010',
  phoneHref: 'tel:+916202929010',
  yearsLabel: 'Nearly 3 years of experience',
  languages: 'English, Hindi',
  sinceYear: '2023',
  avatar: '/profile.png',
  avatarFallback: 'MK',
  cvPath: '/manthan_resume.pdf',
  socials: [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/manthan77',
    },
    {
      name: 'GitHub',
      href: 'https://github.com/manthankumaar',
    },
  ],
} as const;

export const experience = [
  {
    period: 'Dec 2025 – Present',
    role: 'SDE 2',
    company: 'Origa',
    location: 'Bangalore, Karnataka',
    highlight: 'Current · AI SaaS',
    summary:
      'Building the frontend for a multi-tenant AI concierge platform — component systems, RBAC, and embeddable AI surfaces.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Playwright', 'Supabase', 'n8n'],
    bullets: [
      'Architected scalable frontend applications for a multi-tenant AI platform using Next.js, React, TypeScript, and Tailwind CSS.',
      'Designed reusable component libraries and implemented RBAC, improving maintainability and development velocity.',
      'Built an embeddable AI chat widget with real-time messaging, lead capture, and REST API integrations.',
      'Developed a Python monitoring platform using Playwright, Supabase, and n8n to track inventory changes and trigger automated alerts.',
    ],
  },
  {
    period: 'Nov 2024 – Dec 2025',
    role: 'Frontend Engineer',
    company: 'ReachInbox',
    location: 'Bangalore, Karnataka',
    highlight: '$5M → $10M ARR',
    summary:
      'Shipped AI-powered SaaS UX for cold outreach and email verification products used by 10K+ active users.',
    tech: ['React', 'Next.js', 'TypeScript', 'Generative AI', 'Intercom'],
    bullets: [
      'Engineered frontend experiences for reachinbox.ai and mailverify.ai, strengthening usability, scalability, and performance for high-volume SaaS workflows.',
      'Shipped Generative AI-enabled features including a spam keyword checker and auto email reply generator, accelerating campaign execution.',
      'Revamped mailbox purchasing and onboarding flows, contributing to revenue growth from $5M to $10M ARR.',
      'Created reusable frontend components and resolved 2–4 daily customer-facing Intercom issues, improving product stability.',
      'Contributed to platform growth across 10K+ active users, $40K MRR, 100K+ campaigns, and 500K+ emails sent.',
      'Implemented AI-assisted SaaS automation interfaces while balancing responsiveness, scalability, and maintainable architecture.',
      'Helped ReachInbox earn recognition as the AppSumo Deal of the Year 2024.',
    ],
  },
  {
    period: 'Sep 2023 – Nov 2024',
    role: 'Frontend Engineer',
    company: 'OpeninApp',
    location: 'Bangalore, Karnataka',
    highlight: '200%+ click growth',
    summary:
      'Owned creator-facing Next.js products — monetization flows, affiliate AI tools, and major performance refactors.',
    tech: ['Next.js', 'React', 'TypeScript', 'Performance'],
    bullets: [
      'Launched a Next.js media sharing platform enabling creators to generate over $50K in revenue from 20K+ uploads.',
      'Implemented an AI-enabled affiliate link generation interface for YouTube creators with 1M+ subscribers, generating over $15K in revenue.',
      'Refactored legacy frontend by removing 4,000+ lines of redundant code, cutting bundle size by 50KB and improving performance by 8%.',
      'Streamlined B2B dashboard architecture by centralizing layout logic, preventing unnecessary renders and improving dashboard performance by over 50%.',
      'Enhanced platform workflows and UI responsiveness, contributing to over 200% growth in average monthly clicks.',
      'Implemented responsive, cross-browser compatible interfaces for consistent experiences across devices.',
    ],
  },
] as const;

export const projects = [
  {
    title: 'Origa AI Platform',
    href: 'https://origa.io/',
    description:
      'Multi-tenant AI concierge platform for high-ticket sales with scalable Next.js architecture and RBAC.',
    image: '/projects/origa-ai-platform.png',
  },
  {
    title: 'AI Chat Widget',
    href: 'https://origa.io/',
    description:
      'Embeddable AI chat widget with real-time messaging, lead capture, and REST API integrations.',
    image: '/projects/ai-chat-widget.png',
  },
  {
    title: 'Inventory Monitor',
    href: 'https://origa.io/',
    description:
      'Automation platform using Playwright, Supabase, and n8n to track inventory and trigger alerts.',
    image: '/projects/inventory-monitor.png',
  },
  {
    title: 'Web Builder',
    href: 'https://github.com/manthankumaar',
    description:
      'Drag-and-drop web builder in Next.js for non-technical users to create and edit websites.',
    image: '/projects/web-builder.png',
  },
  {
    title: 'ReachInbox',
    href: 'https://reachinbox.ai',
    description:
      'AI-powered cold outreach SaaS — campaigns, mailbox flows, and generative email tooling.',
    image: '/projects/reachinbox.png',
  },
  {
    title: 'MailVerify',
    href: 'https://mailverify.ai',
    description:
      'High-volume email verification product UI focused on usability, scale, and performance.',
    image: '/projects/mailverify.png',
  },
  {
    title: 'OpeninApp',
    href: 'https://openinapp.com',
    description:
      'Creator media sharing and affiliate platform with monetization and B2B dashboards.',
    image: '/projects/openinapp.png',
  },
] as const;

export const services = [
  {
    number: '1.',
    title: 'Frontend Engineering',
    features: [
      'React.js / Next.js / TypeScript applications',
      'Reusable component libraries & design systems',
      'Responsive, accessible, cross-browser UI',
      'State management with Redux & React Query',
      'Tailwind CSS & ShadCN UI',
      'REST API integration & production deployments',
    ],
  },
  {
    number: '2.',
    title: 'AI Product Interfaces',
    features: [
      'Generative AI-enabled SaaS workflows',
      'Agentic AI chat widgets & real-time messaging',
      'LLM-based productivity features',
      'User-centric automation interfaces',
      'Lead capture & embeddable product surfaces',
      'AI-assisted campaign and email tooling',
    ],
  },
  {
    number: '3.',
    title: 'Performance & Architecture',
    features: [
      'Bundle size reduction & render optimization',
      'Multi-tenant frontend architecture',
      'RBAC and scalable layout systems',
      'Legacy refactoring & maintainability',
      'Dashboard performance tuning',
      'Clean, production-grade frontend patterns',
    ],
  },
] as const;

export const techStack = [
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    percentage: '95%',
  },
  {
    name: 'Next.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    percentage: '92%',
  },
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    percentage: '90%',
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    percentage: '93%',
  },
  {
    name: 'Tailwind CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    percentage: '90%',
  },
  {
    name: 'Redux',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
    percentage: '85%',
  },
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    percentage: '80%',
  },
  {
    name: 'GitHub',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    percentage: '90%',
  },
  {
    name: 'Docker',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    percentage: '75%',
  },
  {
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    percentage: '70%',
  },
  {
    name: 'MySQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    percentage: '70%',
  },
  {
    name: 'AWS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
    percentage: '68%',
  },
] as const;

export const education = {
  school: 'Dayananda Sagar College of Engineering, Bengaluru',
  degree: 'B.Tech in Civil Engineering',
  period: 'Aug 2019 – Jun 2023',
  location: 'Bengaluru, Karnataka',
} as const;

export const metadataContent = {
  title: 'Manthan Kumar — Frontend Engineer',
  description:
    'Frontend Engineer with nearly 3 years of experience building scalable AI SaaS products using React, Next.js, TypeScript, and modern frontend architecture.',
} as const;
