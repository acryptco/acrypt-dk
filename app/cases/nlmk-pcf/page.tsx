import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "NLMK DanSteel — Product Carbon Footprint (ISO 14067)",
  description:
    "Acrypt delivered a third-party verified Product Carbon Footprint for NLMK DanSteel's hot-rolled uncoated steel plates. ISO 14067 & ISO 14025 compliant. 92% secondary material input.",
  alternates: { canonical: "https://acrypt.dk/cases/nlmk-pcf" },
  openGraph: {
    title: "NLMK DanSteel PCF | Acrypt",
    description: "Verified Product Carbon Footprint for hot-rolled steel plate. ISO 14067 · ISO 14025 · 92% recycled input · 3rd-party verified.",
    url: "https://acrypt.dk/cases/nlmk-pcf",
  },
};

export default function NlmkPcfCasePage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#042C53" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <Link
              href="/cases"
              className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white/80 transition-colors mb-8"
            >
              ← All cases
            </Link>
            <div className="flex flex-wrap gap-2 mb-6">
              {["Steel manufacturing", "PCF", "ISO 14067", "ISO 14025", "92% recycled input"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 rounded border border-white/20 text-white/60"
                  style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1
              className="text-4xl lg:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              NLMK DanSteel A/S — Product Carbon Footprint
            </h1>
            <p className="text-lg text-white/70">
              A third-party verified Product Carbon Footprint for hot-rolled
              uncoated steel plates, compliant with ISO 14067 and ISO 14025.
              92% secondary material input. Published on EPD Hub (HUB-1336).
            </p>
          </div>
          <div className="hidden lg:block">
            <Image
              src="/dansteel-pcf.png"
              alt="NLMK DanSteel steel plant"
              width={600}
              height={900}
              priority
              className="w-full rounded-2xl object-cover max-h-96"
            />
          </div>
        </div>
      </section>

      {/* Case overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div
              className="rounded-xl border p-6 sticky top-24"
              style={{ borderColor: "#E5E3DC" }}
            >
              <dl className="space-y-5">
                {[
                  { term: "Client", def: "NLMK DanSteel A/S" },
                  { term: "Industry", def: "Steel manufacturing" },
                  { term: "Product", def: "Hot-rolled uncoated steel plates" },
                  { term: "Standards", def: "ISO 14067 · ISO 14025" },
                  { term: "PCF number", def: "HUB-1336" },
                  { term: "Scope", def: "Cradle to gate · Modules A1–A3, C1–C4, D" },
                  { term: "GWP total A1–A3", def: "1,100 kg CO₂e / ton" },
                  { term: "Secondary material input", def: "92%" },
                  { term: "Published", def: "23 April 2024" },
                  { term: "Status", def: "Published · Verified" },
                ].map((item) => (
                  <div key={item.term}>
                    <dt
                      className="text-xs font-bold uppercase tracking-widest mb-1"
                      style={{ color: "#5F5E5A", fontFamily: "var(--font-jetbrains)" }}
                    >
                      {item.term}
                    </dt>
                    <dd className="text-sm font-medium" style={{ color: "#1A1A1A" }}>
                      {item.def}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 pt-6 space-y-3" style={{ borderTop: "1px solid #E5E3DC" }}>
                <a
                  href="/nlmk-pcf.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-80"
                  style={{ color: "#d4654a" }}
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  Download PCF PDF →
                </a>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}
              >
                The challenge
              </h2>
              <p className="leading-relaxed" style={{ color: "#5F5E5A" }}>
                NLMK DanSteel required a product-level carbon footprint
                quantification for their hot-rolled uncoated steel plates —
                independently verified and published to meet buyer requirements
                and support CSRD-facing disclosures. The PCF needed to be
                compliant with ISO 14067 and ISO 14025, covering cradle-to-gate
                production with end-of-life modules, and verified by an
                accredited third party before publication.
              </p>
            </div>

            {/* Key data callouts */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { value: "1,100", unit: "kg CO₂e / ton", label: "GWP total, A1–A3" },
                { value: "92%", unit: "secondary input", label: "Scrap-based production" },
                { value: "5,840", unit: "kWh / ton", label: "Total energy use, A1–A3" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="p-5 rounded-xl text-center"
                  style={{ backgroundColor: "#F7F6F3" }}
                >
                  <span
                    className="block text-3xl font-bold mb-1"
                    style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}
                  >
                    {s.value}
                  </span>
                  <span
                    className="block text-xs mb-2"
                    style={{ color: "#d4654a", fontFamily: "var(--font-jetbrains)" }}
                  >
                    {s.unit}
                  </span>
                  <span className="text-xs" style={{ color: "#5F5E5A" }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            <div>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}
              >
                Deliverables
              </h2>
              <ul className="space-y-3">
                {[
                  { d: "Product Carbon Footprint (PCF)", s: "Full quantification of GWP across modules A1–A3, C1–C4, and D. Declared unit: 1 ton of hot-rolled steel plate. Methodology aligned with ISO 14067 and the EPD Hub Core PCR." },
                  { d: "Lifecycle scope: cradle to gate with end of life", s: "Covers raw material extraction (A1), transport to site (A2), and manufacturing (A3), plus end-of-life deconstruction, transport, waste processing, and disposal (C1–C4), and recycling potential (Module D)." },
                  { d: "92% secondary material: scrap-based production", s: "NLMK DanSteel's electric arc furnace process uses predominantly recycled steel scrap. This is quantified and documented in the PCF, providing a strong environmental differentiation for procurement." },
                  { d: "Third-party verification", s: "Independent verification by Elma Avdyli, authorised verifier acting for EPD Hub Limited, in accordance with ISO 14025. All LCA data, assumptions, and calculations reviewed and confirmed." },
                  { d: "Publication on EPD Hub", s: "PCF published under registration number HUB-1336. Publicly accessible and searchable by procurement teams and CSRD reporting chains." },
                ].map((item) => (
                  <li
                    key={item.d}
                    className="flex gap-4 p-4 rounded-lg border"
                    style={{ borderColor: "#E5E3DC" }}
                  >
                    <span
                      className="flex-shrink-0 w-1.5 rounded-full mt-1"
                      style={{ backgroundColor: "#d4654a" }}
                    />
                    <div>
                      <span
                        className="block font-semibold text-sm mb-1"
                        style={{ color: "#085041" }}
                      >
                        {item.d}
                      </span>
                      <span className="text-sm leading-relaxed" style={{ color: "#5F5E5A" }}>
                        {item.s}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}
              >
                Outcome
              </h2>
              <p className="leading-relaxed" style={{ color: "#5F5E5A" }}>
                NLMK DanSteel now holds a publicly accessible, independently
                verified Product Carbon Footprint for their hot-rolled steel
                plates, quantifying 1,100 kg CO₂e per ton across the full
                production chain. The 92% scrap-based input is documented and
                traceable, providing a measurable environmental advantage in
                procurement and CSRD disclosure contexts. The PCF complements
                the EPD delivered in the same engagement, giving NLMK DanSteel
                a complete, verified environmental data package for their
                product.
              </p>
            </div>

            <div
              className="p-6 rounded-xl"
              style={{ backgroundColor: "#F7F6F3", borderLeft: "4px solid #d4654a" }}
            >
              <p
                className="text-xs font-bold uppercase tracking-widest mb-2"
                style={{ color: "#d4654a", fontFamily: "var(--font-jetbrains)" }}
              >
                Related case
              </p>
              <p className="text-sm mb-3" style={{ color: "#5F5E5A" }}>
                This PCF was delivered alongside a full EPD for the same product —
                ISO 14025 · EN 15804 compliant, published on the International EPD System.
              </p>
              <Link
                href="/cases/nlmk"
                className="text-sm font-semibold transition-opacity hover:opacity-80"
                style={{ color: "#085041" }}
              >
                Read the EPD case →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: "#085041" }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2
            className="text-3xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Need a verified Product Carbon Footprint?
          </h2>
          <p className="text-white/70 mb-8">
            Book a free 30-minute consultation. We'll scope your PCF project,
            estimate the timeline, and explain what data we need from you.
          </p>
          <Link
            href="/contact?service=carbon"
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
