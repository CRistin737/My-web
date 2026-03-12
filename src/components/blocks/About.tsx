"use client";

import { motion } from "framer-motion";
import type { SiteData } from "@/content/site-data";

export const About = ({ content }: { content: SiteData["about"] }) => {
    return (
        <section className="about-section" id="about">
            <div className="section-container">
                <div className="about-grid">
                    {/* Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <span className="about-tag">Nosotros</span>
                        <h2 className="about-heading">{content.heading}</h2>
                        <p className="about-sub">{content.subheading}</p>
                        <p className="about-desc">{content.description}</p>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                    >
                        <div className="about-stats-grid">
                            {content.stats.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    className="about-stat"
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.25 + i * 0.08, duration: 0.45 }}
                                >
                                    <span className="about-stat-value">{stat.value}</span>
                                    <span className="about-stat-label">{stat.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
