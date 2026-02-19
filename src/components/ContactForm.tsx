"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      role: (form.elements.namedItem("role") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error || "Something went wrong");
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-green-100 bg-green-50/50 p-10 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mb-2 text-lg font-semibold text-gray-900">
          Thanks for reaching out
        </h3>
        <p className="text-sm leading-relaxed text-gray-500">
          We&apos;ll be in touch soon.
        </p>
      </div>
    );
  }

  const inputClasses =
    "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div className="rounded-xl border border-red-100 bg-red-50/50 px-4 py-3 text-sm text-red-600">
          {error}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-gray-500"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Your full name"
            className={inputClasses}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-gray-500"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="you@fund.com"
            className={inputClasses}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="company"
            className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-gray-500"
          >
            Fund / Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Your organisation"
            className={inputClasses}
          />
        </div>

        <div>
          <label
            htmlFor="role"
            className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-gray-500"
          >
            Your role
          </label>
          <input
            type="text"
            id="role"
            name="role"
            placeholder="e.g. Partner, VP"
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-gray-500"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your fund and what you're looking for..."
          className={inputClasses + " resize-none"}
        />
      </div>

      <button
        type="submit"
        disabled={sending}
        className="btn-primary w-full rounded-full px-8 py-3.5 text-sm font-semibold text-white transition-all disabled:opacity-50"
      >
        {sending ? "Sending..." : "Send Request"}
      </button>
    </form>
  );
}
