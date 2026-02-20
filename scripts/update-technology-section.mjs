/**
 * Update the About Page in Sanity: remove Jiva.ai partner, update heading to Technology.
 *
 * Run from the project root:
 *   node scripts/update-technology-section.mjs
 */
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "530k9u4t",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: "sktuRj8RY60UK8ggcFw4pbYZMODw0g0UYfHAecMo23QXWMHLI2DUoEImRuydth7ZOZjm52vLQ2lk5Rr0DL3ExEWFr3v5xyRDKfdA2XWhzvwnqPL0qwgxn8VsohtigWDs3KWFEfZhlsapSYwMvVYzPTUWLgsP9PTs2fkOmZ9zK9wA92rsYyDY",
});

async function main() {
  const existing = await client.fetch(`*[_type == "aboutPage"][0]`);
  if (!existing) {
    console.error("No aboutPage document found in Sanity!");
    process.exit(1);
  }

  console.log("Current partners:", JSON.stringify(existing.partners, null, 2));
  console.log("\nRemoving Jiva.ai and updating heading...");

  await client
    .patch(existing._id)
    .set({
      partnersHeading: "Technology",
    })
    .unset(["partners"])
    .commit();

  // Verify
  const updated = await client.fetch(`*[_type == "aboutPage"][0]{partnersHeading, partners}`);
  console.log("\nAfter update:", JSON.stringify(updated, null, 2));
  console.log("\n✅ Done! Jiva.ai removed from Sanity.");
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
