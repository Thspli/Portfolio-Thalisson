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

        {/* Trilho vertical da timeline */}
        <div className="relative mt-16 border-l border-zinc-800 pl-8 sm:pl-10">
          {EVENTS.map((event, index) => (
            <div
              key={event.title}
              className={`group relative ${
                index === EVENTS.length - 1 ? "pb-0" : "pb-12"
              }`}
            >
              {/* Nodo — bolinha verde encaixada exatamente na linha */}
              <span
                className="absolute -left-[calc(2rem+7px)] top-1.5 h-3 w-3 rounded-full bg-emerald-500 ring-4 ring-zinc-950 transition-transform duration-300 group-hover:scale-125 sm:-left-[calc(2.5rem+7px)]"
                aria-hidden="true"
              />

              {/* Card furtivo — transparente por padrão, ganha vida no hover */}
              <div className="-mx-4 rounded-lg p-4 transition-all duration-300 hover:bg-zinc-900/30">
                <span className="font-mono text-xs text-zinc-500">
                  {event.date}
                </span>

                <h3 className="mt-1 text-base font-semibold text-white sm:text-lg">
                  {event.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
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