"use client";

import { useState, useEffect, ReactElement, CSSProperties } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ChevronLeft, ChevronRight, ArrowUpRight, Maximize2 } from "lucide-react";
import Image from "next/image";
import type { SiteData } from "@/content/site-data";

type Project = SiteData["work"]["items"][number];

// ─── Mock Visual (CSS art for projects without real screenshots) ──────────────
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
            <span className="work-mock-bg-num">0{index + 1}</span>
            <div className="work-browser-chrome">
                <span className="work-dot work-dot-r" />
                <span className="work-dot work-dot-y" />
                <span className="work-dot work-dot-g" />
                <div className="work-url-bar">xvestudio.com/{project.id}</div>
            </div>
            <div className="work-mock-body">
                {types[project.mockType] ?? <MockLanding />}
            </div>
            <div className="work-hud-tl">{project.category}</div>
            <div className="work-hud-tr">{project.year}</div>
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

// ─── Project Grid Card (XVE-style portfolio tile) ─────────────────────────────
function ProjectCard({ project, index, onOpen }: {
    project: Project;
    index: number;
    onOpen: () => void;
}) {
    const hasImages = project.images && project.images.length > 0;
    const heroSrc = hasImages ? project.images[0] : null;

    return (
        <motion.button
            type="button"
            className="xve-card"
            onClick={onOpen}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            aria-label={`Ver detalles de ${project.title}`}
        >
            {/* Device frame with screenshot */}
            <div className="xve-card-frame">
                {/* Top chrome: 3 dots */}
                <div className="xve-card-chrome">
                    <span className="xve-card-dot" />
                    <span className="xve-card-dot" />
                    <span className="xve-card-dot" />
                    <div className="xve-card-chrome-num">0{index + 1}</div>
                </div>

                {/* Screen area */}
                <div className="xve-card-screen">
                    {heroSrc ? (
                        <Image
                            src={heroSrc}
                            alt={project.title}
                            fill
                            sizes="(max-width: 768px) 95vw, 700px"
                            quality={92}
                            className="xve-card-img"
                            priority={index === 0}
                        />
                    ) : (
                        <MockVisual project={project} index={index} />
                    )}

                    {/* Hover overlay */}
                    <div className="xve-card-overlay">
                        <div className="xve-card-overlay-inner">
                            <span className="xve-card-overlay-label">Ver proyecto</span>
                            <ArrowUpRight size={22} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Info bar below the frame */}
            <div className="xve-card-info">
                <div className="xve-card-info-left">
                    <h3 className="xve-card-title">{project.title}</h3>
                    <p className="xve-card-meta">
                        <span className="xve-card-category">{project.category}</span>
                        <span className="xve-card-dot-sep">·</span>
                        <span className="xve-card-year">{project.year}</span>
                    </p>
                </div>
                <div className="xve-card-tags">
                    {project.tags.slice(0, 2).map(t => (
                        <span key={t} className="xve-card-tag">{t}</span>
                    ))}
                </div>
            </div>
        </motion.button>
    );
}

// ─── Project Detail Modal (unchanged — this is the detail view) ───────────────
function ProjectModal({ project, index, onClose }: {
    project: Project;
    index: number;
    onClose: () => void;
}) {
    const [galleryIdx, setGalleryIdx] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const hasImages = project.images && project.images.length > 0;
    const totalImages = hasImages ? project.images.length : 0;

    const prevImage = () => setGalleryIdx(i => (i - 1 + totalImages) % totalImages);
    const nextImage = () => setGalleryIdx(i => (i + 1) % totalImages);

    // Keyboard: ESC closes lightbox first, then modal; arrows navigate
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                if (lightboxOpen) {
                    setLightboxOpen(false);
                } else {
                    onClose();
                }
            } else if (e.key === "ArrowLeft" && totalImages > 1) {
                prevImage();
            } else if (e.key === "ArrowRight" && totalImages > 1) {
                nextImage();
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lightboxOpen, totalImages]);

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
                        {hasImages ? (
                            <>
                                <div className="wk-modal-main-img">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={galleryIdx}
                                            className="wk-modal-img-wrap"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Image
                                                src={project.images[galleryIdx]}
                                                alt={`${project.title} — captura ${galleryIdx + 1}`}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 800px"
                                                quality={92}
                                                className="wk-gallery-img"
                                            />
                                        </motion.div>
                                    </AnimatePresence>

                                    {/* Click-to-zoom button (sits above image, below nav) */}
                                    <button
                                        className="wk-modal-zoom"
                                        onClick={() => setLightboxOpen(true)}
                                        aria-label="Ampliar imagen"
                                    >
                                        <Maximize2 size={16} />
                                        <span>Ampliar</span>
                                    </button>

                                    {totalImages > 1 && (
                                        <>
                                            <button
                                                className="wk-modal-nav wk-modal-nav-prev"
                                                onClick={prevImage}
                                                aria-label="Anterior"
                                            >
                                                <ChevronLeft size={20} />
                                            </button>
                                            <button
                                                className="wk-modal-nav wk-modal-nav-next"
                                                onClick={nextImage}
                                                aria-label="Siguiente"
                                            >
                                                <ChevronRight size={20} />
                                            </button>
                                            <span className="wk-modal-counter">
                                                {galleryIdx + 1} / {totalImages}
                                            </span>
                                        </>
                                    )}
                                </div>

                                <div className="wk-modal-thumbs">
                                    {project.images.map((src, i) => (
                                        <button
                                            key={src}
                                            className={`wk-modal-thumb${i === galleryIdx ? " is-active" : ""}`}
                                            onClick={() => setGalleryIdx(i)}
                                            aria-label={`Ver captura ${i + 1}`}
                                        >
                                            <Image
                                                src={src}
                                                alt=""
                                                fill
                                                sizes="100px"
                                                className="wk-gallery-img"
                                            />
                                        </button>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <div className="work-modal-main-visual">
                                <MockVisual project={project} index={index} />
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>

            {/* Lightbox — full-screen image preview */}
            <AnimatePresence>
                {lightboxOpen && hasImages && (
                    <motion.div
                        className="wk-lightbox"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={(e) => {
                            e.stopPropagation();
                            setLightboxOpen(false);
                        }}
                    >
                        <button
                            className="wk-lightbox-close"
                            onClick={(e) => {
                                e.stopPropagation();
                                setLightboxOpen(false);
                            }}
                            aria-label="Cerrar vista ampliada"
                        >
                            <X size={24} />
                        </button>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={galleryIdx}
                                className="wk-lightbox-img-wrap"
                                initial={{ opacity: 0, scale: 0.96 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.96 }}
                                transition={{ duration: 0.25 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Image
                                    src={project.images[galleryIdx]}
                                    alt={`${project.title} — captura ${galleryIdx + 1}`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 1400px"
                                    quality={95}
                                    className="wk-lightbox-img"
                                    priority
                                />
                            </motion.div>
                        </AnimatePresence>

                        {totalImages > 1 && (
                            <>
                                <button
                                    className="wk-lightbox-nav wk-lightbox-nav-prev"
                                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                    aria-label="Anterior"
                                >
                                    <ChevronLeft size={28} />
                                </button>
                                <button
                                    className="wk-lightbox-nav wk-lightbox-nav-next"
                                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                    aria-label="Siguiente"
                                >
                                    <ChevronRight size={28} />
                                </button>
                                <div className="wk-lightbox-counter">
                                    {galleryIdx + 1} / {totalImages}
                                </div>
                            </>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

// ─── Main Work Section ────────────────────────────────────────────────────────
export const Work = ({ content }: { content: SiteData["work"] }) => {
    const [openIdx, setOpenIdx] = useState<number | null>(null);
    const activeProject = openIdx !== null ? content.items[openIdx] : null;

    return (
        <section className="work-section" id="work">
            <div className="section-container">

                {/* Header */}
                <div className="work-header-row">
                    <div>
                        <span className="section-label">Proyectos</span>
                        <h2 className="section-heading">{content.heading}</h2>
                    </div>
                    <div className="work-counter">
                        <span className="work-counter-cur">
                            {String(content.items.length).padStart(2, "0")}
                        </span>
                        <span className="work-counter-sep"> / </span>
                        <span className="work-counter-tot">
                            PROYECTOS
                        </span>
                    </div>
                </div>

                {/* Grid of project cards */}
                <div className="xve-projects-grid">
                    {content.items.map((proj, i) => (
                        <ProjectCard
                            key={proj.id}
                            project={proj}
                            index={i}
                            onOpen={() => setOpenIdx(i)}
                        />
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {activeProject && openIdx !== null && (
                    <ProjectModal
                        project={activeProject}
                        index={openIdx}
                        onClose={() => setOpenIdx(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
};
