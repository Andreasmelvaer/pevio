import { client } from "./client";

export interface SplashPageData {
  heading: string;
  tagline: string;
  sidebarHeadingLine1: string;
  sidebarHeadingLine2: string;
  sidebarBrandName: string;
  backgroundImage?: {
    asset: {
      _ref: string;
    };
  };
}

const SPLASH_QUERY = `*[_type == "splashPage"][0]{
  heading,
  tagline,
  sidebarHeadingLine1,
  sidebarHeadingLine2,
  sidebarBrandName,
  backgroundImage
}`;

export async function getSplashPageData(): Promise<SplashPageData | null> {
  return client.fetch(SPLASH_QUERY);
}
