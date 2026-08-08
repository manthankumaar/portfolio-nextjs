import { buildPersonJsonLd, buildWebsiteJsonLd, getSiteUrl } from '@/lib/seo';

export function JsonLd() {
  const siteUrl = getSiteUrl();
  const graph = [buildPersonJsonLd(siteUrl), buildWebsiteJsonLd(siteUrl)];

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
