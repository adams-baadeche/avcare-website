"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { Plus } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] as any },
});

export default function FAQSection() {
  const t = useTranslations("faq");
  const [open, setOpen] = useState<number | null>(0);

  const faqs = [
    { q: t("q1"), a: t("a1") },
    { q: t("q2"), a: t("a2") },
    { q: t("q3"), a: t("a3") },
    { q: t("q4"), a: t("a4") },
    { q: t("q5"), a: t("a5") },
    { q: t("q6"), a: t("a6") },
    { q: t("q7"), a: t("a7") },
  ];

  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ background: "var(--surface-2)" }}
      id="faq"
    >
      {/* Constrain to narrower column for readability */}
      <div className="container-max" style={{ maxWidth: "760px" }}>
        <div className="section-header">
          <motion.span {...fadeUp(0)} className="badge">{t("badge")}</motion.span>
          <motion.h2 {...fadeUp(0.07)} className="heading-lg">{t("headline")}</motion.h2>
          <motion.p {...fadeUp(0.14)} style={{ maxWidth: "480px" }}>{t("subheadline")}</motion.p>
        </div>

        <div className="flex flex-col gap-2.5">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                {...fadeUp(i * 0.055)}
                className="faq-item"
                style={{ borderColor: isOpen ? "var(--brand-border)" : "var(--border)" }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left"
                  style={{ padding: "1.125rem 1.375rem" }}
                >
                  <span
                    className="font-semibold leading-snug"
                    style={{
                      fontSize: "0.9375rem",
                      color: isOpen ? "var(--brand)" : "var(--text-primary)",
                    }}
                  >
                    {faq.q}
                  </span>
                  <span
                    className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200"
                    style={{
                      background: isOpen ? "var(--brand)" : "var(--surface-3)",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    <Plus className="w-3.5 h-3.5" style={{ color: isOpen ? "#fff" : "var(--text-muted)" }} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.24, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p
                        className="body-md leading-relaxed"
                        style={{
                          padding: "0 1.375rem 1.25rem",
                          color: "var(--text-secondary)",
                          borderTop: "1px solid var(--border-subtle)",
                          paddingTop: "1rem",
                        }}
                      >
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
