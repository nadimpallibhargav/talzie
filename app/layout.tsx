import type { Metadata } from "next";
import localFont from "next/font/local";
import { GoogleTagManager } from '@next/third-parties/google';
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
      <GoogleTagManager gtmId='GTM-W4R7H47J' />
      <body className={myFont.className}>
        <noscript>
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-W4R7H47J'
            height='0'
            width='0'
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        {children}
        <Footer />
      </body>
    </html>
  );
}
