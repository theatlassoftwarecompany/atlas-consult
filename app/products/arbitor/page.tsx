import Link from "next/link";

export default function ArbitorPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6 flex items-center justify-between">
          <Link href="/products" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
            ← All Products
          </Link>
          <Link
            href="/contact"
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark transition-colors"
          >
            Get Early Access
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <h1 className="text-5xl font-bold tracking-tight text-gray-900">Arbitor</h1>
              <span className="rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">Early Access</span>
            </div>
            <p className="text-xl font-medium text-primary mt-2">AI System Configuration & Optimisation</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Arbitor answers questions from your internal corpus with grounded citations — and continuously optimises itself for quality, cost, and latency using proprietary optimisation algorithms.
            </p>
            <p className="mt-4 text-base font-medium text-gray-500 italic">
              "You set the rules. Arbitor makes your AI follow them."
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-primary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primary-dark transition-colors"
              >
                Request Early Access
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Built for Regulated Industries</h2>
            <p className="mt-4 text-gray-600">
              Financial services, legal, healthcare, insurance — sectors where AI answers must be accurate, cited, and auditable.
            </p>
          </div>
          <div className="mx-auto max-w-4xl grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">Grounded Answers</h3>
              <p className="mt-2 text-sm text-gray-600">Every answer is cited back to your source documents. No hallucinations. No guesswork.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">Continuous Optimisation</h3>
              <p className="mt-2 text-sm text-gray-600">Proprietary algorithms tune retrieval, prompting, and decoding parameters — optimising quality, cost, and latency together.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">Full Transparency</h3>
              <p className="mt-2 text-sm text-gray-600">Inspect every decision — model used, retrieval parameters, agent trace, cost, and latency metrics — in one view.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target buyer */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="bg-primary rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-bold text-white">The Board-Level Pitch</h2>
            <p className="mt-4 text-lg text-gray-100 italic max-w-2xl mx-auto">
              "We didn't just buy an AI tool — we bought a system that continuously optimises and benchmarks our AI against compliance requirements."
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-base font-medium text-primary shadow-sm hover:bg-gray-100 transition-colors"
              >
                Talk to Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
