import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Protest_Riot } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const protest = Protest_Riot({
  variable: "--font-protest",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "@fux_berlin",
  description: "Social Media Influencer",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${protest.variable}`}>
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased
        `}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
