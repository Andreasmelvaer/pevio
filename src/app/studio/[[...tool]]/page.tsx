"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { Studio } from "sanity";
import {
  splashPageSchema,
  productPageSchema,
  aboutPageSchema,
  contactPageSchema,
} from "@/sanity/schema";

const config = defineConfig({
  name: "pevio",
  title: "PEVio CMS",
  projectId: "530k9u4t",
  dataset: "production",
  basePath: "/studio",
  plugins: [structureTool()],
  schema: {
    types: [splashPageSchema, productPageSchema, aboutPageSchema, contactPageSchema],
  },
});

export default function StudioPage() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Studio config={config} />
    </div>
  );
}
