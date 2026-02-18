import { getProductPageData } from "@/sanity/queries";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product — PEVio",
  description: "Applied Specialized Intelligence for Private Equity due diligence.",
};

export const revalidate = 60;

const defaultData = {
  heroHeading: "Applied Specialized Intelligence for Private Equity",
  heroSubheading: "Decision infrastructure that thinks the way PE professionals think.",
  problemHeading: "The Diligence Bottleneck",
  problemDescription: "Mid-market GPs spend $1–5M per year on manual diligence. Each deal consumes 500–1,100+ partner hours, with 75% of the workflow still manual. Insights are trapped in analysts' heads and lost when teams transition.",
  problemStats: [
    { metric: "500–1,100+", label: "hours per deal" },
    { metric: "$1–5M", label: "annual DD cost" },
    { metric: "75%", label: "still manual" },
  ],
  solutionHeading: "What PEVio Is",
  solutionDescription: "Applied Specialized Intelligence (ASI) for PE — not repurposed general AI. Trained on 1,800+ institutional due diligence questions, PEVio learns your fund's specific investment thesis and decision patterns.",
  solutionPoints: [
    { title: "PE-Native Intelligence", description: "Trained on institutional DD frameworks, not generic data." },
    { title: "Fund-Specific Learning", description: "Learns your IC's decision patterns and what 'good deal' means for your fund." },
    { title: "Audit-Ready Output", description: "Every conclusion source-linked. Built for LP and regulator scrutiny." },
    { title: "Progressive Customization", description: "Becomes more valuable with each deal, tuned to your fund's DNA." },
  ],
  howHeading: "Consensus-Based ASI Architecture",
  steps: [
    { title: "Multi-Model Orchestration", description: "Specialized Financial, Legal, ESG, Tech, and Operational models work independently on your data room." },
    { title: "Consensus Layer", description: "Models debate findings, cross-reference data, and test against institutional DD frameworks." },
    { title: "Explainable Output", description: "Source-linked briefs with full audit trails. No black boxes — every insight is traceable." },
  ],
  lifecycleHeading: "Beyond Due Diligence",
  lifecycleDescription: "PEVio's value compounds across the complete investment lifecycle.",
  lifecyclePhases: [
    { phase: "Due Diligence", details: "Source-linked briefs in hours. Anomaly detection. Investment Score vs fund thesis." },
    { phase: "Portfolio Monitoring", details: "Real-time performance tracking. ESG monitoring. Value creation opportunity identification." },
    { phase: "Exit Planning", details: "Exit readiness assessment. Valuation optimization. Buyer engagement support." },
  ],
  whyHeading: "Why PEVio Is Different",
  whyDescription: "As general AI commoditizes, specialized intelligence becomes more valuable. PEVio is the decision layer that competitors can't replicate.",
  differentiators: [
    { title: "Generic AI Tools", description: "Broad but shallow. Speed-focused. One-size-fits-all analysis. Static models." },
    { title: "Point Solutions", description: "Manage workflow steps, not decisions. No institutional memory." },
    { title: "PEVio ASI", description: "Deep PE expertise. Trust-focused. Learns your fund's decision DNA. Gets smarter with every deal." },
  ],
};

export default async function ProductPage() {
  const data = await getProductPageData();

  const d = {
    heroHeading: data?.heroHeading || defaultData.heroHeading,
    heroSubheading: data?.heroSubheading || defaultData.heroSubheading,
    problemHeading: data?.problemHeading || defaultData.problemHeading,
    problemDescription: data?.problemDescription || defaultData.problemDescription,
    problemStats: data?.problemStats?.length ? data.problemStats : defaultData.problemStats,
    solutionHeading: data?.solutionHeading || defaultData.solutionHeading,
    solutionDescription: data?.solutionDescription || defaultData.solutionDescription,
    solutionPoints: data?.solutionPoints?.length ? data.solutionPoints : defaultData.solutionPoints,
    howHeading: data?.howHeading || defaultData.howHeading,
    steps: data?.steps?.length ? data.steps : defaultData.steps,
    lifecycleHeading: data?.lifecycleHeading || defaultData.lifecycleHeading,
    lifecycleDescription: data?.lifecycleDescription || defaultData.lifecycleDescription,
    lifecyclePhases: data?.lifecyclePhases?.length ? data.lifecyclePhases : defaultData.lifecyclePhases,
    whyHeading: data?.whyHeading || defaultData.whyHeading,
    whyDescription: data?.whyDescription || defaultData.whyDescription,
    differentiators: data?.differentiators?.length ? data.differentiators : defaultData.differentiators,
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            {d.heroHeading}
          </h1>
          <p className="text-lg text-gray-300">{d.heroSubheading}</p>
        </div>
      </section>

      {/* Problem */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">{d.problemHeading}</h2>
          <p className="mb-12 max-w-3xl text-lg leading-relaxed text-gray-500">
            {d.problemDescription}
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {d.problemStats.map((stat, i) => (
              <div key={i} className="rounded-xl border border-gray-100 bg-gray-50 p-8 text-center">
                <div className="mb-2 text-4xl font-bold text-blue-600">{stat.metric}</div>
                <div className="text-sm font-medium text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="border-t border-gray-100 bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">{d.solutionHeading}</h2>
          <p className="mb-12 max-w-3xl text-lg leading-relaxed text-gray-500">
            {d.solutionDescription}
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {d.solutionPoints.map((point, i) => (
              <div key={i} className="rounded-xl border border-gray-100 bg-white p-8">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">{point.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-3xl font-bold text-gray-900">{d.howHeading}</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {d.steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  {i + 1}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">{step.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifecycle */}
      <section className="border-t border-gray-100 bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">{d.lifecycleHeading}</h2>
          <p className="mb-12 max-w-3xl text-lg text-gray-500">{d.lifecycleDescription}</p>
          <div className="grid gap-6 md:grid-cols-3">
            {d.lifecyclePhases.map((phase, i) => (
              <div key={i} className="rounded-xl border border-gray-100 bg-white p-8">
                <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-blue-600">
                  Phase {i + 1}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">{phase.phase}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{phase.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why PEVio */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">{d.whyHeading}</h2>
          <p className="mb-12 max-w-3xl text-lg text-gray-500">{d.whyDescription}</p>
          <div className="grid gap-6 md:grid-cols-3">
            {d.differentiators.map((diff, i) => (
              <div
                key={i}
                className={`rounded-xl border p-8 ${
                  diff.title === "PEVio ASI"
                    ? "border-blue-200 bg-blue-50"
                    : "border-gray-100 bg-gray-50"
                }`}
              >
                <h3 className={`mb-2 text-lg font-semibold ${
                  diff.title === "PEVio ASI" ? "text-blue-700" : "text-gray-900"
                }`}>
                  {diff.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">{diff.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 text-3xl font-bold">See PEVio in Action</h2>
          <p className="mb-8 text-gray-300">
            Request a demo and discover how Applied Specialized Intelligence can transform your fund&apos;s due diligence.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-gray-900 shadow-md transition hover:shadow-lg"
          >
            Request a Demo
          </Link>
        </div>
      </section>
    </>
  );
}
