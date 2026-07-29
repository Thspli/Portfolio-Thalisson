import SectionLabel from "./ui/SectionLabel";
import ProjectCard, { Project } from "./ProjectCard";

// TODO: troque pelos seus projetos reais (nome, descrição, stack, link do repo)
const PROJECTS: Project[] = [
  {
    name: "Grand Prix de Inovação",
    description:
      "Solução completa desenvolvida em equipe sob deadline de hackathon — 1º lugar.",
    stack: ["Next.js", "Node.js", "MySQL"],
    status: "hackathon-winner",
  },
  {
    name: "InovaSkill",
    description:
      "MVP funcional entregue em ciclo curto de Scrum, do design ao deploy.",
    stack: ["React", "TypeScript", "Azure"],
    status: "hackathon-winner",
  },
  {
    name: "Desafio de Ideias",
    description:
      "Protótipo de IoT integrado a um dashboard web com dados em tempo real.",
    stack: ["Node.js", "IoT", "MySQL"],
    status: "shipped",
  },
  {
    name: "Portfólio pessoal",
    description:
      "Este site. Construído com Next.js e Tailwind, iterado até ficar impecável.",
    stack: ["Next.js", "Tailwind", "TypeScript"],
    status: "wip",
  },
];

export default function ProjectGrid() {
  return (
    <section
      id="projetos"
      className="border-t border-zinc-900 px-6 py-24 sm:px-10 lg:px-8"
    >
      <div className="mx-auto max-w-content">
        <SectionLabel index="03" label="Projetos" />

        <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-zinc-50 sm:text-4xl">
          O que eu construí quando o relógio estava correndo.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}