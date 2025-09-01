"use client";

import { useState } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const form = e.currentTarget; // ✅ explicitly typed as HTMLFormElement
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
      form.reset(); // ✅ safe now
    } else {
      alert("Something went wrong: " + result.error);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow-md rounded-xl p-6 space-y-4"
      >
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          required
          className="w-full border p-2 rounded-lg"
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          required
          className="w-full border p-2 rounded-lg"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="w-full border p-2 rounded-lg"
          rows={4}
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {success && (
        <p className="mt-4 text-green-600">✅ Message sent successfully!</p>
      )}
    </div>
  );
}
