"use client";

import { motion } from "motion/react";
import { Highlight } from "@/components/ui/hero-highlight";

import ShinyText from "@/components/ui/ShinyText";

import { WobbleCard } from "@/components/ui/wobble-card";

import Link from "next/link";
import Image from "next/image";

import HoverExpand from "@/components/ui/hover-expand";
import Footer from "@/components/ui/footer";

export default function Home() {
  const images = [
    "/luca-bravo-O453M2Liufs-unsplash.jpg",
    "/mesut-kaya-eOcyhe5-9sQ-unsplash.jpg",
    "/neom-STV2s3FYw7Y-unsplash.jpg",
    "/neom-igw-14UnNjg-unsplash.jpg",
    "/neom-ARpmY5qq7Lk-unsplash.jpg",
    "/neom-WZCMd9K-sHY-unsplash.jpg",
    "/mantas-hesthaven-_g1WdcKcV3w-unsplash.jpg",
  ];

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/aurora-hero-bg.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-3xl text-white">
          <ShinyText
            text="Chase the Aurora"
            disabled={false}
            speed={5}
            className="text-sm md:text-base text-gray-300 tracking-wide uppercase mb-4"
          />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [20, -5, 0] }}
            transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-center mx-auto"
          >
            Explore the World <br />
            <Highlight>In a New Light</Highlight>
          </motion.h1>

          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Discover breathtaking journeys, plan your adventures, and follow the
            lights to places you’ve only dreamed of.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/trips"
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-md transition"
            >
              Follow the Lights
            </Link>
          </div>
        </div>
      </section>

      <section className="relative min-h-screen flex items-center justify-center text-white px-6 overflow-hidden bg-black">
        {/* Aurora Glow Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120, 180, 255, 0.25), transparent 70%), #000000",
          }}
        />

        {/* Content */}
        <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center max-w-6xl">
          {/* Left: Image */}
          <div className="flex justify-center">
            <Image
              src="/Travelerwithbackpack.jpg"
              alt="Aurora travel"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg max-h-[400px] object-cover"
            />
          </div>

          {/* Right: Text */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Discover Journeys Beyond the Ordinary
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-6">
              At <span className="text-indigo-400 font-semibold">Auriora</span>,
              we believe travel is more than reaching destinations—it’s about
              the experiences that shape us. From chasing the aurora across
              arctic skies to finding hidden gems off the beaten path, our
              platform helps you explore the world in a new light. With
              immersive visuals and seamless tools, we make it easier than ever
              to dream, plan, and live your next adventure.
            </p>
            <a
              href="/about"
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-md transition"
            >
              Read More About Us
            </a>
          </div>
        </div>
      </section>

      <section className="min-h-screen w-full relative bg-black flex items-center justify-center px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
          {/* Step 1 */}
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
            className=""
          >
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                1️⃣ Plan Your Trip
              </h2>
              <p className="mt-4 text-left text-base/6 text-neutral-200">
                Choose your dream destinations, craft your perfect itinerary,
                and get ready for the adventure ahead.
              </p>
            </div>
            <Image
              src="/Atravelerlookingatamap.jpg"
              width={550}
              height={500}
              alt="Plan trip"
              className="absolute -right-4 lg:-right-[30%] -bottom-10 object-contain rounded-2xl shadow-lg"
            />
          </WobbleCard>

          {/* Step 2 */}
          <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-green-700">
            <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              2️⃣ Follow the Lights
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
              Discover hidden gems, new experiences, and breathtaking places as
              you travel.
            </p>
          </WobbleCard>

          {/* Step 3 */}
          <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
            <div className="max-w-sm">
              <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                3️⃣ Track Your Adventures
              </h2>
              <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                Save memories, keep track of your journeys, and share your story
                with others.
              </p>
            </div>
            <Image
              src="/footprintsonsand.jpg"
              width={450}
              height={500}
              alt="Track adventures"
              className="absolute -right-10 md:-right-[40%] lg:-right-[10%] -bottom-15 object-contain rounded-2xl shadow-lg"
            />
          </WobbleCard>
        </div>
      </section>
      <section className="min-h-screen w-full bg-black flex flex-col items-center justify-center text-center px-4 py-12">
        {/* Heading */}
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Explore the World, One Moment at a Time
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            Explore destinations, craft your itinerary, and bring your dream
            trip to life.
          </p>
        </div>

        {/* Hover Expand Gallery */}
        <HoverExpand
          images={images}
          initialSelectedIndex={0}
          thumbnailHeight={400}
          modalImageSize={800}
          maxThumbnails={11}
        />
      </section>
      <Footer />
    </main>
  );
}
