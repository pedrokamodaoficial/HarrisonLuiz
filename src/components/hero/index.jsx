import React from "react";
import { FolderOpenDot, Phone } from "lucide-react";
import Image from "../../assets/Harrison.jpeg";

export default function Hero() {
  return (
    <section className="py-20 bg-blue-50 md:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center justify-items-center">
          <div className="space-y-6 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Um Profissional
              <span className="text-blue-400"> Criativo e Inovador</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-[600px] mx-auto">
              Seja bem vindo ao meu portfólio! Aqui você encontrará uma coleção
              de projetos que refletem minha paixão por tecnologia e inovação.
              Cada projeto é uma oportunidade de aprender, crescer e inovar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-200 hover:bg-blue-500 rounded-lg text-blue-900 font-semibold px-6 py-3 transition-colors duration-300">
                <FolderOpenDot className="inline-block mr-2" />
                Ver Projetos
              </button>
              <button className="bg-gray-200 hover:bg-gray-500 rounded-lg text-gray-900 font-semibold px-6 py-3 transition-colors duration-300">
                <Phone className="inline-block mr-2" />
                Contato
              </button>
            </div>
          </div>
          <div className="lg:w-96 relative rounded-full bg-slate-100 overflow-hidden">
            <img src={Image} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
