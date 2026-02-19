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
    <footer className="border-t border-white/5 bg-[#0a0f1a] text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/Logo_white.png" alt="PEVio" width={47} height={16} />
            <p className="mt-4 text-sm leading-relaxed text-gray-500">
              Applied Specialized Intelligence
              <br />
              for Private Equity
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
              Navigation
            </p>
            <div className="flex flex-col gap-3">
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

          {/* Connect */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
              Connect
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.linkedin.com/company/pev-io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                LinkedIn
              </a>
              <a
                href="mailto:hichem@pevio.ai"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                hichem@pevio.ai
              </a>
              <a
                href="mailto:christian@pevio.ai"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                christian@pevio.ai
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-8 text-center text-xs text-gray-600">
          &copy; {new Date().getFullYear()} PEVio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
