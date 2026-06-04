import { setRequestLocale } from "next-intl/server";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import PartnersSection from "@/components/sections/PartnersSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import PreviewSection from "@/components/sections/PreviewSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import DownloadSection from "@/components/sections/DownloadSection";
import TeamSection from "@/components/sections/TeamSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

export default async function LocalePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PartnersSection />
      <ProblemSection />
      <SolutionSection />
      <PreviewSection />
      <BenefitsSection />
      <DownloadSection />
      <TeamSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
