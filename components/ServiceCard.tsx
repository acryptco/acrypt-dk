import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

export default function ServiceCard({ title, description, href, icon }: ServiceCardProps) {
  return (
    <div
      className="group flex flex-col gap-4 p-6 rounded-xl border bg-white transition-shadow hover:shadow-md"
      style={{ borderColor: "#E5E3DC" }}
    >
      <div style={{ color: "#085041" }} className="w-10 h-10">
        {icon}
      </div>
      <div>
        <h3
          className="text-lg font-bold mb-2"
          style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}
        >
          {title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "#5F5E5A" }}>
          {description}
        </p>
      </div>
      <Link
        href={href}
        className="mt-auto inline-flex items-center gap-1 text-sm font-semibold transition-colors"
        style={{ color: "#085041" }}
      >
        Learn more
        <span
          className="inline-block transition-transform group-hover:translate-x-1"
          style={{ color: "#d4654a" }}
        >
          →
        </span>
      </Link>
    </div>
  );
}
