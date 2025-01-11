import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Header from '@/components/organisms/Header';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Faishal Dev: Crafting code like threads of art',
  description:
    'Where innovation meets artistry, weaving digital dreams into reality through clean code and creative solutions',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#101012]`}
      >
        <Header />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
