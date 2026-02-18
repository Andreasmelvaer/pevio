"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const footerLinks = [
  { label: "Product", href: "/product" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const pathname = usePathname();

  if (pathname?.startsWith("/studio")) return null;

  return (
    <footer className="border-t border-gray-100 bg-gray-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Logo_white.png"
              alt="PEVio"
              width={94}
              height={31}
            />
            <p className="mt-3 text-sm text-gray-400">
              Applied Specialized Intelligence for Private Equity
            </p>
          </div>

          <div className="flex gap-8">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} PEVio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
