import { getSplashPageData } from "@/sanity/queries";
import { urlFor } from "@/sanity/image";
import Link from "next/link";
const defaults = {
  heading: "Due Diligence, Reimagined.",
  tagline:
    "Applied Specialized Intelligence for Private Equity. Decision infrastructure, not data management — auditable insight from diligence through exit.",
  sidebarHeadingLine1: "Smarter Deals,",
  sidebarHeadingLine2: "Trusted Decisions",
  sidebarBrandName: "PEVio",
  features: [
    {
      icon: "🔗",
      title: "Source-Linked Intelligence",
      description:
        "Every conclusion traceable and auditable. Built for LP and regulator scrutiny.",
    },
    {
      icon: "🧬",
      title: "Fund-Specific Learning",
      description:
        "Learns your investment thesis, decision patterns, and what 'good deal' means for your fund.",
    },
    {
      icon: "🔄",
      title: "Full Lifecycle Coverage",
      description:
        "From due diligence through portfolio monitoring to exit planning — intelligence that compounds.",
    },
  ],
  ctaHeading: "Ready to transform your due diligence?",
  ctaText:
    "See how PEVio can deliver audit-ready intelligence for your next deal.",
  ctaButtonLabel: "Get in Touch",
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
      {/* Hero Section — two-panel layout */}
      <section className="flex min-h-[85vh]">
        {/* Left Panel */}
        <div className="flex w-full flex-col justify-center px-8 py-16 md:w-[53%] md:px-20 lg:px-28">
          <div className="mx-auto w-full max-w-md">
            <div className="mb-10 md:hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/Logo_black.png"
                alt="PEVio"
                width={144}
                height={47}
              />
            </div>

            <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {heading}
            </h1>
            <p className="mb-10 text-lg leading-relaxed text-gray-500">
              {tagline}
            </p>
            <Link
              href={ctaButtonLink}
              className="inline-block rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:shadow-lg"
            >
              {ctaButtonLabel}
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

      {/* Features Section */}
      <section className="border-t border-gray-100 bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm"
              >
                <div className="mb-4 text-3xl">{feature.icon}</div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
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
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">
            {ctaHeading}
          </h2>
          <p className="mb-8 text-lg text-gray-500">{ctaText}</p>
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
