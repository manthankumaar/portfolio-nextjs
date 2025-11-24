import type { Metadata } from 'next';
import './globals.css';
import { IBM_Plex_Mono } from 'next/font/google';
import Header from './components/Header';
import TopNav from './components/TopNav';
import Aside from './components/Aside';
import Main from './components/Main';

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${plexMono.variable} antialiased `}
        style={{
          display: 'grid',
          gridTemplateColumns: '300px 1fr',
          gridTemplateRows: '30px 1fr',
          gridTemplateAreas: `
          "header header"
          "aside main"
        `,
        }}
      >
        <Header />
        <TopNav />
        <Aside />
        <Main>{children}</Main>
      </body>
    </html>
  );
}
