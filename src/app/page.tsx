import { getSplashPageData } from "@/sanity/queries";
import { urlFor } from "@/sanity/image";

// Fallback defaults if Sanity has no content yet
const defaults = {
  heading: "Coming Soon",
  tagline:
    "We're building a smarter way to access investment data. Be the first to know when we launch.",
  sidebarHeadingLine1: "Smart Data,",
  sidebarHeadingLine2: "Smarter Investments",
  sidebarBrandName: "PEVio",
};

export const revalidate = 60; // ISR: revalidate every 60 seconds

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

  return (
    <div className="flex min-h-screen">
      {/* Left Panel */}
      <div className="flex w-full flex-col justify-center px-8 py-16 md:w-[53%] md:px-20 lg:px-28">
        <div className="mx-auto w-full max-w-md">
          {/* Logo */}
          <div className="mb-12">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-xl font-bold text-white shadow-lg">
              P
            </div>
          </div>

          {/* Heading */}
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {heading}
          </h1>
          <p className="mb-10 text-lg leading-relaxed text-gray-500">
            {tagline}
          </p>
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
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center px-12 text-center text-white">
          <h2 className="text-3xl font-bold leading-snug lg:text-4xl">
            {sidebarLine1}
            <br />
            {sidebarLine2}
          </h2>
        </div>

        {/* Bottom brand */}
        <p className="absolute bottom-8 z-10 text-sm font-medium tracking-widest text-white/70">
          {brandName}
        </p>
      </div>
    </div>
  );
}
