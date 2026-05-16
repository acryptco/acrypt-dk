import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#085041" }} className="text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <Image
                src="/acrypt-logo.png"
                alt="Acrypt logo"
                width={36}
                height={36}
              />
              <span
                style={{ fontFamily: "var(--font-playfair)" }}
                className="text-xl font-bold"
              >
                Acrypt
              </span>
            </div>
            <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-xs">
              Precision sustainability consulting — ISO-certified LCA, EPD, and
              CSRD reporting built on process engineering rigour.
            </p>
          </div>

          {/* Company links */}
          <div>
            <h3
              className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-4"
              style={{ fontFamily: "var(--font-jetbrains)" }}
            >
              Company
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "About", href: "/about" },
                { label: "Cases", href: "/cases" },
                { label: "Articles", href: "/articles" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div>
            <h3
              className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-4"
              style={{ fontFamily: "var(--font-jetbrains)" }}
            >
              Services
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "LCA & EPD", href: "/services/lca-epd" },
                { label: "CSRD Compliance", href: "/services/csrd" },
                { label: "Carbon Accounting", href: "/services/carbon" },
                { label: "Strategy Development", href: "/services/strategy" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact info row */}
        <div
          className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
          style={{ borderColor: "#0a6354" }}
        >
          <div className="text-sm text-white/60 space-y-1">
            <p>Copenhagen, Denmark 2100</p>
            <a
              href="https://www.linkedin.com/company/acrypt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn →
            </a>
          </div>
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Acrypt · acrypt.dk
          </p>
        </div>
      </div>
    </footer>
  );
}
