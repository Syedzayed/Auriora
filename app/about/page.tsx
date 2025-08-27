import React from "react";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col py-20">
      {/* Hero Section */}
      <section className="pt-28 pb-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            From dreaming of travel to building tools for adventurers — our
            journey has always been about making exploration accessible for
            everyone.
          </p>
        </div>
      </section>

      {/* Main Content Section (text-only update) */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-left space-y-8">
        <p className="text-lg text-gray-700 leading-relaxed">
          Like many of you, I've always had a love for travel, but the high
          costs often felt like a roadblock. For years, my adventures were
          limited to short, budget-friendly trips, all while I dreamed of a life
          of boundless exploration. I kept that dream alive, believing that one
          day I'd find a way to make it a reality.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed">
          Then, I discovered the world of RVs and motorhomes. Seeing people live
          a life of complete freedom—waking up to new landscapes every day,
          cooking meals with a different view out the window, and making the
          open road their home—was a revelation. It was the ultimate expression
          of travel, and it instantly became my biggest bucket list goal. The
          idea of living and traveling in an RV wasn't just about the journey;
          it was about the freedom to choose your path every single day.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed">
          That dream is what inspired{" "}
          <span className="font-semibold">Auriora</span>. I realized that if I
          was so passionate about making this kind of travel happen, others must
          be too. I wanted to create a tool to help fellow travelers like me
          plan their adventures, no matter the size or budget. This website, in
          its current form, is a simple, functional version of that vision—a
          starting point. It's the tip of the iceberg, as they say.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed">
          I'm pouring my heart into building the next phase. Soon, we'll
          introduce a smart{" "}
          <span className="font-semibold">AI travel assistant</span> that can
          help you with everything from finding the best routes to discovering
          hidden gems. We'll also launch a dedicated{" "}
          <span className="font-semibold">bucket list tracker</span> to help you
          visualize and achieve your biggest travel dreams, and a community
          feature so you can connect with other adventurers.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed">
          <span className="font-semibold">Auriora</span> is more than just a
          planner; it's a testament to the idea that you don't need a massive
          budget to see the world. You just need a plan and the courage to take
          the first step. My mission is to make travel accessible and exciting
          for everyone. So, let’s make that bucket list happen, together.
        </p>

        {/* Call to Action */}
        <div className="my-20 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Join Us on This Journey
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Auriora isn’t just a planner; it’s proof that you don’t need a huge
            budget to see the world. You only need a plan — and the courage to
            take the first step.
          </p>
          <Link href="/trips">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-200 shadow-md">
              Start Your Adventure Today
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
