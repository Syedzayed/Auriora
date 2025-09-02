"use client";

import FooterSection from "@/components/ui/footer";
import React from "react";
import { useState } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const body = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const result = await res.json();
    setLoading(false);

    if (result.success) {
      setSuccess(true);
      form.reset();
    } else {
      alert("Something went wrong: " + result.error);
    }
  }

  return (
    <>
      <div className="min-h-screen w-full relative flex flex-col items-center justify-center p-6">
        {/* Radial Gradient Background from Bottom */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(125% 125% at 50% 90%, #fff 40%, #475569 100%)",
          }}
        />
        {/* Contact Content */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-md mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-gray-900 drop-shadow-sm">
            Contact Us
          </h1>

          <form
            onSubmit={handleSubmit}
            className="w-full bg-white shadow-xl rounded-xl p-8 space-y-6"
          >
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              required
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              rows={5}
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {success && (
            <p className="mt-6 text-lg text-green-600 font-medium animate-pulse">
              ✅ Message sent successfully!
            </p>
          )}
        </div>
      </div>
      <FooterSection />
    </>
  );
}
