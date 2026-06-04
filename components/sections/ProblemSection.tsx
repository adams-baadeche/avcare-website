"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { AlertCircle, Activity, Users, Stethoscope } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] as any },
});

export default function ProblemSection() {
  const t = useTranslations("problem");

  const cards = [
    { title: t("card1_title"), desc: t("card1_desc"), Icon: AlertCircle, accent: "#dc2626", bg: "#fef2f2", border: "#fecaca" },
    { title: t("card2_title"), desc: t("card2_desc"), Icon: Activity,    accent: "#d97706", bg: "#fffbeb", border: "#fde68a" },
    { title: t("card3_title"), desc: t("card3_desc"), Icon: Users,       accent: "#2563eb", bg: "#eff6ff", border: "#bfdbfe" },
    { title: t("card4_title"), desc: t("card4_desc"), Icon: Stethoscope, accent: "#7c3aed", bg: "#f5f3ff", border: "#ddd6fe" },
  ];

  const stats = [
    { value: t("stat1_value"), label: t("stat1") },
    { value: t("stat2_value"), label: t("stat2") },
    { value: t("stat3_value"), label: t("stat3") },
  ];

  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ background: "var(--surface-2)" }}
      id="problem"
    >
      <div className="container-max">

        {/* Section header */}
        <div className="section-header">
          <motion.span {...fadeUp(0)} className="badge">{t("badge")}</motion.span>
          <motion.h2 {...fadeUp(0.07)} className="heading-lg">{t("headline")}</motion.h2>
          <motion.p {...fadeUp(0.14)} style={{ maxWidth: "520px" }}>{t("subheadline")}</motion.p>
        </div>

        {/* Problem cards — equal height via stretch */}
        <div
          className="grid md:grid-cols-2 items-stretch"
          style={{ gap: "clamp(1rem, 2vw, 1.5rem)", marginBottom: "clamp(2rem, 4vw, 3rem)" }}
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              {...fadeUp(i * 0.08)}
              className="bg-white rounded-2xl flex items-start gap-5 card-hover h-full"
              style={{
                border: `1px solid ${card.border}`,
                padding: "clamp(1.5rem, 3vw, 2.25rem)",
              }}
            >
              <div
                className="flex items-center justify-center shrink-0 rounded-xl"
                style={{
                  width: "3rem",
                  height: "3rem",
                  minWidth: "3rem",
                  background: card.bg,
                  border: `1px solid ${card.border}`,
                }}
              >
                <card.Icon className="w-5 h-5" style={{ color: card.accent }} />
              </div>
              <div className="min-w-0">
                <h3 className="heading-md mb-2">{card.title}</h3>
                <p className="body-md leading-relaxed">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats strip */}
        <motion.div
          {...fadeUp(0.32)}
          className="grid grid-cols-1 sm:grid-cols-3"
          style={{ gap: "clamp(1rem, 2vw, 1.5rem)" }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl text-center flex flex-col items-center justify-center"
              style={{
                border: "1px solid var(--border)",
                padding: "clamp(1.75rem, 3.5vw, 2.75rem) 1.5rem",
                minHeight: "9rem",
              }}
            >
              <p
                style={{
                  fontSize: "clamp(2.25rem, 5vw, 3rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  color: "var(--brand)",
                  lineHeight: 1,
                  marginBottom: "0.75rem",
                }}
              >
                {s.value}
              </p>
              <p className="body-md" style={{ maxWidth: "200px" }}>{s.label}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
