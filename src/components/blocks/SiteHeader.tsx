/**
 * SiteHeader
 *
 * Summary: Fixed top navigation bar with the XVE logo (static in mobile menu,
 *          animated TextRotate on desktop), a desktop nav, a mobile hamburger
 *          overlay, and a dark/light mode toggle persisted in localStorage.
 *
 * Architecture:
 *   - 3-column CSS grid (1fr auto 1fr) keeps logo left, nav centered, actions right
 *   - Theme toggle is fixed-positioned (z-index 55) and only shown at 768px+ via CSS
 *   - Mobile overlay slides in from the right using Framer Motion AnimatePresence
 *   - Dark mode state drives Framer Motion variants for the header background blur
 *
 * Responsive: Mobile-first. Hamburger visible below 768px; desktop nav above.
 * Breakpoints: 768px (desktop nav + theme toggle appear, hamburger hides)
 */
"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { TextRotate } from "@/components/ui/text-rotate";
import type { SiteData } from "@/content/site-data";

const ROTATING_WORDS = [
    "Studio",
    "Design",
    "Digital",
    "Creative",
    "Brands",
    "Web",
];

const XVELogo = () => (
    <span className="xve-logo" aria-label="XVE Studio">
        <span className="xve-logo-xv">XV</span><span className="xve-logo-e">E Studio</span>
    </span>
);

const XVELogoAnimated = () => (
    <span className="xve-logo" aria-label="XVE Studio">
        <span className="xve-logo-xv">XV</span><span className="xve-logo-e">E </span>
        <TextRotate
            texts={ROTATING_WORDS}
            mainClassName="xve-logo-rotate"
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2500}
        />
    </span>
);

export const SiteHeader = ({ content }: { content: SiteData }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem("xve-mode");
        if (saved === "dark") {
            setIsDark(true);
            document.body.removeAttribute("data-mode");
            document.documentElement.removeAttribute("data-mode");
        } else {
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
                        boxShadow: "none",
                    } as Record<string, string>,
                    scrolled: {
                        backgroundColor: isDark ? "rgba(8,8,8,0.85)" : "rgba(255,255,255,0.93)",
                        backdropFilter: "blur(24px)",
                        boxShadow: isDark
                            ? "0 1px 0 rgba(255,255,255,0.05)"
                            : "0 1px 0 rgba(0,0,0,0.08)",
                    } as Record<string, string>,
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
            >
                <div className="header-inner">
                    <a href="#">
                        <XVELogoAnimated />
                    </a>

                    <nav className="desktop-nav">
                        {content.navigation.map((item, i) => (
                            <a key={i} href={item.href}>{item.label}</a>
                        ))}
                    </nav>

                    <div className="header-actions">
                        {/* Desktop theme toggle */}
                        <button
                            className="theme-toggle-desktop"
                            onClick={toggleMode}
                            aria-label={isDark ? "Modo claro" : "Modo oscuro"}
                        >
                            {isDark ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
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

            {/* Mobile overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", bounce: 0, duration: 0.35 }}
                        className="mobile-menu-overlay"
                        style={{ background: "var(--bg)", color: "var(--text)" }}
                    >
                        <div className="mobile-menu-top">
                            <XVELogo />
                            <button
                                onClick={() => setMobileMenuOpen(false)}
                                className="mobile-menu-close"
                                aria-label="Cerrar menú"
                            >
                                <X size={28} />
                            </button>
                        </div>
                        <nav className="mobile-menu-nav">
                            {content.navigation.map((item, i) => (
                                <motion.a
                                    key={i}
                                    href={item.href}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.07 }}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="mobile-menu-link"
                                >
                                    {item.label}
                                </motion.a>
                            ))}
                        </nav>
                        <div className="mobile-menu-bottom">
                            {/* Theme toggle inside mobile menu */}
                            <button
                                className="mobile-theme-toggle"
                                onClick={toggleMode}
                            >
                                {isDark ? <Sun size={18} /> : <Moon size={18} />}
                                <span>{isDark ? "Modo claro" : "Modo oscuro"}</span>
                            </button>
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
