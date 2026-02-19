import { getProductPageData } from "@/sanity/queries";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product — PEVio",
  description:
    "Decision infrastructure for Private Equity. IC-ready diligence briefs, risk detection, and investment scoring.",
};

export const revalidate = 60;

export default async function ProductPage() {
  await getProductPageData();

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Decision infrastructure, not another dashboard.
          </h1>
          <p className="text-lg text-gray-300">
            PEVio is Applied Specialized Intelligence for Private Equity, built to produce the analysis your Investment Committee actually needs.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-center text-3xl font-bold text-gray-900">
            The diligence bottleneck is a strategy problem, not a workflow problem.
          </h2>
          <div className="mx-auto max-w-3xl space-y-4 text-base leading-relaxed text-gray-500">
            <p>
              A typical mid-market transaction consumes 500 to 1,100+ partner and analyst hours. Firms spend &pound;1 to &pound;5 million annually on manual document review, cross-referencing, and synthesis. Critical issues are missed depending on who reviews the room. And institutional knowledge walks out the door when team members move on.
            </p>
            <p>
              The industry has tried to solve this with faster workflows and smarter data rooms. But the bottleneck is not speed of access. It is speed of judgement.
            </p>
          </div>

          {/* Stats Strip */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { metric: "500–1,100+", label: "hours per deal" },
              { metric: "£1–5M", label: "annual DD cost" },
              { metric: "75%", label: "of workflow still manual" },
            ].map((stat, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-100 bg-gray-50 p-6 text-center"
              >
                <div className="mb-1 text-3xl font-bold text-gray-900">
                  {stat.metric}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What PEVio Delivers */}
      <section className="border-t border-gray-100 bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            What your IC receives.
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
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
                  "Each deal benchmarked against your fund's own criteria, historical performance, and sector focus. Not a generic ranking, but a transparent comparison to what your firm has done well before.",
              },
              {
                title: "Intelligence That Learns Your Fund",
                description:
                  "PEVio progressively tunes to your investment thesis, decision patterns, and governance constraints. Over time, it does not answer generic diligence questions. It answers them as your fund would.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm"
              >
                <h3 className="mb-3 text-lg font-semibold text-gray-900">
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
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-center text-3xl font-bold text-gray-900">
            Built differently from generic AI.
          </h2>
          <p className="text-base leading-relaxed text-gray-500">
            PEVio orchestrates multiple specialized models across financial, legal, ESG, technology, and operational domains. These models work independently, then cross-reference and test findings against institutional due diligence frameworks before producing a single, consensus-driven output. Every insight includes the reasoning, the source, and the confidence level. No black boxes.
          </p>
        </div>
      </section>

      {/* Beyond Due Diligence */}
      <section className="border-t border-gray-100 bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              From first data room to exit.
            </h2>
            <p className="text-base text-gray-500">
              Most platforms stop when diligence ends. PEVio stays with the investment.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                phase: "Due Diligence",
                details:
                  "Source-linked briefs in hours. Anomaly detection. Investment scoring against your fund's thesis.",
              },
              {
                phase: "Portfolio Monitoring",
                details:
                  "Continuous performance tracking against the original investment thesis. ESG compliance signals. Value creation opportunities surfaced as new data arrives.",
              },
              {
                phase: "Exit Planning",
                details:
                  "Readiness assessment. Valuation support. Systematic buyer engagement preparation.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm"
              >
                <h3 className="mb-3 text-lg font-semibold text-blue-600">
                  {item.phase}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  {item.details}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm font-medium text-gray-400">
            Intelligence that compounds across every transaction and every holding period.
          </p>
        </div>
      </section>

      {/* Why PEVio Is Different */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Not all AI is built for high-stakes decisions.
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-4 pr-6 font-medium text-gray-400"></th>
                  <th className="py-4 pr-6 font-medium text-gray-400">Generic AI tools</th>
                  <th className="py-4 pr-6 font-medium text-gray-400">Workflow / VDR platforms</th>
                  <th className="py-4 pr-6 font-semibold text-blue-600">PEVio</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="border-b border-gray-100">
                  <td className="py-4 pr-6 font-medium text-gray-900">Designed for</td>
                  <td className="py-4 pr-6">Broad use cases</td>
                  <td className="py-4 pr-6">Document management</td>
                  <td className="py-4 pr-6 font-medium text-gray-900">PE Investment Committees</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 pr-6 font-medium text-gray-900">Intelligence</td>
                  <td className="py-4 pr-6">General language models</td>
                  <td className="py-4 pr-6">Rules-based automation</td>
                  <td className="py-4 pr-6 font-medium text-gray-900">Institutional DD frameworks, 1,000+ questions</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 pr-6 font-medium text-gray-900">Learning</td>
                  <td className="py-4 pr-6">Static</td>
                  <td className="py-4 pr-6">Static</td>
                  <td className="py-4 pr-6 font-medium text-gray-900">Learns your fund&apos;s decision DNA over time</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 pr-6 font-medium text-gray-900">Explainability</td>
                  <td className="py-4 pr-6">Limited or none</td>
                  <td className="py-4 pr-6">N/A</td>
                  <td className="py-4 pr-6 font-medium text-gray-900">Every conclusion source-linked, auditable, defensible</td>
                </tr>
                <tr>
                  <td className="py-4 pr-6 font-medium text-gray-900">Lifecycle</td>
                  <td className="py-4 pr-6">Point-in-time</td>
                  <td className="py-4 pr-6">Diligence phase only</td>
                  <td className="py-4 pr-6 font-medium text-gray-900">Diligence through exit</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-100 bg-gray-50 px-6 py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <p className="mb-8 text-base leading-relaxed text-gray-500">
            We are sharing the platform with a select group of funds. If you would like to see how PEVio handles a real data room, we would welcome the conversation.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-md transition hover:shadow-lg"
          >
            Request a Walkthrough
          </Link>
        </div>
      </section>
    </>
  );
}
