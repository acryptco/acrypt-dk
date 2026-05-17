import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CredentialBar from "@/components/CredentialBar";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Acrypt — LCA, EPD & CSRD Consultancy",
  description:
    "Acrypt delivers ISO 14025-certified LCA, EPD, and CSRD compliance reporting for companies that need more than a checkbox.",
  alternates: { canonical: "https://acrypt.dk" },
  openGraph: {
    title: "Acrypt — LCA, EPD & CSRD Consultancy",
    description: "ISO 14025-certified LCA, EPD and CSRD reporting. PhD-led process engineering rigour applied to sustainability measurement.",
    url: "https://acrypt.dk",
  },
};

const sectors = [
  {
    label: "Construction & Real Estate",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    label: "Manufacturing & Industry",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
      </svg>
    ),
  },
  {
    label: "Energy & Utilities",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    label: "Food & Agriculture",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
      </svg>
    ),
  },
  {
    label: "Tech & Consumer Goods",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0H3" />
      </svg>
    ),
  },
  {
    label: "Finance & Investment",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
      </svg>
    ),
  },
];

export default function Home() {
  const jsonLdOrg = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": "https://acrypt.dk/#organization",
    name: "Acrypt",
    url: "https://acrypt.dk",
    description:
      "PhD-led LCA, EPD and CSRD compliance consultancy. ISO 14025-certified Life Cycle Assessments, Environmental Product Declarations, and CSRD reporting for EU companies.",
    foundingDate: "2023",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Copenhagen",
      postalCode: "2100",
      addressCountry: "DK",
    },
    areaServed: { "@type": "Place", name: "European Union" },
    knowsAbout: [
      "Life Cycle Assessment",
      "Environmental Product Declaration",
      "CSRD compliance",
      "Carbon accounting",
      "ISO 14025",
      "EN 15804",
      "GHG Protocol",
      "Scope 3 emissions",
    ],
    sameAs: ["https://www.linkedin.com/company/acrypt"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Sustainability Consulting Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "LCA & EPD Development", url: "https://acrypt.dk/services/lca-epd" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "CSRD Compliance Reporting", url: "https://acrypt.dk/services/csrd" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Carbon Accounting", url: "https://acrypt.dk/services/carbon" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Strategy Development", url: "https://acrypt.dk/services/strategy" } },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdOrg).replace(/</g, "\\u003c"),
        }}
      />

      {/* Hero */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="eyebrow mb-4">LCA · EPD · CSRD</p>
            <h1
              className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6"
              style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}
            >
              Make your environmental footprint measurable. Make it defensible.
            </h1>
            <p className="text-lg leading-relaxed mb-8 max-w-xl" style={{ color: "#5F5E5A" }}>
              Acrypt delivers ISO 14025-certified LCA, EPD, and CSRD compliance
              reporting for companies that need more than a checkbox.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 rounded font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#d4654a" }}
              >
                Book a free consultation
              </Link>
              <Link
                href="/cases"
                className="px-6 py-3 rounded font-semibold border transition-colors hover:bg-[#F7F6F3]"
                style={{ borderColor: "#085041", color: "#085041" }}
              >
                See our work
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Image
              src="/hero-lca.png"
              alt="LCA lifecycle diagram — 9 stages from raw material extraction to end of life"
              width={600}
              height={500}
              priority
              className="w-full max-w-lg"
            />
          </div>
        </div>
      </section>

      {/* Credential bar */}
      <CredentialBar />

      {/* Services overview */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="eyebrow mb-4">What we do</p>
          <h2
            className="text-3xl lg:text-4xl font-bold mb-12 max-w-lg"
            style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}
          >
            Specialist services. Measurable results.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              title="LCA & EPD"
              description="ISO 14025 and EN 15804-compliant Life Cycle Assessments and Environmental Product Declarations, 3rd-party verified and ready to publish."
              href="/services/lca-epd"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                </svg>
              }
            />
            <ServiceCard
              title="CSRD Compliance"
              description="Audit-ready documentation packages for the Corporate Sustainability Reporting Directive: Scope 1, 2, and 3 emissions, product-level EPDs, and third-party verification."
              href="/services/csrd"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
              }
            />
            <ServiceCard
              title="Carbon Accounting"
              description="Precise Scope 1, 2, and 3 emissions inventory aligned with the GHG Protocol, covering baseline, reduction roadmap, and annual reporting."
              href="/services/carbon"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                </svg>
              }
            />
            <ServiceCard
              title="Strategy Development"
              description="ESG materiality assessments, EU Taxonomy alignment, and stakeholder-facing sustainability strategies grounded in quantitative data."
              href="/services/strategy"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* NLMK proof point */}
      <section className="py-20" style={{ backgroundColor: "#042C53" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
          <div className="flex flex-col gap-8">
            {[
              { stat: "EPD", label: "Environdec Published" },
              { stat: "3rd-party", label: "Verified" },
              { stat: "ISO 14025", label: "EN 15804" },
            ].map((item) => (
              <div key={item.stat} className="flex items-baseline gap-4">
                <span
                  className="text-4xl lg:text-5xl font-bold text-white"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {item.stat}
                </span>
                <span
                  className="text-sm text-white/60 uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
          <div>
            <p className="eyebrow mb-4">Case study</p>
            <h2
              className="text-2xl lg:text-3xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              NLMK DanSteel
            </h2>
            <p className="text-white/70 leading-relaxed mb-6">
              Acrypt authored and published a verified Environmental Product
              Declaration and Product Carbon Footprint for NLMK DanSteel's
              hot-rolled steel plate, compliant with ISO 14025 and EN 15804
              standards.
            </p>
            <Link
              href="/cases/nlmk"
              className="inline-flex items-center gap-2 font-semibold text-sm transition-opacity hover:opacity-80"
              style={{ color: "#d4654a" }}
            >
              Read the case →
            </Link>
          </div>
          <div className="hidden lg:block">
            <Image
              src="/dansteel.png"
              alt="NLMK DanSteel steel plant"
              width={600}
              height={900}
              className="w-full rounded-2xl object-cover max-h-80"
            />
          </div>
        </div>
      </section>

      {/* CSRD urgency strip */}
      <section className="py-20" style={{ backgroundColor: "#F7F6F3" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow mb-4">CSRD</p>
            <h2
              className="text-3xl lg:text-4xl font-bold mb-4"
              style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}
            >
              CSRD reporting is no longer optional.
            </h2>
            <p className="leading-relaxed mb-6" style={{ color: "#5F5E5A" }}>
              Large EU companies began mandatory CSRD reporting in 2025.
              Mid-sized companies follow in 2026. Acrypt helps you build the
              LCA and EPD documentation that makes your Scope 1, 2, and 3
              emissions defensible to auditors, investors, and procurement
              teams.
            </p>
            <Link
              href="/services/csrd"
              className="inline-flex items-center gap-2 font-semibold text-sm"
              style={{ color: "#d4654a" }}
            >
              See our CSRD service →
            </Link>
          </div>
          <div
            className="rounded-xl border p-8"
            style={{ backgroundColor: "#ffffff", borderColor: "#E5E3DC" }}
          >
            <div className="space-y-4">
              {[
                { year: "2025", label: "Large EU companies: mandatory CSRD reporting begins" },
                { year: "2026", label: "Mid-sized companies: CSRD obligations commence" },
                { year: "Now", label: "Start building your LCA and EPD documentation" },
              ].map((item) => (
                <div key={item.year} className="flex gap-4 items-start">
                  <span
                    className="flex-shrink-0 text-xs font-bold px-2 py-1 rounded text-white"
                    style={{
                      backgroundColor: item.year === "Now" ? "#d4654a" : "#085041",
                      fontFamily: "var(--font-jetbrains)",
                    }}
                  >
                    {item.year}
                  </span>
                  <p className="text-sm" style={{ color: "#5F5E5A" }}>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sectors served */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="eyebrow mb-4">Sectors</p>
          <h2
            className="text-3xl font-bold mb-12"
            style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}
          >
            Sectors we serve
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sectors.map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-3 p-4 rounded-lg border"
                style={{ borderColor: "#E5E3DC" }}
              >
                <span style={{ color: "#085041" }}>{s.icon}</span>
                <span className="text-sm font-medium" style={{ color: "#1A1A1A" }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20" style={{ backgroundColor: "#085041" }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2
            className="text-3xl lg:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Not sure where to start?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Book a free 30-minute consultation. We'll tell you exactly what your
            CSRD reporting requires and what Acrypt can deliver.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 rounded font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#d4654a" }}
          >
            Book a free consultation
          </Link>
        </div>
      </section>
    </>
  );
}
