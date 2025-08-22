import React from 'react'
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { cn } from '@/lib/utils';
const words = `Développeur full-stack passionné, je me spécialise dans la création d’applications web performantes et modernes avec Next.js, React.js, Angular, Node.js et Laravel. 
Mon objectif est de concevoir des solutions fiables, évolutives et centrées sur l’utilisateur. 
J’accorde une grande importance à la qualité du code, à l’optimisation des performances et aux bonnes pratiques de développement. 
Toujours en apprentissage continu, je cherche à relever de nouveaux défis techniques et à transformer les idées en projets digitaux concrets.`;

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
      <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
                <TextGenerateEffect words={words} />
      </p>
    </div>
   </section>
  )
}
