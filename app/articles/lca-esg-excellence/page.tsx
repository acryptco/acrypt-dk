import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Life Cycle Assessment: The Technical Foundation of ESG Reporting",
  description:
    "LCA is the systematic method behind EPDs, carbon footprints, and CSRD product disclosures. An explanation of what it is, how it works, and why it is indispensable for credible ESG reporting.",
  alternates: { canonical: "https://acrypt.dk/articles/lca-esg-excellence" },
  openGraph: {
    title: "Life Cycle Assessment: The Technical Foundation of ESG Reporting | Acrypt",
    description: "What LCA is, how it works, and why it underpins every credible EPD, carbon footprint, and CSRD product disclosure.",
    url: "https://acrypt.dk/articles/lca-esg-excellence",
  },
};

export default function LcaEsgPage() {
  return (
    <>
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Link href="/articles" className="inline-flex items-center gap-2 text-sm mb-8 transition-opacity hover:opacity-70" style={{ color: "#5F5E5A" }}>
            ← All articles
          </Link>
          <div className="flex gap-2 mb-6">
            {["LCA", "EPD", "CSRD"].map((c) => (
              <span key={c} className="text-xs font-bold px-2 py-0.5 rounded" style={{ backgroundColor: "#F7F6F3", color: "#d4654a", fontFamily: "var(--font-jetbrains)" }}>{c}</span>
            ))}
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}>
            Life Cycle Assessment: The Technical Foundation of ESG Reporting
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#5F5E5A" }}>
            Life Cycle Assessment is the systematic method for quantifying the environmental impacts of a product, process, or service from raw material extraction to end-of-life. Without it, EPDs, product carbon footprints, and CSRD product disclosures have no credible technical foundation.
          </p>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "#F7F6F3" }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-10">

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}>What LCA measures</h2>
            <p className="leading-relaxed mb-4" style={{ color: "#1A1A1A" }}>
              An LCA accounts for every material and energy input, every emission and waste output, at every stage of a product's life. The standard lifecycle stages are: raw material extraction (A1), transport to manufacturing (A2), manufacturing (A3), distribution (A4), installation (A5), use phase (B1–B7), and end-of-life including deconstruction, transport, waste processing, disposal, and recycling potential (C1–C4, D).
            </p>
            <p className="leading-relaxed" style={{ color: "#1A1A1A" }}>
              The scope (which stages are included and where the system boundary sits) is defined by the applicable Product Category Rule (PCR) for EPDs, or by the ISO 14067 standard for product carbon footprints. Consistent system boundaries are what make LCA results comparable between products.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}>The four phases of an LCA</h2>
            <div className="space-y-3">
              {[
                { n: "01", t: "Goal and scope definition", d: "Define the purpose of the study, the functional unit (the reference unit against which all impacts are measured), and the system boundary. These decisions shape everything that follows." },
                { n: "02", t: "Life Cycle Inventory (LCI)", d: "Collect quantitative data on all inputs and outputs (raw materials, energy, water, emissions, waste) for each process within the system boundary. Primary data from the production site is the gold standard; secondary data from databases such as Ecoinvent covers the rest." },
                { n: "03", t: "Life Cycle Impact Assessment (LCIA)", d: "Convert the inventory data into environmental impact indicators: Global Warming Potential, Ozone Depletion, Acidification, Eutrophication, and others. The indicators used depend on the applicable standard (EN 15804+A2 for construction EPDs, for example)." },
                { n: "04", t: "Interpretation", d: "Identify the most significant contributors to each impact category, assess data quality and uncertainty, and draw conclusions that are consistent with the defined goal and scope." },
              ].map((item) => (
                <div key={item.n} className="flex gap-4 p-4 rounded-lg border" style={{ borderColor: "#E5E3DC", backgroundColor: "#ffffff" }}>
                  <span className="flex-shrink-0 text-sm font-bold" style={{ color: "#d4654a", fontFamily: "var(--font-jetbrains)" }}>{item.n}</span>
                  <div>
                    <span className="block font-semibold text-sm mb-1" style={{ color: "#085041" }}>{item.t}</span>
                    <span className="text-sm leading-relaxed" style={{ color: "#5F5E5A" }}>{item.d}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}>LCA as the foundation for ESG outputs</h2>
            <p className="leading-relaxed mb-4" style={{ color: "#1A1A1A" }}>
              LCA is not a standalone exercise. It is the technical engine behind multiple ESG outputs. An EPD is an LCA communicated in a standardised, verified format. A product carbon footprint is an LCA scoped to GWP impact only. CSRD product-level disclosures under ESRS E1 and E5 require LCA-based data to be defensible.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: "#1A1A1A" }}>
              The rigour of the underlying LCA determines the credibility of all downstream outputs. An EPD based on a poorly constructed LCA (undefined boundaries, inconsistent allocation, or undisclosed assumptions) will not survive scrutiny from auditors or technically sophisticated buyers.
            </p>
            <p className="leading-relaxed" style={{ color: "#1A1A1A" }}>
              This is why the quality of LCA work matters as much as the existence of an EPD. A published declaration backed by a rigorous, traceable, independently verified LCA is a fundamentally different asset from one that merely satisfies the minimum formal requirements.
            </p>
          </div>

        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: "#085041" }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
            LCA done with process engineering rigour.
          </h2>
          <p className="text-white/70 mb-8">
            Acrypt builds LCAs that are traceable, reproducible, and audit-ready, underpinning EPDs, PCFs, and CSRD disclosures that hold up under scrutiny.
          </p>
          <Link href="/contact?service=lca-epd" className="inline-block px-8 py-4 rounded font-semibold text-white transition-opacity hover:opacity-90" style={{ backgroundColor: "#d4654a" }}>
            Book a free consultation
          </Link>
        </div>
      </section>
    </>
  );
}
