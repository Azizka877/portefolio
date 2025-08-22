"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";
import { Button } from "../ui/button";
import { Mail } from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md gap-10">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
        Interresting in working together
      </h1>
      <Link href={"mailto:abdoulaziz.ka877@gmail.com"} className="z-10 ">
      <Button  size={"lg"}>
        Send me an Email <Mail className="size-5 ml-2" />
      </Button>
      </Link>
    </section>
  );
}
