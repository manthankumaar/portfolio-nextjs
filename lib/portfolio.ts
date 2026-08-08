export const profile = {
  name: 'Manthan Kumar',
  title: 'Frontend Engineer',
  summary:
    'Frontend Engineer with nearly 3 years of experience building scalable web applications using React, Next.js, TypeScript, and JavaScript. Experienced in frontend architecture, performance optimization, reusable component systems, real-time web experiences, and production-grade API integrations.',
  heroHeadline: 'Frontend',
  heroHeadlineAccent: 'Engineer',
  heroTyping:
    'Building scalable web apps with React, Next.js, and TypeScript — focused on architecture, performance, and production-grade UX.',
  aboutHeadline: 'Building',
  aboutHeadlineAccent: 'Scalable Products',
  aboutParagraphs: [
    {
      before: "I'm a ",
      highlight: 'Frontend Engineer',
      after:
        ' with nearly 3 years of experience building scalable web applications using React, Next.js, TypeScript, and JavaScript. I focus on frontend architecture, performance optimization, reusable component systems, and production-grade API integrations.',
    },
    {
      before: 'Passionate about ',
      highlight: 'reliability and maintainability',
      after:
        ' — shipping real-time web experiences and clean architecture in fast-paced product environments.',
    },
  ],
  bio: 'Frontend Engineer building scalable React/Next.js apps with a focus on architecture, performance, and UX.',
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

/** Interview / recruiter FAQ — keep factual and positive; used by the chat knowledge doc. */
export const careerContext = {
  lookingForSwitch: true,
  activelyLooking: true,
  whyLooking:
    "I'm exploring new opportunities where I can keep growing as a frontend engineer — taking on broader technical challenges, deeper product ownership, and stronger learning around architecture, performance, and complex UI systems. I'm proud of the work I've shipped so far and want my next role to stretch me further while I contribute at a high level from day one.",
  openTo:
    'SDE or Frontend Engineer roles focused on React, Next.js, TypeScript, and scalable product UI — preferably with meaningful ownership and room to learn.',
  noticePeriod:
    'I can join within a week (short notice period).',
  locationPreference:
    'Based in Bangalore and prefer roles in Bangalore. Open to discussing hybrid arrangements if the team is Bangalore-based.',
  freelance:
    'Yes — open to freelance or contract frontend work. Best next step is email: maxmanthan111@gmail.com.',
  openSource:
    'For open-source and public code, point people to my GitHub: https://github.com/manthankumaar — repos and activity are there. Do not invent specific OSS org contributions or PR counts.',
  currentCtc: '15 LPA',
  expectedCtc: 'Around 22 LPA',
  compensationNote:
    'Current CTC is 15 LPA; expected CTC is around 22 LPA. Flexible based on role scope, team, and overall offer. Prefer closing exact numbers over email or a call when needed.',
  civilToFrontend:
    'I studied Civil Engineering (B.Tech, Dayananda Sagar College of Engineering, 2019–2023), then moved into software because I enjoyed building products end-to-end and seeing users interact with what I ship. I taught myself modern web development and focused on React, Next.js, and TypeScript — and I’ve spent nearly 3 years shipping production frontend at startups since 2023.',
  aboutPitch:
    "I'm a Frontend Engineer with nearly 3 years of experience building scalable web apps in React, Next.js, and TypeScript. I've worked across OpeninApp, ReachInbox/MailVerify (Outbox Ventures), and currently Origa as SDE 2 — shipping high-impact product UI, performance improvements, Generative AI features, multi-tenant architecture, and RBAC. I care about clean architecture, maintainable component systems, and measurable product outcomes. I'm based in Bangalore, can join within a week, and I'm looking for SDE or Frontend roles with stronger learning and ownership.",
  biggestAchievement:
    'At ReachInbox / MailVerify, I revamped mailbox purchasing and onboarding flows and shipped Generative AI productivity features, contributing to revenue growth from $5M to $10M ARR while supporting 10K+ active users and high-volume campaign workflows. ReachInbox was also recognized as AppSumo Deal of the Year 2024.',
  hardestProblem:
    'One of the harder problems was designing module-level RBAC for a multi-tenant Origa platform — permission-aware routing, UI rendering, and API authorization that stayed secure without slowing product teams. Another was large OpeninApp performance work: removing 4,000+ lines of redundant code, cutting bundle size, and centralizing B2B dashboard layout logic to improve dashboard performance by over 50%.',
  whyHire:
    'I ship production frontend with clear business impact (ARR, performance, creator revenue), I design systems that scale (RBAC, reusable components, multi-tenant UI), and I move fast in startup environments while keeping code maintainable.',
  strengths:
    'Strong React/Next.js/TypeScript fundamentals; product-minded frontend with measurable impact; performance and architecture focus (bundle size, render optimization, reusable systems); comfort owning features end-to-end including API integration and customer-facing fixes.',
  weakness:
    'I can get deep into UI polish and edge cases — I actively timebox and align early with product/design so shipping velocity stays high without sacrificing quality.',
  collaboration:
    'I work closely with product and design on UX flows, partner with backend on API contracts and auth, and stay responsive to customer feedback (e.g. Intercom issues) so engineering stays tied to real user problems.',
  mentoring:
    'No formal mentoring role yet. I collaborate with teammates through reusable components, shared frontend patterns, and helping resolve recurring product issues.',
  blogTalks:
    'No public blog or talks listed. Point people to LinkedIn (https://linkedin.com/in/manthan77) and GitHub (https://github.com/manthankumaar).',
  recruiterNextStep:
    'Best next step: email maxmanthan111@gmail.com or message on LinkedIn https://linkedin.com/in/manthan77. Resume: /manthan_resume.pdf on this site.',
  skillsSummary:
    'Skills to cite only from portfolio/resume knowledge: JavaScript (ES6+), TypeScript, Python, HTML5, CSS3; React.js, Next.js, Redux, React Query, Tailwind CSS, ShadCN UI, responsive design, accessibility; component architecture, state management, rendering optimization, cross-browser compatibility, web performance; Node.js, REST APIs, Playwright, Vitest, Git, GitHub Actions, Docker, AWS, Supabase, Nginx, MongoDB, MySQL; plus core CS fundamentals (DSA, OOP, DBMS, OS, networks, system design). For the latest public code, see GitHub; for career history, see LinkedIn.',
  neverDiscuss:
    'Do not discuss private home address, family/personal life, politics, or anything not listed in Knowledge. Do not invent employers, metrics, or skills.',
} as const;

export const experience = [
  {
    period: 'Dec 2025 – Present',
    role: 'SDE 2',
    company: 'Origa',
    product: undefined as string | undefined,
    location: 'Bangalore, Karnataka',
    highlight: 'Current · Multi-tenant platform',
    summary:
      'Architecting reusable frontend systems for AI agents, CRM, campaigns, and analytics — with module-level RBAC and an embeddable chat widget.',
    tech: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind',
      'Playwright',
      'Supabase',
      'n8n',
    ],
    bullets: [
      'Architected reusable frontend systems for a multi-tenant platform using Next.js, React, TypeScript, and Tailwind CSS, supporting dashboards for AI agents, CRM, campaigns, and analytics.',
      'Designed a module-level RBAC system with permission-aware routing, UI rendering, and API authorization, improving security and maintainability across product modules.',
      'Built an embeddable web chat widget with real-time messaging, polling fallback, lead capture, domain controls, and REST API integrations for enterprise websites.',
      'Developed a Python monitoring platform using Playwright, Supabase, and n8n to automate data collection, detect inventory changes, and trigger notification workflows.',
    ],
  },
  {
    period: 'Nov 2024 – Dec 2025',
    role: 'Frontend Engineer',
    company: 'Outbox Ventures',
    product: 'ReachInbox & MailVerify',
    location: 'Bangalore, Karnataka',
    highlight: '$5M → $10M ARR',
    summary:
      'Frontend for ReachInbox.ai and MailVerify.ai — high-volume SaaS UX, Generative AI features, and growth to 10K+ active users.',
    tech: ['React', 'Next.js', 'TypeScript', 'Generative AI', 'Intercom'],
    bullets: [
      'Engineered frontend experiences for ReachInbox.ai and MailVerify.ai, strengthening usability, scalability, and performance for high-volume SaaS workflows.',
      'Shipped Generative AI-enabled features including a spam keyword checker and auto email reply generator, accelerating campaign execution and improving user productivity.',
      'Revamped mailbox purchasing and onboarding flows, contributing to revenue growth from $5M to $10M ARR.',
      'Created reusable frontend components and resolved 2–4 daily customer-facing Intercom issues, improving product stability and reducing repetitive engineering effort.',
      'Contributed to platform growth across 10K+ active users, $40K MRR, 100K+ campaigns, and 500K+ emails sent.',
      'Implemented AI-assisted SaaS automation interfaces and productivity-focused UI experiences while balancing responsiveness, scalability, and maintainable frontend architecture.',
      'Helped ReachInbox earn recognition as the AppSumo Deal of the Year 2024.',
    ],
  },
  {
    period: 'Sep 2023 – Nov 2024',
    role: 'Frontend Engineer',
    company: 'Outbox Ventures',
    product: 'OpeninApp',
    location: 'Bangalore, Karnataka',
    highlight: '200%+ click growth',
    summary:
      'Creator media sharing and affiliate products — monetization flows, AI tools, and major performance refactors under Outbox Ventures.',
    tech: ['Next.js', 'React', 'TypeScript', 'Performance'],
    bullets: [
      'Launched a Next.js media sharing platform enabling creators to generate over $50K in revenue from 20K+ uploads, expanding creator monetization and audience reach.',
      'Implemented an AI-enabled affiliate link generation interface for YouTube creators, impacting creators with 1M+ subscribers and generating over $15K in revenue.',
      'Refactored legacy frontend components by removing 4,000+ lines of redundant code, reducing bundle size by 50KB and improving performance by 8%.',
      'Streamlined B2B dashboard architecture by centralizing layout logic, preventing unnecessary renders and API calls, and improving dashboard performance by over 50%.',
      'Enhanced platform workflows, UI responsiveness, and product usability, contributing to over 200% growth in average monthly clicks.',
      'Implemented responsive, cross-browser compatible interfaces to deliver consistent user experiences across devices and screen sizes.',
    ],
  },
] as const;

export const projects = [
  {
    title: 'Origa AI Platform',
    href: 'https://origa.io/',
    description:
      'Multi-tenant platform with dashboards for AI agents, CRM, campaigns, and analytics — reusable Next.js systems and module-level RBAC.',
    image: '/projects/origa-ai-platform.png',
  },
  {
    title: 'AI Chat Widget',
    href: 'https://origa.io/',
    description:
      'Embeddable web chat with real-time messaging, polling fallback, lead capture, domain controls, and REST APIs.',
    image: '/projects/ai-chat-widget.png',
  },
  {
    title: 'Inventory Monitor',
    href: 'https://origa.io/',
    description:
      'Python monitoring with Playwright, Supabase, and n8n for inventory detection and notification workflows.',
    image: '/projects/inventory-monitor.png',
  },
  {
    title: 'Web Builder',
    href: 'https://github.com/manthankumaar',
    description:
      'Drag-and-drop Next.js site builder — reusable editor components, 50% faster creation, 24% faster load in testing.',
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
    'Frontend Engineer with nearly 3 years of experience building scalable web applications using React, Next.js, TypeScript, and JavaScript.',
} as const;
