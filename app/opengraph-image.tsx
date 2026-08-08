import { ImageResponse } from 'next/og';
import { profile } from '@/lib/portfolio';

export const alt = `${profile.name} — ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#1f1f1f',
          color: '#ffffff',
          padding: '64px 72px',
          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 28,
            color: '#9d9d9d',
            letterSpacing: '0.04em',
          }}
        >
          manthan.info
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div
            style={{
              display: 'flex',
              fontSize: 72,
              fontWeight: 700,
              lineHeight: 1.05,
              color: '#ffffff',
            }}
          >
            {profile.name}
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 36,
              color: 'rgb(247, 244, 190)',
            }}
          >
            {profile.title}
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 24,
              color: '#b1b1b1',
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            React · Next.js · TypeScript · Bangalore
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid #2b2b2b',
            paddingTop: 28,
            fontSize: 22,
            color: '#9d9d9d',
          }}
        >
          <span>Portfolio</span>
          <span style={{ color: 'rgb(247, 244, 190)' }}>Available for SDE / Frontend roles</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
