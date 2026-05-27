import type { Metadata } from "next";
import GlobePage from "@/components/GlobePage";
import { auth } from "@/auth";
import { login } from "@/lib/auth-actions";
import FooterSection from "@/components/ui/footer";

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
      <>
        <div
          className="min-h-screen w-full relative flex flex-col items-center justify-center text-center px-6"
          style={{
            background:
              "radial-gradient(125% 125% at 50% 90%, #fff 40%, #6366f1 100%)",
          }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            See Where You&apos;ve Been
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-md">
            Sign in to visualize your travel journey on an interactive 3D globe
            and track every country you&apos;ve explored.
          </p>
          <form action={login}>
            <button
              type="submit"
              className="px-8 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-md transition text-lg"
            >
              Sign In to View Your Globe
            </button>
          </form>
        </div>
        <FooterSection />
      </>
    );
  }
  return <GlobePage />;
}
