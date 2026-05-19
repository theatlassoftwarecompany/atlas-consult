'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

type FieldErrors = {
  firstName?: string;
  lastName?: string;
  email?: string;
  company?: string;
  companySize?: string;
};

const COMPANY_SIZES = [
  { value: "1-10", label: "1–10 employees" },
  { value: "11-50", label: "11–50 employees" },
  { value: "51-200", label: "51–200 employees" },
  { value: "201-500", label: "201–500 employees" },
  { value: "500+", label: "500+ employees" },
];

export default function EarlyAccessPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  function validate(fields: Record<string, string>): FieldErrors {
    const errors: FieldErrors = {};
    if (!fields.firstName?.trim()) errors.firstName = "First name is required";
    if (!fields.lastName?.trim()) errors.lastName = "Last name is required";
    if (!fields.email?.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
      errors.email = "Please enter a valid email address";
    }
    if (!fields.company?.trim()) errors.company = "Company is required";
    if (!fields.companySize) errors.companySize = "Please select a company size";
    return errors;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const form = new FormData(e.currentTarget);
    const fields = {
      firstName: form.get("firstName") as string,
      lastName: form.get("lastName") as string,
      email: form.get("email") as string,
      company: form.get("company") as string,
      companySize: form.get("companySize") as string,
      message: form.get("message") as string,
    };

    const errors = validate(fields);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }
    setFieldErrors({});
    setPending(true);

    try {
      const res = await fetch("/api/early-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
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

  const inputBase = "w-full rounded-md border px-4 py-3 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2";
  const inputClass = (field: keyof FieldErrors) =>
    `${inputBase} ${fieldErrors[field] ? "border-red-400 focus:ring-red-400" : "border-gray-300 focus:ring-primary"}`;

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
              Tell us about your organisation and use case. We&apos;ll be in touch shortly.
            </p>
          </div>

          {submitted ? (
            <div className="rounded-2xl bg-green-50 border border-green-200 p-10 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <p className="text-lg font-semibold text-green-800">Request received.</p>
              <p className="mt-2 text-sm text-green-700">
                Check your inbox — we&apos;ve sent a confirmation. We&apos;ll be in touch shortly with access to the platform.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* First / Last name */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    autoComplete="given-name"
                    className={inputClass("firstName")}
                  />
                  {fieldErrors.firstName && (
                    <p className="mt-1 text-xs text-red-600">{fieldErrors.firstName}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    autoComplete="family-name"
                    className={inputClass("lastName")}
                  />
                  {fieldErrors.lastName && (
                    <p className="mt-1 text-xs text-red-600">{fieldErrors.lastName}</p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Work Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  className={inputClass("email")}
                />
                {fieldErrors.email && (
                  <p className="mt-1 text-xs text-red-600">{fieldErrors.email}</p>
                )}
              </div>

              {/* Company / Company size */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    autoComplete="organization"
                    className={inputClass("company")}
                  />
                  {fieldErrors.company && (
                    <p className="mt-1 text-xs text-red-600">{fieldErrors.company}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Size <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="companySize"
                    defaultValue=""
                    className={inputClass("companySize")}
                  >
                    <option value="" disabled>Select size…</option>
                    {COMPANY_SIZES.map(({ value, label }) => (
                      <option key={value} value={value}>{label}</option>
                    ))}
                  </select>
                  {fieldErrors.companySize && (
                    <p className="mt-1 text-xs text-red-600">{fieldErrors.companySize}</p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What are you trying to solve?
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Describe your use case or challenge…"
                  className={`${inputBase} border-gray-300 focus:ring-primary`}
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
