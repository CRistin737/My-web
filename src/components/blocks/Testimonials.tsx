"use client";

import { motion } from "framer-motion";
import type { SiteData } from "@/content/site-data";

export const Testimonials = ({ content }: { content: SiteData["testimonials"] }) => {
    return (
        <section className="testimonials-section">
            <div className="section-container">
                <div className="section-header">
                    <span className="section-label">Testimonios</span>
                    <h2 className="section-heading">{content.heading}</h2>
                </div>
                <div className="testimonials-grid">
                    {content.items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                            className="testimonial-card"
                        >
                            <div className="testimonial-stars">★★★★★</div>
                            <p className="testimonial-text">&quot;{item.text}&quot;</p>
                            <div className="testimonial-author">
                                <div className="author-avatar">{item.initial}</div>
                                <div className="author-info">
                                    <span className="author-name">{item.author}</span>
                                    <span className="author-role">{item.role}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
