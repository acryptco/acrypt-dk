import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ESG Reporting Frameworks: Which One Should You Use?",
  description:
    "GRI, ISSB, CSRD, SASB, TCFD: the ESG framework landscape is crowded. A practical guide to understanding the differences and choosing the right approach for your organisation.",
  alternates: { canonical: "https://acrypt.dk/articles/esg-reporting-frameworks" },
  openGraph: {
    title: "ESG Reporting Frameworks: Which One Should You Use? | Acrypt",
    description: "GRI, ISSB, CSRD, SASB, TCFD compared. How to choose the right framework based on your stakeholders, jurisdiction, and reporting goals.",
    url: "https://acrypt.dk/articles/esg-reporting-frameworks",
  },
};

export default function EsgFrameworksPage() {
  return (
    <>
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link href="/articles" className="inline-flex items-center gap-2 text-sm mb-8 transition-opacity hover:opacity-70" style={{ color: "#5F5E5A" }}>
            ← All articles
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex gap-2 mb-6">
                {["CSRD", "ESG"].map((c) => (
                  <span key={c} className="text-xs font-bold px-2 py-0.5 rounded" style={{ backgroundColor: "#F7F6F3", color: "#d4654a", fontFamily: "var(--font-jetbrains)" }}>{c}</span>
                ))}
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}>
                ESG Reporting Frameworks: Which One Should You Use?
              </h1>
              <p className="text-lg leading-relaxed" style={{ color: "#5F5E5A" }}>
                The ESG reporting landscape has multiple frameworks: GRI, ISSB, CSRD/ESRS, SASB, TCFD, CDP. They share similar objectives but serve different audiences and carry different obligations. Choosing the right one depends on your jurisdiction, stakeholders, and what you are trying to demonstrate.
              </p>
            </div>
            <div className="hidden lg:flex flex-col items-center justify-center gap-3">
              <Image
                src="/esg-frameworks.png"
                alt="ESG reporting frameworks timeline"
                width={600}
                height={500}
                priority
                className="w-full max-w-lg rounded-2xl"
              />
              <p className="text-xs max-w-lg" style={{ color: "#5F5E5A" }}>
                ESG reporting frameworks timeline. Source: Johannesburg Stock Exchange (2021)
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "#F7F6F3" }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-10">

          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}>The main frameworks compared</h2>
            <div className="space-y-4">
              {[
                { name: "CSRD / ESRS", audience: "EU-regulated companies", focus: "Double materiality: impact on the world AND financial risk. Mandatory for large EU companies from 2025, mid-sized from 2026. The most comprehensive and legally binding framework for European companies.", tag: "Mandatory (EU)" },
                { name: "GRI", audience: "Any organisation, globally", focus: "Impact materiality: how the organisation affects the environment and society. Widely used for voluntary sustainability reporting. Strong on stakeholder transparency.", tag: "Voluntary" },
                { name: "ISSB / IFRS S1 & S2", audience: "Capital market participants", focus: "Financial materiality: sustainability risks and opportunities relevant to investors. Climate disclosure under IFRS S2 is being adopted by capital markets regulators globally.", tag: "Voluntary / Regulatory" },
                { name: "SASB", audience: "Industry-specific reporting", focus: "Financial materiality, sector-specific metrics. Useful for investor-focused reporting and as a supplement to broader frameworks. Now integrated into IFRS Foundation.", tag: "Voluntary" },
                { name: "TCFD", audience: "Climate risk disclosure", focus: "Governance, strategy, risk management, and metrics/targets for climate-related financial risks. Widely adopted and increasingly embedded in regulatory requirements.", tag: "Voluntary / Regulatory" },
                { name: "CDP", audience: "Supply chain and investor disclosure", focus: "Questionnaire-based disclosure on climate, water, and forests. Scores are used by buyers and investors. Increasingly required by procurement teams.", tag: "Voluntary" },
              ].map((f) => (
                <div key={f.name} className="p-5 rounded-xl bg-white border" style={{ borderColor: "#E5E3DC" }}>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <span className="font-bold" style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}>{f.name}</span>
                    <span className="text-xs px-2 py-0.5 rounded flex-shrink-0" style={{ backgroundColor: "#F7F6F3", color: "#d4654a", fontFamily: "var(--font-jetbrains)" }}>{f.tag}</span>
                  </div>
                  <span className="block text-xs mb-2" style={{ color: "#5F5E5A", fontFamily: "var(--font-jetbrains)" }}>Audience: {f.audience}</span>
                  <p className="text-sm leading-relaxed" style={{ color: "#5F5E5A" }}>{f.focus}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}>How to choose</h2>
            <p className="leading-relaxed mb-4" style={{ color: "#1A1A1A" }}>
              For EU-headquartered companies or subsidiaries of EU groups, CSRD/ESRS is the starting point. It is a legal requirement, not a choice. The double materiality assessment required by ESRS can then be mapped to GRI and TCFD disclosures with relatively little additional effort, since the underlying data overlaps significantly.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: "#1A1A1A" }}>
              For companies outside the EU, or those reporting voluntarily ahead of regulation, the choice depends on your primary audience. If your stakeholders are investors, ISSB/IFRS S1&S2 is the relevant standard. If your primary audience is procurement teams, CDP disclosure alongside Scope 3 data is more useful. If you are reporting for a broad stakeholder audience, GRI provides the most comprehensive coverage.
            </p>
            <p className="leading-relaxed" style={{ color: "#1A1A1A" }}>
              The practical reality is that most organisations operating across multiple stakeholder groups will use more than one framework. The key is to build a single, well-structured data collection process that feeds multiple reporting outputs, rather than running separate programmes for each framework.
            </p>
          </div>

        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: "#085041" }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
            Not sure which framework applies to you?
          </h2>
          <p className="text-white/70 mb-8">
            Acrypt can map your reporting obligations, identify which frameworks apply, and design a data collection process that satisfies all of them efficiently.
          </p>
          <Link href="/contact?service=csrd" className="inline-block px-8 py-4 rounded font-semibold text-white transition-opacity hover:opacity-90" style={{ backgroundColor: "#d4654a" }}>
            Book a free consultation
          </Link>
        </div>
      </section>
    </>
  );
}
