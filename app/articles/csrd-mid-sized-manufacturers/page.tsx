import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What CSRD Means for Mid-Sized Manufacturers in 2026",
  description:
    "A practical guide to CSRD obligations for mid-sized European manufacturers: what is required, what is in scope, and what needs to be in place before the first reporting deadline.",
  alternates: { canonical: "https://acrypt.dk/articles/csrd-mid-sized-manufacturers" },
  openGraph: {
    title: "What CSRD Means for Mid-Sized Manufacturers in 2026 | Acrypt",
    description: "CSRD obligations for mid-sized European manufacturers: scope thresholds, ESRS requirements, and how to prepare before the 2026 deadline.",
    url: "https://acrypt.dk/articles/csrd-mid-sized-manufacturers",
  },
};

export default function CsrdMidSizedPage() {
  return (
    <>
      {/* Hero */}
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
                {["CSRD", "Regulation"].map((c) => (
                  <span
                    key={c}
                    className="text-xs font-bold px-2 py-0.5 rounded"
                    style={{ backgroundColor: "#F7F6F3", color: "#d4654a", fontFamily: "var(--font-jetbrains)" }}
                  >
                    {c}
                  </span>
                ))}
              </div>
              <h1
                className="text-4xl lg:text-5xl font-bold mb-6"
                style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}
              >
                What CSRD Means for Mid-Sized Manufacturers in 2026
              </h1>
              <p className="text-lg leading-relaxed" style={{ color: "#5F5E5A" }}>
                A practical guide to CSRD obligations for mid-sized European
                manufacturers: what is required, what is in scope, and what
                needs to be in place before the first reporting deadline.
              </p>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <Image
                src="/csrd.png"
                alt="CSRD: Why Smart Companies Embrace Mandatory Sustainability Reporting"
                width={600}
                height={600}
                priority
                className="w-full max-w-lg rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-16" style={{ backgroundColor: "#F7F6F3" }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-10">

          <div>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}
            >
              Who is in scope
            </h2>
            <p className="leading-relaxed mb-4" style={{ color: "#1A1A1A" }}>
              The Corporate Sustainability Reporting Directive (CSRD) applies
              across the EU in phases. Large companies (more than 500 employees)
              have been in scope since financial year 2024. Mid-sized companies
              enter the obligation in financial year 2025, with the first
              sustainability report due in 2026.
            </p>
            <p className="leading-relaxed mb-6" style={{ color: "#1A1A1A" }}>
              A company is considered mid-sized under CSRD if it meets at least
              two of the following three thresholds:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { stat: "250+", label: "Employees" },
                { stat: "€50M", label: "Net turnover" },
                { stat: "€25M", label: "Balance sheet total" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-5 rounded-xl bg-white border text-center"
                  style={{ borderColor: "#E5E3DC" }}
                >
                  <span
                    className="block text-3xl font-bold mb-1"
                    style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}
                  >
                    {item.stat}
                  </span>
                  <span className="text-sm" style={{ color: "#5F5E5A" }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
            <p className="leading-relaxed mt-4" style={{ color: "#1A1A1A" }}>
              Non-EU companies with significant EU operations (net turnover above
              €150 million within the EU and at least one EU subsidiary or branch
              above the relevant thresholds) are also in scope from 2028.
            </p>
          </div>

          <div>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}
            >
              What the report must contain
            </h2>
            <p className="leading-relaxed mb-4" style={{ color: "#1A1A1A" }}>
              CSRD reports must follow the European Sustainability Reporting
              Standards (ESRS). These are mandatory templates covering
              environment, social, and governance topics. Not all ESRS topics
              apply to every company: the starting point is a double materiality
              assessment, which determines which topics are relevant enough to
              require disclosure.
            </p>
            <p className="leading-relaxed" style={{ color: "#1A1A1A" }}>
              For manufacturers, the most commonly material ESRS topics are
              climate change (ESRS E1), pollution (ESRS E2), resource use and
              circular economy (ESRS E5), and own workforce (ESRS S1). A
              company with significant supply chain exposure will also typically
              need to address ESRS S2 (workers in the value chain).
            </p>
          </div>

          <div>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}
            >
              Key steps before the 2026 deadline
            </h2>
            <ul className="space-y-3">
              {[
                {
                  n: "01",
                  t: "Confirm your in-scope status",
                  d: "Check the two-out-of-three threshold test against your 2024 and 2025 accounts. Some companies near the boundary may need legal advice on the correct assessment date.",
                },
                {
                  n: "02",
                  t: "Conduct a double materiality assessment",
                  d: "This is the mandatory first step under ESRS. It identifies which sustainability topics are material from an impact perspective (your effects on people and the environment) and from a financial perspective (risks and opportunities that affect your business). The methodology and stakeholder process must be documented.",
                },
                {
                  n: "03",
                  t: "Map your data gaps",
                  d: "Once material topics are identified, review what data you currently collect and what is missing. ESRS E1 (climate) requires Scope 1, 2, and 3 GHG emissions. Many manufacturers have Scope 1 and 2 but lack Scope 3 coverage, particularly for purchased goods and logistics.",
                },
                {
                  n: "04",
                  t: "Establish data collection processes",
                  d: "CSRD data must be verifiable. Sustainability disclosures will be subject to limited third-party assurance in 2026, moving to reasonable assurance in later years. Your data collection, calculation methods, and assumptions need to be auditable.",
                },
                {
                  n: "05",
                  t: "Integrate into the management report",
                  d: "Under CSRD, the sustainability report is part of the statutory management report, not a standalone document. It must be filed with the relevant national registry and tagged in XBRL/iXBRL format.",
                },
              ].map((item) => (
                <li
                  key={item.n}
                  className="flex gap-4 p-4 rounded-lg border"
                  style={{ borderColor: "#E5E3DC", backgroundColor: "#ffffff" }}
                >
                  <span
                    className="flex-shrink-0 text-sm font-bold"
                    style={{ color: "#d4654a", fontFamily: "var(--font-jetbrains)" }}
                  >
                    {item.n}
                  </span>
                  <div>
                    <span
                      className="block font-semibold text-sm mb-1"
                      style={{ color: "#085041" }}
                    >
                      {item.t}
                    </span>
                    <span className="text-sm leading-relaxed" style={{ color: "#5F5E5A" }}>
                      {item.d}
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
              Where LCA and EPDs fit in
            </h2>
            <p className="leading-relaxed mb-4" style={{ color: "#1A1A1A" }}>
              ESRS E1 requires disclosure of GHG emissions across the full value
              chain (Scope 1, 2, and 3). For manufacturers, Scope 3 category 1
              (purchased goods and services) is typically the largest contributor
              and the hardest to quantify. A Life Cycle Assessment (LCA) provides
              the methodological backbone for calculating these upstream emissions
              in a way that is ISO-compliant and audit-ready.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: "#1A1A1A" }}>
              Environmental Product Declarations (EPDs) serve a complementary
              function: they provide third-party verified, product-level
              environmental data that can be used in procurement decisions and
              passed upstream in the value chain. As CSRD obligations cascade
              down to suppliers through large customers' Scope 3 reporting,
              having a verified EPD becomes a procurement requirement rather than
              a voluntary credential.
            </p>
            <p className="leading-relaxed" style={{ color: "#1A1A1A" }}>
              ESRS E5 (resource use and circular economy) also connects directly
              to LCA methodology, requiring disclosure on material flows, waste,
              and circularity metrics that an LCA study can directly support.
            </p>
          </div>

          <div>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}
            >
              Common misconceptions
            </h2>
            <div className="space-y-4">
              {[
                {
                  myth: "We are too small to be affected",
                  reality: "Even companies below the CSRD thresholds will face indirect pressure. Large in-scope customers are required to report Scope 3 emissions, which means they will request emissions data from their suppliers. CSRD obligations cascade through supply chains regardless of whether the supplier is directly in scope.",
                },
                {
                  myth: "We can use our existing CSR report",
                  reality: "Existing voluntary CSR reports do not satisfy CSRD. The ESRS require a specific structure, defined data points, and third-party assurance. A gap assessment against ESRS is needed before the existing report can be mapped to the new requirements.",
                },
                {
                  myth: "CSRD is an accounting project",
                  reality: "CSRD requires operational data (energy, emissions, waste, water), value chain mapping, and stakeholder engagement. It cuts across procurement, operations, HR, and finance. Starting with only the finance team is a common setup failure.",
                },
              ].map((item) => (
                <div
                  key={item.myth}
                  className="p-5 rounded-xl bg-white border"
                  style={{ borderColor: "#E5E3DC" }}
                >
                  <span
                    className="block font-bold mb-2 text-sm"
                    style={{ color: "#d4654a", fontFamily: "var(--font-jetbrains)" }}
                  >
                    Misconception
                  </span>
                  <span
                    className="block font-semibold mb-2"
                    style={{ color: "#085041" }}
                  >
                    {item.myth}
                  </span>
                  <p className="text-sm leading-relaxed" style={{ color: "#5F5E5A" }}>
                    {item.reality}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="p-6 rounded-xl"
            style={{ backgroundColor: "#ffffff", borderLeft: "4px solid #085041" }}
          >
            <p
              className="text-xs font-bold uppercase tracking-widest mb-2"
              style={{ color: "#085041", fontFamily: "var(--font-jetbrains)" }}
            >
              Key dates
            </p>
            <ul className="space-y-2">
              {[
                { date: "FY 2024", note: "Large companies (500+ employees) in scope. First reports due in 2025." },
                { date: "FY 2025", note: "Mid-sized companies (250+ employees or €50M+ turnover) in scope. First reports due in 2026." },
                { date: "FY 2026", note: "Listed SMEs in scope (with opt-out possibility until 2028)." },
                { date: "FY 2028", note: "Non-EU companies with significant EU operations in scope." },
              ].map((item) => (
                <li key={item.date} className="flex gap-3 text-sm" style={{ color: "#1A1A1A" }}>
                  <span
                    className="flex-shrink-0 font-bold"
                    style={{ color: "#085041", fontFamily: "var(--font-jetbrains)", minWidth: "4.5rem" }}
                  >
                    {item.date}
                  </span>
                  <span style={{ color: "#5F5E5A" }}>{item.note}</span>
                </li>
              ))}
            </ul>
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
            Preparing for your first CSRD report?
          </h2>
          <p className="text-white/70 mb-8">
            Acrypt delivers CSRD compliance packages for mid-sized manufacturers:
            double materiality assessment, ESRS gap analysis, GHG inventory, and
            audit-ready documentation.
          </p>
          <Link
            href="/contact?service=csrd"
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
