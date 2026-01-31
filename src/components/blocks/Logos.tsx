import type { SiteData } from "@/content/site-data";

export const Logos = ({ content }: { content: SiteData["logos"] }) => {
    return (
        <section className="logos-section">
            <div className="section-container">
                <h3 className="section-label">{content.label}</h3>
                <div className="logos-wrapper">
                    <div className="logos-track">
                        {/* Original Set */}
                        {content.list.map((logo, i) => (
                            <span key={i} className="logo-item">{logo}</span>
                        ))}

                        {/* Duplicate Set for Infinite Scroll */}
                        {content.list.map((logo, i) => (
                            <span key={`dup-${i}`} className="logo-item">{logo}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
