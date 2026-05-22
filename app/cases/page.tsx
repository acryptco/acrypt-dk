import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Cases",
  description:
    "Acrypt case studies: published, verified, defensible results. NLMK DanSteel EPD & Product Carbon Footprint.",
  alternates: { canonical: "https://acrypt.dk/cases" },
  openGraph: {
    title: "Cases | Acrypt",
    description: "Published, verified, defensible results. NLMK DanSteel EPD and PCF, ISO 14025 · EN 15804 compliant.",
    url: "https://acrypt.dk/cases",
  },
};

export default function CasesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="eyebrow mb-4">Cases</p>
            <h1
              className="text-4xl lg:text-5xl font-bold mb-6"
              style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}
            >
              Our work is measured by one standard: published, verified, defensible results.
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: "#5F5E5A" }}>
              Every case on this page is backed by a completed, third-party verified output: an EPD, a product carbon footprint, or a lifecycle study published on a recognised international programme.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/case_01.png"
              alt="Hands holding the NLMK DanSteel Environmental Product Declaration"
              width={600}
              height={750}
              priority
              className="w-full max-w-lg rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Cases grid */}
      <section className="py-16" style={{ backgroundColor: "#F7F6F3" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* NLMK — featured case */}
            <div
              className="col-span-1 md:col-span-2 lg:col-span-2 rounded-xl border bg-white overflow-hidden"
              style={{ borderColor: "#E5E3DC" }}
            >
              <div
                className="px-8 py-6"
                style={{ backgroundColor: "#042C53" }}
              >
                <span
                  className="text-xs font-bold text-white/50 uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                  Featured case · EPD · Steel manufacturing
                </span>
                <h2
                  className="text-2xl font-bold text-white mt-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  NLMK DanSteel A/S
                </h2>
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-6">
                  {["EPD", "ISO 14025", "EN 15804", "3rd-party verified", "Published"].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded border"
                      style={{
                        borderColor: "#E5E3DC",
                        color: "#5F5E5A",
                        fontFamily: "var(--font-jetbrains)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="leading-relaxed mb-6" style={{ color: "#5F5E5A" }}>
                  Acrypt authored and published a verified Environmental Product
                  Declaration and Product Carbon Footprint for NLMK DanSteel's
                  hot-rolled uncoated steel plate, compliant with ISO 14025 and
                  EN 15804, independently verified, and published on an
                  international EPD programme.
                </p>
                <Link
                  href="/cases/nlmk"
                  className="inline-flex items-center gap-2 font-semibold text-sm transition-opacity hover:opacity-80"
                  style={{ color: "#d4654a" }}
                >
                  Read the full case →
                </Link>
              </div>
            </div>

            {/* NLMK PCF case */}
            <div
              className="col-span-1 rounded-xl border bg-white overflow-hidden"
              style={{ borderColor: "#E5E3DC" }}
            >
              <div
                className="px-6 py-4"
                style={{ backgroundColor: "#085041" }}
              >
                <span
                  className="text-xs font-bold text-white/50 uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                  Steel manufacturing · PCF
                </span>
                <h2
                  className="text-lg font-bold text-white mt-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  NLMK DanSteel A/S
                </h2>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {["ISO 14067", "ISO 14025", "HUB-1336", "92% recycled"].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded border"
                      style={{
                        borderColor: "#E5E3DC",
                        color: "#5F5E5A",
                        fontFamily: "var(--font-jetbrains)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#5F5E5A" }}>
                  Third-party verified Product Carbon Footprint for hot-rolled
                  uncoated steel plates. 92% secondary material input.
                  1,100 kg CO₂e per ton. Published on EPD Hub.
                </p>
                <Link
                  href="/cases/nlmk-pcf"
                  className="inline-flex items-center gap-2 font-semibold text-sm transition-opacity hover:opacity-80"
                  style={{ color: "#d4654a" }}
                >
                  Read the full case →
                </Link>
              </div>
            </div>

            {/* Placeholder 1 */}
            <div
              className="rounded-xl border overflow-hidden"
              style={{ borderColor: "#E5E3DC", backgroundColor: "#ffffff" }}
            >
              <div className="px-6 py-4" style={{ backgroundColor: "#F7F6F3" }}>
                <span
                  className="text-xs font-bold text-[#5F5E5A] uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                  Coming soon · Construction sector
                </span>
              </div>
              <div className="p-6">
                <h3
                  className="text-lg font-bold mb-3"
                  style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}
                >
                  Construction sector case study
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#5F5E5A" }}>
                  An EPD and lifecycle study for a construction material
                  supplier, currently in preparation.
                </p>
              </div>
            </div>

            {/* Placeholder 2 */}
            <div
              className="rounded-xl border overflow-hidden"
              style={{ borderColor: "#E5E3DC", backgroundColor: "#ffffff" }}
            >
              <div className="px-6 py-4" style={{ backgroundColor: "#F7F6F3" }}>
                <span
                  className="text-xs font-bold text-[#5F5E5A] uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                  Coming soon · Food & Agriculture
                </span>
              </div>
              <div className="p-6">
                <h3
                  className="text-lg font-bold mb-3"
                  style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}
                >
                  Food & Agriculture sector case study
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#5F5E5A" }}>
                  A Scope 3 emissions inventory and LCA for an agricultural
                  producer, currently in preparation.
                </p>
              </div>
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
            Working on something that needs measurement?
          </h2>
          <p className="text-white/70 mb-8">
            Let's talk. We'll tell you exactly what a project with Acrypt would
            produce and what you'd need to bring to the table.
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
