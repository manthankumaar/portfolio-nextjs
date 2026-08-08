import type { Metadata, Viewport } from 'next';
import './globals.css';
import { IBM_Plex_Mono } from 'next/font/google';
import Header from './components/Header';
import TopNav from './components/TopNav';
import Aside from './components/Aside';
import Main from './components/Main';
import { LazyChatWidget } from './components/chat/LazyChatWidget';
import { metadataContent } from '@/lib/portfolio';

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-plex-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: metadataContent.title,
  description: metadataContent.description,
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='h-dvh overflow-hidden'>
      <body
        className={`${plexMono.variable} antialiased h-dvh overflow-hidden grid grid-cols-1 grid-rows-[30px_36px_auto_minmax(0,1fr)] lg:grid-cols-[280px_1fr] lg:grid-rows-[30px_minmax(0,1fr)]`}
      >
        <Header />
        <TopNav />
        <Aside />
        <Main>{children}</Main>
        <LazyChatWidget />
      </body>
    </html>
  );
}
