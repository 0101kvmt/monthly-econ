import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from './store/provider';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Budget",
  description: "Financial Management tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="winter">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>

        </body>
    </html>
  );
}
