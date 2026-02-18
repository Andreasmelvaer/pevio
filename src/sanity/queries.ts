import { client } from "./client";

// ── Home / Splash Page ──────────────────────────────────────────────
export interface SplashPageData {
  heading: string;
  tagline: string;
  sidebarHeadingLine1: string;
  sidebarHeadingLine2: string;
  sidebarBrandName: string;
  backgroundImage?: { asset: { _ref: string } };
  features?: { icon: string; title: string; description: string }[];
  ctaHeading?: string;
  ctaText?: string;
  ctaButtonLabel?: string;
  ctaButtonLink?: string;
}

const SPLASH_QUERY = `*[_type == "splashPage"][0]{
  heading, tagline, sidebarHeadingLine1, sidebarHeadingLine2, sidebarBrandName,
  backgroundImage, features, ctaHeading, ctaText, ctaButtonLabel, ctaButtonLink
}`;

export async function getSplashPageData(): Promise<SplashPageData | null> {
  return client.fetch(SPLASH_QUERY);
}

// ── Product Page ────────────────────────────────────────────────────
export interface ProductPageData {
  heroHeading: string;
  heroSubheading: string;
  problemHeading: string;
  problemDescription: string;
  problemStats?: { metric: string; label: string }[];
  solutionHeading: string;
  solutionDescription: string;
  solutionPoints?: { title: string; description: string }[];
  howHeading: string;
  steps?: { title: string; description: string }[];
  lifecycleHeading: string;
  lifecycleDescription: string;
  lifecyclePhases?: { phase: string; details: string }[];
  whyHeading: string;
  whyDescription: string;
  differentiators?: { title: string; description: string }[];
}

const PRODUCT_QUERY = `*[_type == "productPage"][0]{
  heroHeading, heroSubheading,
  problemHeading, problemDescription, problemStats,
  solutionHeading, solutionDescription, solutionPoints,
  howHeading, steps,
  lifecycleHeading, lifecycleDescription, lifecyclePhases,
  whyHeading, whyDescription, differentiators
}`;

export async function getProductPageData(): Promise<ProductPageData | null> {
  return client.fetch(PRODUCT_QUERY);
}

// ── About Page ──────────────────────────────────────────────────────
export interface AboutPageData {
  missionHeading: string;
  missionText: string;
  team?: {
    name: string;
    role: string;
    bio: string;
    photo?: { asset: { _ref: string } };
    linkedinUrl?: string;
  }[];
  partnersHeading: string;
  partners?: { name: string; description: string; url?: string }[];
}

const ABOUT_QUERY = `*[_type == "aboutPage"][0]{
  missionHeading, missionText,
  team[]{ name, role, bio, photo, linkedinUrl },
  partnersHeading, partners
}`;

export async function getAboutPageData(): Promise<AboutPageData | null> {
  return client.fetch(ABOUT_QUERY);
}

// ── Contact Page ────────────────────────────────────────────────────
export interface ContactPageData {
  heading: string;
  description: string;
  contacts?: { label: string; value: string; type: string }[];
  formHeading: string;
  formDescription: string;
}

const CONTACT_QUERY = `*[_type == "contactPage"][0]{
  heading, description, contacts, formHeading, formDescription
}`;

export async function getContactPageData(): Promise<ContactPageData | null> {
  return client.fetch(CONTACT_QUERY);
}
