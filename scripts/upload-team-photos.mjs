/**
 * Upload team photos to Sanity and create/update the About Page document.
 *
 * Run from the project root:
 *   node scripts/upload-team-photos.mjs
 */
import { createClient } from "@sanity/client";
import { createReadStream } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");

const client = createClient({
  projectId: "530k9u4t",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: "sktuRj8RY60UK8ggcFw4pbYZMODw0g0UYfHAecMo23QXWMHLI2DUoEImRuydth7ZOZjm52vLQ2lk5Rr0DL3ExEWFr3v5xyRDKfdA2XWhzvwnqPL0qwgxn8VsohtigWDs3KWFEfZhlsapSYwMvVYzPTUWLgsP9PTs2fkOmZ9zK9wA92rsYyDY",
});

const teamMembers = [
  {
    name: "Hichem Frija",
    role: "Founder",
    bio: "25+ years in capital markets (Morgan Stanley, Barclays, Carnegie). Built the #1 ranked European special situations team. 40+ venture investments across tech and infrastructure.",
    photoFile: "hichem.png",
  },
  {
    name: "Christian A. Hvamstad",
    role: "Founder",
    bio: "Serial founder and former banker (Nordea, SEB, First Securities). Raised $30m+ across Wastefront and docStribute. Board-level experience scaling ventures from inception to institutional scale.",
    photoFile: "christian.png",
  },
  {
    name: "Andreas Larsson",
    role: "Technology & Customer Success",
    bio: "20+ years delivering complex B2B SaaS in regulated enterprises. Built Symbrio Norway to 40 enterprise clients and multi-MNOK revenue, leading to acquisition. Led 50+ implementations.",
    photoFile: "andras.png",
  },
];

async function uploadImage(filePath) {
  const stream = createReadStream(filePath);
  const asset = await client.assets.upload("image", stream, {
    filename: path.basename(filePath),
  });
  console.log(`  ✓ Uploaded ${path.basename(filePath)} → ${asset._id}`);
  return asset._id;
}

async function main() {
  console.log("Uploading team photos to Sanity...\n");

  const teamWithPhotos = [];
  for (const member of teamMembers) {
    const filePath = path.join(projectRoot, "public", member.photoFile);
    const assetId = await uploadImage(filePath);
    teamWithPhotos.push({
      _type: "object",
      _key: member.name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z-]/g, ""),
      name: member.name,
      role: member.role,
      bio: member.bio,
      photo: {
        _type: "image",
        asset: { _type: "reference", _ref: assetId },
      },
    });
  }

  // Check if aboutPage document already exists
  const existing = await client.fetch(`*[_type == "aboutPage"][0]`);

  if (existing) {
    console.log("\nUpdating existing About Page document...");
    await client.patch(existing._id).set({ team: teamWithPhotos }).commit();
  } else {
    console.log("\nCreating About Page document...");
    await client.create({
      _type: "aboutPage",
      missionHeading: "Our Mission",
      missionText:
        "We believe investment committees deserve specialized intelligence they can trust, explain, and defend. PEVio is building the decision infrastructure that makes every PE deal smarter — audit-ready insight from diligence through exit.",
      team: teamWithPhotos,
      partnersHeading: "Technology Partner",
      partners: [
        {
          _type: "object",
          _key: "jiva-ai",
          name: "Jiva.ai",
          description:
            "Powers PEVio's ASI architecture: multi-model orchestration, consensus-based accuracy, bounded supervised learning, and complete audit trails for governance.",
        },
      ],
    });
  }

  console.log("\n✅ Done! Team photos are now in Sanity. Check pevio.ai/about after ~60s.");
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
