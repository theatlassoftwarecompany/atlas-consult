'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function EarlyAccessPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    setError(null);

    const form = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/early-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          company: form.get("company"),
          message: form.get("message"),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Something went wrong.");
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <Link href="/">
              <Image src="/logo.png" alt="The Atlas Company" width={200} height={60} priority />
            </Link>
            <Link href="/contact" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <div className="h-20 md:h-24" />

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-accent">Early Access</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Be First on the Platform
            </p>
            <p className="mt-4 text-lg text-gray-600">
              Tell us about your organisation and use case. We'll be in touch shortly.
            </p>
          </div>

          {submitted ? (
            <div className="rounded-2xl bg-green-50 p-8 text-center">
              <p className="text-lg font-semibold text-green-800">
                Thanks — we'll be in touch shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                <input
                  type="text"
                  name="company"
                  className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">What are you trying to solve?</label>
                <textarea
                  name="message"
                  rows={5}
                  className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              {error && <p className="text-sm text-red-600">{error}</p>}
              <button
                type="submit"
                disabled={pending}
                className="w-full rounded-md bg-primary px-6 py-3 text-base font-medium text-white hover:bg-primary-dark transition-colors disabled:opacity-60"
              >
                {pending ? "Sending…" : "Request Early Access"}
              </button>
            </form>
          )}
        </div>
      </section>

      <footer className="bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-400">&copy; 2026 The Atlas Company. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
