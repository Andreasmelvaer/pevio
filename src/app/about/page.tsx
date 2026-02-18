import { getAboutPageData } from "@/sanity/queries";
import { urlFor } from "@/sanity/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — PEVio",
  description: "Meet the team behind PEVio. Capital markets veterans and deep tech experts.",
};

export const revalidate = 60;

const defaultData = {
  missionHeading: "Our Mission",
  missionText:
    "We believe investment committees deserve specialized intelligence they can trust, explain, and defend. PEVio is building the decision infrastructure that makes every PE deal smarter — audit-ready insight from diligence through exit.",
  team: [
    {
      name: "Hichem Frija",
      role: "Founder",
      bio: "25+ years in capital markets (Morgan Stanley, Barclays, Carnegie). Built the #1 ranked European special situations team. 40+ venture investments across tech and infrastructure.",
      photo: null as null,
      linkedinUrl: undefined as string | undefined,
    },
    {
      name: "Christian A. Hvamstad",
      role: "Founder",
      bio: "Serial founder and former banker (Nordea, SEB, First Securities). Raised $30m+ across Wastefront and docStribute. Board-level experience scaling ventures from inception to institutional scale.",
      photo: null as null,
      linkedinUrl: undefined as string | undefined,
    },
    {
      name: "Andreas Larsson",
      role: "Technology & Customer Success",
      bio: "20+ years delivering complex B2B SaaS in regulated enterprises. Built Symbrio Norway to 40 enterprise clients and multi-MNOK revenue, leading to acquisition. Led 50+ implementations.",
      photo: null as null,
      linkedinUrl: undefined as string | undefined,
    },
  ],
  partnersHeading: "Technology Partner",
  partners: [
    {
      name: "Jiva.ai",
      description:
        "Powers PEVio's ASI architecture: multi-model orchestration, consensus-based accuracy, bounded supervised learning, and complete audit trails for governance.",
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
            Capital Markets Veterans &amp; Deep Tech Experts
          </h1>
          <p className="text-lg text-gray-300">
            Building the decision infrastructure for Private Equity
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">{missionHeading}</h2>
          <p className="text-lg leading-relaxed text-gray-500">{missionText}</p>
        </div>
      </section>

      {/* Team */}
      <section className="border-t border-gray-100 bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">The Team</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {team.map((member, i) => (
              <div key={i} className="rounded-xl border border-gray-100 bg-white p-8 text-center">
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
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  )}
                </div>
                <h3 className="mb-1 text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="mb-4 text-sm font-medium text-blue-600">{member.role}</p>
                <p className="text-sm leading-relaxed text-gray-500">{member.bio}</p>
                {member.linkedinUrl && (
                  <a
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm font-medium text-blue-600 hover:text-blue-800"
                  >
                    Connect on LinkedIn &rarr;
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
              <div key={i} className="rounded-xl border border-gray-100 bg-gray-50 p-8 text-center">
                <h3 className="mb-3 text-xl font-semibold text-gray-900">{partner.name}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{partner.description}</p>
                {partner.url && (
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm font-medium text-blue-600 hover:text-blue-800"
                  >
                    Visit {partner.name} &rarr;
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
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            Want to learn more?
          </h2>
          <p className="mb-8 text-lg text-gray-500">
            Get in touch to see how PEVio can work for your fund.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-md transition hover:shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
