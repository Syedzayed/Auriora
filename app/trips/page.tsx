import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import FooterSection from "@/components/ui/footer";
import type { Metadata } from "next";
import Image from "next/image";

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
      <>
        <div
          className="min-h-screen w-full relative flex flex-col items-center justify-center text-center px-6"
          style={{
            background:
              "radial-gradient(125% 125% at 50% 90%, #fff 40%, #6366f1 100%)",
          }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Plan Your Next Adventure
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-md">
            Sign in to start planning trips, building itineraries, and tracking
            your journeys around the world.
          </p>
          <Link
            href="/login"
            className="px-8 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-md transition text-lg"
          >
            Sign In to Get Started
          </Link>
        </div>
        <FooterSection />
      </>
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
                  ? "Start planning your first trip by clicking the button above."
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
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Your Recent Trips</h2>
              {sortedTrips.length > 6 && (
                <Link
                  href="/trips/all"
                  className="text-sm text-indigo-600 hover:underline font-medium"
                >
                  View all trips →
                </Link>
              )}
            </div>
            {trips.length === 0 ? (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-8">
                  <h3 className="text-xl font-medium mb-2">No trips yet.</h3>
                  <p className="text-center mb-4 max-w-md">
                    Start planning your adventure by creating your first trip.
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
                    <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden">
                      {trip.imageUrl && (
                        <div className="relative w-full h-40 overflow-hidden">
                          <Image
                            src={trip.imageUrl}
                            alt={trip.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle className="line-clamp-1">
                          {trip.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-500 line-clamp-2 mb-2">
                          {trip.description}
                        </p>
                        <div className="text-xs text-gray-400 font-medium">
                          {new Date(trip.startDate).toLocaleDateString()} –{" "}
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
