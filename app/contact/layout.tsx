import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Auriora",
  description:
    "Get in touch with Auriora. Share your feedback, report an issue, or suggest a feature. We love hearing from our travel community.",
  keywords: [
    "Contact Auriora",
    "Auriora support",
    "travel planner feedback",
    "report issue",
    "suggest feature",
  ],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
