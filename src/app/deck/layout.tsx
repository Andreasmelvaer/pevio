import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PEVio — Investor Deck",
  description: "Confidential investor materials",
  robots: { index: false, follow: false },
};

export default function DeckLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
