import { getSplashPageData } from "@/sanity/queries";
import { urlFor } from "@/sanity/image";
import Link from "next/link";

const defaults = {
  heading: "The Investment Committee\u2019s Right-Hand System.",
  tagline:
    "PEVio transforms unstructured deal data into IC-ready, auditable intelligence, from first data room access through portfolio exit. Decision infrastructure built by investment professionals, not a chatbot repurposed for finance.",
  sidebarHeadingLine1: "Applied Specialized",
  sidebarHeadingLine2: "Intelligence for PE",
  sidebarBrandName: "PEVio",
  features: [
    {
      icon: "",
      title: "Explainable, Not Black-Box",
      description:
        "Every conclusion is source-linked, traceable, and reviewable. PEVio shows not just what it found, but why, and where that finding came from. Built for IC scrutiny, LP reporting, and regulator confidence.",
    },
    {
      icon: "",
      title: "Learns Your Investment DNA",
      description:
        "Each fund\u2019s instance is tuned to its own thesis, risk tolerances, and historical decisions. The same data room looks different to different funds, because your strategy and judgement are different.",
    },
    {
      icon: "",
      title: "Diligence Through Exit",
      description:
        "PEVio activates when a deal enters formal evaluation and stays with it through portfolio monitoring and exit planning. Intelligence that compounds across every transaction and every holding period.",
    },
  ],
  ctaHeading: "We are selectively onboarding funds for early access.",
  ctaText:
    "If your firm is evaluating how AI fits into your diligence and portfolio operations, we would welcome a confidential conversation.",
  ctaButtonLabel: "Book a Confidential Walkthrough",
  ctaButtonLink: "/contact",
};

export const revalidate = 60;

export default async function Home() {
  const data = await getSplashPageData();

  const heading = data?.heading || defaults.heading;
  const tagline = data?.tagline || defaults.tagline;
  const sidebarLine1 = data?.sidebarHeadingLine1 || defaults.sidebarHeadingLine1;
  const sidebarLine2 = data?.sidebarHeadingLine2 || defaults.sidebarHeadingLine2;
  const brandName = data?.sidebarBrandName || defaults.sidebarBrandName;
  const bgImageUrl = data?.backgroundImage
    ? urlFor(data.backgroundImage).width(1200).quality(80).url()
    : "/sidebar-bg.jpg";
  const features = data?.features?.length ? data.features : defaults.features;
  const ctaHeading = data?.ctaHeading || defaults.ctaHeading;
  const ctaText = data?.ctaText || defaults.ctaText;
  const ctaButtonLabel = data?.ctaButtonLabel || defaults.ctaButtonLabel;
  const ctaButtonLink = data?.ctaButtonLink || defaults.ctaButtonLink;

  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient flex min-h-[90vh]">
        {/* Left Panel */}
        <div className="flex w-full flex-col justify-center px-8 py-20 md:w-[55%] md:px-20 lg:px-28">
          <div className="mx-auto w-full max-w-lg">
            <div className="mb-10 md:hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/Logo_black.png" alt="PEVio" width={72} height={24} />
            </div>

            <div className="mb-6 inline-block rounded-full border border-blue-100 bg-blue-50/50 px-4 py-1.5">
              <span className="text-xs font-semibold tracking-wide text-blue-600">
                Applied Specialized Intelligence for PE
              </span>
            </div>

            <h1 className="mb-6 text-[2.75rem] font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-5xl">
              {heading}
            </h1>
            <p className="mb-10 text-[17px] leading-relaxed text-gray-500">
              {tagline}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href={ctaButtonLink}
                className="btn-primary inline-block rounded-full px-7 py-3 text-sm font-semibold text-white"
              >
                Request Early Access
              </Link>
              <Link
                href="/product"
                className="inline-block text-sm font-medium text-gray-500 transition-colors hover:text-gray-900"
              >
                Learn how it works &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div
          className="relative hidden overflow-hidden md:flex md:w-[45%] md:flex-col md:items-center md:justify-center"
          style={{
            backgroundImage: `url('${bgImageUrl}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 via-gray-900/40 to-blue-900/30" />
          <div className="relative z-10 flex flex-col items-center px-12 text-center text-white">
            <h2 className="text-3xl font-bold leading-snug lg:text-4xl">
              {sidebarLine1}
              <br />
              {sidebarLine2}
            </h2>
          </div>
          <p className="absolute bottom-8 z-10 text-xs font-medium uppercase tracking-[0.25em] text-white/50">
            {brandName}
          </p>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="border-y border-gray-100 px-6 py-5">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-8 gap-y-2 text-center">
          {["ISO 27001", "SOC 2 Type II", "GDPR Compliant"].map((badge) => (
            <span
              key={badge}
              className="text-xs font-medium tracking-wide text-gray-400"
            >
              {badge}
            </span>
          ))}
        </div>
      </section>

      {/* Founder Line */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 h-px w-12 mx-auto bg-gradient-to-r from-transparent via-blue-300 to-transparent" />
          <p className="text-[15px] leading-relaxed text-gray-400 italic">
            Born from a decade-long friendship between founders who have sat on both sides of the table, bringing together market expertise, operational execution, and AI innovation to solve private equity&apos;s most persistent operational challenge.
          </p>
        </div>
      </section>

      {/* Mid-Section */}
      <section className="bg-gray-50/50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why the smartest capital still moves slowly.
            </h2>
            <p className="text-[15px] leading-relaxed text-gray-500">
              Mid-market PE firms spend up to $2 million per transaction on manual diligence. Signal is buried under process, institutional memory disappears between deal cycles, and AI adoption stalls because Investment Committees cannot explain how conclusions were reached.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature, i) => (
              <div
                key={i}
                className="card-hover card-accent rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                  <div className="h-2 w-2 rounded-full bg-blue-500" />
                </div>
                <h3 className="mb-3 text-base font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900">
            {ctaHeading}
          </h2>
          <p className="mb-8 text-[15px] leading-relaxed text-gray-500">
            {ctaText}
          </p>
          <Link
            href={ctaButtonLink}
            className="btn-primary inline-block rounded-full px-8 py-3.5 text-sm font-semibold text-white"
          >
            {ctaButtonLabel}
          </Link>
        </div>
      </section>
    </>
  );
}
