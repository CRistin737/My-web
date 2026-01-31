"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { SiteData } from "@/content/site-data";

export const Hero = ({ content }: { content: SiteData['hero'] }) => {
    return (
        <section className="hero-section">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="hero-content"
            >
                <h1 className="hero-title">
                    {content.title.line1} <br />
                    <span className="hero-highlight">{content.title.highlight}</span>
                </h1>
                <p className="hero-subtitle">
                    {content.subtitle}
                </p>
                <div className="hero-actions">
                    <button className="btn-primary">
                        {content.ctaPrimary} <ArrowRight className="icon-sm" />
                    </button>
                    <button className="btn-secondary">
                        {content.ctaSecondary}
                    </button>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="hero-visual"
            >
                <div className="visual-placeholder">
                    <span className="visual-text">{content.visualText}</span>
                </div>
            </motion.div>
        </section>
    );
};
