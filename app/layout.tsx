import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { auth } from "@/auth";
import AppNavbar from "@/components/AppNavbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Auriora - Plan Your Perfect Trip",
  description:
    "Auriora helps you plan trips, manage bucket lists, and explore the world effortlessly. Travel smarter with our all-in-one planner.",
  openGraph: {
    title: "Auriora - Plan Your Perfect Trip",
    description:
      "Plan smarter, travel better. Create bucket lists, organize trips, and explore with Auriora.",
    url: "https://yourdomain.com", // replace with your real domain
    siteName: "Auriora",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Auriora Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppNavbar session={session} />
        {children}
      </body>
    </html>
  );
}
