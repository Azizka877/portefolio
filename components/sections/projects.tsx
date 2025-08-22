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
    link: "https://www.mctn.sn/programmes-et-projets"
  },
  {
    image: "/images/senegal_api.png",
    link: "https://senegal-api.fewnu.app/api-reference/introduction"
  },
  {
        image: "/images/agence.png",
    link: "https://my-agence.onrender.com/"
  },
  
  {
    image: "/images/assemblee1.png",
    link: "https://www.assemblee.sn"
  },
  {
    image: "/images/test_stage.png",
    link: "https://javascript-integration-stage.vercel.app/"
  },
  {
    image: "/images/assemblee2.png",
    link: "https://www.assemblee.sn"
  },
  {
    image: "/images/agence2.png",
    link: "https://my-agence.onrender.com/biens"
  },
  {
    image: "/images/presidence.png",
    link: "https://www.presidence.sn/fr/"
  },
  {
    image: "/images/inventaire.png",
    link: "https://inventory-product.onrender.com/suppliers"
  },
  // 👉 tu continues de la même manière pour toutes tes autres images
];
