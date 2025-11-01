"use client";
import { ParallaxScroll } from "../ui/parallax-scroll";

export function Projects() {
  return (
    <section id="project" className="bg-black flex flex-col items-center justify-center gap-10 ">
        <h2 className="text-white text-4xl font-bold ">Projets</h2>
     <ParallaxScroll projects={projects} />;
    </section>
  )
}

const projects = [
  {
    image: "/images/mctn4.png",
    link: "https://www.mctn.sn/programmes-et-projets",
    title: "MCTN Sénégal",
    description: "Site institutionnel du Ministère du Commerce avec gestion de contenu moderne",
    technologies: ["Angular", "TypeScript", "Tailwind", "Laravel", "Mysql"],
    role: "Développement Frontend & Intégration",
    category: "Institutionnel"
  },
  {
    image: "/images/senegal_api.png",
    link: "https://senegal-api.fewnu.app/api-reference/introduction", 
    title: "Senegal API",
    description: "API REST documentée fournissant des données géographiques et statistiques du Sénégal",
    technologies: ["Laravel", "Mintlify", "Mysql", "Filament"],
    role: "Full-Stack & Architecture API",
    category: "API"
  },
  {
    image: "/images/agence.png",
    link: "https://my-agence.onrender.com/",
    title: "MyAgence Immobilière", 
    description: "Plateforme complète de gestion et recherche de biens immobiliers",
    technologies: ["React", "Laravel", "Mysql"],
    role: "Projet personnel, Apprentissage",
    category: "SaaS"
  },
  {
    image: "/images/assemblee1.png",
    link: "https://www.assemblee.sn",
    title: "Assemblée Nationale",
    description: "Site officiel de l'Assemblée Nationale Sénégalaise",
    technologies: ["Angular", "Laravel", "Tailwind",  "MySQL"],
    role: "Intégration web",
    category: "Gouvernemental"
  },
  {
    image: "/images/test_stage.png",
    link: "https://javascript-integration-stage.vercel.app/", 
    title: "Plateforme de Tests",
    description: "Application d'évaluation technique avec système de scoring",
    technologies: ["javascript", "Html", "Css"],
    role: "Integration ",
    category: "Teste Stage"
  },
  {
    image: "/images/presidence.png",
    link: "https://www.presidence.sn/fr/",
    title: "Présidence du Sénégal",
    description: "Portail officiel de la Présidence de la République",
    technologies: ["Angular", "Tailwind"],
    role: "Développeur Frontend",
    category: "Gouvernemental" 
  },
  {
    image: "/images/inventaire.png",
    link: "https://inventory-product.onrender.com/suppliers",
    title: "Système d'Inventaire",
    description: "Application de gestion de stock et relations fournisseurs",
    technologies: ["Laravel", "Mysql"],
    role: "Projet Personnel - Apprentissage",
    category: "Projet Personnel"
  },
  {
    image: "/images/agence2.png",
    link: "https://my-agence.onrender.com/biens",
    title: "MyAgence - Recherche",
    description: "Module de recherche avancée avec filtres multiples",
    technologies: ["React", "Laravel", "Mysql"],
    role: "Projet personnel, Apprentissage",
    category: "SaaS"
  },
  {
    image: "/images/assemblee2.png", 
    link: "https://www.assemblee.sn",
    title: "AN - Espace Admin",
    description: "Interface d'administration et gestion de contenu",
    technologies: ["Angular", "Laravel", "Mysql", "Tailwind"],
    role: "Integration web",
    category: "Gouvernemental"
  },
  {
    image: "/images/bakeli-training.png", 
    link: "https://school-training.bakeli.tech/accueil",
    title: " Bakeli Training",
    description: "Interface d'apprentissage réservé aux bakelistes",
    technologies: ["ReactJS", "Django Rest Framework", "PostgreSQL", ],
    role: "Gestion des tests du modules python",
    category: "Formation"
  },
];
