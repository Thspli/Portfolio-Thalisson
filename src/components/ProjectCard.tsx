export interface Project {
  name: string;
  description: string;
  stack: string[];
  status: "shipped" | "wip" | "hackathon-winner";
  link?: string;
}

const STATUS_LABEL: Record<Project["status"], string> = {
  shipped: "Em produção",
  wip: "Em desenvolvimento",
  "hackathon-winner": "Vencedor de hackathon",
};

const STATUS_DOT: Record<Project["status"], string> = {
  shipped: "bg-blue-500",
  wip: "bg-zinc-600",
  "hackathon-winner": "bg-emerald-400",
};

export default function ProjectCard({ project }: { project: Project }) {
  const { name, description, stack, status, link } = project;

  return (
    <div className="group flex h-full flex-col rounded-lg border border-zinc-800 bg-zinc-900/20 p-6 transition-colors duration-200 hover:border-zinc-700 hover:bg-zinc-900/40">
      <div className="flex items-center gap-2">
        <span className={`h-1.5 w-1.5 rounded-full ${STATUS_DOT[status]}`} />
        <span className="font-mono text-xs text-zinc-500">
          {STATUS_LABEL[status]}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-semibold text-zinc-50">{name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
        {description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {stack.map((s) => (
          <span
            key={s}
            className="rounded-md border border-zinc-800 px-2.5 py-1 font-mono text-xs text-zinc-400"
          >
            {s}
          </span>
        ))}
      </div>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-emerald-400 transition-colors hover:text-emerald-300"
        >
          Ver repositório
          <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </a>
      )}
    </div>
  );
}