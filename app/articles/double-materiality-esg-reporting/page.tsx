import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What is Double Materiality and Its Role in ESG Reporting",
  description:
    "Double materiality combines impact materiality and financial materiality. Understanding both dimensions is essential for credible CSRD and ESG disclosure.",
  alternates: { canonical: "https://acrypt.dk/articles/double-materiality-esg-reporting" },
  openGraph: {
    title: "What is Double Materiality and Its Role in ESG Reporting | Acrypt",
    description: "Impact materiality and financial materiality explained, and why both dimensions are required under CSRD.",
    url: "https://acrypt.dk/articles/double-materiality-esg-reporting",
  },
};

export default function DoubleMaterialityPage() {
  return (
    <>
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-sm mb-8 transition-opacity hover:opacity-70"
            style={{ color: "#5F5E5A" }}
          >
            ← All articles
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex gap-2 mb-6">
                {["CSRD", "ESG"].map((c) => (
                  <span key={c} className="text-xs font-bold px-2 py-0.5 rounded" style={{ backgroundColor: "#F7F6F3", color: "#d4654a", fontFamily: "var(--font-jetbrains)" }}>{c}</span>
                ))}
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}>
                What is Double Materiality and Its Role in ESG Reporting
              </h1>
              <p className="text-lg leading-relaxed" style={{ color: "#5F5E5A" }}>
                Materiality in ESG refers to the identification and evaluation of sustainability issues that are significant enough to require disclosure. Double materiality extends this concept in two directions, and understanding both is a prerequisite for credible CSRD compliance.
              </p>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <Image
                src="/double.png"
                alt="Double materiality illustration"
                width={600}
                height={500}
                priority
                className="w-full max-w-lg rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "#F7F6F3" }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-10">

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}>The two dimensions of materiality</h2>
            <p className="leading-relaxed mb-4" style={{ color: "#1A1A1A" }}>
              Double materiality has two distinct dimensions, each with a different lens:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: "Impact materiality", desc: "How does the organisation affect the environment and society? This covers both actual and potential impacts (positive and negative) across the value chain." },
                { label: "Financial materiality", desc: "How do environmental and social factors affect the organisation's financial position, performance, and prospects? This is the inside-out lens required by investors." },
              ].map((item) => (
                <div key={item.label} className="p-5 rounded-xl bg-white border" style={{ borderColor: "#E5E3DC" }}>
                  <span className="block font-bold mb-2" style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}>{item.label}</span>
                  <p className="text-sm leading-relaxed" style={{ color: "#5F5E5A" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}>Why it matters for CSRD</h2>
            <p className="leading-relaxed mb-4" style={{ color: "#1A1A1A" }}>
              The European Sustainability Reporting Standards (ESRS), which underpin CSRD, require a double materiality assessment as the starting point for all reporting. A topic is reportable if it is material from either or both perspectives. This means a company cannot limit its disclosure to financially significant risks alone; it must also assess and report on its own impacts on people and the environment.
            </p>
            <p className="leading-relaxed" style={{ color: "#1A1A1A" }}>
              The assessment is not a tick-box exercise. It requires systematic stakeholder engagement, sector-specific analysis, and documented methodology. The output determines which ESRS disclosure requirements apply, making it the single most consequential step in a CSRD programme.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}>How frameworks differ on materiality</h2>
            <p className="leading-relaxed mb-4" style={{ color: "#1A1A1A" }}>
              Not all frameworks apply the same materiality concept. SASB and IFRS S1/S2 focus primarily on financial materiality (what matters to investors). GRI takes an impact materiality approach (what matters to the world). CSRD and ESRS require both simultaneously, which is what distinguishes the double materiality standard from its predecessors.
            </p>
            <p className="leading-relaxed" style={{ color: "#1A1A1A" }}>
              For companies operating across multiple reporting obligations, the double materiality assessment should be designed to satisfy the broadest requirement (currently ESRS) and then mapped back to other frameworks as needed.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}>Conducting a double materiality assessment</h2>
            <ul className="space-y-3">
              {[
                { n: "01", t: "Define the value chain scope", d: "Map upstream and downstream activities: purchased goods, logistics, product use, end-of-life. Boundaries must be documented." },
                { n: "02", t: "Identify sustainability topics", d: "Use ESRS topic list as a starting point. Supplement with sector-specific issues and stakeholder input." },
                { n: "03", t: "Assess impact materiality", d: "Evaluate severity, scale, and remediability of impacts. Consider both actual and potential, positive and negative." },
                { n: "04", t: "Assess financial materiality", d: "Evaluate likelihood and magnitude of financial effects (risks and opportunities) arising from sustainability topics." },
                { n: "05", t: "Document and disclose", d: "Record the methodology, stakeholder process, and conclusions. This documentation is subject to assurance under CSRD." },
              ].map((item) => (
                <li key={item.n} className="flex gap-4 p-4 rounded-lg border" style={{ borderColor: "#E5E3DC", backgroundColor: "#ffffff" }}>
                  <span className="flex-shrink-0 text-sm font-bold" style={{ color: "#d4654a", fontFamily: "var(--font-jetbrains)" }}>{item.n}</span>
                  <div>
                    <span className="block font-semibold text-sm mb-1" style={{ color: "#085041" }}>{item.t}</span>
                    <span className="text-sm leading-relaxed" style={{ color: "#5F5E5A" }}>{item.d}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: "#085041" }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
            Need a double materiality assessment?
          </h2>
          <p className="text-white/70 mb-8">
            Acrypt conducts structured double materiality assessments aligned with ESRS requirements: documented, stakeholder-informed, and audit-ready.
          </p>
          <Link href="/contact?service=csrd" className="inline-block px-8 py-4 rounded font-semibold text-white transition-opacity hover:opacity-90" style={{ backgroundColor: "#d4654a" }}>
            Book a free consultation
          </Link>
        </div>
      </section>
    </>
  );
}
