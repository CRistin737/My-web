"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";
import type { SiteData } from "@/content/site-data";

export const Pricing = ({ content }: { content: SiteData['pricing'] }) => {
    return (
        <section className="pricing-section">
            <div className="section-container">
                <div className="section-header">
                    <h2 className="section-heading">{content.heading}</h2>
                    <p className="section-subheading">{content.subheading}</p>
                </div>

                <div className="pricing-grid">
                    {content.items.map((plan, index) => {
                        const CardWrapper = plan.isFeatured ? motion.div : "div";
                        const wrapperProps = plan.isFeatured ? { whileHover: { y: -10 } } : {};

                        return (
                            // @ts-ignore
                            <CardWrapper
                                key={index}
                                className={`pricing-card ${plan.isFeatured ? "featured" : ""}`}
                                {...wrapperProps}
                            >
                                {plan.isFeatured && <div className="badge">{plan.badge}</div>}
                                <h3 className="plan-name">{plan.name}</h3>
                                <div className="plan-price">{plan.price}</div>
                                <p className="plan-desc">{plan.desc}</p>
                                <ul className="plan-features">
                                    {plan.features.map((feature, i) => (
                                        <li key={i}><Check size={16} /> {feature}</li>
                                    ))}
                                </ul>
                                <button className={plan.isFeatured ? "btn-primary-full" : "btn-outline"}>
                                    {plan.cta}
                                </button>
                            </CardWrapper>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
