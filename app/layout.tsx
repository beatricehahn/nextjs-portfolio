import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localfont from "next/font/local";

import { Navbar } from "@/components/Navbar";
//import { FloatingNav} from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import { Footer } from "@/components/organisms/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const clash = localfont({
    src: [
      {
        path: "../public/fonts/clash-grotesk/ClashGrotesk-Regular.woff2",
        weight: "400",
        style: "normal"
      },
      {
        path: "../public/fonts/clash-grotesk/ClashGrotesk-Regular.woff",
        weight: "400",
        style: "normal"
      },
      {
        path: "../public/fonts/clash-grotesk/ClashGrotesk-Medium.woff2",
        weight: "500",
        style: "normal"
      },
      {
        path: "../public/fonts/clash-grotesk/ClashGrotesk-Medium.woff",
        weight: "500",
        style: "normal"
      },
      {
        path: "../public/fonts/clash-grotesk/ClashGrotesk-Semibold.woff2",
        weight: "600",
        style: "normal"
      },
      {
        path: "../public/fonts/clash-grotesk/ClashGrotesk-Semibold.woff",
        weight: "600",
        style: "normal"
      },
      {
        path: "../public/fonts/clash-grotesk/ClashGrotesk-Bold.woff2",
        weight: "700",
        style: "normal"
      },
      {
        path: "../public/fonts/clash-grotesk/ClashGrotesk-Bold.woff",
        weight: "700",
        style: "normal"
      },
    ],
    variable: "--font-clash"
})

export const metadata: Metadata = {
  title: "Beatrice Hahn",
  description: "Modern & Electric UX Design & Development Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ `${clash.variable} inter.className` }>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
