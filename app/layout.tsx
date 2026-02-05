import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DigiSenda AI | Ecosystem Hub",
  description: "Central validation and orchestration hub for professional services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main style={{ minHeight: "80vh", display: "flex", flexDirection: "column" }}>
          {children}
        </main>
        <Footer />
        <JsonLd />
        {/* Placeholder GA ID - user to update later */}
        {/* <GoogleAnalytics gaId="G-PLACEHOLDER" /> */}
      </body>
    </html>
  );
}
