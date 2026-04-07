"use client";

import { useState } from "react";
import { Check, Code2, Server } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { SiteData } from "@/content/site-data";

type Tab = "web" | "hosting";
type BillingCycle = "monthly" | "annual";

const ANNUAL_DISCOUNT = 0.10; // 10% off when paid annually

// Parse a price string like "RD$2,100" → 2100
function parsePrice(priceStr: string): number {
    const digits = priceStr.replace(/[^\d.]/g, "");
    return parseFloat(digits) || 0;
}

// Format a number back to "RD$X,XXX"
function formatPrice(num: number): string {
    return `RD$${Math.round(num).toLocaleString("en-US")}`;
}

export const Pricing = ({ content, hosting }: {
    content: SiteData["pricing"];
    hosting: SiteData["hosting"];
}) => {
    const [tab, setTab] = useState<Tab>("web");
    const [cycle, setCycle] = useState<BillingCycle>("monthly");
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
                            <Code2 size={15} />
                            <span>Diseño Web</span>
                        </button>
                        <button
                            className={`pricing-toggle-btn ${tab === "hosting" ? "pricing-toggle-btn--active" : ""}`}
                            onClick={() => setTab("hosting")}
                        >
                            <Server size={15} />
                            <span>Mantenimiento</span>
                        </button>
                        <motion.div
                            className="pricing-toggle-pill"
                            layoutId="pricing-pill"
                            transition={{ type: "spring", damping: 28, stiffness: 380 }}
                            style={{
                                left: tab === "web" ? "4px" : "calc(50%)",
                                width: "calc(50% - 4px)",
                            }}
                        />
                    </div>
                </div>

                {/* Billing cycle toggle — only visible on hosting tab */}
                <AnimatePresence>
                    {tab === "hosting" && (
                        <motion.div
                            className="billing-toggle-wrap"
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.25 }}
                        >
                            <div className="billing-toggle">
                                <button
                                    type="button"
                                    className={`billing-toggle-btn ${cycle === "monthly" ? "billing-toggle-btn--active" : ""}`}
                                    onClick={() => setCycle("monthly")}
                                >
                                    Mensual
                                </button>
                                <button
                                    type="button"
                                    className={`billing-toggle-btn ${cycle === "annual" ? "billing-toggle-btn--active" : ""}`}
                                    onClick={() => setCycle("annual")}
                                >
                                    Anual
                                    <span className="billing-discount-badge">-10%</span>
                                </button>
                                <motion.div
                                    className="billing-toggle-pill"
                                    layoutId="billing-pill"
                                    transition={{ type: "spring", damping: 28, stiffness: 380 }}
                                    style={{
                                        left: cycle === "monthly" ? "4px" : "calc(50%)",
                                        width: "calc(50% - 4px)",
                                    }}
                                />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

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
                        {active.items.map((plan, index) => {
                            // Calculate annual price for hosting plans with /mes suffix
                            const isMonthlyPlan = tab === "hosting" && plan.priceEnd?.includes("/mes");
                            const showAnnual = isMonthlyPlan && cycle === "annual";
                            const monthlyAmount = isMonthlyPlan ? parsePrice(plan.price) : 0;
                            const annualAmount = monthlyAmount * 12 * (1 - ANNUAL_DISCOUNT);
                            const monthlySavings = (monthlyAmount * 12) - annualAmount;

                            const displayPrice = showAnnual ? formatPrice(annualAmount) : plan.price;
                            const displayPriceEnd = showAnnual ? "/año" : (plan.priceEnd || "\u00A0");

                            return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.06, duration: 0.4 }}
                                className={`pricing-card ${plan.isFeatured ? "featured" : ""} ${plan.isSoftware ? "software" : ""}`}
                            >
                                {/* Badge — always takes space */}
                                <div className="plan-badge-slot">
                                    {plan.badge && <div className="badge">{plan.badge}</div>}
                                </div>

                                <h3 className="plan-name">{plan.name}</h3>

                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={`${plan.name}-${cycle}`}
                                        className="plan-price"
                                        initial={{ opacity: 0, y: 6 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -6 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {displayPrice}
                                    </motion.div>
                                </AnimatePresence>
                                <div className="plan-price-end">{displayPriceEnd}</div>

                                {showAnnual && monthlySavings > 0 && (
                                    <div className="plan-savings">
                                        Ahorras {formatPrice(monthlySavings)} al año
                                    </div>
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
                            );
                        })}
                    </motion.div>
                </AnimatePresence>

                <p className="pricing-note">
                    {tab === "web"
                        ? "* Todo lo que esté fuera del alcance del plan se cotiza aparte de forma transparente, antes de ejecutar."
                        : cycle === "annual"
                            ? "* Todos los planes incluyen migración gratuita. Pago anual con 10% de descuento — ahorras dos meses al año."
                            : "* Todos los planes incluyen migración gratuita. Precios en pesos dominicanos, facturación mensual."
                    }
                </p>
            </div>
        </section>
    );
};
