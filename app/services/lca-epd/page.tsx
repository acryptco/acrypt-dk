import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "LCA & EPD Development",
  description:
    "ISO 14025 and EN 15804-compliant Life Cycle Assessments and Environmental Product Declarations. 3rd-party verified and published, for construction, manufacturing, and green procurement.",
  alternates: { canonical: "https://acrypt.dk/services/lca-epd" },
  openGraph: {
    title: "LCA & EPD Development | Acrypt",
    description: "ISO 14025 and EN 15804-compliant EPDs, 3rd-party verified and published. From data collection to publication on an international EPD programme.",
    url: "https://acrypt.dk/services/lca-epd",
  },
};

export default function LcaEpdPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="eyebrow mb-4">LCA & EPD</p>
            <h1
              className="text-4xl lg:text-5xl font-bold mb-6"
              style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}
            >
              Published, verified Environmental Product Declarations.
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: "#5F5E5A" }}>
              An EPD is not a marketing document. It is a standardised,
              third-party verified declaration of a product's environmental
              impact across its full lifecycle, from raw material extraction to
              end-of-life disposal.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <Image
              src="/lca-hero.png"
              alt="LCA lifecycle diagram showing stages from raw material extraction to end of life"
              width={600}
              height={500}
              className="w-full max-w-lg rounded-2xl"
            />
            <p className="text-xs max-w-lg" style={{ color: "#5F5E5A" }}>
              Source: One Click LCA
            </p>
          </div>
        </div>
      </section>

      {/* What LCA and EPD are */}
      <section className="py-16" style={{ backgroundColor: "#F7F6F3" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}
              >
                What is an LCA?
              </h2>
              <p className="leading-relaxed mb-4" style={{ color: "#5F5E5A" }}>
                A Life Cycle Assessment (LCA) is a systematic method for
                quantifying the environmental impacts of a product or service
                across its entire lifecycle. It covers energy use, resource
                consumption, emissions to air, water, and land, accounting for
                every stage from extraction to disposal.
              </p>
              <p className="leading-relaxed" style={{ color: "#5F5E5A" }}>
                LCAs form the technical foundation for EPDs, CSRD disclosures,
                and green procurement claims. Without a credible LCA, none of
                those downstream documents have defensible data behind them.
              </p>
            </div>
            <div>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}
              >
                What is an EPD?
              </h2>
              <p className="leading-relaxed mb-4" style={{ color: "#5F5E5A" }}>
                An Environmental Product Declaration (EPD) is a standardised
                report governed by ISO 14025 and, for construction products,
                EN 15804, that communicates the LCA results for a specific
                product. EPDs are independently verified and published on a
                recognised programme (such as the International EPD System or
                EPD Denmark).
              </p>
              <p className="leading-relaxed" style={{ color: "#5F5E5A" }}>
                Published EPDs are required for green building certification
                (DGNB, BREEAM, LEED), public procurement compliance, and
                increasingly for CSRD product-level disclosures.
              </p>
            </div>
          </div>

          <div
            className="mt-10 p-6 rounded-xl border"
            style={{ backgroundColor: "#ffffff", borderColor: "#E5E3DC" }}
          >
            <div className="flex flex-wrap gap-6">
              {[
                { label: "ISO 14025", desc: "Governs EPD structure and requirements" },
                { label: "EN 15804", desc: "EPD standard for construction products" },
                { label: "PCR", desc: "Product Category Rules define scope and boundaries" },
                { label: "3rd-party verification", desc: "Independent review before publication" },
              ].map((item) => (
                <div key={item.label} className="flex-1 min-w-[180px]">
                  <span
                    className="text-xs font-bold block mb-1"
                    style={{ color: "#d4654a", fontFamily: "var(--font-jetbrains)" }}
                  >
                    {item.label}
                  </span>
                  <span className="text-sm" style={{ color: "#5F5E5A" }}>
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Acrypt delivers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="eyebrow mb-4">Deliverables</p>
          <h2
            className="text-3xl font-bold mb-10"
            style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}
          >
            What Acrypt delivers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { n: "01", title: "Data collection", desc: "Structured data collection across the supply chain: primary production data, supplier datasets, and background databases." },
              { n: "02", title: "LCA modelling", desc: "Full lifecycle calculation using ISO 14044-compliant methodology. All assumptions documented and traceable." },
              { n: "03", title: "EPD report preparation", desc: "EPD document drafted in conformance with the applicable PCR and programme requirements." },
              { n: "04", title: "3rd-party verification", desc: "Coordination of independent verification by a recognised verifier before publication." },
              { n: "05", title: "Publication", desc: "Submission and publication on an international EPD programme operator." },
              { n: "06", title: "Product Carbon Footprint", desc: "PCF calculation aligned with the GHG Protocol Product Standard, often delivered alongside the EPD." },
            ].map((d) => (
              <div
                key={d.n}
                className="p-6 rounded-xl border"
                style={{ borderColor: "#E5E3DC" }}
              >
                <span
                  className="block text-2xl font-bold mb-3"
                  style={{ color: "#d4654a", fontFamily: "var(--font-jetbrains)" }}
                >
                  {d.n}
                </span>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}
                >
                  {d.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#5F5E5A" }}>
                  {d.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who needs it */}
      <section className="py-16" style={{ backgroundColor: "#F7F6F3" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="eyebrow mb-4">Who needs this</p>
          <h2
            className="text-3xl font-bold mb-8"
            style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}
          >
            LCA and EPDs are required by buyers, regulators, and standards. Not optional extras.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { sector: "Construction material suppliers", reason: "EPDs required for DGNB, BREEAM, and LEED certification projects. Increasingly mandatory for public procurement across the EU." },
              { sector: "Manufacturers", reason: "Buyers and procurement teams are specifying EPDs as a baseline requirement. Without one, products are excluded from tenders." },
              { sector: "CSRD-facing companies", reason: "Product-level environmental data, underpinned by verified LCA, is required for ESRS E1 and E5 disclosures under CSRD." },
            ].map((item) => (
              <div
                key={item.sector}
                className="p-6 rounded-xl bg-white border"
                style={{ borderColor: "#E5E3DC" }}
              >
                <h3
                  className="font-bold mb-3"
                  style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}
                >
                  {item.sector}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#5F5E5A" }}>
                  {item.reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NLMK proof */}
      <section className="py-16" style={{ backgroundColor: "#042C53" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row gap-10 items-start md:items-center justify-between">
          <div>
            <p className="eyebrow mb-2">Proof of delivery</p>
            <h2
              className="text-2xl font-bold text-white mb-2"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              NLMK DanSteel — Published EPD & PCF
            </h2>
            <p className="text-white/70 text-sm max-w-lg">
              Acrypt delivered a verified EPD and PCF for hot-rolled uncoated
              steel plate, compliant with ISO 14025 · EN 15804. Published on an
              international EPD programme.
            </p>
          </div>
          <Link
            href="/cases/nlmk"
            className="flex-shrink-0 px-6 py-3 rounded font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#d4654a" }}
          >
            Read the case →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}
          >
            Ready to get your EPD started?
          </h2>
          <p className="leading-relaxed mb-8" style={{ color: "#5F5E5A" }}>
            Book a free 30-minute consultation. We'll tell you what data you
            need, how long the process takes, and what the EPD will enable for
            your business.
          </p>
          <Link
            href="/contact?service=lca-epd"
            className="inline-block px-8 py-4 rounded font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#d4654a" }}
          >
            Get your EPD started
          </Link>
        </div>
      </section>
    </>
  );
}
