"use client";

import { motion } from "framer-motion";
import type { SiteData } from "@/content/site-data";
import {
    Globe, Box, ShoppingCart, Code2, BarChart3, Wrench,
    Zap, Shield, Smartphone, LucideIcon
} from "lucide-react";

const IconMap: Record<string, LucideIcon> = {
    Globe, Box, ShoppingCart, Code2, BarChart3, Wrench,
    Zap, Shield, Smartphone,
};

export const Features = ({ content }: { content: SiteData["features"] }) => {
    return (
        <section className="features-section" id="services">
            <div className="section-container">
                <div className="section-header">
                    <span className="section-label">Servicios</span>
                    <h2 className="section-heading">{content.heading}</h2>
                    <p className="section-subheading">{content.subheading}</p>
                </div>

                <div className="features-grid">
                    {content.items.map((feature, index) => {
                        const IconComponent = IconMap[feature.icon as string] ?? Zap;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.07, duration: 0.5, ease: "easeOut" }}
                                className="feature-card"
                            >
                                <div className="feature-icon">
                                    <IconComponent size={22} />
                                </div>
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-desc">{feature.desc}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
