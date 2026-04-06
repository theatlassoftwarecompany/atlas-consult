'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);


  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);


  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 transition-shadow duration-300 ${navScrolled ? 'nav-scrolled' : ''}`}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="The Atlas Company"
                  width={300}
                  height={200}
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:gap-8">
              <Link href="/products" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                Products
              </Link>
              <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                Contact
              </Link>
              <Link
                href="/early-access"
                className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark transition-colors"
              >
                Get Early Access
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
                href="/products"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/about"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/early-access"
                className="block rounded-md bg-primary px-3 py-2 text-base font-medium text-white hover:bg-primary-dark"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Early Access
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for fixed navigation */}
      <div className="h-20 md:h-24"></div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/businessImage2.jpg"
            alt="Atlas Platform"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-gray-900/70" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
          <div className="mx-auto max-w-2xl lg:max-w-4xl text-center">
            <p className="hero-enter text-base font-semibold text-accent mb-4">The AI infrastructure layer for regulated enterprises</p>
            <h1 className="hero-enter text-4xl font-bold tracking-tight text-white sm:text-6xl" style={{transitionDelay: '120ms'}}>
              One Platform.
              <br />
              <span className="text-accent">Every AI Service You Need.</span>
            </h1>
            <p className="hero-enter mt-6 text-lg leading-8 text-gray-300" style={{transitionDelay: '240ms'}}>
              Atlas is a cloud-agnostic AI platform that gives enterprises a unified interface to deploy, configure, and optimise AI systems — while we handle the infrastructure complexity behind the scenes.
            </p>
            <div className="hero-enter mt-10 flex items-center justify-center gap-4" style={{transitionDelay: '360ms'}}>
              <Link
                href="/early-access"
                className="rounded-md bg-primary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primary-dark transition-colors"
              >
                Get Early Access
              </Link>
              <Link
                href="/products"
                className="rounded-md border border-white/30 bg-white/10 backdrop-blur-sm px-6 py-3 text-base font-medium text-white hover:bg-white/20 transition-colors"
              >
                See Our Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="zoom-in mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-accent">Why Atlas Exists</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              80% of AI Pilots Never Reach Production
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              The problem isn't capability — it's configuration, governance, and infrastructure complexity. Enterprises are drowning in cloud vendors, fragmented tools, and AI systems that nobody truly understands.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="zoom-in flex flex-col" style={{transitionDelay: '0ms'}}>
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
                    </svg>
                  </div>
                  Too Many Vendors
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">AWS, Azure, GCP — each with different APIs, pricing models, and compliance postures. Atlas abstracts all of it into one interface your team can actually use.</p>
                </dd>
              </div>

              <div className="zoom-in flex flex-col" style={{transitionDelay: '120ms'}}>
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  Unoptimised Systems
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">AI systems have dozens of tunable parameters. Most teams guess. Atlas uses principled optimisation to configure systems for quality, cost, and latency — simultaneously.</p>
                </dd>
              </div>

              <div className="zoom-in flex flex-col" style={{transitionDelay: '240ms'}}>
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  Governance Gaps
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Regulated industries need AI that can be audited, explained, and controlled. Atlas bakes compliance, benchmarking, and transparency into the platform from day one.</p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="hero-enter mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-accent">The Platform</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              AI Infrastructure, Unified
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Like AWS for cloud compute, Atlas is the single control plane for your AI systems — pluggable, cloud-agnostic, and built for regulated environments.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="hero-enter bg-white rounded-2xl p-8 shadow-sm ring-1 ring-gray-200" style={{transitionDelay: '0ms'}}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Cloud Agnostic</h3>
                </div>
                <p className="text-gray-600">Deploy on AWS, Azure, or GCP. Atlas handles the integration — you get one consistent interface regardless of what's running underneath.</p>
              </div>

              <div className="hero-enter bg-white rounded-2xl p-8 shadow-sm ring-1 ring-gray-200" style={{transitionDelay: '120ms'}}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Principled Optimisation</h3>
                </div>
                <p className="text-gray-600">Powered by research-grade optimisation algorithms. Atlas tunes your AI systems scientifically — not by trial and error.</p>
              </div>

              <div className="hero-enter bg-white rounded-2xl p-8 shadow-sm ring-1 ring-gray-200" style={{transitionDelay: '240ms'}}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Compliance Ready</h3>
                </div>
                <p className="text-gray-600">Built for regulated industries. Every decision is logged, benchmarked, and auditable — so your AI can meet the standards your sector demands.</p>
              </div>

              <div className="hero-enter bg-white rounded-2xl p-8 shadow-sm ring-1 ring-gray-200" style={{transitionDelay: '360ms'}}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Pluggable by Design</h3>
                </div>
                <p className="text-gray-600">Vector stores, model providers, auth, secrets — all abstracted and swappable. Avoid lock-in and evolve your stack without rebuilding everything.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rise-up mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-accent">Our Products</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Built on the Atlas Platform
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Each Atlas product is a purpose-built AI service for a specific enterprise problem. Starting with regulated industries.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 stagger">
              {/* Arbitor */}
              <div className="slide-left flex flex-col bg-gray-50 rounded-2xl p-8 ring-1 ring-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Arbitor</h3>
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">Early Access</span>
                </div>
                <p className="text-gray-600 flex-auto">
                  AI System Configuration & Optimisation for regulated industries. Arbitor answers from your internal corpus with citations — and continuously optimises itself for quality, cost, and latency.
                </p>
                <p className="mt-4 text-sm font-medium text-gray-500 italic">
                  "You set the rules. Arbitor makes your AI follow them."
                </p>
                <div className="mt-8">
                  <Link
                    href="/products/arbitor"
                    className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>

              {/* Coming Soon */}
              <div className="slide-right flex flex-col bg-gray-50 rounded-2xl p-8 ring-1 ring-gray-200 opacity-60">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">More Coming</h3>
                  <span className="rounded-full bg-gray-200 px-3 py-1 text-xs font-medium text-gray-500">Roadmap</span>
                </div>
                <p className="text-gray-600 flex-auto">
                  The Atlas platform is expanding. New products for AI deployment, monitoring, and governance are in development.
                </p>
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors"
                  >
                    Register Interest →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
            <div className="slide-left relative">
              <div className="aspect-square overflow-hidden rounded-2xl bg-gray-100">
                <Image
                  src="/founder.jpg"
                  alt="Kingsley Osime, Founder"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="slide-right">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                We Started Diagnosing Why AI Fails.
                <br />
                <span className="text-primary">Then We Built the Solution.</span>
              </h2>
              <div className="mt-6 space-y-4 text-base leading-7 text-gray-600">
                <p>
                  Atlas was founded by Kingsley Osime — a senior technologist and AI strategist who spent years studying the mathematical limits of AI optimisation and the organisational barriers that stop AI from reaching production.
                </p>
                <p>
                  His research on optimisation in high-dimensional spaces revealed a fundamental truth: most AI systems fail not because the technology is wrong, but because they're configured by guesswork and built without infrastructure discipline.
                </p>
                <p>
                  Atlas is the answer to that problem — a platform that brings principled optimisation, cloud abstraction, and governance tooling together in one place.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/about"
                  className="text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
                >
                  Read the full story →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 bg-primary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Bring Your AI to Production?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-100">
              Get early access to the Atlas platform and be first to deploy AI systems that are optimised, governed, and production-ready from day one.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Link
                href="/early-access"
                className="rounded-md bg-white px-6 py-3 text-base font-medium text-primary shadow-sm hover:bg-gray-100 transition-colors"
              >
                Get Early Access
              </Link>
              <Link
                href="/products/arbitor"
                className="rounded-md border border-white/30 bg-white/10 backdrop-blur-sm px-6 py-3 text-base font-medium text-white hover:bg-white/20 transition-colors"
              >
                See Arbitor
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
              &copy; 2026 The Atlas Company. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/products" className="text-sm text-gray-400 hover:text-white transition-colors">
                Products
              </Link>
              <Link href="/products/arbitor" className="text-sm text-gray-400 hover:text-white transition-colors">
                Arbitor
              </Link>
              <Link href="/about" className="text-sm text-gray-400 hover:text-white transition-colors">
                About
              </Link>
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
