/**
 * Upload new square team photos to Sanity, replacing the old ones.
 *
 * Run from the project root:
 *   node scripts/upload-square-photos.mjs
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

const photoMap = [
  { name: "Hichem Frija", file: "Hichem_Square.png" },
  { name: "Christian A. Hvamstad", file: "Christian_square.png" },
  { name: "Andreas Larsson", file: "Andreas_Square.png" },
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
  console.log("Uploading square team photos to Sanity...\n");

  const existing = await client.fetch(`*[_type == "aboutPage"][0]`);
  if (!existing) {
    console.error("No aboutPage document found in Sanity!");
    process.exit(1);
  }

  const updatedTeam = [];
  for (const member of existing.team) {
    const match = photoMap.find((p) => p.name === member.name);
    if (match) {
      const filePath = path.join(projectRoot, "public", match.file);
      const assetId = await uploadImage(filePath);
      updatedTeam.push({
        ...member,
        photo: {
          _type: "image",
          asset: { _type: "reference", _ref: assetId },
        },
      });
    } else {
      updatedTeam.push(member);
    }
  }

  console.log("\nUpdating About Page document with square photos...");
  await client.patch(existing._id).set({ team: updatedTeam }).commit();

  console.log("\n✅ Done! Square photos are now in Sanity.");
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
