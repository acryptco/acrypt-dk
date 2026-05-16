import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Carbon Accounting (Scope 1, 2 & 3)",
  description:
    "Scope 1, 2 and 3 emissions inventory aligned with the GHG Protocol. Baseline quantification, reduction roadmap, and annual reporting for CSRD-facing companies.",
  alternates: { canonical: "https://acrypt.dk/services/carbon" },
  openGraph: {
    title: "Carbon Accounting (Scope 1, 2 & 3) | Acrypt",
    description: "GHG Protocol-aligned Scope 1, 2, and 3 emissions inventory. Baseline, reduction pathway, and CSRD-ready annual reporting.",
    url: "https://acrypt.dk/services/carbon",
  },
};

export default function CarbonPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 max-w-3xl">
          <p className="eyebrow mb-4">Carbon Accounting</p>
          <h1
            className="text-4xl lg:text-5xl font-bold mb-6"
            style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}
          >
            Emissions you can account for. Numbers you can defend.
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#5F5E5A" }}>
            Carbon accounting is not about estimating your impact. It is about
            measuring it with the precision and traceability that auditors,
            investors, and procurement teams require.
          </p>
        </div>
      </section>

      {/* Scopes explained */}
      <section className="py-20" style={{ backgroundColor: "#F7F6F3" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="eyebrow mb-4">GHG Protocol</p>
          <h2
            className="text-3xl font-bold mb-10"
            style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}
          >
            Understanding Scope 1, 2, and 3
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                scope: "Scope 1",
                label: "Direct emissions",
                desc: "Greenhouse gas emissions from sources owned or controlled by the organisation: combustion in owned boilers, vehicles, and industrial processes. The most straightforward to measure, but rarely the largest category.",
                colour: "#085041",
              },
              {
                scope: "Scope 2",
                label: "Purchased energy",
                desc: "Indirect emissions from the generation of purchased electricity, heat, steam, or cooling. Can be reported using location-based or market-based methods; the choice has significant implications for reduction strategy.",
                colour: "#042C53",
              },
              {
                scope: "Scope 3",
                label: "Value chain emissions",
                desc: "All other indirect emissions across the supply chain: purchased goods and services, capital goods, upstream and downstream transport, product use, and end-of-life treatment. Typically 70–90% of total footprint. Required for CSRD and increasingly demanded by buyers.",
                colour: "#d4654a",
              },
            ].map((s) => (
              <div
                key={s.scope}
                className="p-6 rounded-xl"
                style={{ backgroundColor: s.colour, color: "#ffffff" }}
              >
                <span
                  className="block text-xs font-bold mb-1 opacity-60 uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                  {s.scope}
                </span>
                <h3
                  className="text-xl font-bold mb-4 text-white"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {s.label}
                </h3>
                <p className="text-sm leading-relaxed opacity-80">{s.desc}</p>
              </div>
            ))}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Emissions baseline", desc: "Full Scope 1, 2, and 3 inventory for the base year, with primary data where available and documented assumptions where not." },
              { title: "Data gap analysis", desc: "Identification of where primary data is missing and where estimation increases uncertainty. Prioritised by materiality." },
              { title: "GHG Protocol alignment", desc: "Methodology fully aligned with the GHG Protocol Corporate Standard and Scope 3 Standard. All calculation approaches documented." },
              { title: "Reduction pathway", desc: "Modelling of reduction scenarios by scope, category, and intervention to identify the most material opportunities." },
              { title: "Annual reporting framework", desc: "A repeatable methodology and data collection process for year-on-year comparability. Reduces effort in subsequent reporting cycles." },
              { title: "CSRD-ready documentation", desc: "Output structured for ESRS E1 disclosure: traceable, verified, and formatted for inclusion in a CSRD report." },
            ].map((d) => (
              <div
                key={d.title}
                className="flex gap-4 p-6 rounded-xl border"
                style={{ borderColor: "#E5E3DC" }}
              >
                <span
                  className="flex-shrink-0 w-2 rounded-full"
                  style={{ backgroundColor: "#d4654a" }}
                />
                <div>
                  <h3
                    className="font-bold mb-2"
                    style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}
                  >
                    {d.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#5F5E5A" }}>
                    {d.desc}
                  </p>
                </div>
              </div>
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
            Start with your emissions baseline.
          </h2>
          <p className="text-white/70 mb-8">
            Book a free 30-minute consultation. We'll scope what's required,
            identify your data gaps, and explain what the process looks like.
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
