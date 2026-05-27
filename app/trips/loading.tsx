export default function TripsLoading() {
  return (
    <div className="min-h-screen w-full relative">
      {/* Same background as the trips page */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 90%, #fff 40%, #6366f1 100%)",
        }}
      />

      <div className="relative z-10 space-y-6 container mx-auto px-4 py-30 animate-pulse">
        {/* Header skeleton */}
        <div className="flex justify-between items-center">
          <div className="h-9 w-40 bg-gray-200 rounded-lg" />
          <div className="h-10 w-28 bg-gray-200 rounded-lg" />
        </div>

        {/* Welcome card skeleton */}
        <div className="bg-white rounded-xl shadow p-6 space-y-3">
          <div className="h-6 w-56 bg-gray-200 rounded" />
          <div className="h-4 w-80 bg-gray-100 rounded" />
        </div>

        {/* Section heading skeleton */}
        <div className="h-6 w-40 bg-gray-200 rounded" />

        {/* Trip cards skeleton */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow overflow-hidden h-64"
            >
              <div className="w-full h-40 bg-gray-200" />
              <div className="p-4 space-y-2">
                <div className="h-5 w-3/4 bg-gray-200 rounded" />
                <div className="h-4 w-full bg-gray-100 rounded" />
                <div className="h-3 w-1/2 bg-gray-100 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
