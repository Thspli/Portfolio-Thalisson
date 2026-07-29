import SectionLabel from "./ui/SectionLabel";

export default function About() {
  return (
    <section className="border-t border-zinc-900 px-6 py-24 sm:px-10 lg:px-8">
      <div className="mx-auto max-w-content">
        <SectionLabel index="01" label="Sobre mim" />

        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-zinc-50 sm:text-4xl">
            Currículo de verdade é o que eu entreguei sob pressão.
          </h2>

          <div className="flex flex-col gap-5 text-base leading-relaxed text-zinc-400">
            <p>
              3º ano técnico no <span className="text-zinc-50">SENAI</span>,
              mas boa parte do que sei veio de hackathon:{" "}
              <span className="text-zinc-50">Grand Prix de Inovação</span>,{" "}
              <span className="text-zinc-50">InovaSkill</span> e{" "}
              <span className="text-zinc-50">Desafio de Ideias</span> — não
              fui só participar, fui pra ganhar.
            </p>
            <p>
              Construo com{" "}
              <span className="text-emerald-400">Next.js</span>,{" "}
              <span className="text-emerald-400">React</span> e{" "}
              <span className="text-emerald-400">Node</span> porque quero
              produto rodando, não protótipo bonito.{" "}
              <span className="text-zinc-50">TypeScript</span> é
              inegociável. Subo tudo na{" "}
              <span className="text-blue-500">Azure</span> e testo cada
              endpoint no <span className="text-blue-500">Postman</span>{" "}
              antes de qualquer front tocar nele.{" "}
              <span className="text-zinc-50">MySQL</span> guarda o que
              importa.
            </p>
            <p>
              Trabalho em <span className="text-zinc-50">Scrum</span> de
              verdade — sprints curtas, entrega contínua — e já usei{" "}
              <span className="text-zinc-50">IoT</span> pra fazer hardware
              conversar com dashboard web em tempo real. 17 anos não é
              sinônimo de inexperiência: é tempo de sobra pra errar rápido e
              consertar mais rápido ainda.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}