import { MessageCircle } from "lucide-react";

// Modular Blocks
import { SiteHeader } from "@/components/blocks/SiteHeader";
import { Hero } from "@/components/blocks/Hero";
import { Logos } from "@/components/blocks/Logos";
import { Features } from "@/components/blocks/Features";
import { Testimonials } from "@/components/blocks/Testimonials";
import { Pricing } from "@/components/blocks/Pricing";
import { FAQ } from "@/components/blocks/FAQ";
import { CTA } from "@/components/blocks/CTA";
import { ContactForm } from "@/components/blocks/ContactForm";
import { Footer } from "@/components/blocks/Footer";
import { siteData } from "@/content/site-data";

export default function Home() {
  return (
    <main className="page-container">

      <SiteHeader content={siteData} />

      {/* FLOATING WHATSAPP BUTTON */}
      <a href={siteData.general.whatsappLink} target="_blank" rel="noopener noreferrer" className="floating-whatsapp" aria-label="Chat on WhatsApp">
        <MessageCircle size={32} />
      </a>

      <Hero content={siteData.hero} />
      <Logos content={siteData.logos} />
      <Features content={siteData.features} />
      <Testimonials content={siteData.testimonials} />
      <Pricing content={siteData.pricing} />
      <FAQ content={siteData.faq} />
      <CTA content={siteData.cta} />
      <ContactForm />
      <Footer content={siteData} />

    </main>
  );
}
