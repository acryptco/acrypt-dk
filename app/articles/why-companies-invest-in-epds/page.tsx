import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Companies Invest in Environmental Product Declarations",
  description:
    "EPDs are not a compliance checkbox. They are a competitive instrument. The business case for investing in a verified EPD, and what companies get in return.",
  alternates: { canonical: "https://acrypt.dk/articles/why-companies-invest-in-epds" },
  openGraph: {
    title: "Why Companies Invest in EPDs | Acrypt",
    description: "The business case for Environmental Product Declarations: procurement access, regulatory compliance, and measurable competitive advantage.",
    url: "https://acrypt.dk/articles/why-companies-invest-in-epds",
  },
};

export default function WhyEpdsPage() {
  return (
    <>
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Link href="/articles" className="inline-flex items-center gap-2 text-sm mb-8 transition-opacity hover:opacity-70" style={{ color: "#5F5E5A" }}>
            ← All articles
          </Link>
          <div className="flex gap-2 mb-6">
            {["EPD", "LCA"].map((c) => (
              <span key={c} className="text-xs font-bold px-2 py-0.5 rounded" style={{ backgroundColor: "#F7F6F3", color: "#d4654a", fontFamily: "var(--font-jetbrains)" }}>{c}</span>
            ))}
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}>
            Why Companies Invest in Environmental Product Declarations
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#5F5E5A" }}>
            An EPD is a standardised, third-party verified document that quantifies the environmental impacts of a product across its full lifecycle. Companies invest in EPDs not because it is a pleasant process, but because the commercial and regulatory consequences of not having one are increasingly severe.
          </p>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "#F7F6F3" }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-10">

          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}>The business case</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { n: "01", t: "Procurement access", d: "EPDs are increasingly specified as mandatory requirements in public and private tenders, particularly in construction. Without one, your product is excluded before evaluation begins." },
                { n: "02", t: "Regulatory compliance", d: "Nordic building regulations, EU green procurement criteria, and CSRD product-level disclosures all reference or require EPD data. Compliance is not optional for companies in these markets." },
                { n: "03", t: "Competitive differentiation", d: "A verified EPD demonstrates environmental performance with a specificity that marketing claims cannot match. It converts a sustainability claim into a traceable, auditable fact." },
              ].map((item) => (
                <div key={item.n} className="p-5 rounded-xl bg-white border" style={{ borderColor: "#E5E3DC" }}>
                  <span className="block text-2xl font-bold mb-3" style={{ color: "#d4654a", fontFamily: "var(--font-jetbrains)" }}>{item.n}</span>
                  <span className="block font-bold mb-2" style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}>{item.t}</span>
                  <p className="text-sm leading-relaxed" style={{ color: "#5F5E5A" }}>{item.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}>What an EPD actually is, and what it is not</h2>
            <p className="leading-relaxed mb-4" style={{ color: "#1A1A1A" }}>
              An EPD is not a marketing document. It does not claim that a product is sustainable, low-carbon, or environmentally friendly. It declares, with quantified precision and independent verification, what the environmental impacts of a specific product are across defined lifecycle stages and impact categories.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: "#1A1A1A" }}>
              This distinction matters because EPDs are comparable. Two products in the same category, both with EPDs conforming to the same Product Category Rule, can be directly compared by architects, engineers, and procurement teams. A product with a better environmental profile (lower GWP, lower resource use) will have that advantage documented in a form that stands up to scrutiny.
            </p>
            <p className="leading-relaxed" style={{ color: "#1A1A1A" }}>
              This is why a company with strong environmental performance gains the most from an EPD: it converts a genuine advantage into a verified, communicable fact.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}>What the process involves</h2>
            <p className="leading-relaxed mb-4" style={{ color: "#1A1A1A" }}>
              An EPD requires a Life Cycle Assessment as its technical foundation. The LCA models the environmental impacts of the product across each lifecycle stage, from raw material extraction through manufacturing, use, and end-of-life, using a defined system boundary and a Product Category Rule that specifies the methodology.
            </p>
            <p className="leading-relaxed" style={{ color: "#1A1A1A" }}>
              The LCA results are compiled into an EPD document, reviewed by an independent third-party verifier, and published on a recognised EPD programme operator. The process typically takes three to six months from initial data collection to publication, and the EPD is valid for five years.
            </p>
          </div>

        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: "#085041" }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
            Ready to get your EPD started?
          </h2>
          <p className="text-white/70 mb-8">
            Book a free 30-minute consultation. We'll tell you what data you need, how long the process takes, and what the EPD will enable for your business.
          </p>
          <Link href="/contact?service=lca-epd" className="inline-block px-8 py-4 rounded font-semibold text-white transition-opacity hover:opacity-90" style={{ backgroundColor: "#d4654a" }}>
            Get your EPD started
          </Link>
        </div>
      </section>
    </>
  );
}
