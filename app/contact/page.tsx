'use client';

import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', phone: '', message: '' });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Simple Header */}
      <header className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6">
          <Link href="/" className="text-2xl font-bold text-primary-dark hover:text-primary transition-colors">
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Contact Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-2">
              {/* Left Column - Info */}
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  Let's Work Together
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Ready to transform your business with AI? Get in touch to discuss your project, explore our services, or schedule a consultation.
                </p>

                <div className="mt-10 space-y-8">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">Email</h3>
                    <p className="mt-2 text-base text-gray-600">
                      <a href="mailto:hello@atlasconsult.ai" className="hover:text-primary transition-colors">
                        info@theatlascompany.co.uk
                      </a>
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">What to Expect</h3>
                    <ul className="mt-4 space-y-3 text-base text-gray-600">
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-accent mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Response within 24 hours
                      </li>
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-accent mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Initial consultation call
                      </li>
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-accent mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Customized proposal
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="bg-gray-50 p-8 rounded-2xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-2 block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-primary focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-2 block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-primary focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-900">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="mt-2 block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-primary focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-900">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-2 block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-primary focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-900">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-2 block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-primary focus:ring-primary"
                    />
                  </div>

                  {submitStatus === 'success' && (
                    <div className="rounded-md bg-green-50 p-4">
                      <p className="text-sm text-green-800">
                        Thank you! We'll be in touch soon.
                      </p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="rounded-md bg-red-50 p-4">
                      <p className="text-sm text-red-800">
                        Something went wrong. Please try again or email us directly.
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-md bg-primary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
