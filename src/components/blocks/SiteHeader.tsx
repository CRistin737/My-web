"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { SiteData } from "@/content/site-data";

const XVELogo = () => (
    <span className="xve-logo" aria-label="XVE Studio">
        <span className="xve-logo-xv">XV</span><span className="xve-logo-e">E Studio</span>
    </span>
);

export const SiteHeader = ({ content }: { content: SiteData }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isDark, setIsDark] = useState(true);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem("xve-mode");
        if (saved === "light") {
            setIsDark(false);
            document.body.setAttribute("data-mode", "light");
            document.documentElement.setAttribute("data-mode", "light");
        }
    }, []);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const toggleMode = () => {
        const next = !isDark;
        setIsDark(next);
        if (next) {
            document.body.removeAttribute("data-mode");
            document.documentElement.removeAttribute("data-mode");
            localStorage.setItem("xve-mode", "dark");
        } else {
            document.body.setAttribute("data-mode", "light");
            document.documentElement.setAttribute("data-mode", "light");
            localStorage.setItem("xve-mode", "light");
        }
    };

    if (!content) return null;

    return (
        <>
            {/* Header */}
            <motion.header
                className="site-header"
                animate={scrolled ? "scrolled" : "top"}
                variants={{
                    top: {
                        backgroundColor: isDark ? "rgba(8,8,8,0)" : "rgba(255,255,255,0)",
                        backdropFilter: "blur(0px)",
                        WebkitBackdropFilter: "blur(0px)",
                        boxShadow: "none",
                    },
                    scrolled: {
                        backgroundColor: isDark ? "rgba(8,8,8,0.85)" : "rgba(255,255,255,0.93)",
                        backdropFilter: "blur(24px)",
                        WebkitBackdropFilter: "blur(24px)",
                        boxShadow: isDark
                            ? "0 1px 0 rgba(255,255,255,0.05)"
                            : "0 1px 0 rgba(0,0,0,0.08)",
                    },
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
            >
                <div className="header-inner">
                    <a href="#">
                        <XVELogo />
                    </a>

                    <nav className="desktop-nav">
                        {content.navigation.map((item, i) => (
                            <a key={i} href={item.href}>{item.label}</a>
                        ))}
                    </nav>

                    <div className="header-actions">
                        <button
                            className="mobile-menu-icon"
                            onClick={() => setMobileMenuOpen(true)}
                            aria-label="Abrir menú"
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Theme toggle — fixed top-right corner */}
            <button
                className="theme-toggle-fixed"
                onClick={toggleMode}
                aria-label={isDark ? "Modo claro" : "Modo oscuro"}
            >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", bounce: 0, duration: 0.35 }}
                        className="fixed inset-0 z-[60] flex flex-col p-8 md:hidden"
                        style={{ background: "var(--bg)", color: "var(--text)" }}
                    >
                        <div className="flex justify-between items-center mb-12">
                            <XVELogo />
                            <button
                                onClick={() => setMobileMenuOpen(false)}
                                style={{ color: "var(--text)" }}
                                aria-label="Cerrar menú"
                            >
                                <X size={28} />
                            </button>
                        </div>
                        <nav className="flex flex-col gap-6">
                            {content.navigation.map((item, i) => (
                                <motion.a
                                    key={i}
                                    href={item.href}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.07 }}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-2xl font-bold"
                                    style={{ color: "var(--text)", textDecoration: "none" }}
                                >
                                    {item.label}
                                </motion.a>
                            ))}
                        </nav>
                        <div className="mt-auto">
                            <a
                                href="#contact"
                                className="btn-primary"
                                style={{ display: "block", textAlign: "center" }}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Agendar Consulta
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
