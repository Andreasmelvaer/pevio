import { defineType, defineField } from "sanity";

// Keep existing splash page schema for backwards compatibility
export const splashPageSchema = defineType({
  name: "splashPage",
  title: "Splash Page",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      description: "Main heading",
      initialValue: "Due Diligence, Reimagined.",
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "text",
      rows: 3,
      description: "Subheading text below the main heading",
      initialValue:
        "Applied Specialized Intelligence for Private Equity. Decision infrastructure, not data management.",
    }),
    defineField({
      name: "sidebarHeadingLine1",
      title: "Sidebar Heading Line 1",
      type: "string",
      description: "First line of the right panel heading",
      initialValue: "Smarter Deals,",
    }),
    defineField({
      name: "sidebarHeadingLine2",
      title: "Sidebar Heading Line 2",
      type: "string",
      description: "Second line of the right panel heading",
      initialValue: "Trusted Decisions",
    }),
    defineField({
      name: "sidebarBrandName",
      title: "Brand Name",
      type: "string",
      description: "Brand name shown at the bottom of the sidebar",
      initialValue: "PEVio",
    }),
    defineField({
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      description: "Right panel background image",
      options: { hotspot: true },
    }),
    defineField({
      name: "features",
      title: "Feature Highlights",
      type: "array",
      description: "Feature cards shown below the hero section",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "icon", title: "Icon", type: "string", description: "Emoji or icon identifier" }),
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
          ],
          preview: { select: { title: "title", subtitle: "description" } },
        },
      ],
    }),
    defineField({
      name: "ctaHeading",
      title: "CTA Heading",
      type: "string",
      description: "Call-to-action section heading",
      initialValue: "Ready to transform your due diligence?",
    }),
    defineField({
      name: "ctaText",
      title: "CTA Text",
      type: "text",
      rows: 2,
      initialValue: "See how PEVio can deliver audit-ready intelligence for your next deal.",
    }),
    defineField({
      name: "ctaButtonLabel",
      title: "CTA Button Label",
      type: "string",
      initialValue: "Get in Touch",
    }),
    defineField({
      name: "ctaButtonLink",
      title: "CTA Button Link",
      type: "string",
      initialValue: "/contact",
    }),
  ],
  preview: { select: { title: "heading" } },
});

export const productPageSchema = defineType({
  name: "productPage",
  title: "Product Page",
  type: "document",
  fields: [
    // Hero
    defineField({ name: "heroHeading", title: "Hero Heading", type: "string", initialValue: "Applied Specialized Intelligence for Private Equity" }),
    defineField({ name: "heroSubheading", title: "Hero Subheading", type: "text", rows: 2, initialValue: "Decision infrastructure that thinks the way PE professionals think." }),

    // Problem
    defineField({ name: "problemHeading", title: "Problem Section Heading", type: "string", initialValue: "The Diligence Bottleneck" }),
    defineField({ name: "problemDescription", title: "Problem Description", type: "text", rows: 4, initialValue: "Mid-market GPs spend $1–5M per year on manual diligence. Each deal consumes 500–1,100+ partner hours, with 75% of the workflow still manual. Insights are trapped in analysts' heads and lost when teams transition." }),
    defineField({
      name: "problemStats",
      title: "Problem Statistics",
      type: "array",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "metric", title: "Metric", type: "string" }),
          defineField({ name: "label", title: "Label", type: "string" }),
        ],
        preview: { select: { title: "metric", subtitle: "label" } },
      }],
    }),

    // Solution
    defineField({ name: "solutionHeading", title: "Solution Section Heading", type: "string", initialValue: "What PEVio Is" }),
    defineField({ name: "solutionDescription", title: "Solution Description", type: "text", rows: 3, initialValue: "Applied Specialized Intelligence (ASI) for PE — not repurposed general AI. Trained on 1,800+ institutional due diligence questions, PEVio learns your fund's specific investment thesis and decision patterns." }),
    defineField({
      name: "solutionPoints",
      title: "Solution Highlights",
      type: "array",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "title", title: "Title", type: "string" }),
          defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
        ],
        preview: { select: { title: "title" } },
      }],
    }),

    // How It Works
    defineField({ name: "howHeading", title: "How It Works Heading", type: "string", initialValue: "Consensus-Based ASI Architecture" }),
    defineField({
      name: "steps",
      title: "How It Works Steps",
      type: "array",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "title", title: "Title", type: "string" }),
          defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
        ],
        preview: { select: { title: "title" } },
      }],
    }),

    // Lifecycle
    defineField({ name: "lifecycleHeading", title: "Lifecycle Heading", type: "string", initialValue: "Beyond Due Diligence" }),
    defineField({ name: "lifecycleDescription", title: "Lifecycle Description", type: "text", rows: 2, initialValue: "PEVio's value compounds across the complete investment lifecycle." }),
    defineField({
      name: "lifecyclePhases",
      title: "Lifecycle Phases",
      type: "array",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "phase", title: "Phase Name", type: "string" }),
          defineField({ name: "details", title: "Details", type: "text", rows: 2 }),
        ],
        preview: { select: { title: "phase" } },
      }],
    }),

    // Why PEVio
    defineField({ name: "whyHeading", title: "Why PEVio Heading", type: "string", initialValue: "Why PEVio Is Different" }),
    defineField({ name: "whyDescription", title: "Why PEVio Description", type: "text", rows: 3, initialValue: "As general AI commoditizes, specialized intelligence becomes more valuable. PEVio is the decision layer that competitors can't replicate." }),
    defineField({
      name: "differentiators",
      title: "Differentiators",
      type: "array",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "title", title: "Title", type: "string" }),
          defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
        ],
        preview: { select: { title: "title" } },
      }],
    }),
  ],
  preview: { select: { title: "heroHeading" } },
});

export const aboutPageSchema = defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    defineField({ name: "missionHeading", title: "Mission Heading", type: "string", initialValue: "Our Mission" }),
    defineField({ name: "missionText", title: "Mission Statement", type: "text", rows: 4, initialValue: "We believe investment committees deserve specialized intelligence they can trust, explain, and defend. PEVio is building the decision infrastructure that makes every PE deal smarter." }),
    defineField({
      name: "team",
      title: "Team Members",
      type: "array",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "name", title: "Name", type: "string" }),
          defineField({ name: "role", title: "Role", type: "string" }),
          defineField({ name: "bio", title: "Bio", type: "text", rows: 4 }),
          defineField({ name: "photo", title: "Photo", type: "image", options: { hotspot: true } }),
          defineField({ name: "linkedinUrl", title: "LinkedIn URL", type: "url" }),
        ],
        preview: { select: { title: "name", subtitle: "role" } },
      }],
    }),
    defineField({ name: "partnersHeading", title: "Partners Heading", type: "string", initialValue: "Technology Partner" }),
    defineField({
      name: "partners",
      title: "Partners",
      type: "array",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "name", title: "Name", type: "string" }),
          defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
          defineField({ name: "url", title: "Website URL", type: "url" }),
        ],
        preview: { select: { title: "name" } },
      }],
    }),
  ],
  preview: { select: { title: "missionHeading" } },
});

export const contactPageSchema = defineType({
  name: "contactPage",
  title: "Contact Page",
  type: "document",
  fields: [
    defineField({ name: "heading", title: "Heading", type: "string", initialValue: "Get in Touch" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 2, initialValue: "Interested in seeing how PEVio can transform your due diligence? We'd love to hear from you." }),
    defineField({
      name: "contacts",
      title: "Contact Methods",
      type: "array",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "label", title: "Label", type: "string" }),
          defineField({ name: "value", title: "Value", type: "string" }),
          defineField({ name: "type", title: "Type", type: "string", description: "email, phone, or linkedin" }),
        ],
        preview: { select: { title: "label", subtitle: "value" } },
      }],
    }),
    defineField({ name: "formHeading", title: "Form Heading", type: "string", initialValue: "Request a Demo" }),
    defineField({ name: "formDescription", title: "Form Description", type: "text", rows: 2, initialValue: "Tell us about your fund and we'll show you how PEVio works." }),
  ],
  preview: { select: { title: "heading" } },
});

export const contactSubmissionSchema = defineType({
  name: "contactSubmission",
  title: "Contact Submissions",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "company", title: "Company", type: "string" }),
    defineField({ name: "role", title: "Role", type: "string" }),
    defineField({ name: "message", title: "Message", type: "text" }),
    defineField({
      name: "submittedAt",
      title: "Submitted At",
      type: "datetime",
      readOnly: true,
    }),
  ],
  orderings: [
    {
      title: "Newest First",
      name: "submittedAtDesc",
      by: [{ field: "submittedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "name", subtitle: "email" },
  },
});
