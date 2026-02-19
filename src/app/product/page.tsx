import { getProductPageData } from "@/sanity/queries";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product \u2014 PEVio",
  description:
    "Decision infrastructure for Private Equity. IC-ready diligence briefs, risk detection, and investment scoring.",
};

export const revalidate = 60;

export default async function ProductPage() {
  await getProductPageData();

  return (
    <>
      {/* Hero */}
      <section className="hero-dark noise-overlay px-6 py-28 text-center text-white">
        <div className="relative z-10 mx-auto max-w-3xl">
          <div className="mb-6 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
            <span className="text-xs font-semibold tracking-wide text-blue-300">
              Product
            </span>
          </div>
          <h1 className="mb-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Decision infrastructure, not another dashboard.
          </h1>
          <p className="text-lg leading-relaxed text-gray-400">
            PEVio is Applied Specialized Intelligence for Private Equity, built to produce the analysis your Investment Committee actually needs.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              The diligence bottleneck is a strategy problem, not a workflow problem.
            </h2>
          </div>
          <div className="mx-auto max-w-2xl space-y-4 text-[15px] leading-relaxed text-gray-500">
            <p>
              A typical mid-market transaction consumes 500 to 1,100+ partner and analyst hours. Firms spend $1 to $5 million annually on manual document review, cross-referencing, and synthesis. Critical issues are missed depending on who reviews the room. And institutional knowledge walks out the door when team members move on.
            </p>
            <p>
              The industry has tried to solve this with faster workflows and smarter data rooms. But the bottleneck is not speed of access. It is speed of judgement.
            </p>
          </div>

          {/* Stats Strip */}
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {[
              { metric: "500\u20131,100+", label: "hours per deal" },
              { metric: "$1–5M", label: "annual DD cost" },
              { metric: "75%", label: "of workflow still manual" },
            ].map((stat, i) => (
              <div
                key={i}
                className="card-hover rounded-2xl border border-gray-100 bg-gray-50/50 p-8 text-center"
              >
                <div className="mb-1 text-3xl font-bold tracking-tight text-gray-900">
                  {stat.metric}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What PEVio Delivers */}
      <section className="bg-gray-50/50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What your IC receives.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "IC-Ready Diligence Briefs",
                description:
                  "Structured, source-linked analysis across financial, legal, operational, commercial, ESG, and technology domains. Every statement traceable to the original document.",
              },
              {
                title: "Proactive Risk and Anomaly Detection",
                description:
                  "Inconsistencies between financial models and accounting treatments, revenue figures that diverge across submissions, covenant terms that do not align. Surfaced automatically, explained in context.",
              },
              {
                title: "Investment Scoring Against Your Thesis",
                description:
                  "Each deal benchmarked against your fund\u2019s own criteria, historical performance, and sector focus. Not a generic ranking, but a transparent comparison to what your firm has done well before.",
              },
              {
                title: "Intelligence That Learns Your Fund",
                description:
                  "PEVio progressively tunes to your investment thesis, decision patterns, and governance constraints. Over time, it does not answer generic diligence questions. It answers them as your fund would.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="card-hover card-accent rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                  <div className="h-2 w-2 rounded-full bg-blue-500" />
                </div>
                <h3 className="mb-3 text-base font-semibold text-gray-900">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Built differently from generic AI.
          </h2>
          <p className="text-[15px] leading-relaxed text-gray-500">
            PEVio orchestrates multiple specialized models across financial, legal, ESG, technology, and operational domains. These models work independently, then cross-reference and test findings against institutional due diligence frameworks before producing a single, consensus-driven output. Every insight includes the reasoning, the source, and the confidence level. No black boxes.
          </p>
        </div>
      </section>

      {/* Beyond Due Diligence */}
      <section className="bg-gray-50/50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              From first data room to exit.
            </h2>
            <p className="text-[15px] text-gray-500">
              Most platforms stop when diligence ends. PEVio stays with the investment.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                phase: "Due Diligence",
                num: "01",
                details:
                  "Source-linked briefs in hours. Anomaly detection. Investment scoring against your fund\u2019s thesis.",
              },
              {
                phase: "Portfolio Monitoring",
                num: "02",
                details:
                  "Continuous performance tracking against the original investment thesis. ESG compliance signals. Value creation opportunities surfaced as new data arrives.",
              },
              {
                phase: "Exit Planning",
                num: "03",
                details:
                  "Readiness assessment. Valuation support. Systematic buyer engagement preparation.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="card-hover rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
              >
                <span className="mb-4 inline-block text-xs font-bold tracking-wider text-blue-500">
                  {item.num}
                </span>
                <h3 className="mb-3 text-base font-semibold text-gray-900">
                  {item.phase}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  {item.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why PEVio Is Different */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-14 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Not all AI is built for high-stakes decisions.
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-100">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-4 font-medium text-gray-400"></th>
                  <th className="px-6 py-4 font-medium text-gray-400">Generic AI tools</th>
                  <th className="px-6 py-4 font-medium text-gray-400">Workflow / VDR</th>
                  <th className="px-6 py-4 font-semibold text-blue-600">PEVio</th>
                </tr>
              </thead>
              <tbody className="text-gray-500">
                {[
                  ["Designed for", "Broad use cases", "Document management", "PE Investment Committees"],
                  ["Intelligence", "General language models", "Rules-based automation", "Institutional DD frameworks, 1,000+ questions"],
                  ["Learning", "Static", "Static", "Learns your fund\u2019s decision DNA over time"],
                  ["Explainability", "Limited or none", "N/A", "Every conclusion source-linked, auditable, defensible"],
                  ["Lifecycle", "Point-in-time", "Diligence phase only", "Diligence through exit"],
                ].map((row, i) => (
                  <tr key={i} className="border-t border-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{row[0]}</td>
                    <td className="px-6 py-4">{row[1]}</td>
                    <td className="px-6 py-4">{row[2]}</td>
                    <td className="px-6 py-4 font-medium text-gray-900">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-dark noise-overlay px-6 py-24 text-center">
        <div className="relative z-10 mx-auto max-w-xl">
          <p className="mb-8 text-[15px] leading-relaxed text-gray-400">
            We are sharing the platform with a select group of funds. If you would like to see how PEVio handles a real data room, we would welcome the conversation.
          </p>
          <Link
            href="/contact"
            className="btn-primary inline-block rounded-full px-8 py-3.5 text-sm font-semibold text-white"
          >
            Request a Walkthrough
          </Link>
        </div>
      </section>
    </>
  );
}
