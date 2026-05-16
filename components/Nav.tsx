"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const services = [
  { label: "LCA & EPD", href: "/services/lca-epd" },
  { label: "CSRD Compliance", href: "/services/csrd" },
  { label: "Carbon Accounting", href: "/services/carbon" },
  { label: "Strategy Development", href: "/services/strategy" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header
      style={{ backgroundColor: "#085041" }}
      className="sticky top-0 z-50 shadow-sm"
    >
      <nav
        className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16"
        aria-label="Primary navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <Image
            src="/acrypt-logo.png"
            alt="Acrypt logo"
            width={36}
            height={36}
          />
          <span
            style={{ fontFamily: "var(--font-playfair)", color: "#ffffff" }}
            className="text-xl font-bold tracking-tight"
          >
            Acrypt
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink href="/about">About</NavLink>

          {/* Services dropdown */}
          <div className="relative">
            <button
              className="flex items-center gap-1 text-sm font-medium text-white/90 hover:text-white transition-colors"
              onClick={() => setServicesOpen((v) => !v)}
              onBlur={() => setTimeout(() => setServicesOpen(false), 150)}
            >
              Services
              <svg
                className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesOpen && (
              <div
                className="absolute top-full left-0 mt-2 w-52 rounded-lg shadow-xl border overflow-hidden z-50"
                style={{ backgroundColor: "#ffffff", borderColor: "#E5E3DC" }}
              >
                <Link
                  href="/services"
                  className="block px-4 py-2.5 text-sm font-medium border-b"
                  style={{
                    color: "#085041",
                    borderColor: "#E5E3DC",
                  }}
                  onClick={() => setServicesOpen(false)}
                >
                  All Services
                </Link>
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block px-4 py-2.5 text-sm hover:bg-[#F7F6F3] transition-colors"
                    style={{ color: "#1A1A1A" }}
                    onClick={() => setServicesOpen(false)}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavLink href="/cases">Cases</NavLink>
          <NavLink href="/articles">Articles</NavLink>
          <NavLink href="/contact">Contact</NavLink>

          <Link
            href="/contact?service=csrd"
            className="ml-2 px-4 py-2 rounded text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#d4654a" }}
          >
            Book consultation
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t"
          style={{ borderColor: "#0a6354", backgroundColor: "#085041" }}
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            <MobileLink href="/about" onClick={() => setOpen(false)}>About</MobileLink>
            <MobileLink href="/services" onClick={() => setOpen(false)}>All Services</MobileLink>
            {services.map((s) => (
              <MobileLink key={s.href} href={s.href} onClick={() => setOpen(false)} sub>
                {s.label}
              </MobileLink>
            ))}
            <MobileLink href="/cases" onClick={() => setOpen(false)}>Cases</MobileLink>
            <MobileLink href="/articles" onClick={() => setOpen(false)}>Articles</MobileLink>
            <MobileLink href="/contact" onClick={() => setOpen(false)}>Contact</MobileLink>
            <Link
              href="/contact?service=csrd"
              className="mt-2 px-4 py-2.5 rounded text-sm font-semibold text-white text-center"
              style={{ backgroundColor: "#d4654a" }}
              onClick={() => setOpen(false)}
            >
              Book consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-sm font-medium text-white/90 hover:text-white transition-colors"
    >
      {children}
    </Link>
  );
}

function MobileLink({
  href,
  children,
  onClick,
  sub,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
  sub?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`text-sm font-medium text-white/90 hover:text-white transition-colors ${sub ? "pl-4 text-white/70" : ""}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
