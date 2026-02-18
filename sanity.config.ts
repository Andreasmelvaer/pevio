import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { splashPageSchema } from "./src/sanity/schema";

export default defineConfig({
  name: "pevio",
  title: "PEVio CMS",
  projectId: "530k9u4t",
  dataset: "production",
  basePath: "/studio",
  plugins: [structureTool()],
  schema: {
    types: [splashPageSchema],
  },
});
