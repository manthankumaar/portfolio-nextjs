import { education, experience, metadataContent, profile } from '@/lib/portfolio';

export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) return fromEnv.replace(/\/$/, '');
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/\/$/, '')}`;
  }
  return metadataContent.defaultSiteUrl;
}

export function buildPersonJsonLd(siteUrl: string) {
  const sameAs = profile.socials.map((s) => s.href);

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    url: siteUrl,
    image: `${siteUrl}${profile.avatar}`,
    jobTitle: profile.title,
    description: profile.summary,
    email: profile.email,
    telephone: profile.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bengaluru',
      addressCountry: 'IN',
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: education.school,
    },
    knowsAbout: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Frontend Engineering',
      'Web Performance',
    ],
    worksFor: {
      '@type': 'Organization',
      name: experience[0]?.company,
    },
    sameAs,
  };
}

export function buildWebsiteJsonLd(siteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: metadataContent.siteName,
    url: siteUrl,
    description: metadataContent.description,
    author: {
      '@type': 'Person',
      name: profile.name,
    },
    inLanguage: 'en',
  };
}
