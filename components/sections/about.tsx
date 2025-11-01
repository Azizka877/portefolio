import React from 'react'
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { cn } from '@/lib/utils';
const words = `Développeur full-stack spécialisé Next.js, je crée des applications web modernes et performantes avec Next.js 14+, React, TypeScript et l'écosystème moderne.

Mon expertise couvre l'écosystème complet Next.js :
• Frontend : Next.js 14 (App Router), Shadcn/UI, Tailwind CSS
• State Management : Zustand, TanStack Query  
• Authentication : Better-Auth, NextAuth.js
• Backend : Django REST Framework, APIs performantes

Je conçois des architectures solides, optimisées et maintenables, en accordant une importance cruciale à l'expérience utilisateur, aux performances et aux bonnes pratiques.

Toujours en veille technologique, je maîtrise également React Native, Angular et Laravel pour des solutions adaptées à chaque contexte.`

export default function About() {
  return (
    <section id="about" className="bg-black flex flex-col items-center justify-center gap-10 p-24 ">
            <h2 className="text-white text-4xl font-bold ">A Propos de Moi</h2>
        <div className="relative flex h-[50rem] w-full items-center justify-center bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center dark:bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-black"></div>
      <div className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
                <TextGenerateEffect words={words} />
      </div>
    </div>
   </section>
  )
}
