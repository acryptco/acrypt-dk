import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Research, insights, and technical perspectives on LCA, EPD, CSRD, and the bioeconomy from Acrypt.",
  alternates: { canonical: "https://acrypt.dk/articles" },
  openGraph: {
    title: "Articles | Acrypt",
    description: "Research, insights, and technical perspectives on LCA, EPD, CSRD, and the bioeconomy. Written by a PhD bioprocess engineer.",
    url: "https://acrypt.dk/articles",
  },
};

const articles = [
  {
    title: "What is Double Materiality and Its Role in ESG Reporting",
    category: ["CSRD", "ESG"],
    excerpt:
      "Double materiality combines impact materiality (how the organisation affects the world) and financial materiality (how sustainability factors affect the organisation). Under CSRD, both dimensions are mandatory. This article explains what that means in practice.",
    status: "published" as const,
    href: "/articles/double-materiality-esg-reporting",
  },
  {
    title: "Why Tracking Scope 3 Emissions is Non-Negotiable",
    category: ["Carbon", "CSRD"],
    excerpt:
      "Scope 3 emissions typically represent 70–90% of a company's total footprint. Ignoring them means reporting on a fraction of actual impact. This article explains what Scope 3 covers, why it cannot be avoided, and how to approach data collection systematically.",
    status: "published" as const,
    href: "/articles/scope-3-emissions-tracking",
  },
  {
    title: "ESG Reporting Frameworks: Which One Should You Use?",
    category: ["CSRD", "ESG"],
    excerpt:
      "GRI, ISSB, CSRD, SASB, TCFD: the ESG framework landscape is crowded. A practical guide to understanding the differences and choosing the right approach based on your jurisdiction, stakeholders, and reporting obligations.",
    status: "published" as const,
    href: "/articles/esg-reporting-frameworks",
  },
  {
    title: "EPDs and the Nordic Building Regulations: What Suppliers Need to Know",
    category: ["EPD", "Regulation"],
    excerpt:
      "Nordic building regulations now require lifecycle-based carbon calculations for new buildings. These calculations depend on verified EPD data from material suppliers. If your product goes into Nordic construction projects, an EPD is no longer optional.",
    status: "published" as const,
    href: "/articles/epds-nordic-building-regulations",
  },
  {
    title: "Why Companies Invest in Environmental Product Declarations",
    category: ["EPD", "LCA"],
    excerpt:
      "An EPD is not a marketing document. It is a verified, standardised declaration of a product's environmental impacts. Companies invest in EPDs because the commercial and regulatory consequences of not having one are increasingly severe.",
    status: "published" as const,
    href: "/articles/why-companies-invest-in-epds",
  },
  {
    title: "Life Cycle Assessment: The Technical Foundation of ESG Reporting",
    category: ["LCA", "EPD", "CSRD"],
    excerpt:
      "LCA is the systematic method behind EPDs, product carbon footprints, and CSRD product disclosures. Without it, environmental claims have no credible technical foundation. This article explains what LCA measures, how it works, and why rigour matters.",
    status: "published" as const,
    href: "/articles/lca-esg-excellence",
  },
  {
    title: "Seaweed as a coastal bioeconomy resource: field research from Ghana",
    category: ["Research", "Marine Science"],
    excerpt:
      "An overview of the published Elsevier paper on seaweed diversity and abundance across five coastal sites in Ghana, with commentary on what the findings mean for sustainable aquaculture and coastal bioeconomy applications.",
    status: "published" as const,
    href: "https://doi.org/10.1016/j.rsma.2021.101719",
    external: true,
  },
  {
    title: "What CSRD Means for Mid-Sized Manufacturers in 2026",
    category: ["CSRD", "Regulation"],
    excerpt:
      "A practical guide to CSRD obligations for mid-sized European manufacturers: what is required, what is in scope, and what needs to be in place before the first reporting deadline.",
    status: "published" as const,
    href: "/articles/csrd-mid-sized-manufacturers",
  },
];


export default function ArticlesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="eyebrow mb-4">Articles</p>
            <h1
              className="text-4xl lg:text-5xl font-bold mb-6"
              style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}
            >
              Research, insights, and technical perspectives.
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: "#5F5E5A" }}>
              Written by the founder, a PhD bioprocess engineer with published
              research in marine science and 3 patents in extraction and
              biomass processing.
            </p>
          </div>
          <div className="hidden lg:flex items-center justify-center">
            <Image
              src="/articles.png"
              alt="Articles and research publications"
              width={600}
              height={500}
              priority
              className="w-full max-w-lg rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Articles grid */}
      <section className="py-16" style={{ backgroundColor: "#F7F6F3" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, i) => (
              <ArticleCard key={i} article={article} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ArticleCard({
  article,
}: {
  article: {
    title: string;
    category: string[];
    excerpt: string;
    status: "published" | "coming-soon";
    href: string | null;
    external?: boolean;
  };
}) {
  const isComingSoon = article.status === "coming-soon";

  const cardContent = (
    <div
      className={`rounded-xl border bg-white h-full flex flex-col ${isComingSoon ? "opacity-70" : "hover:shadow-md transition-shadow"}`}
      style={{ borderColor: "#E5E3DC" }}
    >
      <div className="p-6 flex flex-col gap-4 flex-1">
        <div className="flex items-center gap-3 flex-wrap">
          {article.category.map((c) => (
            <span
              key={c}
              className="text-xs font-bold px-2 py-0.5 rounded"
              style={{
                backgroundColor: "#F7F6F3",
                color: "#d4654a",
                fontFamily: "var(--font-jetbrains)",
              }}
            >
              {c}
            </span>
          ))}
          {isComingSoon && (
            <span
              className="text-xs font-bold px-2 py-0.5 rounded"
              style={{
                backgroundColor: "#E5E3DC",
                color: "#5F5E5A",
                fontFamily: "var(--font-jetbrains)",
              }}
            >
              Coming soon
            </span>
          )}
        </div>

        <h2
          className="text-xl font-bold leading-snug"
          style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}
        >
          {article.title}
        </h2>

        <p className="text-sm leading-relaxed flex-1" style={{ color: "#5F5E5A" }}>
          {article.excerpt}
        </p>

        {!isComingSoon && (
          <div className="pt-2 border-t" style={{ borderColor: "#E5E3DC" }}>
            <span className="text-sm font-semibold" style={{ color: "#d4654a" }}>
              {article.external ? "Read paper →" : "Read →"}
            </span>
          </div>
        )}
      </div>
    </div>
  );

  if (isComingSoon || !article.href) return cardContent;

  if (article.external) {
    return (
      <a
        href={article.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {cardContent}
      </a>
    );
  }

  return (
    <Link href={article.href} className="block">
      {cardContent}
    </Link>
  );
}
