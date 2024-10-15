import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GlobalHeader from './components/GlobalHeader'; 
import GlobalFooter from './components/GlobalFooter';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fulfilling people needs",
  description: "Create, Discover, Get what you need",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="wrapper">
          <GlobalHeader />
          <main className="content">
            {children}
          </main>
          <GlobalFooter />
        </div>
      </body>
    </html>
  );
}
