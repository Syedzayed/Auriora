"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

async function geocodeAddress(
  address: string
): Promise<{ lat: number; lng: number }> {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  if (!apiKey) throw new Error("Google Maps API key is not configured.");

  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address
    )}&key=${apiKey}`
  );

  const data = await response.json();

  if (!data.results || data.results.length === 0) {
    throw new Error(
      `Could not find location: "${address}". Please try a more specific address.`
    );
  }

  const { lat, lng } = data.results[0].geometry.location;
  return { lat, lng };
}

// Returns { error } on failure, redirects on success
export async function addLocation(
  tripId: string,
  _prevState: { error: string | null },
  formData: FormData
): Promise<{ error: string | null }> {
  const session = await auth();

  if (!session) {
    return { error: "You must be signed in to add a location." };
  }

  const userId = session.user?.id;
  if (!userId) {
    return {
      error: "Session error: user ID not found. Please sign out and sign in again.",
    };
  }

  const address = formData.get("address")?.toString();
  if (!address) {
    return { error: "Please enter an address." };
  }

  // Verify this trip belongs to the current user
  const trip = await prisma.trip.findFirst({
    where: { id: tripId, userId },
  });

  if (!trip) {
    return { error: "Trip not found or you do not have access to it." };
  }

  let lat: number, lng: number;
  try {
    ({ lat, lng } = await geocodeAddress(address));
  } catch (err: unknown) {
    return {
      error:
        err instanceof Error
          ? err.message
          : "Could not geocode address. Please try again.",
    };
  }

  const count = await prisma.location.count({ where: { tripId } });

  await prisma.location.create({
    data: {
      locationTitle: address,
      lat,
      lng,
      tripId,
      order: count,
    },
  });

  redirect(`/trips/${tripId}`);
}
