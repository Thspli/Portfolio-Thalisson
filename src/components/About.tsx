import SectionLabel from "./ui/SectionLabel";

export default function About() {
  return (
    <section className="border-t border-zinc-900 px-6 py-24 sm:px-10 lg:px-8">
      <div className="mx-auto max-w-content">
        <SectionLabel index="01" label="Sobre mim" />

        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-zinc-50 sm:text-4xl">
            Entregas reais, sob pressão e com foco no negócio.
          </h2>

          <div className="flex flex-col gap-5 text-base leading-relaxed text-zinc-400">
            <p>
              Sou estudante do 3º ano técnico no{" "}
              <span className="text-zinc-50">SENAI</span>, mas minha
              principal escola tem sido o ambiente de alta pressão dos
              hackathons. Com participações no{" "}
              <span className="text-zinc-50">Grand Prix de Inovação</span>,{" "}
              <span className="text-zinc-50">InovaSkill</span> e{" "}
              <span className="text-zinc-50">Desafio de Ideias</span>,
              aprendi que código bom é código que resolve o problema do
              usuário dentro do prazo.
            </p>
            <p>
              Atuo como <span className="text-zinc-50">Full-Stack</span>{" "}
              priorizando arquiteturas robustas e produtos funcionais. No
              front-end, construo interfaces responsivas com{" "}
              <span className="text-emerald-400">Next.js</span> e{" "}
              <span className="text-emerald-400">React</span>. No back-end,
              garanto a integridade dos dados e a performance das APIs
              utilizando <span className="text-emerald-400">Node.js</span>,{" "}
              <span className="text-zinc-50">TypeScript</span> e{" "}
              <span className="text-zinc-50">MySQL</span>, sempre com testes
              rigorosos no <span className="text-blue-500">Postman</span> e
              deploy estruturado na{" "}
              <span className="text-blue-500">Azure</span>.
            </p>
            <p>
              Trabalho orientado a metodologias ágeis (
              <span className="text-zinc-50">Scrum</span>), focado em
              sprints curtas e entrega contínua. Meus 17 anos representam
              energia, adaptabilidade rápida e uma vontade incansável de
              iterar, errar rápido e entregar a melhor solução técnica
              possível, inclusive integrando hardware e web através de{" "}
              <span className="text-zinc-50">IoT</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}