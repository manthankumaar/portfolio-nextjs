import {
  careerContext,
  education,
  experience,
  profile,
  projects,
  services,
  techStack,
} from '@/lib/portfolio';

/** Curated profile document injected into the LLM system prompt (RAG-lite). */
export function buildKnowledgeDocument(): string {
  const socials = profile.socials
    .map((s) => `- ${s.name}: ${s.href}`)
    .join('\n');

  const experienceBlock = experience
    .map((job) => {
      const bullets = job.bullets.map((b) => `  - ${b}`).join('\n');
      const tech = job.tech.join(', ');
      const productLine = job.product
        ? `Product / team: ${job.product}\n`
        : '';
      return `### ${job.role} @ ${job.company} (${job.period})
${productLine}Location: ${job.location}
Highlight: ${job.highlight}
Summary: ${job.summary}
Tech: ${tech}
Impact:
${bullets}`;
    })
    .join('\n\n');

  const projectsBlock = projects
    .map(
      (p) =>
        `- **${p.title}** (${p.href}): ${p.description}`
    )
    .join('\n');

  const servicesBlock = services
    .map(
      (s) =>
        `### ${s.title}\n${s.features.map((f) => `- ${f}`).join('\n')}`
    )
    .join('\n\n');

  const techBlock = techStack
    .map((t) => `- ${t.name} (${t.percentage})`)
    .join('\n');

  return `# Profile: ${profile.name}

## Snapshot
- Title: ${profile.title}
- Experience: ${profile.yearsLabel} (since ${profile.sinceYear})
- Location: ${profile.location}
- Languages: ${profile.languages}
- Email: ${profile.email}
- Phone: ${profile.phone}
- Summary: ${profile.summary}
- Bio: ${profile.bio}

## Socials
${socials}

## Career motivations (for recruiters / interviewers)
- Currently exploring new roles: ${careerContext.lookingForSwitch ? 'yes' : 'no'}
- Actively looking: ${careerContext.activelyLooking ? 'yes' : 'no'}
- Why looking: ${careerContext.whyLooking}
- Open to (roles): ${careerContext.openTo}
- Notice period: ${careerContext.noticePeriod}
- Location preference: ${careerContext.locationPreference}
- Freelance / contract: ${careerContext.freelance}
- Tone guidance: Stay positive about past employers; frame the move as growth and new challenges, never as complaints.

## Compensation
- Current CTC: ${careerContext.currentCtc}
- Expected CTC: ${careerContext.expectedCtc}
- Guidance: ${careerContext.compensationNote}

## Interview stories
- About me pitch: ${careerContext.aboutPitch}
- Civil → frontend: ${careerContext.civilToFrontend}
- Biggest achievement: ${careerContext.biggestAchievement}
- Hardest technical problem: ${careerContext.hardestProblem}
- Why hire me: ${careerContext.whyHire}
- Strengths: ${careerContext.strengths}
- Weakness: ${careerContext.weakness}
- Collaboration style: ${careerContext.collaboration}
- Mentoring: ${careerContext.mentoring}
- Blog / talks: ${careerContext.blogTalks}
- Recruiter next step: ${careerContext.recruiterNextStep}

## Skills (portfolio / resume / public profiles)
- ${careerContext.skillsSummary}
- Also use the Tech stack and Experience sections below; do not invent tools not listed anywhere in Knowledge.
- LinkedIn: ${profile.socials.find((s) => s.name === 'LinkedIn')?.href}
- GitHub: ${profile.socials.find((s) => s.name === 'GitHub')?.href}

## Boundaries
- ${careerContext.neverDiscuss}

## Open source
- ${careerContext.openSource}
- GitHub: ${profile.socials.find((s) => s.name === 'GitHub')?.href ?? 'https://github.com/manthankumaar'}

## Experience
Note: From Sep 2023 – Dec 2025, Manthan was a Frontend Engineer at Outbox Ventures, working on ReachInbox & MailVerify (Nov 2024 – Dec 2025) and OpeninApp (Sep 2023 – Nov 2024). Since Dec 2025 he is SDE 2 at Origa.

${experienceBlock}

## Featured projects
${projectsBlock}

## What I do (services)
${servicesBlock}

## Tech stack
${techBlock}

## Education
- ${education.degree}, ${education.school}
- ${education.period}, ${education.location}
`;
}

export const WELCOME_MESSAGE = [
  `Hey — I'm Manthan's portfolio assistant. Ask me anything about his experience, projects, or skills.`,
  `I can walk you through Origa, Outbox Ventures (ReachInbox, OpeninApp), his stack (React / Next.js / TypeScript), or how to get in touch.`,
  `Try a starter below, or type your own question.`,
].join('\n\n');

export const SUGGESTED_PROMPTS = [
  "What's your experience?",
  'Tell me about Origa',
  "What's your tech stack?",
  'How can I contact you?',
] as const;
