"use client";

import { useTransition, useState } from "react";
import { Button } from "./ui/button";
import { addLocation } from "@/lib/actions/add-location";

export default function NewLocationClient({ tripId }: { tripId: string }) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md mx-auto">
        <div className="bg-white p-8 shadow-lg rounded-xl">
          <h1 className="text-3xl font-bold text-center mb-2">
            Add New Location
          </h1>
          <p className="text-center text-sm text-gray-500 mb-6">
            Enter a city, landmark, or full address
          </p>

          <form
            className="space-y-5"
            action={(formData: FormData) => {
              setError(null);
              startTransition(async () => {
                try {
                  await addLocation(formData, tripId);
                } catch (err: unknown) {
                  const message =
                    err instanceof Error
                      ? err.message
                      : "Something went wrong. Please try again.";
                  setError(message);
                }
              });
            }}
          >
            <div>
              <label
                htmlFor="location-address"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Address or Location
              </label>
              <input
                id="location-address"
                name="address"
                type="text"
                required
                placeholder="e.g. Eiffel Tower, Paris"
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition text-sm"
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm flex items-center gap-2">
                <span>⚠️</span>
                <span>{error}</span>
              </div>
            )}

            <Button
              type="submit"
              disabled={isPending}
              className="w-full"
            >
              {isPending ? "Adding location..." : "Add Location"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
