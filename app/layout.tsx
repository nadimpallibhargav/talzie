import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from 'next/script';
import Footer from '@/components/organisms/footer/Footer';
import './globals.scss';

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
      <Script
        src='https://www.googletagmanager.com/gtag/js?id=G-W4R7H47J'
        strategy='afterInteractive'
      />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-W4R7H47J');
        `}
      </Script>
      <body className={myFont.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
