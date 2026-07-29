"use client";

import { motion } from "framer-motion";

export interface Project {
  name: string;
  description: string;
  stack: string[];
  status: "shipped" | "wip" | "hackathon-winner";
  github?: string;
  demo?: string;
}

const STATUS_LABEL: Record<Project["status"], string> = {
  shipped: "Em produção",
  wip: "Em desenvolvimento",
  "hackathon-winner": "Vencedor de hackathon",
};

// blue-500 reaproveita a mesma cor já usada em About.tsx para referências
// de infra/Azure — mantém o card na paleta que o resto do site já fala.
const STATUS_DOT: Record<Project["status"], string> = {
  shipped: "bg-blue-500",
  wip: "bg-zinc-600",
  "hackathon-winner": "bg-emerald-400",
};

export default function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  const { name, description, stack, status, github, demo } = project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.06, ease: "easeOut" }}
      className="flex h-full flex-col rounded-md border border-zinc-800 bg-zinc-900/40 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-500/50 hover:bg-zinc-900/60 hover:shadow-[0_0_24px_-10px_rgba(52,211,153,0.35)] sm:p-6"
    >
      <div className="flex items-center gap-2">
        <span className={`h-1.5 w-1.5 rounded-full ${STATUS_DOT[status]}`} />
        <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
          {STATUS_LABEL[status]}
        </span>
      </div>

      <h3 className="mt-3 text-base font-semibold text-zinc-50 sm:text-lg">
        {name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
        {description}
      </p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {stack.map((tech) => (
          <span
            key={tech}
            className="rounded border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 font-mono text-[11px] text-emerald-400"
          >
            {tech}
          </span>
        ))}
      </div>

      {(github || demo) && (
        <div className="mt-5 flex gap-4 border-t border-zinc-800/70 pt-4 font-mono text-xs">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 transition-colors hover:text-emerald-400"
            >
              [ GitHub ]
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 transition-colors hover:text-emerald-400"
            >
              [ Deploy ]
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
}