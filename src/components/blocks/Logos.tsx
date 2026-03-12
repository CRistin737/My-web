import type { SiteData } from "@/content/site-data";

export const Logos = ({ content }: { content: SiteData["logos"] }) => {
    return (
        <section className="logos-section">
            <div className="logos-label">{content.label}</div>
            <div className="logos-wrapper">
                <div className="logos-track">
                    {content.list.map((logo, i) => (
                        <span key={i} className="logo-item">
                            <span className="logo-item-dot" />
                            {logo}
                        </span>
                    ))}
                    {content.list.map((logo, i) => (
                        <span key={`dup-${i}`} className="logo-item">
                            <span className="logo-item-dot" />
                            {logo}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};
