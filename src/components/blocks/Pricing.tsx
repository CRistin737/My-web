"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";
import type { SiteData } from "@/content/site-data";

export const Pricing = ({ content }: { content: SiteData["pricing"] }) => {
    return (
        <section className="pricing-section" id="pricing">
            <div className="section-container">
                <div className="section-header">
                    <span className="section-label">Inversión</span>
                    <h2 className="section-heading">{content.heading}</h2>
                    <p className="section-subheading">{content.subheading}</p>
                </div>

                <div className="pricing-grid">
                    {content.items.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
                            className={`pricing-card ${plan.isFeatured ? "featured" : ""} ${plan.isSoftware ? "software" : ""}`}
                        >
                            {plan.badge && (
                                <div className="badge">{plan.badge}</div>
                            )}

                            <h3 className="plan-name">{plan.name}</h3>

                            <div className="plan-price">{plan.price}</div>
                            {plan.priceEnd && (
                                <div className="plan-price-end">{plan.priceEnd}</div>
                            )}

                            <p className="plan-desc">{plan.desc}</p>

                            <ul className="plan-features">
                                {plan.features.map((feature, i) => (
                                    <li key={i}>
                                        <Check size={14} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#contact"
                                className={plan.isFeatured ? "btn-primary-full" : "btn-outline"}
                            >
                                {plan.cta}
                            </a>
                        </motion.div>
                    ))}
                </div>

                <p className="pricing-note">
                    * Todo lo que esté fuera del alcance del plan se cotiza aparte de forma transparente, antes de ejecutar.
                </p>
            </div>
        </section>
    );
};
