"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export interface Project {
  slug: string;
  title: string;
  /** Ex.: "Desafio de Ideias · Hackathon" ou "Projeto de TCC" */
  context: string;
  /** "O Projeto" */
  description: string;
  /** "Meu papel" — opcional: nem todo projeto tem essa frase definida ainda */
  role?: string;
  tech: string[];
  image: string;
  /** Classe Tailwind de padding aplicada na <img>, controla o peso visual do logo (ex.: "p-8", "p-4") */
  imagePaddingClass?: string;
  /** Se presente, aparece como link ("Ver projeto ↗") dentro do overlay expandido */
  href?: string;
}

export default function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const {
    title,
    context,
    description,
    role,
    tech,
    image,
    imagePaddingClass,
    href,
  } = project;
  const detailsId = `project-details-${project.slug}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.06, ease: "easeOut" }}
      className="group flex h-full flex-col overflow-hidden rounded-md border border-zinc-800 bg-zinc-900/40 transition-all duration-300 hover:border-emerald-500/50 hover:shadow-[0_0_32px_-12px_rgba(52,211,153,0.4)]"
    >
      {/* Imagem — caixa travada, não encolhe nem cresce com o conteúdo do card */}
      <div className="relative flex h-40 w-full flex-shrink-0 items-center justify-center overflow-hidden bg-zinc-900/50">
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          className={`h-full w-full object-contain grayscale opacity-70 mix-blend-luminosity transition-all duration-500 ease-out group-hover:opacity-100 group-hover:grayscale-0 group-hover:mix-blend-normal ${
            imagePaddingClass ?? ""
          }`}
        />

        {/* Tag de contexto — some quando o overlay sobe, pra não competir com o texto */}
        <span
          className={`absolute left-3 top-3 rounded border border-zinc-800/80 bg-black/60 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-emerald-400 backdrop-blur-sm transition-opacity duration-300 ${
            isExpanded ? "opacity-0" : "opacity-100"
          }`}
        >
          {context}
        </span>

        {/*
          Overlay de detalhes: absolute + inset-0 dentro do container da
          imagem. Ele "sobe" (translate-y-full -> translate-y-0) e usa
          overflow-y-auto, então nenhum texto — por maior que seja —
          jamais empurra a altura do card. É isso que garante as 3
          colunas alinhadas independente do tamanho de "O Projeto" /
          "Meu papel" em cada projeto.
        */}
        <div
          id={detailsId}
          className={`absolute inset-0 flex flex-col gap-3 overflow-y-auto bg-zinc-950/95 p-4 backdrop-blur-sm transition-transform duration-500 ease-out sm:p-5 ${
            isExpanded
              ? "translate-y-0 pointer-events-auto"
              : "translate-y-full pointer-events-none"
          }`}
        >
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-400">
              O Projeto
            </span>
            <p className="mt-1 text-sm leading-relaxed text-zinc-300">
              {description}
            </p>
          </div>

          {role && (
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-400">
                Meu papel
              </span>
              <p className="mt-1 text-sm leading-relaxed text-zinc-300">
                {role}
              </p>
            </div>
          )}

          {href && (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex w-fit items-center gap-1 pt-1 font-mono text-xs text-emerald-400 underline decoration-emerald-400/40 underline-offset-4 transition-colors hover:text-emerald-300"
            >
              Ver projeto ↗
            </a>
          )}
        </div>
      </div>

      {/* Conteúdo fixo — nunca fica escondido */}
      <div className="flex flex-1 flex-col gap-1 p-4">
        <h3 className="text-base font-semibold leading-tight text-zinc-50">
          {title}
        </h3>

        <div className="mt-auto flex flex-col">
          <button
            type="button"
            onClick={() => setIsExpanded((prev) => !prev)}
            aria-expanded={isExpanded}
            aria-controls={detailsId}
            className="mb-3 mt-2 flex w-fit items-center gap-1.5 font-mono text-xs tracking-wide transition-colors duration-200"
          >
            <span className="text-emerald-400">{">_"}</span>
            <span
              className={
                isExpanded
                  ? "text-emerald-400"
                  : "text-zinc-500 group-hover:text-zinc-300"
              }
            >
              {isExpanded ? "FECHAR" : "VER DETALHES"}
            </span>
          </button>

          <div className="flex flex-wrap gap-1.5">
            {tech.map((t) => (
              <span
                key={t}
                className="rounded bg-emerald-400/10 px-1.5 py-0.5 font-mono text-[10px] text-emerald-400"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}