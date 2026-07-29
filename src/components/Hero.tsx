export default function Hero() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center sm:px-10">
      {/*
        Efeito glitch 100% CSS (RGB split + tearing via clip-path).
        Sem estado/JS: ::before e ::after clonam o texto via `attr(data-text)`
        e ficam com `clip-path` fechado a maior parte do tempo — só "abrem"
        em picos rápidos e aleatórios, ou continuamente durante o hover.
      */}
      <style>{`
        .glitch {
          position: relative;
          display: inline-block;
        }

        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
          clip-path: inset(0 0 100% 0); /* fechado = invisível na maior parte do loop */
        }

        /* camada vermelha/magenta, sutilmente deslocada para a esquerda */
        .glitch::before {
          left: -2px;
          text-shadow: -1px 0 2px rgba(255, 42, 109, 0.85);
          animation: glitch-before 6s infinite linear;
        }

        /* camada azul/ciano, sutilmente deslocada para a direita */
        .glitch::after {
          left: 2px;
          text-shadow: 1px 0 2px rgba(5, 217, 232, 0.85);
          animation: glitch-after 7s infinite linear;
        }

        /*
          Durações diferentes (6s vs 7s) fazem as duas camadas saírem
          de fase ao longo do tempo — o padrão só se repete de verdade
          a cada 42s, o que passa a sensação de "aleatório" sem JS.
          Em ~90% do loop o clip-path fica fechado (estático); o pico
          de ~0.5s de tearing acontece só no fim de cada volta.
        */
        @keyframes glitch-before {
          0%, 90% { clip-path: inset(0 0 100% 0); transform: translate(0, 0); }
          91% { clip-path: inset(10% 0 60% 0); transform: translate(-3px, 1px); }
          93% { clip-path: inset(45% 0 15% 0); transform: translate(3px, -1px); }
          95% { clip-path: inset(70% 0 5% 0); transform: translate(-2px, 0); }
          97% { clip-path: inset(20% 0 50% 0); transform: translate(2px, 1px); }
          99%, 100% { clip-path: inset(0 0 100% 0); transform: translate(0, 0); }
        }

        @keyframes glitch-after {
          0%, 91% { clip-path: inset(0 0 100% 0); transform: translate(0, 0); }
          92% { clip-path: inset(58% 0 12% 0); transform: translate(3px, -1px); }
          94% { clip-path: inset(15% 0 55% 0); transform: translate(-3px, 1px); }
          96% { clip-path: inset(35% 0 32% 0); transform: translate(2px, 0); }
          98% { clip-path: inset(6% 0 78% 0); transform: translate(-2px, 1px); }
          100% { clip-path: inset(0 0 100% 0); transform: translate(0, 0); }
        }

        /* hover: glitch contínuo e mais intenso enquanto o cursor permanece no nome */
        .glitch:hover::before {
          animation: glitch-before-hover 0.5s steps(2, end) infinite;
        }

        .glitch:hover::after {
          animation: glitch-after-hover 0.5s steps(2, end) infinite;
        }

        @keyframes glitch-before-hover {
          0% { clip-path: inset(10% 0 55% 0); transform: translate(-3px, 0); }
          25% { clip-path: inset(45% 0 10% 0); transform: translate(3px, 1px); }
          50% { clip-path: inset(5% 0 80% 0); transform: translate(-2px, -1px); }
          75% { clip-path: inset(65% 0 5% 0); transform: translate(2px, 0); }
          100% { clip-path: inset(10% 0 55% 0); transform: translate(-3px, 0); }
        }

        @keyframes glitch-after-hover {
          0% { clip-path: inset(55% 0 10% 0); transform: translate(3px, 0); }
          25% { clip-path: inset(10% 0 45% 0); transform: translate(-3px, -1px); }
          50% { clip-path: inset(80% 0 5% 0); transform: translate(2px, 1px); }
          75% { clip-path: inset(5% 0 65% 0); transform: translate(-2px, 0); }
          100% { clip-path: inset(55% 0 10% 0); transform: translate(3px, 0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .glitch::before,
          .glitch::after {
            animation: none;
          }
        }
      `}</style>

      <h1 className="text-5xl font-bold tracking-tight text-zinc-50 sm:text-6xl lg:text-7xl">
        <span className="glitch" data-text="Thalisson Douglas">
          Thalisson Douglas
        </span>
        <span className="text-emerald-400">.</span>
      </h1>

      <p className="mt-6 max-w-xl text-lg text-zinc-300 sm:text-xl">
        Engenharia de Software e Desenvolvimento Full-Stack ponta a ponta.
      </p>

      <p className="mt-3 max-w-md text-sm text-zinc-500 sm:text-base">
        17 anos, full-stack developer. Formado na prática de hackathons —
        onde prazo curto e pressão real ensinam mais rápido que qualquer
        curso.
      </p>
    </section>
  );
}