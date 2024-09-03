import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { ThemeProvider } from 'next-themes'
import "./globals.css";
import { ThemeToggle } from './components/ThemeToggle'
import { Analytics } from "@vercel/analytics/react"

const playfair = Playfair_Display({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "An Evening to Remember",
  description: "Countdown to our special date",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={`${playfair.className} ${inter.className}`}>
          {children}
        </body>
    </html>
  );
}