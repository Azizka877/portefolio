import React from 'react'
import { WavyBackground } from '../ui/wavy-background'

export default function Hero() {
  return (
    <section id='home'>
      <WavyBackground className="max-w-4xl mx-auto pb-40">
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
          1 an d'expérience en développement full-stack 
              à travers plusieurs stages intensifs
        </p>
        <p className="text-xl md:text-2xl lg:text-3xl text-blue-200 font-semibold inter-var text-center mt-4">
          Spécialiste React/Next.js
        </p>
        <p className="text-base md:text-lg mt-6 text-white font-normal inter-var text-center max-w-2xl mx-auto">
          Je conçois des applications web performantes avec 
          <span className="text-cyan-300"> Next.js 14</span>, 
          <span className="text-green-300"> React</span>, 
          <span className="text-purple-300"> TypeScript</span> et
          <span className="text-yellow-300"> Django</span>
        </p>
        <p className="text-sm md:text-base mt-4 text-gray-300 font-light inter-var text-center">
          State management • Authentication • UI/UX • APIs REST • Bases de données
        </p>
      </WavyBackground>
    </section>
  )
}