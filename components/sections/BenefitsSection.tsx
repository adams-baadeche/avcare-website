"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Check, Heart, Users, Stethoscope } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] as any },
});

const GROUPS = [
  {
    Icon: Heart,
    titleKey: "patients_title",
    keys: ["patients_b1","patients_b2","patients_b3","patients_b4","patients_b5"],
    accent: "var(--brand)",
    checkBg: "var(--brand-bg)",
    checkColor: "var(--brand)",
    borderAccent: "rgba(26,92,53,0.14)",
  },
  {
    Icon: Users,
    titleKey: "families_title",
    keys: ["families_b1","families_b2","families_b3","families_b4","families_b5"],
    accent: "#3b82f6",
    checkBg: "#eff6ff",
    checkColor: "#3b82f6",
    borderAccent: "rgba(59,130,246,0.14)",
  },
  {
    Icon: Stethoscope,
    titleKey: "doctors_title",
    keys: ["doctors_b1","doctors_b2","doctors_b3","doctors_b4","doctors_b5"],
    accent: "#7c3aed",
    checkBg: "#f5f3ff",
    checkColor: "#7c3aed",
    borderAccent: "rgba(124,58,237,0.14)",
  },
];

export default function BenefitsSection() {
  const t = useTranslations("benefits");

  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ background: "var(--surface-2)" }}
      id="benefits"
    >
      <div className="container-max">
        {/* Section header */}
        <div className="section-header">
          <motion.span {...fadeUp(0)} className="badge">{t("badge")}</motion.span>
          <motion.h2 {...fadeUp(0.07)} className="heading-lg">{t("headline")}</motion.h2>
          <motion.p {...fadeUp(0.14)} style={{ maxWidth: "520px" }}>{t("subheadline")}</motion.p>
        </div>

        {/* Card grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {GROUPS.map((g, i) => (
            <motion.div
              key={i}
              {...fadeUp(i * 0.1)}
              className="bg-white rounded-2xl relative overflow-hidden flex flex-col card-hover"
              style={{
                border: "1px solid var(--border)",
                padding: "2rem",
              }}
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 inset-x-0 h-0.5"
                style={{ background: g.accent, opacity: 0.6 }}
              />

              {/* Icon */}
              <div
                className="icon-box mb-5"
                style={{ background: g.checkBg }}
              >
                <g.Icon className="w-5 h-5" style={{ color: g.accent }} />
              </div>

              <h3 className="heading-md mb-5">{t(g.titleKey as any)}</h3>

              {/* Benefits list */}
              <ul className="flex flex-col gap-3.5 mt-auto">
                {g.keys.map((key, bi) => (
                  <motion.li
                    key={bi}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 + bi * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: g.checkBg }}
                    >
                      <Check className="w-3 h-3" style={{ color: g.accent }} />
                    </span>
                    <span className="body-md leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      {t(key as any)}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
