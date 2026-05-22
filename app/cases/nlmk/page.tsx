import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "NLMK DanSteel — Environmental Product Declaration",
  description:
    "Acrypt delivered a verified Environmental Product Declaration for NLMK DanSteel's hot-rolled steel plate. ISO 14025 · EN 15804 compliant. 3rd-party verified and published.",
  alternates: { canonical: "https://acrypt.dk/cases/nlmk" },
  openGraph: {
    title: "NLMK DanSteel EPD | Acrypt",
    description: "Verified Environmental Product Declaration for hot-rolled steel plate. ISO 14025 · EN 15804 · 3rd-party verified · Published.",
    url: "https://acrypt.dk/cases/nlmk",
  },
};

export default function NlmkCasePage() {
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
              {["Steel manufacturing", "EPD", "ISO 14025", "EN 15804", "3rd-party verified"].map((tag) => (
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
              NLMK DanSteel A/S — Environmental Product Declaration
            </h1>
            <p className="text-lg text-white/70">
              A verified Environmental Product Declaration for hot-rolled
              uncoated steel plate. ISO 14025 · EN 15804 compliant.
              Independently verified and published on the International EPD System.
            </p>
          </div>
          <div className="hidden lg:block">
            <Image
              src="/dansteel.png"
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
                  { term: "Product", def: "Hot-rolled uncoated steel plate" },
                  { term: "Standards", def: "ISO 14025 · EN 15804 · GHG Protocol" },
                  { term: "Deliverables", def: "EPD · LCA · 3rd-party verification · Publication" },
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
                  href="https://environdec.com/library/epd13212"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-80"
                  style={{ color: "#085041" }}
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                  View EPD on Environdec →
                </a>
                <a
                  href="/nlmkepd_0.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-80"
                  style={{ color: "#d4654a" }}
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  Download EPD PDF →
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
                NLMK DanSteel required a verified Environmental Product
                Declaration for their hot-rolled uncoated steel plate to qualify
                for green procurement contracts and to prepare for CSRD reporting
                obligations. The EPD needed to be compliant with ISO 14025 and
                EN 15804, independently verified by an accredited third party,
                and published on an international EPD programme.
              </p>
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
                  { d: "Environmental Product Declaration (EPD)", s: "ISO 14025 · EN 15804 compliant. Declared environmental impacts across the full lifecycle of hot-rolled steel plate from raw material extraction to gate." },
                  { d: "LCA modelling", s: "Full lifecycle calculation using ISO 14044-compliant methodology. All assumptions documented and traceable. Background data from Ecoinvent 3.8." },
                  { d: "Third-party verification", s: "Independent verification by an accredited verifier. All LCA data, assumptions, and calculation methodology reviewed and confirmed." },
                  { d: "Publication", s: "EPD submitted and published on the International EPD System (Environdec), publicly accessible and searchable by procurement teams worldwide." },
                ].map((item) => (
                  <li
                    key={item.d}
                    className="flex gap-4 p-4 rounded-lg border"
                    style={{ borderColor: "#E5E3DC" }}
                  >
                    <span
                      className="flex-shrink-0 w-1.5 rounded-full"
                      style={{ backgroundColor: "#d4654a" }}
                    />
                    <div>
                      <span
                        className="block font-semibold text-sm mb-1"
                        style={{ color: "#085041" }}
                      >
                        {item.d}
                      </span>
                      <span className="text-sm" style={{ color: "#5F5E5A" }}>
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
                The EPD was successfully verified and published on the
                International EPD System. NLMK DanSteel now holds a publicly
                accessible, independently verified environmental declaration for
                hot-rolled steel plate, enabling qualification for green
                procurement contracts and providing the product-level
                environmental data required for CSRD disclosure preparation.
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
                A separate verified Product Carbon Footprint (ISO 14067) was also
                delivered for the same product, published on EPD Hub as HUB-1336.
              </p>
              <Link
                href="/cases/nlmk-pcf"
                className="text-sm font-semibold transition-opacity hover:opacity-80"
                style={{ color: "#085041" }}
              >
                Read the PCF case →
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
            Need a similar deliverable?
          </h2>
          <p className="text-white/70 mb-8">
            Book a free 30-minute consultation. We'll scope your EPD or PCF
            project, estimate the timeline, and explain what data we need from
            you.
          </p>
          <Link
            href="/contact?service=lca-epd"
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
