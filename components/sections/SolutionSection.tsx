"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Siren, Bot, Users, BookOpen, Share2, Hospital } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] as any },
});

const FEATURES = [
  { Icon: Siren,     accent: "#dc2626",       bg: "#fef2f2"         },
  { Icon: Bot,       accent: "var(--brand)",  bg: "var(--brand-bg)" },
  { Icon: Users,     accent: "#2563eb",       bg: "#eff6ff"         },
  { Icon: BookOpen,  accent: "#d97706",       bg: "#fffbeb"         },
  { Icon: Share2,    accent: "#7c3aed",       bg: "#f5f3ff"         },
  { Icon: Hospital,  accent: "#0891b2",       bg: "#ecfeff"         },
];

export default function SolutionSection() {
  const t = useTranslations("solution");

  const features = FEATURES.map((f, i) => ({
    ...f,
    title: t(`feature${i + 1}_title` as any),
    desc:  t(`feature${i + 1}_desc`  as any),
    num:   String(i + 1).padStart(2, "0"),
  }));

  return (
    <section className="section-padding bg-white relative overflow-hidden" id="features">
      {/* Top accent line */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--brand-border), transparent)" }}
      />

      <div className="container-max">
        {/* Header */}
        <div className="section-header">
          <motion.span {...fadeUp(0)} className="badge">{t("badge")}</motion.span>
          <motion.h2 {...fadeUp(0.07)} className="heading-lg">{t("headline")}</motion.h2>
          <motion.p {...fadeUp(0.14)} style={{ maxWidth: "520px" }}>{t("subheadline")}</motion.p>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={i}
              {...fadeUp(i * 0.07)}
              className="group relative bg-white rounded-2xl card-hover overflow-hidden"
              style={{ border: "1px solid var(--border)", padding: "1.875rem" }}
            >
              {/* Number watermark */}
              <span
                className="absolute top-4 right-5 font-black select-none pointer-events-none"
                style={{
                  fontSize: "3.5rem",
                  lineHeight: 1,
                  color: "rgba(0,0,0,0.035)",
                  letterSpacing: "-0.04em",
                }}
              >
                {f.num}
              </span>

              {/* Icon */}
              <div
                className="icon-box mb-5 group-hover:scale-105 transition-transform duration-200"
                style={{ background: f.bg }}
              >
                <f.Icon className="w-5 h-5" style={{ color: f.accent }} />
              </div>

              <h3 className="heading-md mb-2.5 relative z-10">{f.title}</h3>
              <p className="body-md leading-relaxed relative z-10">{f.desc}</p>

              {/* Bottom accent on hover */}
              <div
                className="absolute bottom-0 inset-x-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, ${f.accent}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
