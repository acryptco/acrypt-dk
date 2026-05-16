import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EPDs and the Nordic Building Regulations: What Suppliers Need to Know",
  description:
    "Denmark, Sweden, Norway, and Finland have introduced mandatory climate requirements for buildings. EPDs are now required documentation for construction product suppliers across the Nordics.",
  alternates: { canonical: "https://acrypt.dk/articles/epds-nordic-building-regulations" },
  openGraph: {
    title: "EPDs and the Nordic Building Regulations | Acrypt",
    description: "Nordic building regulations now require EPDs for construction products. What changed, what is required, and what suppliers must do.",
    url: "https://acrypt.dk/articles/epds-nordic-building-regulations",
  },
};

export default function EpdsNordicPage() {
  return (
    <>
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Link href="/articles" className="inline-flex items-center gap-2 text-sm mb-8 transition-opacity hover:opacity-70" style={{ color: "#5F5E5A" }}>
            ← All articles
          </Link>
          <div className="flex gap-2 mb-6">
            {["EPD", "Regulation"].map((c) => (
              <span key={c} className="text-xs font-bold px-2 py-0.5 rounded" style={{ backgroundColor: "#F7F6F3", color: "#d4654a", fontFamily: "var(--font-jetbrains)" }}>{c}</span>
            ))}
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}>
            EPDs and the Nordic Building Regulations: What Suppliers Need to Know
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#5F5E5A" }}>
            Nordic countries have introduced mandatory climate requirements for new buildings. These requirements rely on lifecycle-based carbon calculations that depend on verified EPD data from construction material suppliers. If your product goes into Nordic construction projects, an EPD is no longer optional.
          </p>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "#F7F6F3" }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-10">

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}>What changed in the regulations</h2>
            <p className="leading-relaxed mb-4" style={{ color: "#1A1A1A" }}>
              Denmark, Sweden, Norway, and Finland have each introduced mandatory whole-life carbon requirements for new buildings. In Denmark, the BR18 building regulation now requires a lifecycle assessment for new buildings above a certain size threshold, with a carbon limit that tightens over time. Sweden's BBR requires climate declarations for new residential buildings. Similar frameworks are in place or in development across the region.
            </p>
            <p className="leading-relaxed" style={{ color: "#1A1A1A" }}>
              These whole-building LCA calculations require product-level environmental data, which means EPDs. When an architect or contractor specifies a material without an EPD, they must use conservative generic data that typically penalises the product. Materials with verified EPDs have a direct competitive advantage in Nordic construction procurement.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}>What an EPD provides</h2>
            <div className="space-y-3">
              {[
                { t: "Verified environmental data", d: "Quantified impacts across the full product lifecycle, from raw material extraction to factory gate and optionally through use and end-of-life." },
                { t: "Regulatory compliance", d: "EPDs conforming to EN 15804 and ISO 14025 are accepted by building regulation authorities across the Nordic countries and EU member states." },
                { t: "Green building certification", d: "DGNB, BREEAM, and LEED all require or award credits for EPD-backed material selection. Without EPDs, certification becomes significantly harder." },
                { t: "Procurement differentiation", d: "Contractors and developers increasingly specify EPDs as a baseline procurement requirement, not a preference. Products without EPDs are excluded from tenders." },
              ].map((item) => (
                <div key={item.t} className="flex gap-4 p-4 rounded-lg border" style={{ borderColor: "#E5E3DC", backgroundColor: "#ffffff" }}>
                  <span className="flex-shrink-0 w-1.5 rounded-full mt-1" style={{ backgroundColor: "#d4654a" }} />
                  <div>
                    <span className="block font-semibold text-sm mb-1" style={{ color: "#085041" }}>{item.t}</span>
                    <span className="text-sm leading-relaxed" style={{ color: "#5F5E5A" }}>{item.d}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}>The EPD process for construction product suppliers</h2>
            <p className="leading-relaxed mb-4" style={{ color: "#1A1A1A" }}>
              An EPD for a construction product follows a structured process governed by EN 15804 and a Product Category Rule (PCR) specific to the product type. The process involves data collection across the supply chain, LCA modelling, EPD report preparation, third-party verification by an accredited verifier, and publication on a recognised EPD programme such as EPD Denmark or the International EPD System.
            </p>
            <p className="leading-relaxed" style={{ color: "#1A1A1A" }}>
              Timeline from data collection to publication is typically three to six months, depending on data availability and verification scheduling. Once published, EPDs are valid for five years and must be renewed if the product or its production process changes materially.
            </p>
          </div>

        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: "#085041" }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
            Get your construction product EPD started.
          </h2>
          <p className="text-white/70 mb-8">
            Acrypt delivers EN 15804-compliant EPDs for construction material suppliers, from data collection to publication. Book a free 30-minute consultation to scope your project.
          </p>
          <Link href="/contact?service=lca-epd" className="inline-block px-8 py-4 rounded font-semibold text-white transition-opacity hover:opacity-90" style={{ backgroundColor: "#d4654a" }}>
            Book a free consultation
          </Link>
        </div>
      </section>
    </>
  );
}
