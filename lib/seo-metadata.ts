import type { Metadata } from 'next';
import { metadataContent, profile } from '@/lib/portfolio';
import { getSiteUrl } from '@/lib/seo';

export function buildRootMetadata(): Metadata {
  const siteUrl = getSiteUrl();
  const title = metadataContent.title;
  const description = metadataContent.description;

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: title,
      template: metadataContent.titleTemplate,
    },
    description,
    keywords: [...metadataContent.keywords],
    authors: [{ name: profile.name, url: siteUrl }],
    creator: profile.name,
    publisher: profile.name,
    applicationName: metadataContent.siteName,
    category: 'technology',
    alternates: {
      canonical: '/',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: metadataContent.locale,
      url: siteUrl,
      siteName: metadataContent.siteName,
      title,
      description,
      images: [
        {
          url: '/opengraph-image',
          width: 1200,
          height: 630,
          alt: `${profile.name} — ${profile.title}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/opengraph-image'],
    },
    formatDetection: {
      email: true,
      telephone: true,
      address: false,
    },
  };
}
