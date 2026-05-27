"use client";

import FooterSection from "@/components/ui/footer";
import React from "react";
import { useState } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(null);

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
      setError(result.error || "Something went wrong. Please try again.");
    }
  }

  return (
    <>
      <div className="min-h-screen w-full relative flex flex-col items-center justify-center p-6">
        {/* Radial Gradient Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(125% 125% at 50% 90%, #fff 40%, #475569 100%)",
          }}
        />

        {/* Contact Content */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-md mx-auto">
          <h1 className="text-3xl font-bold mb-2 text-gray-900 drop-shadow-sm">
            Contact Us
          </h1>
          <p className="text-gray-500 mb-6 text-sm text-center">
            Have a question or suggestion? We&apos;d love to hear from you.
          </p>

          <form
            onSubmit={handleSubmit}
            className="w-full bg-white shadow-xl rounded-xl p-8 space-y-5"
          >
            <div>
              <label
                htmlFor="contact-name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder="Jane Doe"
                required
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="jane@example.com"
                required
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell us what's on your mind..."
                required
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
                rows={5}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {success && (
            <div className="mt-5 w-full bg-green-50 border border-green-200 text-green-700 rounded-lg px-5 py-4 text-sm font-medium flex items-center gap-2">
              <span>✅</span>
              <span>Message sent successfully! We&apos;ll get back to you soon.</span>
            </div>
          )}

          {error && (
            <div className="mt-5 w-full bg-red-50 border border-red-200 text-red-700 rounded-lg px-5 py-4 text-sm font-medium flex items-center gap-2">
              <span>⚠️</span>
              <span>{error}</span>
            </div>
          )}
        </div>
      </div>
      <FooterSection />
    </>
  );
}
