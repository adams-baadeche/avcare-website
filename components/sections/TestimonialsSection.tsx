"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Star } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] as any },
});

const ACCENT_COLORS = [
  "linear-gradient(135deg, #1a5c35, #3fc17a)",
  "linear-gradient(135deg, #3b82f6, #60a5fa)",
  "linear-gradient(135deg, #8b5cf6, #a78bfa)",
  "linear-gradient(135deg, #f59e0b, #fbbf24)",
  "linear-gradient(135deg, #ef4444, #f87171)",
];

export default function TestimonialsSection() {
  const t = useTranslations("testimonials");

  const testimonials = [
    { name: t("t1_name"), role: t("t1_role"), text: t("t1_text"), rating: 5 },
    { name: t("t2_name"), role: t("t2_role"), text: t("t2_text"), rating: 5 },
    { name: t("t3_name"), role: t("t3_role"), text: t("t3_text"), rating: 5 },
    { name: t("t4_name"), role: t("t4_role"), text: t("t4_text"), rating: 5 },
    { name: t("t5_name"), role: t("t5_role"), text: t("t5_text"), rating: 5 },
  ];

  return (
    <section className="section-padding bg-white" id="testimonials">
      <div className="container-max">
        <div className="section-header">
          <motion.span {...fadeUp(0)} className="badge">{t("badge")}</motion.span>
          <motion.h2 {...fadeUp(0.07)} className="heading-lg">{t("headline")}</motion.h2>
          <motion.p {...fadeUp(0.14)}>{t("subheadline")}</motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((item, i) => (
            <motion.article
              key={i}
              {...fadeUp(i * 0.08)}
              className="testimonial-card flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: item.rating }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: "var(--text-secondary)" }}>
                &ldquo;{item.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid var(--border-subtle)" }}>
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                  style={{ background: ACCENT_COLORS[i % ACCENT_COLORS.length] }}
                >
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{item.name}</p>
                  <p className="text-xs" style={{ color: "var(--brand)" }}>{item.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
