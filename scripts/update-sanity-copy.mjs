/**
 * Update all Sanity page documents with the new copy.
 * Run: node scripts/update-sanity-copy.mjs
 */
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "530k9u4t",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: "sktuRj8RY60UK8ggcFw4pbYZMODw0g0UYfHAecMo23QXWMHLI2DUoEImRuydth7ZOZjm52vLQ2lk5Rr0DL3ExEWFr3v5xyRDKfdA2XWhzvwnqPL0qwgxn8VsohtigWDs3KWFEfZhlsapSYwMvVYzPTUWLgsP9PTs2fkOmZ9zK9wA92rsYyDY",
});

async function upsert(type, data) {
  const existing = await client.fetch(`*[_type == "${type}"][0]`);
  if (existing) {
    console.log(`  Updating ${type}...`);
    await client.patch(existing._id).set(data).commit();
  } else {
    console.log(`  Creating ${type}...`);
    await client.create({ _type: type, ...data });
  }
}

async function main() {
  console.log("Updating Sanity content...\n");

  // ── Splash / Home Page ──
  console.log("[Home Page]");
  await upsert("splashPage", {
    heading: "The Investment Committee's Right-Hand System.",
    tagline:
      "PEVio transforms unstructured deal data into IC-ready, auditable intelligence, from first data room access through portfolio exit. Decision infrastructure built by investment professionals, not a chatbot repurposed for finance.",
    sidebarHeadingLine1: "Applied Specialized",
    sidebarHeadingLine2: "Intelligence for PE",
    sidebarBrandName: "PEVio",
    features: [
      {
        _type: "object",
        _key: "explainable",
        icon: "",
        title: "Explainable, Not Black-Box",
        description:
          "Every conclusion is source-linked, traceable, and reviewable. PEVio shows not just what it found, but why, and where that finding came from. Built for IC scrutiny, LP reporting, and regulator confidence.",
      },
      {
        _type: "object",
        _key: "learns-dna",
        icon: "",
        title: "Learns Your Investment DNA",
        description:
          "Each fund's instance is tuned to its own thesis, risk tolerances, and historical decisions. The same data room looks different to different funds, because your strategy and judgement are different.",
      },
      {
        _type: "object",
        _key: "diligence-exit",
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
  });

  // ── About Page ──
  console.log("[About Page]");
  // Fetch existing to preserve photo references
  const existingAbout = await client.fetch(`*[_type == "aboutPage"][0]`);
  const existingTeam = existingAbout?.team || [];

  // Build team array preserving existing photos
  const teamData = [
    {
      name: "Hichem Frija",
      role: "Founder",
      bio: "25+ years in capital markets across Morgan Stanley, Barclays, and Carnegie. Built the #1 ranked European special situations team. 40+ venture investments across technology and infrastructure. Hichem brings the institutional lens: how Investment Committees actually evaluate risk, structure debate, and reach conviction.",
      _key: "hichem-frija",
    },
    {
      name: "Christian A. Hvamstad",
      role: "Founder",
      bio: "Serial founder and former banker across Nordea, SEB, and First Securities. Raised $30m+ across Wastefront and docStribute. Board-level experience scaling ventures from inception to institutional scale. Christian brings the operational discipline: how to build, ship, and scale products that institutional clients depend on.",
      _key: "christian-a-hvamstad",
    },
    {
      name: "Andreas Larsson",
      role: "Technology and Customer Success",
      bio: "20+ years delivering complex B2B SaaS to regulated enterprises. Built Symbrio Norway to 40 enterprise clients and multi-MNOK revenue, leading to acquisition. 50+ enterprise implementations. Andreas ensures that what PEVio promises, it delivers.",
      _key: "andreas-larsson",
    },
  ];

  const mergedTeam = teamData.map((member) => {
    const existing = existingTeam.find(
      (t) => t.name === member.name || t._key === member._key
    );
    return {
      _type: "object",
      _key: member._key,
      name: member.name,
      role: member.role,
      bio: member.bio,
      ...(existing?.photo ? { photo: existing.photo } : {}),
      ...(existing?.linkedinUrl ? { linkedinUrl: existing.linkedinUrl } : {}),
    };
  });

  await upsert("aboutPage", {
    missionHeading: "Why PEVio exists.",
    missionText:
      "PEVio started with a decade-long friendship spent discussing how to build more rigorous companies and more disciplined investment firms. As founders and operators, we watched momentum stall inside diligence, with weeks of work lost in versioned spreadsheets, fragmented VDRs, and manually assembled memos. As investors, we saw signal buried under process, institutional memory walking out the door with individual team members, and decisions shaped by partial recall rather than a single trusted source.\n\nWe did not want to build a faster data room or a smarter spreadsheet. We wanted to build the system that sits beside the Investment Committee: one that transforms unstructured deal information into explainable, auditable judgement, and that gets better with every deal your fund completes.",
    team: mergedTeam,
    partnersHeading: "Technology partner.",
    partners: [
      {
        _type: "object",
        _key: "jiva-ai",
        name: "Jiva.ai",
        description:
          "PEVio's Applied Specialized Intelligence architecture is powered in partnership with Jiva.ai, specialists in multi-model orchestration, consensus-based accuracy, bounded supervised learning, and governance-grade audit trails. This partnership ensures that PEVio's analytical foundation meets the transparency and accountability standards that institutional investors require.",
      },
    ],
  });

  // ── Contact Page ──
  console.log("[Contact Page]");
  await upsert("contactPage", {
    heading: "Start a conversation.",
    description:
      "Whether you are exploring how AI fits into your diligence process, evaluating PEVio for your fund, or interested in learning more about what we are building, we welcome the opportunity to speak. All conversations are treated as confidential.",
    contacts: [
      {
        _type: "object",
        _key: "hichem",
        label: "Hichem Frija",
        value: "hichem@pevio.ai",
        type: "email",
      },
      {
        _type: "object",
        _key: "christian",
        label: "Christian A. Hvamstad",
        value: "christian@pevio.ai",
        type: "email",
      },
    ],
    formHeading: "Request a walkthrough.",
    formDescription:
      "Tell us about your fund and where you are in your evaluation. We will arrange a confidential session tailored to your firm's context.",
  });

  console.log("\n✅ All Sanity content updated!");
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
