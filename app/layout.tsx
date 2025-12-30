import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Newsreader } from "next/font/google";
import "./globals.css";
import { LenisScroller } from "@/components/smooth-scroll";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Devashish Shrivastava — Senior AI Product Manager",
  description: "0→1 AI Product Leader. $10M+ ARR influenced. Building intelligent systems at Level AI. From chemical reactors to neural networks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakarta.variable} ${newsreader.variable} font-sans antialiased text-charcoal bg-alabaster`}
      >
        <LenisScroller />
        {children}
      </body>
    </html>
  );
}
