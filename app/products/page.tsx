import Link from "next/link";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6 flex items-center justify-between">
          <Link href="/" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
            ← Back to Home
          </Link>
          <Link
            href="/contact"
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark transition-colors"
          >
            Get Early Access
          </Link>
        </div>
      </header>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-accent">Atlas Products</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Purpose-Built AI Services
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Every Atlas product is a production-ready AI service built on the Atlas platform — optimised, governed, and cloud-agnostic.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="flex flex-col bg-gray-50 rounded-2xl p-8 ring-1 ring-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Arbitor</h3>
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">Early Access</span>
                </div>
                <p className="text-gray-600 flex-auto">
                  AI System Configuration & Optimisation for regulated industries. Answers from your internal corpus with citations — continuously optimised for quality, cost, and latency.
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

              <div className="flex flex-col bg-gray-50 rounded-2xl p-8 ring-1 ring-gray-200 opacity-60">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">More Coming</h3>
                  <span className="rounded-full bg-gray-200 px-3 py-1 text-xs font-medium text-gray-500">Roadmap</span>
                </div>
                <p className="text-gray-600 flex-auto">
                  New Atlas products for AI deployment, monitoring, and governance are in development.
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
    </div>
  );
}
