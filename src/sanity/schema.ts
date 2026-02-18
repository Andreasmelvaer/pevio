// Sanity Studio schema for the splash page
// Import this in your Sanity Studio's schema configuration
//
// This file is a REFERENCE for setting up the schema in your
// Sanity Studio project. Copy the schema definition below into
// your Sanity Studio's schemaTypes folder.

export const splashPageSchema = {
  name: "splashPage",
  title: "Splash Page",
  type: "document",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
      description: "Main heading (e.g. 'Coming Soon')",
      initialValue: "Coming Soon",
    },
    {
      name: "tagline",
      title: "Tagline",
      type: "text",
      rows: 3,
      description: "Subheading text below the main heading",
      initialValue:
        "We're building a smarter way to access investment data. Be the first to know when we launch.",
    },
    {
      name: "sidebarHeadingLine1",
      title: "Sidebar Heading Line 1",
      type: "string",
      description: "First line of the right panel heading",
      initialValue: "Smart Data,",
    },
    {
      name: "sidebarHeadingLine2",
      title: "Sidebar Heading Line 2",
      type: "string",
      description: "Second line of the right panel heading",
      initialValue: "Smarter Investments",
    },
    {
      name: "sidebarBrandName",
      title: "Brand Name",
      type: "string",
      description: "Brand name shown at the bottom of the sidebar",
      initialValue: "PEVio",
    },
    {
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      description: "Right panel background image",
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: "heading",
    },
  },
};
