import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "Acrypt was founded to close the gap between sustainability ambition and measurable, defensible results. PhD-led process engineering rigour applied to LCA, EPD, and CSRD reporting.",
  alternates: { canonical: "https://acrypt.dk/about" },
  openGraph: {
    title: "About Acrypt — PhD-led Sustainability Consultancy",
    description: "Founded by a PhD bioprocess engineer with 3 patents and published research. Process engineering rigour applied to LCA, EPD, and CSRD reporting.",
    url: "https://acrypt.dk/about",
  },
};

const credentials = [
  "PhD, Bioprocess Engineering — DTU (Danmarks Tekniske Universitet)",
  "MSc, Agricultural Development — University of Copenhagen",
  "3 patents in bioprocess and biomass extraction",
  "ISO 14025 · EN 15804 specialist",
  "Published researcher — Regional Studies in Marine Science (Elsevier, 2021)",
  "Entrepreneur in Residence — Antler Global",
];

const sectors = [
  "Construction & Real Estate",
  "Manufacturing & Industry",
  "Energy & Utilities",
  "Food & Agriculture",
  "Tech & Consumer Goods",
  "Finance & Investment",
];

const methodology = [
  {
    step: "01",
    title: "Measure",
    description:
      "Systematic data collection across the full value chain: raw materials, processing, transport, use, and end-of-life. Every input and output accounted for.",
  },
  {
    step: "02",
    title: "Analyse",
    description:
      "Mass balance, yield accounting, and lifecycle impact modelling using ISO-compliant methodologies. Results are traceable, reproducible, and audit-ready.",
  },
  {
    step: "03",
    title: "Report",
    description:
      "Verified EPDs, CSRD disclosure packages, and stakeholder-facing reports that communicate environmental performance with precision and credibility.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 max-w-3xl">
          <p className="eyebrow mb-4">About Acrypt</p>
          <h1
            className="text-4xl lg:text-5xl font-bold mb-6"
            style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}
          >
            Precision sustainability consulting, built on process engineering rigour.
          </h1>
          <p className="text-xl leading-relaxed" style={{ color: "#5F5E5A" }}>
            Acrypt was founded to close the gap between sustainability ambition
            and measurable, defensible results.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16" style={{ backgroundColor: "#F7F6F3" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center">
            <Image
              src="/portraite-about.png"
              alt="Marcel Tutor Ale — founder of Acrypt"
              width={480}
              height={600}
              className="w-full max-w-sm rounded-2xl object-cover"
            />
          </div>
          <div>
            <p className="leading-relaxed mb-6" style={{ color: "#1A1A1A" }}>
              Acrypt was founded on a simple observation: most sustainability
              reporting lacks the quantitative rigour that the science demands.
              Sustainability targets are stated, but the underlying data is
              rarely traced, the boundaries rarely defined, and the methodology
              rarely disclosed. The result is disclosure that satisfies no one —
              not auditors, not investors, not procurement teams.
            </p>
            <p className="leading-relaxed" style={{ color: "#1A1A1A" }}>
              Acrypt applies the same discipline as a process engineer —
              accounting for every input, every output, every loss, and then applying that same rigour to LCA,
              EPD, and carbon reporting. The founder brings a PhD in bioprocess
              engineering, published peer-reviewed research, and three patents
              in extraction and bioprocess optimisation. That background means
              every engagement begins with data, not assumptions.
            </p>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20" style={{ backgroundColor: "#042C53" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="eyebrow mb-8">Credentials</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {credentials.map((c, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-lg"
                style={{ backgroundColor: "rgba(255,255,255,0.05)", borderLeft: "2px solid #d4654a" }}
              >
                <span
                  className="text-xs font-bold text-white/40 mt-0.5 flex-shrink-0"
                  style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-white/80 leading-relaxed">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="eyebrow mb-4">Methodology</p>
          <h2
            className="text-3xl font-bold mb-12"
            style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}
          >
            How Acrypt works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {methodology.map((m) => (
              <div key={m.step} className="flex flex-col gap-4">
                <span
                  className="text-4xl font-bold"
                  style={{ color: "#d4654a", fontFamily: "var(--font-jetbrains)" }}
                >
                  {m.step}
                </span>
                <h3
                  className="text-xl font-bold"
                  style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}
                >
                  {m.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#5F5E5A" }}>
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-16" style={{ backgroundColor: "#F7F6F3" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="eyebrow mb-4">Sectors</p>
          <h2
            className="text-3xl font-bold mb-8"
            style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}
          >
            Sectors we serve
          </h2>
          <div className="flex flex-wrap gap-3">
            {sectors.map((s) => (
              <span
                key={s}
                className="px-4 py-2 rounded-full text-sm font-medium border"
                style={{ borderColor: "#E5E3DC", color: "#1A1A1A", backgroundColor: "#ffffff" }}
              >
                {s}
              </span>
            ))}
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
            Start with a free consultation.
          </h2>
          <p className="text-white/70 mb-8">
            30 minutes. No pitch. We'll tell you exactly what your reporting
            requires and whether Acrypt is the right fit.
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
