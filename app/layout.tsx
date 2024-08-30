import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.scss";

const syne = Syne({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Talzie",
  description: "Website design and development company | Bangalore",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={syne.className}>{children}</body>
    </html>
  );
}
