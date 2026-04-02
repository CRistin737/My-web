"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const CONSENT_KEY = "cookie_consent";

type ConsentValue = "accepted" | "rejected";

export const CookieBanner = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        try {
            const stored = localStorage.getItem(CONSENT_KEY);
            if (!stored) {
                // Small delay so the banner doesn't flash before hydration settles
                const timer = setTimeout(() => setVisible(true), 800);
                return () => clearTimeout(timer);
            }
        } catch {
            // localStorage may be unavailable in some environments — fail silently
        }
    }, []);

    const handleConsent = (value: ConsentValue) => {
        try {
            localStorage.setItem(CONSENT_KEY, value);
        } catch {
            // fail silently
        }
        setVisible(false);

        // If user rejected, push an opt-out signal to the GTM dataLayer so
        // analytics tags can respect the choice without reloading the page.
        if (value === "rejected" && typeof window !== "undefined") {
            const win = window as unknown as { dataLayer?: Record<string, unknown>[] };
            if (win.dataLayer) {
                win.dataLayer.push({ event: "cookie_consent_rejected" });
            }
        }
    };

    if (!visible) return null;

    return (
        <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Consentimiento de cookies">
            <div className="cookie-banner-inner">
                <div className="cookie-banner-text">
                    <p className="cookie-banner-title">Este sitio usa cookies</p>
                    <p className="cookie-banner-body">
                        Usamos cookies de analítica (Google Analytics) para entender cómo se usa el sitio y
                        mejorar la experiencia. Nunca compartimos tu información con fines publicitarios.{" "}
                        <Link href="/cookies" className="cookie-banner-link">
                            Más información
                        </Link>
                    </p>
                </div>
                <div className="cookie-banner-actions">
                    <button
                        className="cookie-btn cookie-btn-reject"
                        onClick={() => handleConsent("rejected")}
                        type="button"
                    >
                        Solo necesarias
                    </button>
                    <button
                        className="cookie-btn cookie-btn-accept"
                        onClick={() => handleConsent("accepted")}
                        type="button"
                    >
                        Aceptar todo
                    </button>
                </div>
            </div>
        </div>
    );
};
