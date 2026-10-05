import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

/* ============================================================
   Shared study-article UI primitives.
   Every topic file in /content imports what it needs from here,
   so styling stays consistent across topics added in later sessions.
   Colors are theme-aware via the CSS variables defined in
   SSCPrepApp.jsx's <FontLoader /> (--surface, --text, --border, etc).
============================================================ */

export const Tag = ({ tag }) => {
  if (!tag) return null;
  const isHigh = tag === "HIGH";
  return (
    <span
      className="font-mono text-[10px] font-medium px-1.5 py-0.5 rounded shrink-0"
      style={{ color: isHigh ? "#8a6420" : "#2C6FA6", background: isHigh ? "#f3e6c9" : "#e3edf5" }}
    >
      {isHigh ? "★ HIGH" : "◆ MED"}
    </span>
  );
};

export const StatBox = ({ value, label }) => (
  <div className="rounded-xl border p-3.5" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
    <p className="font-display font-bold text-lg" style={{ color: "#7a2e2e" }}>{value}</p>
    <p className="text-[12px] leading-snug mt-0.5" style={{ color: "var(--text-muted)" }}>{label}</p>
  </div>
);

export const Callout = ({ type = "exam", label, children }) => {
  const map = {
    exam: { bg: "var(--exam-bg)", border: "var(--exam-border)", text: "var(--exam-text)" },
    trap: { bg: "var(--trap-bg)", border: "var(--trap-border)", text: "var(--trap-text)" },
    mnemonic: { bg: "var(--mnem-bg)", border: "var(--mnem-border)", text: "var(--mnem-text)" },
  }[type];
  return (
    <div className="rounded-xl p-4 my-4 text-[13.5px] leading-relaxed" style={{ background: map.bg, border: `1px solid ${map.border}` }}>
      <p className="font-display font-bold text-[13px] mb-1.5" style={{ color: map.text }}>{label}</p>
      <div style={{ color: "var(--text-soft)" }}>{children}</div>
    </div>
  );
};

export const DataTable = ({ headers, rows }) => (
  <div className="my-4 rounded-xl border overflow-x-auto" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
    <table className="w-full text-[13px] border-collapse min-w-[420px]">
      <thead>
        <tr style={{ background: "var(--table-head)" }}>
          {headers.map((h, i) => (
            <th key={i} className="text-left font-display font-semibold px-3 py-2 text-[12px] whitespace-nowrap" style={{ color: "var(--text)" }}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} style={{ borderTop: "1px solid var(--border)" }}>
            {row.map((cell, j) => (
              <td key={j} className="px-3 py-2.5 align-top" style={{ color: "var(--text-soft)" }}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const Accordion = ({ chip, title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-xl border my-3 overflow-hidden" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center gap-3 px-4 py-3.5 text-left">
        <span className="font-mono text-[11px] font-medium px-2 py-1 rounded shrink-0" style={{ color: "#7a2e2e", background: "var(--trap-bg)" }}>{chip}</span>
        <span className="font-display font-semibold text-[14.5px] flex-1" style={{ color: "var(--text)" }}>{title}</span>
        <ChevronDown size={16} style={{ color: "var(--text-muted)" }} className={`shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-4 pb-4 text-[13.5px] leading-relaxed" style={{ color: "var(--text-soft)" }}>{children}</div>}
    </div>
  );
};

export const MCQItem = ({ n, q, options, correctIndex, explanation }) => {
  const [revealed, setRevealed] = useState(false);
  return (
    <div className="rounded-xl border p-4 my-3" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
      <p className="font-semibold text-[14px] mb-2.5" style={{ color: "var(--text)" }}>{n}. {q}</p>
      <div className="space-y-1.5 mb-2.5">
        {options.map((opt, i) => (
          <div key={i} className="text-[13px] px-3 py-2 rounded-lg border"
            style={ revealed && i === correctIndex
              ? { background: "var(--correct-bg)", borderColor: "var(--correct-border)", color: "var(--correct-text)" }
              : { background: "var(--surface-alt)", borderColor: "var(--border)", color: "var(--text-soft)" } }>
            {String.fromCharCode(65 + i)}. {opt}
          </div>
        ))}
      </div>
      {!revealed ? (
        <button onClick={() => setRevealed(true)} className="text-[12.5px] font-semibold" style={{ color: "#7a2e2e" }}>Show answer</button>
      ) : (
        <div className="text-[13px] rounded-lg px-3 py-2.5 mt-1" style={{ background: "var(--correct-bg)", color: "var(--correct-text)" }}>{explanation}</div>
      )}
    </div>
  );
};

export const SectionHeading = ({ num, title }) => (
  <div className="flex items-baseline gap-2.5 mt-8 mb-2.5 pt-6 first:mt-0 first:pt-0" style={{ borderTop: "1px solid var(--border)" }}>
    <span className="font-display font-semibold text-[13px]" style={{ color: "#a37421" }}>{num}</span>
    <h2 className="font-display font-bold text-[19px]" style={{ color: "var(--text)" }}>{title}</h2>
  </div>
);

export const ArticleHeader = ({ eyebrow1, eyebrow2, priority = "HIGH", title, dek, stats = [] }) => (
  <>
    <div className="flex flex-wrap gap-1.5 mb-3">
      <span className="text-[11px] px-2.5 py-1 rounded-full border" style={{ borderColor: "var(--exam-border)", background: "var(--exam-bg)", color: "var(--exam-text)" }}>{eyebrow1}</span>
      <span className="text-[11px] px-2.5 py-1 rounded-full border" style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}>{eyebrow2}</span>
      {priority && (
        <span className="text-[11px] px-2.5 py-1 rounded-full border" style={{ borderColor: "var(--exam-border)", background: "var(--exam-bg)", color: "var(--exam-text)" }}>
          {priority === "HIGH" ? "★ HIGH priority" : "◆ MED priority"}
        </span>
      )}
    </div>
    <h1 className="font-display text-[26px] font-bold leading-tight mb-2" style={{ color: "var(--text)" }}>{title}</h1>
    <p className="text-[14.5px] leading-relaxed mb-5" style={{ color: "var(--text-muted)" }}>{dek}</p>
    {stats.length > 0 && (
      <div className="grid grid-cols-2 gap-2.5 mb-8">
        {stats.map((s, i) => <StatBox key={i} value={s.value} label={s.label} />)}
      </div>
    )}
  </>
);

export const ArticleFooter = ({ text }) => (
  <p className="text-[11.5px] mt-6 leading-relaxed pt-4" style={{ color: "var(--text-muted)", borderTop: "1px solid var(--border)" }}>
    {text}
  </p>
);
