import type { Metadata } from "next";
// import { Syne } from "next/font/google";
import localFont from 'next/font/local';
import Navbar from '@/components/organisms/navbar/Navbar';
import Footer from '@/components/organisms/footer/Footer';
import './globals.scss';

// const syne = Syne({ subsets: ['latin'] });

const myFont = localFont({ src: '../public/fonts/gothic/centurygothic.ttf' });

export const metadata: Metadata = {
  title: 'Talzie',
  description: 'Website design and development company | Bangalore',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={myFont.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
