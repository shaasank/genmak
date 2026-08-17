import type { Metadata } from 'next';
import { Inter, Space_Mono, Caudex } from 'next/font/google';
import './globals.css';
import { TrackProvider } from '../context/TrackContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SmoothScroll from '../components/SmoothScroll';
import ThemeWrapper from '../components/ThemeWrapper';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceMono = Space_Mono({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-space-mono' });
const caudex = Caudex({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-caudex' });

export const metadata: Metadata = {
  title: 'GenClosers | Zero clarity to confidently closing',
  description: 'Sales is a system, not a talent. Human conversation, not manipulation.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceMono.variable} ${caudex.variable}`} style={{ minHeight: '100vh', margin: 0, padding: 0 }}>
        <SmoothScroll>
          <TrackProvider>
            <ThemeWrapper>
              <Header />
              <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                {children}
              </main>
              <Footer />
            </ThemeWrapper>
          </TrackProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
