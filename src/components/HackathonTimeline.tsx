import SectionLabel from "./ui/SectionLabel";

const EVENTS = [
  {
    date: "2025",
    title: "InovaSkill (Visão Computacional)",
    detail:
      "Projeto focado em IA e automação industrial. Desenvolvi um sistema para detectar avarias em garrafas de refrigerante utilizando visão computacional com YOLOv8, processamento em Python e interface web com Flask.",
    tags: ["Python", "YOLOv8", "Flask"],
  },
  {
    date: "2025/2026",
    title: "Desafio de Ideias (2 Edições)",
    detail:
      "Hackathons de alta intensidade onde entreguei MVPs funcionais. Foi daqui que nasceram os projetos da ZDA (IA e processamento de planilhas) e Marilan (Gestão via NFC e React Native).",
    tags: ["IA", "Planilhas (Excel)", "NFC", "React Native"],
  },
  {
    date: "2024/2025",
    title: "Grand Prix de Inovação (2 Edições)",
    detail:
      "Foco total em Product Discovery e UI/UX. Concepção de ideias, validação de negócio e prototipação rápida de interfaces interativas utilizando o Figma sob deadline extremo.",
    tags: ["Product Discovery", "UI/UX", "Figma"],
  },
];

export default function HackathonTimeline() {
  return (
    <section className="border-t border-zinc-900 px-6 py-24 sm:px-10 lg:px-8">
      <div className="mx-auto max-w-content">
        <SectionLabel index="04" label="Hackathons & Inovação" />

        <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-zinc-50 sm:text-4xl">
          Onde a pressão de verdade me ensinou a entregar.
        </h2>

        <div className="mt-12 flex flex-col divide-y divide-zinc-900">
          {EVENTS.map((event) => (
            <div
              key={event.title}
              className="flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:gap-8"
            >
              <span className="font-mono text-sm text-zinc-500 sm:w-24 sm:shrink-0">
                {event.date}
              </span>
              <div>
                <h3 className="text-base font-semibold text-zinc-50">
                  {event.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                  {event.detail}
                </p>
                <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
                  {event.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs text-emerald-500"
                    >
                      [ {tag} ]
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}