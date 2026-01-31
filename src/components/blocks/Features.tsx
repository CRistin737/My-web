"use client";

import { motion } from "framer-motion";
import type { SiteData } from "@/content/site-data";
import { Zap, Shield, Smartphone, Scale, Gavel, FileText, LucideIcon } from "lucide-react";

const IconMap: Record<string, LucideIcon> = {
    "Zap": Zap,
    "Shield": Shield,
    "Smartphone": Smartphone,
    "Scale": Scale,
    "Gavel": Gavel,
    "FileText": FileText
};

export const Features = ({ content }: { content: SiteData['features'] }) => {
    return (
        <section className="features-section" id="services">
            <div className="section-container">
                <div className="section-header">
                    <h2 className="section-heading">{content.heading}</h2>
                    <p className="section-subheading">{content.subheading}</p>
                </div>

                <div className="features-grid">
                    {content.items.map((feature, index) => {
                        // Safe lookup with fallback
                        const IconComponent = IconMap[feature.icon as string] || Zap;

                        return (
                            <FeatureCard
                                key={index}
                                icon={<IconComponent size={24} />}
                                title={feature.title}
                                desc={feature.desc}
                                delay={index * 0.1}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

const FeatureCard = ({ icon, title, desc, delay }: { icon: React.ReactNode, title: string, desc: string, delay: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            className="feature-card"
        >
            <div className="feature-icon">{icon}</div>
            <h3 className="feature-title">{title}</h3>
            <p className="feature-desc">{desc}</p>
        </motion.div>
    );
}
