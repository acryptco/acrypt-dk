import type { Metadata } from "next";
import Image from "next/image";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Services",
  description:
    "ISO-certified LCA, EPD, CSRD compliance reporting, carbon accounting, and sustainability strategy. Delivered with process engineering precision.",
  alternates: { canonical: "https://acrypt.dk/services" },
  openGraph: {
    title: "Services | Acrypt",
    description: "ISO-certified LCA, EPD, CSRD compliance, carbon accounting, and sustainability strategy. Every engagement produces a documented, traceable output.",
    url: "https://acrypt.dk/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="eyebrow mb-4">Services</p>
            <h1
              className="text-4xl lg:text-5xl font-bold mb-6"
              style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}
            >
              Every service built on one principle: measurable, defensible results.
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: "#5F5E5A" }}>
              Acrypt does not offer sustainability advisory in the traditional
              sense. Every engagement produces a documented, traceable output:
              an EPD, a compliance package, or an emissions inventory that can be
              presented to auditors, investors, and procurement teams without
              qualification.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/service.png"
              alt="Acrypt services illustration"
              width={600}
              height={500}
              priority
              className="w-full max-w-lg rounded-2xl"
            />
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "#F7F6F3" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ServiceCard
              title="LCA & EPD"
              description="ISO 14025 and EN 15804-compliant Life Cycle Assessments and Environmental Product Declarations. Data collection, modelling, 3rd-party verification coordination, and publication on an international EPD programme. Key deliverable: a published, verified EPD."
              href="/services/lca-epd"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                </svg>
              }
            />
            <ServiceCard
              title="CSRD Compliance"
              description="Audit-ready CSRD documentation packages covering Scope 1, 2, and 3 emissions inventory, product-level EPDs, and third-party verified LCA data. Structured for the European Sustainability Reporting Standards. Key deliverable: a CSRD-ready disclosure package."
              href="/services/csrd"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
              }
            />
            <ServiceCard
              title="Carbon Accounting"
              description="Scope 1, 2, and 3 emissions inventory aligned with the GHG Protocol. Baseline quantification, data gap analysis, reduction pathway modelling, and annual reporting framework. Key deliverable: a verified emissions baseline and reduction roadmap."
              href="/services/carbon"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                </svg>
              }
            />
            <ServiceCard
              title="Strategy Development"
              description="ESG materiality assessments, EU Taxonomy alignment analysis, and stakeholder sustainability strategies grounded in quantitative LCA and emissions data. Key deliverable: a documented sustainability strategy with measurable targets."
              href="/services/strategy"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                </svg>
              }
            />
          </div>
        </div>
      </section>
    </>
  );
}
