import type { Metadata } from "next";
import { Suspense } from "react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Book a Consultation",
  description:
    "Book a free 30-minute consultation with Acrypt. We'll tell you exactly what your LCA, EPD, or CSRD reporting requires.",
  alternates: { canonical: "https://acrypt.dk/contact" },
  openGraph: {
    title: "Contact Acrypt — Book a Free Consultation",
    description: "30 minutes. No pitch. We'll tell you exactly what your CSRD, LCA, or EPD project requires and what Acrypt can deliver.",
    url: "https://acrypt.dk/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Form */}
            <div>
              <p className="eyebrow mb-4">Contact</p>
              <h1
                className="text-4xl font-bold mb-4"
                style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}
              >
                Book a free consultation.
              </h1>
              <p className="leading-relaxed mb-8" style={{ color: "#5F5E5A" }}>
                30 minutes. No pitch. We'll tell you exactly what your reporting
                requires and what Acrypt can deliver.
              </p>
              <Suspense fallback={<FormSkeleton />}>
                <ContactForm />
              </Suspense>
            </div>

            {/* Right side info */}
            <div className="flex flex-col gap-10 lg:pt-24">

              {/* What happens next */}
              <div>
                <h2
                  className="text-xl font-bold mb-6"
                  style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}
                >
                  What happens next
                </h2>
                <ol className="space-y-5">
                  {[
                    { n: "1", title: "We review your enquiry", detail: "Within 24 hours. We read every message before responding." },
                    { n: "2", title: "Free 30-minute consultation", detail: "A direct conversation about your project, your data, and your timeline." },
                    { n: "3", title: "Proposal within 5 working days", detail: "A clear scope, methodology, and fixed price. No vague retainers." },
                  ].map((step) => (
                    <li key={step.n} className="flex gap-4 items-start">
                      <span
                        className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                        style={{ backgroundColor: "#085041", fontFamily: "var(--font-jetbrains)" }}
                      >
                        {step.n}
                      </span>
                      <div>
                        <span className="block font-semibold text-sm mb-0.5" style={{ color: "#1A1A1A" }}>
                          {step.title}
                        </span>
                        <span className="text-sm" style={{ color: "#5F5E5A" }}>
                          {step.detail}
                        </span>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Contact info */}
              <div
                className="rounded-xl border p-6"
                style={{ borderColor: "#E5E3DC", backgroundColor: "#F7F6F3" }}
              >
                <h3
                  className="font-bold mb-4"
                  style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}
                >
                  Location
                </h3>
                <p className="text-sm" style={{ color: "#5F5E5A" }}>
                  Copenhagen, Denmark 2100
                </p>
                <p className="text-sm mt-3">
                  <a
                    href="https://www.linkedin.com/company/acrypt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium transition-opacity hover:opacity-80"
                    style={{ color: "#085041" }}
                  >
                    LinkedIn →
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function FormSkeleton() {
  return (
    <div className="space-y-5 animate-pulse">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="h-11 rounded-lg" style={{ backgroundColor: "#E5E3DC" }} />
      ))}
      <div className="h-32 rounded-lg" style={{ backgroundColor: "#E5E3DC" }} />
      <div className="h-12 rounded" style={{ backgroundColor: "#E5E3DC" }} />
    </div>
  );
}
