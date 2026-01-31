"use client";

import { motion } from "framer-motion";
import type { SiteData } from "@/content/site-data";

export const Testimonials = ({ content }: { content: SiteData['testimonials'] }) => {
    return (
        <section className="testimonials-section">
            <div className="section-container">
                <h2 className="section-heading">{content.heading}</h2>
                <div className="testimonials-grid">
                    {content.items.map((item, index) => (
                        <TestimonialCard
                            key={index}
                            text={item.text}
                            author={item.author}
                            role={item.role}
                            initial={item.initial}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const TestimonialCard = ({ text, author, role, initial, delay }: { text: string, author: string, role: string, initial: string, delay: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            className="testimonial-card"
        >
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-text">&quot;{text}&quot;</p>
            <div className="testimonial-author">
                <div className="author-avatar">{initial}</div>
                <div className="author-info">
                    <span className="author-name">{author}</span>
                    <span className="author-role">{role}</span>
                </div>
            </div>
        </motion.div>
    );
}
