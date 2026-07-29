import SectionLabel from "./ui/SectionLabel";

const EVENTS = [
  {
    date: "2025",
    title: "Grand Prix de Inovação",
    detail:
      "1º lugar — solução completa em Next.js e Node.js entregue sob deadline apertado.",
  },
  {
    date: "2025",
    title: "InovaSkill",
    detail: "Squad Scrum, MVP funcional do zero ao deploy em ciclo curto.",
  },
  {
    date: "2024",
    title: "Desafio de Ideias",
    detail: "Protótipo de IoT conectado a dashboard web em tempo real.",
  },
];

export default function HackathonTimeline() {
  return (
    <section className="border-t border-zinc-900 px-6 py-24 sm:px-10 lg:px-8">
      <div className="mx-auto max-w-content">
        <SectionLabel index="04" label="Hackathons" />

        <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-zinc-50 sm:text-4xl">
          Onde a pressão de verdade me ensinou a entregar.
        </h2>

        <div className="mt-12 flex flex-col divide-y divide-zinc-900">
          {EVENTS.map((event) => (
            <div
              key={event.title}
              className="flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:gap-8"
            >
              <span className="font-mono text-sm text-zinc-500 sm:w-16">
                {event.date}
              </span>
              <div>
                <h3 className="text-base font-semibold text-zinc-50">
                  {event.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                  {event.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}