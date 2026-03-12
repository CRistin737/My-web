"use client";

import { useState, ReactElement, CSSProperties } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { X, ArrowRight, CheckCircle2 } from "lucide-react";
import type { SiteData } from "@/content/site-data";

type Project = SiteData["work"]["items"][number];

// ─── Mock Visual (CSS art "screenshot") ──────────────────────────────────────
function MockVisual({ project, index }: { project: Project; index: number }) {
    const types: Record<string, ReactElement> = {
        dashboard: <MockDashboard />,
        ecommerce: <MockEcommerce />,
        corporate: <MockCorporate />,
        landing: <MockLanding />,
        startup: <MockStartup />,
    };

    return (
        <div className="work-mock-screen" style={{ background: project.gradient } as CSSProperties}>
            {/* Large bg number */}
            <span className="work-mock-bg-num">0{index + 1}</span>

            {/* Browser chrome */}
            <div className="work-browser-chrome">
                <span className="work-dot work-dot-r" />
                <span className="work-dot work-dot-y" />
                <span className="work-dot work-dot-g" />
                <div className="work-url-bar">xvestudio.com/{project.id}</div>
            </div>

            {/* Mock UI */}
            <div className="work-mock-body">
                {types[project.mockType] ?? <MockLanding />}
            </div>

            {/* HUD overlay */}
            <div className="work-hud-tl">{project.category}</div>
            <div className="work-hud-tr">{project.year}</div>

            {/* Scanlines */}
            <div className="work-scanlines" />
        </div>
    );
}

function MockDashboard() {
    return (
        <div className="mock-layout-split">
            <div className="mock-sidebar">
                {[0.8, 0.4, 0.6, 0.4, 0.5].map((o, i) => (
                    <div key={i} className="mock-nav-item" style={{ opacity: o }} />
                ))}
            </div>
            <div className="mock-main-area">
                <div className="mock-stats-row">
                    {[0, 1, 2].map(i => <div key={i} className="mock-stat" />)}
                </div>
                <div className="mock-chart-block" />
                <div className="mock-table-rows">
                    {[0.9, 0.6, 0.4, 0.5].map((o, i) => (
                        <div key={i} className="mock-row" style={{ opacity: o }} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function MockEcommerce() {
    return (
        <div className="mock-layout-full">
            <div className="mock-topbar" />
            <div className="mock-hero-strip" />
            <div className="mock-product-grid">
                {[0, 1, 2, 3, 4, 5].map(i => (
                    <div key={i} className="mock-product-card">
                        <div className="mock-product-img" />
                        <div className="mock-product-line" />
                        <div className="mock-product-line short" />
                    </div>
                ))}
            </div>
        </div>
    );
}

function MockCorporate() {
    return (
        <div className="mock-layout-full">
            <div className="mock-topbar" />
            <div className="mock-hero-tall" />
            <div className="mock-three-cols">
                {[0, 1, 2].map(i => <div key={i} className="mock-col-block" />)}
            </div>
            <div className="mock-footer-strip" />
        </div>
    );
}

function MockLanding() {
    return (
        <div className="mock-layout-full">
            <div className="mock-topbar" />
            <div className="mock-hero-center">
                <div className="mock-hero-headline" />
                <div className="mock-hero-sub" />
                <div className="mock-hero-btn" />
            </div>
            <div className="mock-features-row">
                {[0, 1, 2].map(i => <div key={i} className="mock-feature-box" />)}
            </div>
        </div>
    );
}

function MockStartup() {
    return (
        <div className="mock-layout-full">
            <div className="mock-topbar" />
            <div className="mock-hero-left">
                <div className="mock-headline-lg" />
                <div className="mock-sub-line" />
                <div className="mock-cta-row">
                    <div className="mock-btn-primary" />
                    <div className="mock-btn-ghost" />
                </div>
            </div>
            <div className="mock-orb-right" />
        </div>
    );
}

// ─── Featured 3D Card ─────────────────────────────────────────────────────────
function FeaturedCard({ project, index, onDetails }: {
    project: Project;
    index: number;
    onDetails: () => void;
}) {
    const mx = useMotionValue(0);
    const my = useMotionValue(0);
    const rotX = useTransform(my, [-0.5, 0.5], [8, -8]);
    const rotY = useTransform(mx, [-0.5, 0.5], [-8, 8]);
    const sRotX = useSpring(rotX, { stiffness: 100, damping: 18 });
    const sRotY = useSpring(rotY, { stiffness: 100, damping: 18 });

    const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
    };
    const onLeave = () => { mx.set(0); my.set(0); };

    return (
        <div className="work-card-wrap" onMouseMove={onMove} onMouseLeave={onLeave}>
            <motion.div
                className="work-card-3d"
                style={{ rotateX: sRotX, rotateY: sRotY, transformStyle: "preserve-3d" as const }}
            >
                <MockVisual project={project} index={index} />

                {/* Floating 3D label */}
                <div className="work-card-floating-tag" style={{ transform: "translateZ(24px)" }}>
                    <span>{project.category}</span>
                </div>
            </motion.div>

            <div className="work-card-actions">
                <div className="work-card-tags-row">
                    {project.tags.slice(0, 3).map(t => (
                        <span key={t} className="work-tag">{t}</span>
                    ))}
                </div>
                <button className="work-view-btn" onClick={onDetails}>
                    Ver Detalles <ArrowRight size={15} />
                </button>
            </div>
        </div>
    );
}

// ─── Project Detail Modal ─────────────────────────────────────────────────────
function ProjectModal({ project, index, onClose }: {
    project: Project;
    index: number;
    onClose: () => void;
}) {
    return (
        <motion.div
            className="work-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                className="work-modal"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "60%", opacity: 0 }}
                transition={{ type: "spring", damping: 32, stiffness: 280 }}
                onClick={e => e.stopPropagation()}
            >
                <div className="work-modal-topbar">
                    <div className="work-modal-topbar-left">
                        <span className="work-modal-num">0{index + 1}</span>
                        <div>
                            <h2 className="work-modal-title">{project.title}</h2>
                            <p className="work-modal-client">{project.client}</p>
                        </div>
                    </div>
                    <button className="work-modal-close" onClick={onClose} aria-label="Cerrar">
                        <X size={20} />
                    </button>
                </div>

                <div className="work-modal-body">
                    {/* Left: info */}
                    <div className="work-modal-text">
                        <div className="work-modal-section">
                            <h4 className="work-modal-section-title">El Negocio</h4>
                            <p>{project.business}</p>
                        </div>

                        <div className="work-modal-section">
                            <h4 className="work-modal-section-title">El Desafío</h4>
                            <p>{project.challenge}</p>
                        </div>

                        <div className="work-modal-section">
                            <h4 className="work-modal-section-title">Lo que construimos</h4>
                            <ul className="work-modal-list">
                                {project.solution.map((item, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + i * 0.07 }}
                                    >
                                        <CheckCircle2 size={14} />
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        <div className="work-modal-result-box">
                            <span className="work-modal-result-label">Resultado</span>
                            <p className="work-modal-result-text">{project.results}</p>
                        </div>

                        <div className="work-modal-tags-row">
                            {project.tags.map(t => (
                                <span key={t} className="work-tag">{t}</span>
                            ))}
                        </div>
                    </div>

                    {/* Right: visual gallery */}
                    <div className="work-modal-gallery">
                        <motion.div
                            className="work-modal-main-visual"
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.15 }}
                        >
                            <MockVisual project={project} index={index} />
                        </motion.div>
                        <div className="work-modal-mini-row">
                            {[0.75, 0.5].map((op, i) => (
                                <motion.div
                                    key={i}
                                    className="work-modal-mini"
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: op, y: 0 }}
                                    transition={{ delay: 0.25 + i * 0.1 }}
                                    style={{ background: project.gradient } as CSSProperties}
                                >
                                    <div className="work-scanlines" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

// ─── Main Work Section ────────────────────────────────────────────────────────
export const Work = ({ content }: { content: SiteData["work"] }) => {
    const [active, setActive] = useState(0);
    const [modal, setModal] = useState(false);
    const [busy, setBusy] = useState(false);

    const select = (i: number) => {
        if (i === active || busy) return;
        setBusy(true);
        setTimeout(() => { setActive(i); setBusy(false); }, 280);
    };

    const project = content.items[active];

    return (
        <section className="work-section" id="work">
            <div className="section-container">

                {/* Header row */}
                <div className="work-header-row">
                    <div>
                        <span className="section-label">Proyectos</span>
                        <h2 className="section-heading">{content.heading}</h2>
                    </div>
                    <div className="work-counter">
                        <motion.span
                            key={active}
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="work-counter-cur"
                        >
                            {String(active + 1).padStart(2, "0")}
                        </motion.span>
                        <span className="work-counter-sep"> / </span>
                        <span className="work-counter-tot">
                            {String(content.items.length).padStart(2, "0")}
                        </span>
                    </div>
                </div>

                {/* Main grid */}
                <div className="work-main-grid">

                    {/* Featured area */}
                    <div className="work-featured-col">
                        <div className="work-featured-meta">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={active + "-meta"}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <h3 className="work-featured-name">{project.title}</h3>
                                    <p className="work-featured-cat">{project.category} · {project.year}</p>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={active}
                                initial={{ opacity: 0, scale: 0.96, filter: "blur(6px)" }}
                                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                exit={{ opacity: 0, scale: 1.02, filter: "blur(8px)" }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                                <FeaturedCard
                                    project={project}
                                    index={active}
                                    onDetails={() => setModal(true)}
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Project list */}
                    <nav className="work-project-list" aria-label="Lista de proyectos">
                        {content.items.map((proj, i) => (
                            <button
                                key={proj.id}
                                className={`work-list-item${i === active ? " active" : ""}`}
                                onClick={() => select(i)}
                                disabled={busy}
                            >
                                {/* Active indicator bar */}
                                {i === active && (
                                    <motion.div
                                        className="work-list-active-bar"
                                        layoutId="work-bar"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}

                                <span className="work-list-num">{String(i + 1).padStart(2, "0")}</span>

                                <div className="work-list-text">
                                    <span className="work-list-title">{proj.title}</span>
                                    <span className="work-list-cat">{proj.category}</span>
                                </div>

                                {/* Color swatch */}
                                <div
                                    className="work-list-swatch"
                                    style={{ background: proj.gradient } as CSSProperties}
                                />
                            </button>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {modal && (
                    <ProjectModal
                        project={project}
                        index={active}
                        onClose={() => setModal(false)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
};
