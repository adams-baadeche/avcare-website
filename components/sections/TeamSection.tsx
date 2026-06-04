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

const TEAM_MEMBERS = [
  { nameKey: "m1_name", roleKey: "m1_role", img: "/chaouche Ahmed chawki.png" },
  { nameKey: "m2_name", roleKey: "m2_role", img: "/kenfoud mohamed raouf.png" },
  { nameKey: "m3_name", roleKey: "m3_role", img: "/Adem Baadeche.png" },
  { nameKey: "m4_name", roleKey: "m4_role", img: "/abouba mohamed adlene.png" },
  { nameKey: "m5_name", roleKey: "m5_role", img: "/Bousseboua Youcef.png" },
];

export default function TeamSection() {
  const t = useTranslations("team");

  return (
    <section className="section-padding relative overflow-hidden" style={{ background: "var(--surface-2)" }} id="team">
      <div className="container-max">
        <div className="section-header text-center">
          <motion.span {...fadeUp(0)} className="badge">{t("badge")}</motion.span>
          <motion.h2 {...fadeUp(0.07)} className="heading-lg mt-4 mb-4">{t("headline")}</motion.h2>
          <motion.p {...fadeUp(0.14)} style={{ maxWidth: "600px", margin: "0 auto", color: "var(--text-secondary)" }}>{t("subheadline")}</motion.p>
        </div>

        <div className="flex flex-col gap-6 lg:gap-8 items-center w-full mt-10">
          {/* First Row: 3 members (Chaouche, Kenfoud, Baadeche) */}
          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 lg:gap-8 w-full max-w-6xl">
            {TEAM_MEMBERS.slice(0, 3).map((member, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                className="bg-white rounded-[2rem] flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 w-full md:w-[calc(33.333%-1.5rem)] group"
                style={{
                  border: "1px solid rgba(0,0,0,0.04)",
                  boxShadow: "0 10px 40px -10px rgba(0,0,0,0.04)",
                  padding: "3.5rem 2rem",
                  maxWidth: "360px",
                }}
              >
                <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-105 shrink-0"
                     style={{ boxShadow: "0 0 0 4px rgba(63, 193, 122, 0.05)" }}>
                  <Image 
                    src={member.img} 
                    alt={t(member.nameKey as any)} 
                    fill 
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-extrabold text-gray-900 tracking-tight mb-2">{t(member.nameKey as any)}</h3>
                <p className="text-sm font-medium leading-relaxed px-2" style={{ color: "var(--brand)" }}>{t(member.roleKey as any)}</p>
              </motion.div>
            ))}
          </div>

          {/* Second Row: 2 members (Abouba, Bousseboua) */}
          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 lg:gap-8 w-full max-w-6xl mt-4 lg:mt-8">
            {TEAM_MEMBERS.slice(3, 5).map((member, i) => (
              <motion.div
                key={i + 3}
                {...fadeUp((i + 3) * 0.1)}
                className="bg-white rounded-[2rem] flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 w-full md:w-[calc(33.333%-1.5rem)] group"
                style={{
                  border: "1px solid rgba(0,0,0,0.04)",
                  boxShadow: "0 10px 40px -10px rgba(0,0,0,0.04)",
                  padding: "3.5rem 2rem",
                  maxWidth: "360px",
                }}
              >
                <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-105 shrink-0"
                     style={{ boxShadow: "0 0 0 4px rgba(63, 193, 122, 0.05)" }}>
                  <Image 
                    src={member.img} 
                    alt={t(member.nameKey as any)} 
                    fill 
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-extrabold text-gray-900 tracking-tight mb-2">{t(member.nameKey as any)}</h3>
                <p className="text-sm font-medium leading-relaxed px-2" style={{ color: "var(--brand)" }}>{t(member.roleKey as any)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
