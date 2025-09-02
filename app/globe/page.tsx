import type { Metadata } from "next";
import GlobePage from "@/components/GlobePage"; // your client component
import { auth } from "@/auth";

export const metadata: Metadata = {
  title: "My Globe - Auriora",
  description:
    "Visualize your journeys with Auriora’s interactive travel globe. Mark where you’ve been, explore destinations, and relive your travel memories in 3D.",
  keywords: [
    "travel globe",
    "world travel map",
    "interactive globe",
    "trip visualization",
    "travel memories",
    "places I've been",
    "explore destinations",
    "travel tracker",
    "3D globe map",
    "Auriora trips",
  ],
};

export default async function Page() {
  const session = await auth();

  if (!session) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-700 text-xl">
        Please Sign In .
      </div>
    );
  }
  return <GlobePage />;
}
