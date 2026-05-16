import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Tracking Scope 3 Emissions is Non-Negotiable",
  description:
    "Scope 3 emissions typically represent 70–90% of a company's total footprint. Why comprehensive tracking is now required and how to approach it systematically.",
  alternates: { canonical: "https://acrypt.dk/articles/scope-3-emissions-tracking" },
  openGraph: {
    title: "Why Tracking Scope 3 Emissions is Non-Negotiable | Acrypt",
    description: "Scope 3 emissions represent the majority of most companies' footprint. A systematic approach to tracking, data gaps, and reduction pathways.",
    url: "https://acrypt.dk/articles/scope-3-emissions-tracking",
  },
};

export default function Scope3Page() {
  return (
    <>
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link href="/articles" className="inline-flex items-center gap-2 text-sm mb-8 transition-opacity hover:opacity-70" style={{ color: "#5F5E5A" }}>
            ← All articles
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex gap-2 mb-6">
                {["Carbon", "CSRD"].map((c) => (
                  <span key={c} className="text-xs font-bold px-2 py-0.5 rounded" style={{ backgroundColor: "#F7F6F3", color: "#d4654a", fontFamily: "var(--font-jetbrains)" }}>{c}</span>
                ))}
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}>
                Why Tracking Scope 3 Emissions is Non-Negotiable
              </h1>
              <p className="text-lg leading-relaxed" style={{ color: "#5F5E5A" }}>
                Scope 3 emissions (indirect emissions across the value chain) typically account for 70–90% of a company's total carbon footprint. Ignoring them means reporting on a small fraction of actual impact. Tracking them is no longer optional under CSRD.
              </p>
            </div>
            <div className="hidden lg:flex flex-col items-center justify-center gap-3">
              <Image
                src="/scope3.png"
                alt="Scope 3 emissions value chain illustration"
                width={600}
                height={500}
                priority
                className="w-full max-w-lg rounded-2xl"
              />
              <p className="text-xs max-w-lg" style={{ color: "#5F5E5A" }}>
                Source: GHG Protocol — You too can master value chain emissions
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "#F7F6F3" }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-10">

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}>What Scope 3 covers</h2>
            <p className="leading-relaxed mb-4" style={{ color: "#1A1A1A" }}>
              The GHG Protocol defines 15 categories of Scope 3 emissions, split between upstream and downstream activities. Upstream categories include purchased goods and services, capital goods, fuel and energy-related activities, upstream transport, waste, business travel, and employee commuting. Downstream categories include distribution, use of sold products, end-of-life treatment, leased assets, franchises, and investments.
            </p>
            <p className="leading-relaxed" style={{ color: "#1A1A1A" }}>
              For most companies, the largest categories are purchased goods and services (Category 1) and use of sold products (Category 11). The distribution varies significantly by sector, which is why a materiality-based approach to Scope 3 is essential before committing to full data collection across all 15 categories.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}>Why it cannot be avoided</h2>
            <div className="space-y-4">
              {[
                { title: "CSRD requires it", desc: "ESRS E1 mandates Scope 3 disclosure for in-scope companies. It is not optional, and the methodology must be documented and defensible." },
                { title: "Buyers are asking for it", desc: "Procurement teams in construction, manufacturing, and retail are requesting supplier-level emissions data as standard due diligence. Without Scope 3 data, you are excluded from tenders." },
                { title: "Science-based targets depend on it", desc: "SBTi targets covering only Scope 1 and 2 are rarely credible for companies with significant supply chains. Scope 3 must be included where it exceeds 40% of total emissions, which is nearly always the case." },
                { title: "Reduction without it is guesswork", desc: "You cannot identify where your material emissions are, or where reduction investments will have the most impact, without a Scope 3 baseline." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-4 rounded-lg border" style={{ borderColor: "#E5E3DC", backgroundColor: "#ffffff" }}>
                  <span className="flex-shrink-0 w-1.5 rounded-full mt-1" style={{ backgroundColor: "#d4654a" }} />
                  <div>
                    <span className="block font-semibold text-sm mb-1" style={{ color: "#085041" }}>{item.title}</span>
                    <span className="text-sm leading-relaxed" style={{ color: "#5F5E5A" }}>{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}>The data challenge and how to handle it</h2>
            <p className="leading-relaxed mb-4" style={{ color: "#1A1A1A" }}>
              Scope 3 data collection is genuinely difficult. Primary data (activity data directly from suppliers) is the gold standard, but it is rarely available at scale in the first reporting cycle. Spend-based estimation using economic input-output models provides a starting point, but with high uncertainty. Hybrid approaches, combining primary data for material categories with secondary data elsewhere, are standard practice.
            </p>
            <p className="leading-relaxed" style={{ color: "#1A1A1A" }}>
              The GHG Protocol Scope 3 Standard requires companies to document data sources, estimation methods, and uncertainty levels for each category. A gap analysis identifying where primary data is missing and what the uncertainty implications are is typically the first deliverable in a Scope 3 programme, and the most useful for prioritising supplier engagement.
            </p>
          </div>

        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: "#085041" }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
            Start with your Scope 3 baseline.
          </h2>
          <p className="text-white/70 mb-8">
            Acrypt delivers GHG Protocol-aligned Scope 3 inventories: primary data where available, documented assumptions where not, and a clear gap analysis.
          </p>
          <Link href="/contact?service=carbon" className="inline-block px-8 py-4 rounded font-semibold text-white transition-opacity hover:opacity-90" style={{ backgroundColor: "#d4654a" }}>
            Book a free consultation
          </Link>
        </div>
      </section>
    </>
  );
}
