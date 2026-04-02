"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { SiteData } from "@/content/site-data";

type Tab = "web" | "hosting";

export const Pricing = ({ content, hosting }: {
    content: SiteData["pricing"];
    hosting: SiteData["hosting"];
}) => {
    const [tab, setTab] = useState<Tab>("web");
    const active = tab === "web" ? content : hosting;

    return (
        <section className="pricing-section" id="pricing">
            <div className="section-container">
                <div className="section-header">
                    <span className="section-label">Inversión</span>
                    <h2 className="section-heading">
                        {active.heading}
                    </h2>
                    <p className="section-subheading">
                        {active.subheading}
                    </p>
                </div>

                {/* Toggle */}
                <div className="pricing-toggle-wrap">
                    <div className="pricing-toggle">
                        <button
                            className={`pricing-toggle-btn ${tab === "web" ? "pricing-toggle-btn--active" : ""}`}
                            onClick={() => setTab("web")}
                        >
                            Diseño Web
                        </button>
                        <button
                            className={`pricing-toggle-btn ${tab === "hosting" ? "pricing-toggle-btn--active" : ""}`}
                            onClick={() => setTab("hosting")}
                        >
                            Hosting
                        </button>
                        <motion.div
                            className="pricing-toggle-indicator"
                            layout
                            transition={{ type: "spring", damping: 30, stiffness: 400 }}
                            style={{ left: tab === "web" ? "0%" : "50%" }}
                        />
                    </div>
                </div>

                {/* Cards */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={tab}
                        className="pricing-grid"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.25 }}
                    >
                        {active.items.map((plan, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.06, duration: 0.4 }}
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
                    </motion.div>
                </AnimatePresence>

                <p className="pricing-note">
                    {tab === "web"
                        ? "* Todo lo que esté fuera del alcance del plan se cotiza aparte de forma transparente, antes de ejecutar."
                        : "* Todos los planes incluyen migración gratuita. Precios en pesos dominicanos, facturación mensual."
                    }
                </p>
            </div>
        </section>
    );
};
