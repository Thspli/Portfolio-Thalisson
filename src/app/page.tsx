import Hero from "@/components/Hero";
import About from "@/components/About";
import Stack from "@/components/Stack";
import ProjectGrid from "@/components/ProjectGrid";
import HackathonTimeline from "@/components/HackathonTimeline";
import Footer from "@/components/Footer";
import TerminalTabs from "@/components/TerminalTabs";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TerminalTabs
        content={{
          sobre: (
            <>
              <About />
              <Stack />
            </>
          ),
          projetos: (
            <>
              <ProjectGrid />
              <HackathonTimeline />
            </>
          ),
          contato: <Footer />,
        }}
      />
    </main>
  );
}