"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

const SERVICE_OPTIONS = [
  { value: "", label: "Select a service…" },
  { value: "lca-epd", label: "LCA & EPD Development" },
  { value: "csrd", label: "CSRD Compliance Reporting" },
  { value: "carbon", label: "Carbon Accounting (Scope 1, 2, 3)" },
  { value: "strategy", label: "Strategy Development" },
  { value: "treesable", label: "Urban Tree Valuation (Treesable)" },
  { value: "other", label: "Other / Not sure yet" },
];

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const [service, setService] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const param = searchParams.get("service");
    if (param && SERVICE_OPTIONS.some((o) => o.value === param)) {
      setService(param);
    }
  }, [searchParams]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      service,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Submission failed");
      }

      setState("success");
    } catch (err) {
      setState("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (state === "success") {
    return (
      <div
        className="rounded-xl border p-8 text-center"
        style={{ borderColor: "#E5E3DC", backgroundColor: "#F7F6F3" }}
      >
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
          style={{ backgroundColor: "#085041" }}
        >
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
        <h3
          className="text-xl font-bold mb-2"
          style={{ color: "#085041", fontFamily: "var(--font-playfair)" }}
        >
          Enquiry received
        </h3>
        <p className="text-sm" style={{ color: "#5F5E5A" }}>
          We'll review your message and be in touch within 24 hours to schedule
          a consultation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Name" required>
          <input
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="form-input"
          />
        </Field>
        <Field label="Company" required>
          <input
            name="company"
            type="text"
            required
            placeholder="Your company"
            className="form-input"
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Email" required>
          <input
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className="form-input"
          />
        </Field>
        <Field label="Phone" hint="Optional">
          <input
            name="phone"
            type="tel"
            placeholder="+45 …"
            className="form-input"
          />
        </Field>
      </div>

      <Field label="Service interested in" required>
        <select
          name="service"
          required
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="form-input"
        >
          {SERVICE_OPTIONS.map((o) => (
            <option key={o.value} value={o.value} disabled={o.value === ""}>
              {o.label}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Message" required hint="Minimum 20 characters">
        <textarea
          name="message"
          required
          minLength={20}
          rows={5}
          placeholder="Tell us about your project or question…"
          className="form-input resize-none"
        />
      </Field>

      {state === "error" && (
        <p className="text-sm rounded-lg p-3" style={{ backgroundColor: "#FEF2F0", color: "#c0392b" }}>
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={state === "loading"}
        className="w-full py-3.5 rounded font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
        style={{ backgroundColor: "#d4654a" }}
      >
        {state === "loading" ? "Sending…" : "Send enquiry"}
      </button>

      <style>{`
        .form-input {
          width: 100%;
          padding: 0.625rem 0.875rem;
          border-radius: 0.5rem;
          border: 1px solid #E5E3DC;
          background: #ffffff;
          color: #1A1A1A;
          font-size: 0.9375rem;
          font-family: var(--font-inter), system-ui, sans-serif;
          outline: none;
          transition: border-color 0.15s;
        }
        .form-input:focus {
          border-color: #085041;
          box-shadow: 0 0 0 3px rgba(8,80,65,0.1);
        }
        .form-input::placeholder {
          color: #9e9c99;
        }
      `}</style>
    </form>
  );
}

function Field({
  label,
  required,
  hint,
  children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex justify-between mb-1.5">
        <label
          className="text-sm font-medium"
          style={{ color: "#1A1A1A" }}
        >
          {label}
          {required && <span style={{ color: "#d4654a" }}> *</span>}
        </label>
        {hint && (
          <span className="text-xs" style={{ color: "#5F5E5A" }}>
            {hint}
          </span>
        )}
      </div>
      {children}
    </div>
  );
}
