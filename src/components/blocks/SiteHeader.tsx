"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { SiteData } from "@/content/site-data";

export const SiteHeader = ({ content }: { content: SiteData }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    if (!content) return null;

    return (
        <>
            <header className="site-header">
                <div className="header-inner">
                    <div className="logo">{content.general.logoText}</div>
                    <nav className="desktop-nav">
                        {content.navigation.map((item, i) => (
                            <a key={i} href={item.href}>{item.label}</a>
                        ))}
                    </nav>
                    <div className="header-actions">
                        <button
                            className="mobile-menu-icon"
                            onClick={() => setMobileMenuOpen(true)}
                            aria-label="Open Menu"
                        >
                            <Menu />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                        className="fixed inset-0 z-[60] bg-white text-black flex flex-col p-8 md:hidden"
                    >
                        <div className="flex justify-between items-center mb-12">
                            <span className="text-2xl font-bold">MENU</span>
                            <button onClick={() => setMobileMenuOpen(false)}>
                                <X size={32} />
                            </button>
                        </div>
                        <nav className="flex flex-col gap-8 text-2xl font-bold">
                            {content.navigation.map((item, i) => (
                                <a key={i} href={item.href} onClick={() => setMobileMenuOpen(false)}>{item.label}</a>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
