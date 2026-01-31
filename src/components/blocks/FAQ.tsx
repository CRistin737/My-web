"use client";

import { ChevronDown } from "lucide-react";
import type { SiteData } from "@/content/site-data";

export const FAQ = ({ content }: { content: SiteData['faq'] }) => {
    return (
        <section className="faq-section">
            <div className="section-container-narrow">
                <h2 className="section-heading">{content.heading}</h2>
                <div className="faq-list">
                    {content.items.map((item, index) => (
                        <details key={index} className="faq-item">
                            <summary className="faq-question">
                                {item.q}
                                <ChevronDown className="faq-icon" />
                            </summary>
                            <div className="faq-answer">
                                {item.a}
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
};
