import type { ReactNode } from 'react';

type Segment =
  | { type: 'text'; value: string }
  | { type: 'link'; href: string; label: string };

const MARKDOWN_LINK_RE = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
const AUTO_LINK_RE =
  /(https?:\/\/[^\s<]+[^\s<.,;:!?"')\]])|([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})|(\+?\d[\d\s()-]{8,}\d)/g;

function trimTrailingPunctuation(url: string): { href: string; trailing: string } {
  const match = url.match(/[),.;!?]+$/);
  if (!match) return { href: url, trailing: '' };
  return {
    href: url.slice(0, -match[0].length),
    trailing: match[0],
  };
}

function normalizePhoneHref(phone: string): string {
  const digits = phone.replace(/[^\d+]/g, '');
  return `tel:${digits}`;
}

function linkifyPlain(text: string): Segment[] {
  const segments: Segment[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(AUTO_LINK_RE)) {
    const index = match.index ?? 0;
    if (index > lastIndex) {
      segments.push({ type: 'text', value: text.slice(lastIndex, index) });
    }

    const [full, url, email, phone] = match;

    if (url) {
      const { href, trailing } = trimTrailingPunctuation(url);
      segments.push({ type: 'link', href, label: href });
      if (trailing) segments.push({ type: 'text', value: trailing });
    } else if (email) {
      segments.push({ type: 'link', href: `mailto:${email}`, label: email });
    } else if (phone) {
      segments.push({
        type: 'link',
        href: normalizePhoneHref(phone),
        label: phone,
      });
    } else {
      segments.push({ type: 'text', value: full });
    }

    lastIndex = index + full.length;
  }

  if (lastIndex < text.length) {
    segments.push({ type: 'text', value: text.slice(lastIndex) });
  }

  return segments.length > 0 ? segments : [{ type: 'text', value: text }];
}

/** Split markdown links first, then autolink remaining plain text. */
export function linkifyText(text: string): Segment[] {
  const segments: Segment[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(MARKDOWN_LINK_RE)) {
    const index = match.index ?? 0;
    if (index > lastIndex) {
      segments.push(...linkifyPlain(text.slice(lastIndex, index)));
    }
    segments.push({ type: 'link', href: match[2], label: match[1] });
    lastIndex = index + match[0].length;
  }

  if (lastIndex < text.length) {
    segments.push(...linkifyPlain(text.slice(lastIndex)));
  }

  return segments.length > 0 ? segments : [{ type: 'text', value: text }];
}

type LinkifiedTextProps = {
  text: string;
  linkClassName: string;
};

export function LinkifiedText({ text, linkClassName }: LinkifiedTextProps) {
  const nodes: ReactNode[] = linkifyText(text).map((segment, index) => {
    if (segment.type === 'text') {
      return <span key={index}>{segment.value}</span>;
    }

    const external = segment.href.startsWith('http');
    return (
      <a
        key={index}
        href={segment.href}
        className={linkClassName}
        {...(external
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {})}
      >
        {segment.label}
      </a>
    );
  });

  return <>{nodes}</>;
}
