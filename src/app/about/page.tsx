import { getAboutPageData } from "@/sanity/queries";
import { urlFor } from "@/sanity/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About \u2014 PEVio",
  description:
    "Built by practitioners, for practitioners. Meet the team behind PEVio.",
};

export const revalidate = 60;

const defaultData = {
  missionHeading: "Why PEVio exists.",
  missionText:
    "PEVio started with a decade-long friendship spent discussing how to build more rigorous companies and more disciplined investment firms. As founders and operators, we watched momentum stall inside diligence, with weeks of work lost in versioned spreadsheets, fragmented VDRs, and manually assembled memos. As investors, we saw signal buried under process, institutional memory walking out the door with individual team members, and decisions shaped by partial recall rather than a single trusted source.\n\nWe did not want to build a faster data room or a smarter spreadsheet. We wanted to build the system that sits beside the Investment Committee: one that transforms unstructured deal information into explainable, auditable judgement, and that gets better with every deal your fund completes.",
  team: [
    {
      name: "Hichem Frija",
      role: "Founder",
      bio: "25+ years in capital markets across Morgan Stanley, Barclays, and Carnegie. Built the #1 ranked European special situations team. 40+ venture investments across technology and infrastructure. Hichem brings the institutional lens: how Investment Committees actually evaluate risk, structure debate, and reach conviction.",
      photo: null as null,
      linkedinUrl: undefined as string | undefined,
    },
    {
      name: "Christian A. Hvamstad",
      role: "Founder",
      bio: "Serial founder and former banker across Nordea, SEB, and First Securities. Raised $30m+ across Wastefront and docStribute. Board-level experience scaling ventures from inception to institutional scale. Christian brings the operational discipline: how to build, ship, and scale products that institutional clients depend on.",
      photo: null as null,
      linkedinUrl: undefined as string | undefined,
    },
    {
      name: "Andreas Larsson",
      role: "Technology and Customer Success",
      bio: "20+ years delivering complex B2B SaaS to regulated enterprises. Built Symbrio Norway to 40 enterprise clients and multi-MNOK revenue, leading to acquisition. 50+ enterprise implementations. Andreas ensures that what PEVio promises, it delivers.",
      photo: null as null,
      linkedinUrl: undefined as string | undefined,
    },
  ],
  partnersHeading: "Technology",
  partnersSubheading: "Purpose-built for private markets. Engineered for accountable decisions.",
  partnersDescription: "PEVio is architected specifically for private equity and growth capital environments, not retrofitted from a general-purpose AI stack.\n\nThe platform deploys multiple domain-specific intelligence engines operating in parallel across financial analysis, legal risk, commercial assessment, and regulatory context. Each output is cross-validated against structured investment frameworks and reconciled into a traceable, source-linked conclusion.\n\nThe learning architecture is intentionally bounded. PEVio adapts to a fund\u2019s historical decisions and realised outcomes, but only within predefined governance parameters and with human validation embedded at each stage of the workflow.\n\nEvery recommendation is auditable. Every conclusion is attributable. Human override remains explicit.\n\nSecurity and data governance are designed to institutional standards, with deployment models supporting on-premise, private cloud or sovereign infrastructure requirements.",
  partners: [],
};

const localPhotos: Record<string, string> = {
  "Hichem Frija": "/Hichem_Square.jpg",
  "Christian A. Hvamstad": "/Christian_square.jpg",
  "Andreas Larsson": "/Andreas_Square.jpg",
};

export default async function AboutPage() {
  const data = await getAboutPageData();

  const missionHeading = data?.missionHeading || defaultData.missionHeading;
  const missionText = data?.missionText || defaultData.missionText;
  const team = data?.team?.length ? data.team : defaultData.team;
  const partnersHeading = defaultData.partnersHeading;
  const partnersSubheading = defaultData.partnersSubheading;
  const partnersDescription = defaultData.partnersDescription;

  return (
    <>
      {/* Hero */}
      <section className="hero-dark noise-overlay px-6 py-28 text-center text-white">
        <div className="relative z-10 mx-auto max-w-3xl">
          <div className="mb-6 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
            <span className="text-xs font-semibold tracking-wide text-blue-300">
              About
            </span>
          </div>
          <h1 className="mb-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Built by practitioners, for practitioners.
          </h1>
          <p className="text-lg leading-relaxed text-gray-400">
            PEVio brings together decades of capital markets experience, operational execution, and AI innovation around a single conviction: private equity deserves intelligence infrastructure it can trust.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-8 text-3xl font-bold tracking-tight text-gray-900">
            {missionHeading}
          </h2>
          {missionText.split("\n\n").map((paragraph, i) => (
            <p
              key={i}
              className="mb-5 text-[15px] leading-relaxed text-gray-500"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-gray-50/50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-14 text-center text-3xl font-bold tracking-tight text-gray-900">
            The team.
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {team.map((member, i) => (
              <div
                key={i}
                className="card-hover overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
              >
                {/* Photo */}
                <div className="flex aspect-square items-center justify-center bg-gradient-to-br from-gray-100 to-gray-50">
                  {localPhotos[member.name] ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={localPhotos[member.name]}
                      alt={member.name}
                      className="h-full w-full object-cover object-center"
                    />
                  ) : member.photo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={urlFor(member.photo).width(400).height(400).url()}
                      alt={member.name}
                      className="h-full w-full object-cover object-center"
                    />
                  ) : (
                    <span className="text-4xl font-bold text-gray-300">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  )}
                </div>
                <div className="p-8">
                  <h3 className="mb-1 text-base font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-blue-600">
                    {member.role}
                  </p>
                  <p className="text-sm leading-relaxed text-gray-500">
                    {member.bio}
                  </p>
                  {member.linkedinUrl && (
                    <a
                      href={member.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block text-sm font-medium text-gray-400 transition-colors hover:text-blue-600"
                    >
                      LinkedIn &rarr;
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-14 text-center text-3xl font-bold tracking-tight text-gray-900">
            {partnersHeading}
          </h2>
          <div className="mx-auto max-w-2xl rounded-2xl border border-gray-100 bg-gray-50/50 p-10">
            <h3 className="mb-6 text-center text-xl font-semibold text-gray-900">
              {partnersSubheading}
            </h3>
            {partnersDescription.split("\n\n").map((paragraph, i) => (
              <p
                key={i}
                className="mb-4 text-sm leading-relaxed text-gray-500"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-dark noise-overlay px-6 py-24 text-center">
        <div className="relative z-10 mx-auto max-w-xl">
          <p className="mb-8 text-[15px] leading-relaxed text-gray-400">
            If you would like to understand more about the team, the technology, or our approach, we are happy to arrange a conversation.
          </p>
          <Link
            href="/contact"
            className="btn-primary inline-block rounded-full px-8 py-3.5 text-sm font-semibold text-white"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
