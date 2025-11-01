"use client";
import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Project {
  image: string;
  link: string;
  title: string;
  description: string;
  technologies: string[];
  role: string;
  category: string;
}

export const ParallaxScroll = ({
  projects,
  className,
}: {
  projects: Project[];
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(projects.length / 3);
  const firstPart = projects.slice(0, third);
  const secondPart = projects.slice(third, 2 * third);
  const thirdPart = projects.slice(2 * third);

  return (
    <div className={cn("h-full items-start w-full", className)} ref={gridRef}>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-40 px-10"
        ref={gridRef}
      >
        {/* Colonne 1 */}
        <div className="grid gap-10">
          {firstPart.map((project, idx) => (
            <motion.div style={{ y: translateFirst }} key={"grid-1" + idx}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* Colonne 2 */}
        <div className="grid gap-10">
          {secondPart.map((project, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* Colonne 3 */}
        <div className="grid gap-10">
          {thirdPart.map((project, idx) => (
            <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Nouveau composant ProjectCard pour gérer l'affichage détaillé
const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="group relative cursor-pointer rounded-2xl overflow-hidden border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:border-gray-600 transition-all duration-300">
      {/* Image */}
      <img
        src={project.image}
        alt={project.title}
        className="h-80 w-full object-cover object-left-top transition-transform duration-300 group-hover:scale-105"
      />
      
      {/* Badge de catégorie */}
      <div className="absolute top-3 left-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
        {project.category}
      </div>

      {/* Overlay avec informations au hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
        <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-300 text-sm mb-3 line-clamp-2">{project.description}</p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-1 mb-3">
          {project.technologies.slice(0, 3).map((tech, i) => (
            <span 
              key={i} 
              className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs border border-blue-500/30"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="bg-gray-500/20 text-gray-300 px-2 py-1 rounded text-xs">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
        
        {/* Rôle */}
        <p className="text-gray-400 text-xs mb-4 italic">{project.role}</p>
        
        {/* Bouton */}
        <Link 
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black px-4 py-2 rounded-lg z-50 text-sm font-medium text-center hover:bg-gray-200 transition-colors w-full"
          onClick={(e) => e.stopPropagation()}
        >
          Voir le projet ↗
        </Link>
      </div>

      {/* Info minimale visible sans hover */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <h3 className="text-white text-sm font-semibold truncate">{project.title}</h3>
        <p className="text-gray-400 text-xs truncate">{project.technologies.slice(0, 2).join(", ")}</p>
      </div>
    </div>
  );
};