"use client";

import { useState } from "react";
import { faqs } from "@/lib/csrdFaqs";

export default function CsrdFaq() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="divide-y" style={{ borderColor: "#E5E3DC" }}>
      {faqs.map((item, i) => (
        <div key={i} className="py-5">
          <button
            className="w-full flex justify-between items-start gap-4 text-left"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="font-semibold text-base" style={{ color: "#085041" }}>
              {item.q}
            </span>
            <svg
              className={`w-5 h-5 flex-shrink-0 mt-0.5 transition-transform ${open === i ? "rotate-180" : ""}`}
              style={{ color: "#d4654a" }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {open === i && (
            <p className="mt-3 text-sm leading-relaxed" style={{ color: "#5F5E5A" }}>
              {item.a}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
