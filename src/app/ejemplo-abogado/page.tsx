
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

// Data
import { lawyerData } from "@/content/data-abogado";

export default function LawyerPage() {
    return (
        <main className="page-container theme-swiss">
            {/* Examples often look good with swiss theme */}

            <SiteHeader content={lawyerData} />

            <a href={lawyerData.general.whatsappLink} target="_blank" rel="noopener noreferrer" className="floating-whatsapp">
                <MessageCircle size={32} />
            </a>

            <Hero content={lawyerData.hero} />
            <Logos content={lawyerData.logos} />
            <Features content={lawyerData.features} />
            <Testimonials content={lawyerData.testimonials} />
            <Pricing content={lawyerData.pricing} />
            <FAQ content={lawyerData.faq} />
            <CTA content={lawyerData.cta} />
            <ContactForm />
            <Footer content={lawyerData} />

        </main>
    );
}
