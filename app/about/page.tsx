import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
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

      {/* Founder */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
            <div className="relative">
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
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Kingsley Osime<span className="text-lg text-primary font-medium ml-3">IEEE · ACM</span>
              </h1>
              <div className="mt-6 space-y-4 text-base leading-7 text-gray-600">
                <p>
                  Kingsley is a senior technologist and AI strategist who has spent years studying why AI systems fail to scale — uncovering the mathematical limits of optimisation and the organisational barriers that prevent AI from moving out of the pilot stage.
                </p>
                <p>
                  His thesis on particle swarm optimisation revealed a fundamental insight: AI systems degrade sharply when too many parameters are tuned simultaneously. Most teams don't know this. They configure by guesswork and wonder why results are inconsistent.
                </p>
                <p>
                  That research became the foundation for Atlas — a platform that applies principled, staged optimisation to AI systems, so enterprises get consistent, auditable, production-ready results.
                </p>
                <p>
                  Currently a Strategy and Transformation consultant at Capgemini Invent, Kingsley has worked at the intersection of AI architecture, governance, and enterprise delivery across regulated industries.
                </p>
              </div>
              <div className="mt-8">
                <h3 className="text-sm font-semibold text-gray-900">Focus Areas</h3>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  {[
                    "AI Optimisation Theory & System Design",
                    "Governance & Risk in Regulated Industries",
                    "Enterprise AI Architecture & Integration",
                    "AI Scaling Barriers & Failure Analysis",
                  ].map((item) => (
                    <li key={item} className="flex items-start">
                      <svg className="h-5 w-5 text-accent mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            To make enterprise AI reliable, explainable, and continuously improving — by building the infrastructure layer that regulated industries have been missing.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="rounded-md bg-primary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primary-dark transition-colors"
            >
              Work With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
