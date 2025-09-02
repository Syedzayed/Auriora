import type { Metadata } from "next";
import Home from "@/components/Home"; // import client component

export const metadata: Metadata = {
  title: "Auriora - Plan Your Perfect Trip",
  description:
    "Auriora helps you plan trips, create bucket lists, and explore the world effortlessly. Travel smarter with our all-in-one trip planner.",
  keywords: [
    "travel planner",
    "trip organizer",
    "bucket list app",
    "vacation planning",
    "world travel",
    "trip ideas",
    "travel inspiration",
    "plan a trip",
    "travel globe",
    "explore destinations",
  ],
  openGraph: {
    title: "Auriora - Plan Your Perfect Trip",
    description:
      "Plan smarter, travel better. Create bucket lists, organize trips, and explore with Auriora.",
    url: "https://yourdomain.com",
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

export default function Page() {
  return <Home />;
}
