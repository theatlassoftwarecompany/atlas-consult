'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="Atlas Consult Logo"
                  width={300}
                  height={200}
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:gap-8">
              <Link href="#services" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="#approach" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                Approach
              </Link>
{/* Hidden for now
              <Link href="#insights" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                Insights
              </Link>
*/}
              <Link href="/contact" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                Contact
              </Link>
              <Link
                href="/contact"
                className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-primary"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="space-y-1 px-6 py-4">
              <Link
                href="#services"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#approach"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Approach
              </Link>
{/* Hidden for now
              <Link
                href="#insights"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Insights
              </Link>
*/}
              <Link
                href="/contact"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="block rounded-md bg-primary px-3 py-2 text-base font-medium text-white hover:bg-primary-dark"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for fixed navigation */}
      <div className="h-20 md:h-24"></div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/businessImage2.jpg"
            alt="AI Systems Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-gray-900/70" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
          <div className="mx-auto max-w-2xl lg:max-w-4xl text-center">
            <p className="text-base font-semibold text-accent mb-4">80% of AI pilots never reach production</p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              We Help You Understand
              <br />
              <span className="text-accent">Why AI Fails to Scale</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Most organisations struggle to move AI from pilot to production. We diagnose the real barriers — technical debt, organisational friction, governance gaps — and design systems that actually work at scale.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-primary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primary-dark transition-colors"
              >
                Diagnose Your AI Challenges
              </Link>
              <Link
                href="#services"
                className="rounded-md border border-white/30 bg-white/10 backdrop-blur-sm px-6 py-3 text-base font-medium text-white hover:bg-white/20 transition-colors"
              >
                How We Help
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-accent">How We Help</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Diagnose. Design. Scale.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We identify why your AI initiatives are stuck and build the systems, governance, and architecture to move them forward.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {/* Service 1 */}
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                  </div>
                  AI Scaling Diagnostics
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Why isn't your AI delivering value? We analyse technical debt, data quality, integration challenges, and organisational readiness to identify the real blockers.
                  </p>
                </dd>
              </div>

              {/* Service 2 */}
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  Governance & Risk Architecture
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    AI in regulated environments requires discipline. We design governance frameworks, risk controls, and compliance structures that enable scale without compromising safety.
                  </p>
                </dd>
              </div>

              {/* Service 3 */}
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                    </svg>
                  </div>
                  Production-Ready Architecture
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Moving from pilot to production requires more than code. We design integration patterns, operational models, and technical architecture that sustains AI at enterprise scale.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Principal Consultant Section */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-2xl bg-gray-100">
                <Image
                  src="/founder.jpg"
                  alt="Principal Consultant"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="text-base font-semibold leading-7 text-accent">Principal Consultant</div>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Kingsley Osime<span className="text-lg text-primary font-medium ml-3">IEEE · ACM</span>
              </h2>
              <div className="mt-6 space-y-4 text-base leading-7 text-gray-600">
                <p>
                  Kingsley's research focuses on why AI systems fail to scale — exploring the mathematical limits of optimisation in high-dimensional spaces and the organisational barriers that prevent AI moving from pilot to production.
                </p>
                <p>
                  Currently a Strategy and Transformation consultant at Capgemini Invent, Kingsley works at the intersection of AI architecture, governance, and enterprise delivery — helping organisations understand not just what AI can do, but why their current approaches aren't working.
                </p>
                <p>
                  He holds a postgraduate degree in Cognitive Computing from the University of London, with thesis research on particle swarm optimisation and its limitations in complex problem spaces.
                </p>
              </div>
              <div className="mt-8">
                <h3 className="text-sm font-semibold text-gray-900">Focus Areas</h3>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-accent mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    AI Scaling Barriers & Failure Analysis
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-accent mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Governance & Risk in Regulated Industries
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-accent mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Enterprise AI Architecture & Integration
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-accent mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Optimisation Theory & System Design
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-accent">Our Approach</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Research-Led. Reality-Grounded.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We don't sell AI hype. We diagnose why your AI isn't working and design systems that do.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24">
            <div className="space-y-12">
              <div className="flex gap-x-4">
                <div className="flex-none">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-semibold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Diagnose the Real Problem</h3>
                  <p className="mt-2 text-base text-gray-600">
                    Most AI failures aren't technical — they're organisational. We analyse your pilots, infrastructure, governance, and team dynamics to identify what's actually blocking scale.
                  </p>
                </div>
              </div>

              <div className="flex gap-x-4">
                <div className="flex-none">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-semibold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Design for Production</h3>
                  <p className="mt-2 text-base text-gray-600">
                    We architect solutions that work in the real world — with legacy systems, compliance requirements, and organisational constraints. Not theoretical frameworks.
                  </p>
                </div>
              </div>

              <div className="flex gap-x-4">
                <div className="flex-none">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-semibold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Enable Sustainable Scale</h3>
                  <p className="mt-2 text-base text-gray-600">
                    A working pilot is just the start. We build the governance, operational models, and team capabilities needed to sustain AI value over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Insights Section - Hidden for now
      <section id="insights" className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-accent">Insights</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Research & Perspectives
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Original thinking on why AI initiatives fail and what it takes to build systems that scale.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <article className="flex flex-col items-start bg-white rounded-2xl p-8 shadow-sm ring-1 ring-gray-200">
              <div className="flex items-center gap-x-4 text-xs">
                <span className="rounded-full bg-primary/10 px-3 py-1.5 font-medium text-primary">
                  Coming Soon
                </span>
              </div>
              <div className="group relative">
                <h3 className="mt-4 text-lg font-semibold leading-6 text-gray-900">
                  Why 80% of AI Pilots Never Reach Production
                </h3>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  The real barriers aren't technical. Drawing on industry research and delivery experience, we explore the organisational, governance, and architectural factors that trap AI initiatives in pilot purgatory.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-x-4">
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">Kingsley Osime</p>
                </div>
              </div>
            </article>

            <article className="flex flex-col items-start bg-white rounded-2xl p-8 shadow-sm ring-1 ring-gray-200">
              <div className="flex items-center gap-x-4 text-xs">
                <span className="rounded-full bg-primary/10 px-3 py-1.5 font-medium text-primary">
                  Coming Soon
                </span>
              </div>
              <div className="group relative">
                <h3 className="mt-4 text-lg font-semibold leading-6 text-gray-900">
                  AI Systems Are High-Dimensional Optimisation Problems
                </h3>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  What particle swarm optimisation research tells us about tuning complex AI systems — and why most approaches break down as dimensionality increases.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-x-4">
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">Kingsley Osime</p>
                </div>
              </div>
            </article>

            <article className="flex flex-col items-start bg-white rounded-2xl p-8 shadow-sm ring-1 ring-gray-200">
              <div className="flex items-center gap-x-4 text-xs">
                <span className="rounded-full bg-primary/10 px-3 py-1.5 font-medium text-primary">
                  Coming Soon
                </span>
              </div>
              <div className="group relative">
                <h3 className="mt-4 text-lg font-semibold leading-6 text-gray-900">
                  Governance as Enabler, Not Blocker
                </h3>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  In regulated industries, governance is often seen as the enemy of AI innovation. But the organisations that scale AI successfully treat governance as architecture — not afterthought.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-x-4">
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">Kingsley Osime</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
*/}

      {/* CTA Section */}
      <section id="contact" className="py-24 sm:py-32 bg-primary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Stuck in Pilot Purgatory?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-100">
              If your AI initiatives aren't delivering the value you expected, let's diagnose why — and build a path to production that actually works.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-base font-medium text-primary shadow-sm hover:bg-gray-100 transition-colors"
              >
                Start the Conversation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm leading-5 text-gray-400">
              &copy; 2025 The Atlas Company. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#services" className="text-sm text-gray-400 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="#approach" className="text-sm text-gray-400 hover:text-white transition-colors">
                Approach
              </Link>
{/* Hidden for now
              <Link href="#insights" className="text-sm text-gray-400 hover:text-white transition-colors">
                Insights
              </Link>
*/}
              <Link href="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
