import { getSplashPageData } from "@/sanity/queries";
import { urlFor } from "@/sanity/image";
import Link from "next/link";

const defaults = {
  heading: "The Investment Committee's Right-Hand System.",
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
        "Each fund's instance is tuned to its own thesis, risk tolerances, and historical decisions. The same data room looks different to different funds, because your strategy and judgement are different.",
    },
    {
      icon: "",
      title: "Diligence Through Exit",
      description:
        "PEVio activates when a deal enters formal evaluation and stays with it through portfolio monitoring and exit planning. Intelligence that compounds across every transaction and every holding period.",
    },
  ],
  ctaHeading:
    "We are selectively onboarding funds for early access.",
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
  const sidebarLine1 =
    data?.sidebarHeadingLine1 || defaults.sidebarHeadingLine1;
  const sidebarLine2 =
    data?.sidebarHeadingLine2 || defaults.sidebarHeadingLine2;
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
      <section className="flex min-h-[85vh]">
        {/* Left Panel */}
        <div className="flex w-full flex-col justify-center px-8 py-16 md:w-[53%] md:px-20 lg:px-28">
          <div className="mx-auto w-full max-w-lg">
            <div className="mb-10 md:hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/Logo_black.png"
                alt="PEVio"
                width={72}
                height={24}
              />
            </div>

            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-600">
              Applied Specialized Intelligence for Private Equity
            </p>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {heading}
            </h1>
            <p className="mb-10 text-lg leading-relaxed text-gray-500">
              {tagline}
            </p>
            <Link
              href={ctaButtonLink}
              className="inline-block rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:shadow-lg"
            >
              Request Early Access
            </Link>
          </div>
        </div>

        {/* Right Panel */}
        <div
          className="relative hidden md:flex md:w-[47%] md:flex-col md:items-center md:justify-center"
          style={{
            backgroundImage: `url('${bgImageUrl}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 flex flex-col items-center px-12 text-center text-white">
            <h2 className="text-3xl font-bold leading-snug lg:text-4xl">
              {sidebarLine1}
              <br />
              {sidebarLine2}
            </h2>
          </div>
          <p className="absolute bottom-8 z-10 text-sm font-medium tracking-widest text-white/70">
            {brandName}
          </p>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="border-y border-gray-100 bg-white px-6 py-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm leading-relaxed text-gray-400">
            Built by capital markets practitioners with decades of PE, growth equity, and venture experience. Designed to ISO 27001, SOC 2 Type II, and GDPR standards.
          </p>
        </div>
      </section>

      {/* Founder Line */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-base leading-relaxed text-gray-500">
            Born from a decade-long friendship between founders who have sat on both sides of the table, bringing together market expertise, operational execution, and AI innovation to solve private equity&apos;s most persistent operational challenge.
          </p>
        </div>
      </section>

      {/* Mid-Section: Why the smartest capital still moves slowly */}
      <section className="border-t border-gray-100 bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">
              Why the smartest capital still moves slowly.
            </h2>
            <p className="text-base leading-relaxed text-gray-500">
              Mid-market PE firms spend up to &pound;2 million per transaction on manual diligence. Signal is buried under process, institutional memory disappears between deal cycles, and AI adoption stalls because Investment Committees cannot explain how conclusions were reached.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm"
              >
                <h3 className="mb-3 text-lg font-semibold text-gray-900">
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
      <section className="px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900">
            {ctaHeading}
          </h2>
          <p className="mb-8 text-base leading-relaxed text-gray-500">
            {ctaText}
          </p>
          <Link
            href={ctaButtonLink}
            className="inline-block rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-md transition hover:shadow-lg"
          >
            {ctaButtonLabel}
          </Link>
        </div>
      </section>
    </>
  );
}
