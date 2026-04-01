"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface HeroShaderProps {
    mouseRef: React.RefObject<{ x: number; y: number } | null>;
    isDark?: boolean;
}

const VERTEX = `void main() { gl_Position = vec4(position, 1.0); }`;

const FRAGMENT = `
precision highp float;
uniform vec2 resolution;
uniform float time;
uniform vec2 mouse;

void main() {
    vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);

    // Mouse in same coordinate space
    vec2 m = (mouse * resolution.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);

    // Distance from cursor — reveal radius
    float dist = length(uv - m);
    float reveal = smoothstep(0.55, 0.0, dist);

    // Subtle concentric energy rings
    float t = time * 0.04;
    float energy = 0.0;
    for (int i = 0; i < 4; i++) {
        float fi = float(i);
        energy += 0.0018 * (fi * fi + 1.0)
            / abs(fract(t + fi * 0.012) * 4.0 - length(uv) + mod(uv.x + uv.y, 0.18));
    }

    // Red-only tones
    vec3 col = vec3(energy * 0.9, energy * 0.1, energy * 0.08);

    // Only visible near cursor, very soft
    float alpha = reveal * min(energy * 1.2, 0.35);
    gl_FragColor = vec4(col * reveal, alpha);
}
`;

export function HeroShader({ mouseRef }: HeroShaderProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const sceneRef = useRef<{
        renderer: THREE.WebGLRenderer;
        uniforms: { time: { value: number }; resolution: { value: THREE.Vector2 }; mouse: { value: THREE.Vector2 } };
        animationId: number;
    } | null>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Only run on devices with fine pointer (no mobile)
        if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

        const camera = new THREE.Camera();
        camera.position.z = 1;

        const scene = new THREE.Scene();
        const geometry = new THREE.PlaneGeometry(2, 2);

        const uniforms = {
            time: { value: 0.0 },
            resolution: { value: new THREE.Vector2() },
            mouse: { value: new THREE.Vector2(0.5, 0.5) },
        };

        const material = new THREE.ShaderMaterial({
            uniforms,
            vertexShader: VERTEX,
            fragmentShader: FRAGMENT,
            transparent: true,
            depthWrite: false,
        });

        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 0);
        container.appendChild(renderer.domElement);

        const resize = () => {
            const w = container.clientWidth;
            const h = container.clientHeight;
            renderer.setSize(w, h);
            uniforms.resolution.value.set(renderer.domElement.width, renderer.domElement.height);
        };
        resize();
        window.addEventListener("resize", resize);

        const animate = () => {
            const id = requestAnimationFrame(animate);
            uniforms.time.value += 0.05;

            // Read mouse from shared ref
            if (mouseRef.current) {
                uniforms.mouse.value.set(mouseRef.current.x, mouseRef.current.y);
            }

            renderer.render(scene, camera);
            if (sceneRef.current) sceneRef.current.animationId = id;
        };

        sceneRef.current = { renderer, uniforms, animationId: 0 };
        animate();

        return () => {
            window.removeEventListener("resize", resize);
            if (sceneRef.current) {
                cancelAnimationFrame(sceneRef.current.animationId);
                if (container.contains(sceneRef.current.renderer.domElement)) {
                    container.removeChild(sceneRef.current.renderer.domElement);
                }
                sceneRef.current.renderer.dispose();
            }
            geometry.dispose();
            material.dispose();
        };
    }, [mouseRef]);

    return (
        <div
            ref={containerRef}
            style={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                zIndex: 3,
                mixBlendMode: "screen",
            }}
        />
    );
}
