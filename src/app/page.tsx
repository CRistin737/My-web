
import { SiteHeader } from "@/components/blocks/SiteHeader";
import { Hero } from "@/components/blocks/Hero";
import { TechGrid } from "@/components/blocks/TechGrid";
import { Features } from "@/components/blocks/Features";
import { Work } from "@/components/blocks/Work";
import { About } from "@/components/blocks/About";
import { Testimonials } from "@/components/blocks/Testimonials";
import { Pricing } from "@/components/blocks/Pricing";
import { FAQ } from "@/components/blocks/FAQ";
import { CTA } from "@/components/blocks/CTA";
import { ContactForm } from "@/components/blocks/ContactForm";
import { Footer } from "@/components/blocks/Footer";
import { CustomCursor } from "@/components/cursor/CustomCursor";
import { siteData } from "@/content/site-data";

export default function Home() {
  return (
    <main className="page-container">

      <CustomCursor />
      <SiteHeader content={siteData} />

      {/* Floating WhatsApp */}
      <a
        href={siteData.general.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="Chatear por WhatsApp"
      >
        <span className="floating-whatsapp-ring" />
        <span className="floating-whatsapp-ring floating-whatsapp-ring--2" />
        <svg viewBox="0 0 32 32" width="30" height="30" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 1C7.716 1 1 7.716 1 16c0 2.68.698 5.197 1.917 7.38L1 31l7.82-1.89A14.94 14.94 0 0 0 16 31c8.284 0 15-6.716 15-15S24.284 1 16 1zm0 27.2a12.15 12.15 0 0 1-6.19-1.695l-.444-.264-4.638 1.12 1.155-4.506-.29-.462A12.16 12.16 0 0 1 3.8 16C3.8 9.261 9.261 3.8 16 3.8S28.2 9.261 28.2 16 22.739 28.2 16 28.2zm6.67-9.095c-.366-.183-2.164-1.067-2.499-1.19-.335-.12-.578-.183-.822.184-.244.366-.944 1.19-1.157 1.433-.213.244-.427.274-.793.091-.366-.183-1.544-.569-2.94-1.814-1.087-.97-1.82-2.167-2.034-2.533-.213-.366-.023-.564.16-.747.164-.163.366-.427.549-.64.183-.213.244-.366.366-.61.122-.244.061-.457-.03-.64-.092-.183-.822-1.982-1.126-2.714-.296-.713-.597-.616-.822-.627l-.7-.012c-.244 0-.64.091-.975.457-.335.366-1.28 1.25-1.28 3.048s1.31 3.537 1.493 3.78c.183.244 2.578 3.934 6.247 5.517.873.377 1.554.602 2.084.77.875.279 1.672.24 2.302.145.702-.104 2.164-.884 2.469-1.737.305-.853.305-1.585.213-1.737-.09-.152-.335-.244-.7-.427z"/>
        </svg>
      </a>

      <Hero content={siteData.hero} />
      <TechGrid />
      <Features content={siteData.features} />
      <Work content={siteData.work} />
      <About content={siteData.about} />
      <Testimonials content={siteData.testimonials} />
      <Pricing content={siteData.pricing} hosting={siteData.hosting} />
      <FAQ content={siteData.faq} />
      <CTA content={siteData.cta} />
      <ContactForm />
      <Footer content={siteData} />

    </main>
  );
}
