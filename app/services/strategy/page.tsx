import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sustainability Strategy Development",
  description:
    "ESG materiality assessments, EU Taxonomy alignment, and sustainability strategies built on quantitative LCA and emissions data, not ambition statements.",
  alternates: { canonical: "https://acrypt.dk/services/strategy" },
  openGraph: {
    title: "Sustainability Strategy Development | Acrypt",
    description: "Double materiality assessments, EU Taxonomy alignment, and stakeholder reporting grounded in verified LCA and emissions data.",
    url: "https://acrypt.dk/services/strategy",
  },
};

export default function StrategyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 max-w-3xl">
          <p className="eyebrow mb-4">Strategy Development</p>
          <h1
            className="text-4xl lg:text-5xl font-bold mb-6"
            style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}
          >
            A sustainability strategy built on data, not declarations.
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#5F5E5A" }}>
            Most sustainability strategies fail at the point of scrutiny: they
            state targets without establishing a baseline, commit to
            reductions without quantifying what needs to be reduced, and report
            progress without a measurement framework. Acrypt builds strategies
            that start where the numbers are.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20" style={{ backgroundColor: "#F7F6F3" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="eyebrow mb-4">What's included</p>
          <h2
            className="text-3xl font-bold mb-10"
            style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}
          >
            What Acrypt delivers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "ESG Materiality Assessment",
                desc: "A double materiality assessment covering both impact materiality (your company's impact on the environment) and financial materiality (sustainability risks to your business). Required under CSRD and increasingly expected by investors.",
              },
              {
                title: "EU Taxonomy Alignment",
                desc: "Analysis of activities against the EU Taxonomy's technical screening criteria and Do No Significant Harm requirements. Determines what proportion of your revenue, capex, and opex qualifies as sustainable under the Taxonomy.",
              },
              {
                title: "Stakeholder Reporting",
                desc: "Sustainability strategy and disclosure documents that communicate your position to investors, lenders, procurement teams, and regulators, structured around CSRD, GRI, or bespoke frameworks as appropriate.",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="p-6 rounded-xl bg-white border"
                style={{ borderColor: "#E5E3DC" }}
              >
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}
                >
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#5F5E5A" }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What differentiates Acrypt */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 max-w-3xl">
          <p className="eyebrow mb-4">The Acrypt difference</p>
          <h2
            className="text-3xl font-bold mb-6"
            style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}
          >
            Strategy grounded in LCA and emissions data.
          </h2>
          <p className="leading-relaxed mb-4" style={{ color: "#5F5E5A" }}>
            Most strategy work begins with stakeholder interviews and ends with
            a materiality matrix. Acrypt begins with the data. A completed LCA
            tells you where the environmental impact actually sits in your
            product system, not where stakeholders assume it sits. That
            distinction matters when targets need to be defensible.
          </p>
          <p className="leading-relaxed" style={{ color: "#5F5E5A" }}>
            All strategy engagements can be paired with LCA, EPD, or carbon
            accounting work. The outputs then serve double duty: as the
            technical foundation of your CSRD disclosure and as the evidential
            base for your publicly stated sustainability commitments.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: "#085041" }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2
            className="text-3xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Build a strategy worth publishing.
          </h2>
          <p className="text-white/70 mb-8">
            Book a free 30-minute consultation. We'll identify the gaps in your
            current position and tell you what a rigorous strategy engagement
            with Acrypt would produce.
          </p>
          <Link
            href="/contact?service=strategy"
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
