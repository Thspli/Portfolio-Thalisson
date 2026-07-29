import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import InteractiveBackground from "@/components/InteractiveBackground";
import MouseSpotlight from "@/components/MouseSpotlight";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Thalisson Douglas — Full-stack Developer",
  description:
    "Full-stack dev de 17 anos. Next.js, React, Node, Azure. Hackathon winner.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-zinc-950 font-sans text-zinc-300 antialiased">
        <MouseSpotlight />
        <InteractiveBackground />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}