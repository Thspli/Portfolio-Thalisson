"use client";

import { useEffect, useRef } from "react";

// Paleta alinhada ao resto do site: emerald-400 (destaque primário) e
// blue-500 (referência a infra/Azure), sempre em baixa opacidade pra não
// competir com o conteúdo.
const NODE_COLOR = "52, 211, 153"; // emerald-400 em rgb — DEBUG: se quiser testar visibilidade, troque a opacidade dos nós/linhas abaixo temporariamente para valores mais altos (ex: 0.9)
const SIGNAL_COLOR = "59, 130, 246"; // blue-500 em rgb

const CONFIG = {
  nodeDensity: 12000, // 1 nó a cada N px² de tela — menor = mais nós
  maxNodes: 140,
  linkDistance: 130, // distância máxima pra dois nós se conectarem
  mouseRadius: 180, // raio de influência do cursor
  nodeSpeed: 0.15,
};

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let nodes: Node[] = [];
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const mouse = { x: -9999, y: -9999, active: false };

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(
        CONFIG.maxNodes,
        Math.floor((width * height) / CONFIG.nodeDensity)
      );

      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * CONFIG.nodeSpeed,
        vy: (Math.random() - 0.5) * CONFIG.nodeSpeed,
      }));
    }

    function onPointerMove(e: PointerEvent) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    }

    function onPointerLeave() {
      mouse.active = false;
    }

    function step() {
      ctx!.clearRect(0, 0, width, height);

      // atualiza posição dos nós, com leve atração pro cursor quando perto
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        if (mouse.active) {
          const dx = mouse.x - n.x;
          const dy = mouse.y - n.y;
          const dist = Math.hypot(dx, dy);
          if (dist < CONFIG.mouseRadius) {
            n.x += dx * 0.002;
            n.y += dy * 0.002;
          }
        }
      }

      // conexões entre nós próximos
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < CONFIG.linkDistance) {
            const opacity = 1 - dist / CONFIG.linkDistance;
            ctx!.strokeStyle = `rgba(${NODE_COLOR}, ${opacity * 0.35})`;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }

        // conexão do nó até o cursor, quando dentro do raio de sinal
        if (mouse.active) {
          const dx = mouse.x - nodes[i].x;
          const dy = mouse.y - nodes[i].y;
          const dist = Math.hypot(dx, dy);
          if (dist < CONFIG.mouseRadius) {
            const opacity = 1 - dist / CONFIG.mouseRadius;
            ctx!.strokeStyle = `rgba(${SIGNAL_COLOR}, ${opacity * 0.5})`;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(nodes[i].x, nodes[i].y);
            ctx!.lineTo(mouse.x, mouse.y);
            ctx!.stroke();
          }
        }

        // o nó em si
        ctx!.fillStyle = `rgba(${NODE_COLOR}, 0.6)`;
        ctx!.beginPath();
        ctx!.arc(nodes[i].x, nodes[i].y, 1.5, 0, Math.PI * 2);
        ctx!.fill();
      }

      // pulso no ponto do cursor
      if (mouse.active) {
        ctx!.fillStyle = `rgba(${SIGNAL_COLOR}, 0.8)`;
        ctx!.beginPath();
        ctx!.arc(mouse.x, mouse.y, 2.5, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    let rafId: number;
    let running = true;

    function loop() {
      if (!running) return;
      step();
      rafId = requestAnimationFrame(loop);
    }

    function handleVisibility() {
      running = document.visibilityState === "visible" && !prefersReducedMotion;
      if (running) loop();
      else cancelAnimationFrame(rafId);
    }

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerleave", onPointerLeave);
    document.addEventListener("visibilitychange", handleVisibility);

    if (prefersReducedMotion) {
      // desenha um frame estático, sem loop de animação
      step();
    } else {
      loop();
    }

    return () => {
      running = false;
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}