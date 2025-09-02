import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import FooterSection from "@/components/ui/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trips - Auriora",
  description:
    "Plan your perfect trip with Auriora. Create itineraries, manage bucket lists, and explore destinations effortlessly with our smart trip planner.",
  keywords: [
    "Auriora",
    "Trips",
    "Trip Planner",
    "Travel Planner",
    "Plan a Trip",
    "Itinerary Builder",
    "Bucket List",
    "Explore Destinations",
  ],
  openGraph: {
    title: "Trips - Auriora",
    description:
      "Organize and plan your next adventure with Auriora’s trip planner. Build itineraries, track your bucket list, and travel smarter.",
    url: "https://yourdomain.com/trips",
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

export default async function TripsPage() {
  const session = await auth();

  const trips = await prisma.trip.findMany({
    where: { userId: session?.user?.id },
  });

  const sortedTrips = [...trips].sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  );

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcomingTrips = sortedTrips.filter(
    (trip) => new Date(trip.startDate) >= today
  );

  if (!session) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-700 text-xl">
        Please Sign In .
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen w-full relative">
        {/* Radial Gradient Background from Bottom */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(125% 125% at 50% 90%, #fff 40%, #6366f1 100%)",
          }}
        />

        {/* Page Content */}
        <div className="relative z-10 space-y-6 container mx-auto px-4 py-30">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <Link href="/trips/new">
              <Button>New Trip</Button>
            </Link>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Welcome Back , {session.user?.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                {trips.length === 0
                  ? "Start Planning your frist trip by clicking the button above."
                  : `You have ${trips.length} ${
                      trips.length === 1 ? "trip" : "trips"
                    } planned. ${
                      upcomingTrips.length > 0
                        ? `${upcomingTrips.length} upcoming.`
                        : ""
                    }`}
              </p>
            </CardContent>
          </Card>

          <div>
            <h2 className="text-xl font-semibold mb-4">Your Recent Trips</h2>
            {trips.length === 0 ? (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-8">
                  <h3 className="text-xl font-medium mb-2">No Trips yet.</h3>
                  <p className="text-center mb-4 max-w-md">
                    Start Planning Your Adventure by Creating Your First Trip.
                  </p>
                  <Link href="/trips/new">
                    <Button>Create Trip</Button>
                  </Link>
                </CardContent>
              </Card>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {sortedTrips.slice(0, 6).map((trip, key) => (
                  <Link key={key} href={`/trips/${trip.id}`}>
                    <Card className="h-full hover:shadow-md transition-shadow">
                      <CardHeader>
                        <CardTitle className="line-clamp-1">
                          {trip.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm line-clamp-2">
                          {trip.description}
                        </p>
                        <div className="text-sm">
                          {new Date(trip.startDate).toLocaleDateString()} -{" "}
                          {new Date(trip.endDate).toLocaleDateString()}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="">
        <FooterSection />
      </div>
    </>
  );
}
