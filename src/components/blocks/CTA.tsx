"use client";

import { motion } from "framer-motion";
import type { SiteData } from "@/content/site-data";

export const CTA = ({ content }: { content: SiteData['cta'] }) => {
    return (
        <section className="cta-section">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="cta-content"
            >
                <h2 className="cta-heading">{content.heading}</h2>
                <p className="cta-text">{content.text}</p>
                <button className="btn-cta-large">{content.button}</button>
            </motion.div>
        </section>
    );
};
