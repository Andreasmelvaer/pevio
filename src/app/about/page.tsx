import { getAboutPageData } from "@/sanity/queries";
import { urlFor } from "@/sanity/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — PEVio",
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
  partnersHeading: "Technology partner.",
  partners: [
    {
      name: "Jiva.ai",
      description:
        "PEVio's Applied Specialized Intelligence architecture is powered in partnership with Jiva.ai, specialists in multi-model orchestration, consensus-based accuracy, bounded supervised learning, and governance-grade audit trails. This partnership ensures that PEVio's analytical foundation meets the transparency and accountability standards that institutional investors require.",
      url: undefined as string | undefined,
    },
  ],
};

export default async function AboutPage() {
  const data = await getAboutPageData();

  const missionHeading = data?.missionHeading || defaultData.missionHeading;
  const missionText = data?.missionText || defaultData.missionText;
  const team = data?.team?.length ? data.team : defaultData.team;
  const partnersHeading = data?.partnersHeading || defaultData.partnersHeading;
  const partners = data?.partners?.length ? data.partners : defaultData.partners;

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Built by practitioners, for practitioners.
          </h1>
          <p className="text-lg text-gray-300">
            PEVio brings together decades of capital markets experience, operational execution, and AI innovation around a single conviction: private equity deserves intelligence infrastructure it can trust.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-3xl font-bold text-gray-900">
            {missionHeading}
          </h2>
          {missionText.split("\n\n").map((paragraph, i) => (
            <p
              key={i}
              className="mb-4 text-base leading-relaxed text-gray-500"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="border-t border-gray-100 bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            The team.
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {team.map((member, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-100 bg-white p-8 text-center"
              >
                {/* Photo */}
                <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-blue-500 to-indigo-600">
                  {member.photo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={urlFor(member.photo).width(200).height(200).url()}
                      alt={member.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="text-2xl font-bold text-white">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  )}
                </div>
                <h3 className="mb-1 text-lg font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="mb-4 text-sm font-medium text-blue-600">
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
                    className="mt-4 inline-block text-sm font-medium text-blue-600 hover:text-blue-800"
                  >
                    LinkedIn
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            {partnersHeading}
          </h2>
          <div className="mx-auto max-w-2xl">
            {partners.map((partner, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-100 bg-gray-50 p-8 text-center"
              >
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {partner.name}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  {partner.description}
                </p>
                {partner.url && (
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm font-medium text-blue-600 hover:text-blue-800"
                  >
                    Visit {partner.name}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-100 bg-gray-50 px-6 py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <p className="mb-8 text-base leading-relaxed text-gray-500">
            If you would like to understand more about the team, the technology, or our approach, we are happy to arrange a conversation.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-md transition hover:shadow-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
