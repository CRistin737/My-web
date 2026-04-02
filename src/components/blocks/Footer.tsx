"use client";

import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import type { SiteData } from "@/content/site-data";

function resetCookieConsent() {
    try {
        localStorage.removeItem("cookie_consent");
        window.location.reload();
    } catch {
        // localStorage unavailable — fail silently
    }
}

export const Footer = ({ content }: { content: SiteData }) => {
    return (
        <footer className="site-footer">
            <div className="footer-container">

                <div className="footer-top">
                    <div className="footer-brand-col">
                        <div className="footer-logo">
                            <span className="xve-logo-xv">XV</span><span className="xve-logo-e">E Studio</span>
                        </div>
                        <p className="footer-tagline">{content.footer.brand.tagline}</p>
                        <p className="footer-tagline" style={{ fontSize: "0.75rem", marginTop: "0.5rem", opacity: 0.6 }}>
                            XVE Studio es una marca comercial operada por Poszy E.I.R.L.
                        </p>
                        <div className="footer-socials">
                            <a href={content.general.socials.instagram} aria-label="Instagram"><Instagram size={16} /></a>
                            <a href={content.general.socials.twitter} aria-label="Twitter"><Twitter size={16} /></a>
                            <a href={content.general.socials.linkedin} aria-label="LinkedIn"><Linkedin size={16} /></a>
                            <a href={content.general.socials.facebook} aria-label="Facebook"><Facebook size={16} /></a>
                        </div>
                    </div>

                    <div className="footer-links-col">
                        <h4>Studio</h4>
                        <a href="#about">Sobre Nosotros</a>
                        <a href="#work">Portafolio</a>
                        <a href="#services">Servicios</a>
                        <a href="#pricing">Precios</a>
                    </div>

                    <div className="footer-links-col">
                        <h4>Servicios</h4>
                        <a href="#services">Diseño Web</a>
                        <a href="#services">E-commerce</a>
                        <a href="#services">Animaciones 3D</a>
                        <a href="#services">Software a Medida</a>
                    </div>

                    <div className="footer-contact-col">
                        <h4>Contacto</h4>
                        <p className="contact-item"><Mail size={14} /> {content.general.email}</p>
                        <p className="contact-item"><Phone size={14} /> {content.general.phone}</p>
                        <p className="contact-item"><MapPin size={14} /> {content.general.address}</p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>
                        {content.footer.copyright} · Diseñado por{" "}
                        <a href={content.footer.designer.url} target="_blank" rel="noopener noreferrer">
                            {content.footer.designer.name}
                        </a>
                    </p>
                    <div className="footer-legal">
                        <a href="/privacidad">Privacidad</a>
                        <a href="/terminos">Términos</a>
                        <a href="/cookies">Cookies</a>
                        <a href="/aviso-legal">Aviso Legal</a>
                        <button
                            type="button"
                            className="footer-legal-manage"
                            onClick={resetCookieConsent}
                        >
                            Gestionar cookies
                        </button>
                    </div>
                </div>

            </div>
        </footer>
    );
};
