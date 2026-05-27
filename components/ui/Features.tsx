"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Map, Compass, Footprints } from "lucide-react";
import Image from "next/image";

const features = [
  {
    step: "Step 1",
    title: "Plan Your Trip",
    content:
      "Choose your dream destinations, craft your perfect itinerary, and get ready for the adventure ahead.",
    icon: <Map className="h-6 w-6 text-white" />,
    image:
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2070&auto=format&fit=crop",
  },
  {
    step: "Step 2",
    title: "Follow the Lights",
    content:
      "Discover hidden gems, new experiences, and breathtaking places as you travel.",
    icon: <Compass className="h-6 w-6 text-white" />,
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop",
  },
  {
    step: "Step 3",
    title: "Track Your Adventures",
    content:
      "Save memories, keep track of your journeys, and share your story with others.",
    icon: <Footprints className="h-6 w-6 text-white" />,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function FeatureSteps() {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (4000 / 100));
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length);
        setProgress(0);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [progress]);

  return (
    <div className="p-8 md:p-12 bg-black text-white">
      <div className="mx-auto w-full max-w-7xl">
        {/* Heading */}
        <div className="relative mx-auto mb-12 max-w-2xl sm:text-center">
          <div className="relative z-10">
            <h2 className="font-geist text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
              How It Works
            </h2>
            <p className="font-geist mt-3 text-gray-300">
              Auriora makes travel simple — plan, track, and discover your dream
              adventures with ease.
            </p>
          </div>
          <div
            className="absolute inset-0 mx-auto h-44 max-w-xs blur-[118px]"
            style={{
              background:
                "linear-gradient(152.92deg, rgba(255,255,255,0.15) 4.54%, rgba(255,255,255,0.1) 34.2%, rgba(255,255,255,0.05) 77.55%)",
            }}
          ></div>
        </div>

        {/* Divider */}
        <hr className="bg-gray-700 mx-auto mb-10 h-px w-1/2" />

        {/* Steps */}
        <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-10">
          <div className="order-2 space-y-8 md:order-1">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-6 md:gap-8"
                initial={{ opacity: 0.3, x: -20 }}
                animate={{
                  opacity: index === currentFeature ? 1 : 0.3,
                  x: 0,
                  scale: index === currentFeature ? 1.05 : 1,
                }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-full border-2 md:h-14 md:w-14",
                    index === currentFeature
                      ? "border-white bg-white/10 text-white scale-110 [box-shadow:0_0_15px_rgba(255,255,255,0.3)]"
                      : "border-gray-600 bg-gray-800 text-gray-400"
                  )}
                >
                  {feature.icon}
                </motion.div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold md:text-2xl">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base">
                    {feature.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Image */}
          <div
            className={cn(
              "border-white/20 relative order-1 h-[200px] overflow-hidden rounded-xl border [box-shadow:0_5px_30px_-15px_rgba(255,255,255,0.3)] md:order-2 md:h-[300px] lg:h-[400px]"
            )}
          >
            <AnimatePresence mode="wait">
              {features.map(
                (feature, index) =>
                  index === currentFeature && (
                    <motion.div
                      key={index}
                      className="absolute inset-0 overflow-hidden rounded-lg"
                      initial={{ y: 100, opacity: 0, rotateX: -20 }}
                      animate={{ y: 0, opacity: 1, rotateX: 0 }}
                      exit={{ y: -100, opacity: 0, rotateX: 20 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        className="h-full w-full transform object-cover transition-transform hover:scale-105"
                        width={1000}
                        height={500}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="from-black via-black/60 absolute right-0 bottom-0 left-0 h-2/3 bg-gradient-to-t to-transparent" />

                      <div className="bg-black/70 absolute bottom-4 left-4 rounded-lg p-2 backdrop-blur-sm">
                        <span className="text-white text-xs font-medium">
                          {feature.step}
                        </span>
                      </div>
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
