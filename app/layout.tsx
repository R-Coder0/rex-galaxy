import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RexGalaxyMobileNavbar from "@/components/MobileNavbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RexGalaxy Technologies – Top IT Solutions & Software Development Services",
  description: "RexGalaxy Technologies offers cutting-edge IT solutions, custom software development, and digital transformation services. Boost your business with our expert tech solutions today!",
  icons: {
    icon: "/favicon.ico", // या "/favicon.png" अगर PNG में है
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <RexGalaxyMobileNavbar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
