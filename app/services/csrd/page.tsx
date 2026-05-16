import type { Metadata } from "next";
import Link from "next/link";
import CsrdFaq from "@/components/CsrdFaq";
import { faqs } from "@/lib/csrdFaqs";

export const metadata: Metadata = {
  title: "CSRD Compliance Reporting",
  description:
    "Audit-ready CSRD documentation: Scope 1, 2 & 3 emissions, product-level EPDs, and third-party verified LCA data. Built for EU companies facing mandatory reporting from 2025.",
  alternates: { canonical: "https://acrypt.dk/services/csrd" },
  openGraph: {
    title: "CSRD Compliance Reporting | Acrypt",
    description:
      "Audit-ready CSRD documentation: Scope 1, 2 & 3 emissions, product-level EPDs, and third-party verified LCA data.",
    url: "https://acrypt.dk/services/csrd",
  },
};

export default function CsrdPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://acrypt.dk" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://acrypt.dk/services" },
      { "@type": "ListItem", position: 3, name: "CSRD Compliance", item: "https://acrypt.dk/services/csrd" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }}
      />

      {/* Hero — dark navy */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#042C53" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 max-w-3xl">
          <p className="eyebrow mb-4">CSRD Compliance</p>
          <h1
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Your CSRD reporting deadline is closer than you think.
          </h1>
          <p className="text-lg text-white/70 leading-relaxed mb-10">
            The Corporate Sustainability Reporting Directive requires large EU
            companies to report verified environmental data from 2025.
            Mid-sized companies follow in 2026. Acrypt builds the LCA and EPD
            documentation that makes your disclosure audit-ready.
          </p>
          <Link
            href="/contact?service=csrd"
            className="inline-block px-8 py-4 rounded font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#d4654a" }}
          >
            Book a free CSRD consultation
          </Link>
        </div>
      </section>

      {/* What CSRD requires */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="eyebrow mb-4">What CSRD requires</p>
          <h2
            className="text-3xl font-bold mb-12"
            style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}
          >
            Three data requirements that need technical precision.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Scope 1, 2 & 3 emissions baseline",
                desc: "A complete greenhouse gas inventory covering direct emissions (Scope 1), purchased energy (Scope 2), and value chain emissions (Scope 3). Scope 3 alone typically represents 70–90% of a company's total footprint and requires engagement with suppliers and product lifecycle data.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                  </svg>
                ),
              },
              {
                title: "Product-level EPD documentation",
                desc: "CSRD's ESRS E5 standard requires product-level environmental data. For manufacturers and material suppliers, this means completed, published EPDs for key product lines, not estimates or industry averages.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                  </svg>
                ),
              },
              {
                title: "Third-party verified LCA data",
                desc: "Self-reported environmental claims are not CSRD-compliant. The directive requires data that has been independently verified, which means the underlying LCA must be conducted in conformance with ISO 14040/44 and reviewed by an accredited third party.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                  </svg>
                ),
              },
            ].map((col) => (
              <div key={col.title} className="flex flex-col gap-4">
                <span style={{ color: "#085041" }}>{col.icon}</span>
                <h3
                  className="text-xl font-bold"
                  style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}
                >
                  {col.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#5F5E5A" }}>
                  {col.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Acrypt approach — 4-step timeline */}
      <section className="py-20" style={{ backgroundColor: "#F7F6F3" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="eyebrow mb-4">The Acrypt approach</p>
          <h2
            className="text-3xl font-bold mb-12"
            style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}
          >
            A four-step path to audit-ready disclosure.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { n: "1", title: "Scoping", desc: "Identify reporting boundaries, applicable ESRS standards, and data requirements. Define what is in scope and what is not, before any data collection begins." },
              { n: "2", title: "Data collection", desc: "Structured Scope 1, 2, and 3 emissions inventory. Primary data from operations, secondary data from the supply chain. All gaps identified and documented." },
              { n: "3", title: "LCA & EPD", desc: "ISO 14025-compliant product declarations for key product lines. Third-party verification coordination. Publication on a recognised EPD programme." },
              { n: "4", title: "Report", desc: "Audit-ready CSRD documentation package. All data traceable, all methodological choices disclosed, all third-party verification certificates included." },
            ].map((step) => (
              <div key={step.n} className="p-6 rounded-xl bg-white border" style={{ borderColor: "#E5E3DC" }}>
                <span
                  className="block text-3xl font-bold mb-4"
                  style={{ color: "#d4654a", fontFamily: "var(--font-jetbrains)" }}
                >
                  {step.n}
                </span>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#5F5E5A" }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NLMK proof */}
      <section className="py-16" style={{ backgroundColor: "#042C53" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="eyebrow mb-6">Proof of delivery</p>
          <div
            className="rounded-xl p-8"
            style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <span
                  className="block text-xs font-bold text-white/50 mb-1 uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                  Client
                </span>
                <h3
                  className="text-2xl font-bold text-white mb-1"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  NLMK DanSteel A/S
                </h3>
                <p className="text-white/60 text-sm mb-4">Steel manufacturing · Hot-rolled uncoated steel plate</p>
                <div className="flex flex-wrap gap-2">
                  {["ISO 14025", "EN 15804", "3rd-party verified", "Published"].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded border border-white/20 text-white/70"
                      style={{ fontFamily: "var(--font-jetbrains)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <span
                  className="block text-xs font-bold text-white/50 mb-3 uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                  Deliverables
                </span>
                <ul className="space-y-2 text-sm text-white/80">
                  <li>· Environmental Product Declaration (EPD)</li>
                  <li>· Product Carbon Footprint (PCF)</li>
                  <li>· Third-party verification coordination</li>
                  <li>· Publication on international EPD programme</li>
                </ul>
                <Link
                  href="/cases/nlmk"
                  className="inline-flex items-center gap-2 mt-6 font-semibold text-sm transition-opacity hover:opacity-80"
                  style={{ color: "#d4654a" }}
                >
                  Read the full case →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — client accordion with server-rendered FAQ JSON-LD above */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 max-w-3xl">
          <p className="eyebrow mb-4">FAQ</p>
          <h2
            className="text-3xl font-bold mb-10"
            style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}
          >
            Common questions
          </h2>
          <CsrdFaq />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20" style={{ backgroundColor: "#F7F6F3" }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}
          >
            Not sure where to start? Start with a conversation.
          </h2>
          <p className="leading-relaxed mb-8" style={{ color: "#5F5E5A" }}>
            Book a free 30-minute consultation. We'll tell you exactly what your
            CSRD reporting requires and what Acrypt can deliver.
          </p>
          <Link
            href="/contact?service=csrd"
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
