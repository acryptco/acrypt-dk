export default function CredentialBar() {
  const credentials = [
    "ISO 14025 Certified",
    "EN 15804",
    "GHG Protocol",
    "CSRD Ready",
    "Published EPDs",
    "PhD-led Research",
  ];

  return (
    <div
      style={{ backgroundColor: "#085041" }}
      className="overflow-hidden py-3"
      aria-label="Credentials and certifications"
    >
      <div className="animate-scroll flex gap-0 whitespace-nowrap">
        {[...credentials, ...credentials].map((c, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-4 px-6 text-sm text-white/90"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            {c}
            <span className="text-white/30">·</span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 24s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
