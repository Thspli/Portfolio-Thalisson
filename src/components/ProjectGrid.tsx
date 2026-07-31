import SectionLabel from "./ui/SectionLabel";
import ProjectCard, { Project } from "./ProjectCard";

const PROJECTS: Project[] = [
  {
    slug: "zda-os-ia",
    title: "Automação e Catalogação de OS com IA (ZDA)",
    context: "Desafio de Ideias · Hackathon",
    description:
      "Sistema para automatizar a leitura, reorganização e catalogação de Ordens de Serviço (OS) a partir de planilhas, utilizando a matriz PCN para otimizar processos internos da empresa ZDA.",
    role: "Programei o algoritmo em Next.js/JavaScript e implementei a biblioteca de manipulação de planilhas para processar os dados e integrá-los com a IA.",
    tech: [
      "Next.js",
      "JavaScript",
      "Integração com IA",
      "Manipulação de Excel (JS)",
    ],
    image: "/projeto1.png",
    imagePaddingClass: "p-3",
    href: "https://github.com/Thspli/zda", 
  },
  {
    slug: "marilan-nfc",
    title: "App de Gestão de Ferramentas com NFC (Marilan)",
    context: "Desafio de Ideias · Hackathon",
    description:
      "Sistema mobile e web para o controle de almoxarifado da Marilan, permitindo rastreamento, transferência e devolução de ferramentas entre técnicos via NFC e crachás.",
    role: "Modelagem e estruturação do banco MySQL e desenvolvimento mobile em React Native. Programei as interfaces CRUD e integrei bibliotecas de hardware para leitura de NFC.",
    tech: [
      "React Native",
      "MySQL",
      "Integração NFC",
      "CRUD",
      "Exportação (Excel/PDF)",
    ],
    image: "/projeto2.png",
    imagePaddingClass: "p-1",
    href: "https://github.com/Thspli/frontMarilan", 
  },
  {
    slug: "consiga-cred",
    title: "Plataforma Institucional e Pré-cadastro (Consiga Cred)",
    context: "Projeto de TCC",
    description:
      "Plataforma full-stack para agilizar o atendimento ao cliente com sistema de pré-cadastro integrado diretamente ao e-mail da empresa. Inclui painel admin com CRUD para moderação de feedbacks.",
    role: "Atuei como Dev Full Stack. Desenvolvi todo o CRUD e banco de dados para a área de admins e gestão de feedbacks. No Front-end, construí as páginas principais e criei diversos componentes reutilizáveis para a interface.",
    tech: ["Next.js", "Node.js", "MySQL", "Vercel", "E-mail"],
    image: "/projeto3.png",
    imagePaddingClass: "p-3",
    href: "https://consiga-cred-pompeia-front-end.vercel.app", 
  },
];

export default function ProjectGrid() {
  return (
    <section id="projetos" className="px-6 pb-16 pt-2 sm:px-10 lg:px-8">
      <div className="mx-auto max-w-content">
        <SectionLabel index="03" label="Projetos" />

        <h2 className="max-w-2xl text-2xl font-bold leading-tight tracking-tight text-zinc-50 sm:text-3xl">
          O que eu construí quando o relógio estava correndo.
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}