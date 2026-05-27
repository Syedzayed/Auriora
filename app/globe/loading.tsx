export default function GlobeLoading() {
  return (
    <div className="min-h-screen w-full relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 90%, #fff 40%, #6366f1 100%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 py-30 animate-pulse">
        <div className="max-w-7xl mx-auto">
          {/* Title skeleton */}
          <div className="mx-auto mb-12 h-10 w-64 bg-gray-200 rounded-lg" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Globe skeleton */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 space-y-4">
                <div className="h-7 w-52 bg-gray-200 rounded" />
                <div className="h-[600px] w-full bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-indigo-400" />
                </div>
              </div>
            </div>

            {/* Sidebar skeleton */}
            <div className="lg:col-span-1 bg-white rounded-xl shadow p-6 space-y-4">
              <div className="h-6 w-40 bg-gray-200 rounded" />
              <div className="h-14 w-full bg-blue-50 rounded-lg" />
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-11 w-full bg-gray-100 rounded-lg" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
