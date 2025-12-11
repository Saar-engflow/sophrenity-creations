import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sophrenity Creations | Creative Services & Digital Products",
  description: "Elevate your brand with professional creative services and digital products. Specializing in branding, design, and digital solutions.",
  icons: {
    icon: "/images/logo-vector.png",
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
        <div style={{ paddingTop: '80px', minHeight: 'calc(100vh - 80px)' }}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}