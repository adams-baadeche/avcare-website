"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] as any },
});

const PARTNERS = [
  { nameKey: "p1_name", descKey: "p1_desc", img: "/levtto sante.jpg" },
  { nameKey: "p2_name", descKey: "p2_desc", img: "/chu constantine.jpg" },
  { nameKey: "p3_name", descKey: "p3_desc", img: "/misc laboratory.png" },
];

export default function PartnersSection() {
  const t = useTranslations("partners");

  return (
    <section className="section-padding relative overflow-hidden" style={{ background: "var(--surface-1)" }} id="partners">
      <div className="container-max">
        <div className="section-header text-center">
          <motion.span {...fadeUp(0)} className="badge">{t("badge")}</motion.span>
          <motion.h2 {...fadeUp(0.07)} className="heading-lg mt-4 mb-4">{t("headline")}</motion.h2>
          <motion.p {...fadeUp(0.14)} style={{ maxWidth: "600px", margin: "0 auto", color: "var(--text-secondary)" }}>{t("subheadline")}</motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {PARTNERS.map((partner, i) => (
            <motion.div
              key={i}
              {...fadeUp(i * 0.1)}
              className="bg-white rounded-2xl relative overflow-hidden flex flex-col items-center card-hover"
              style={{
                border: "1px solid var(--border)",
                padding: "2.5rem 2rem",
                width: "100%",
                maxWidth: "340px",
              }}
            >
              <div className="w-full h-24 relative mb-6 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-300">
                <Image 
                  src={partner.img} 
                  alt={t(partner.nameKey as any)} 
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="heading-md mb-2 text-center">{t(partner.nameKey as any)}</h3>
              <p className="body-md text-center" style={{ color: "var(--text-secondary)" }}>{t(partner.descKey as any)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
