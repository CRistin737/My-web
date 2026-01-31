import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import type { SiteData } from "@/content/site-data";

export const Footer = ({ content }: { content: SiteData }) => {
    // We pass the full content object here because Footer uses general + footer data
    return (
        <footer className="site-footer">
            <div className="footer-container">

                <div className="footer-top">
                    <div className="footer-brand-col">
                        <h4 className="footer-logo">{content.footer.brand.name}</h4>
                        <p className="footer-tagline">{content.footer.brand.tagline}</p>
                        <div className="footer-socials">
                            <a href={content.general.socials.instagram} aria-label="Instagram"><Instagram size={20} /></a>
                            <a href={content.general.socials.twitter} aria-label="Twitter"><Twitter size={20} /></a>
                            <a href={content.general.socials.linkedin} aria-label="LinkedIn"><Linkedin size={20} /></a>
                            <a href={content.general.socials.facebook} aria-label="Facebook"><Facebook size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-links-col">
                        <h4>Empresa</h4>
                        <a href="#">Sobre Nosotros</a>
                        <a href="#">Portafolio</a>
                        <a href="#">Carreras</a>
                        <a href="#">Blog</a>
                    </div>

                    <div className="footer-links-col">
                        <h4>Servicios</h4>
                        <a href="#">Diseño Web</a>
                        <a href="#">E-commerce</a>
                        <a href="#">SEO & Marketing</a>
                        <a href="#">Mantenimiento</a>
                    </div>

                    <div className="footer-contact-col">
                        <h4>Contacto</h4>
                        <p className="contact-item"><Mail size={16} /> {content.general.email}</p>
                        <p className="contact-item"><Phone size={16} /> {content.general.phone}</p>
                        <p className="contact-item"><MapPin size={16} /> {content.general.address}</p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>{content.footer.copyright} | Diseñado por <a href={content.footer.designer.url} target="_blank" rel="noopener noreferrer" className="hover:underline">{content.footer.designer.name}</a></p>
                    <div className="footer-legal">
                        <a href="#">Privacidad</a>
                        <a href="#">Términos</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};
