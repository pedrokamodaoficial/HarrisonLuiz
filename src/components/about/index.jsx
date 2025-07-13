import React from "react";
import { Medal, BadgeCheck, ChartColumnIncreasing } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-6 justify-items-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Sobre Mim
          </h2>
          <p className="text-lg text-slate-600">
            Sou um profissional com sólida experiência em gestão administrativa,
            especializado em atendimento ao cliente e processos operacionais.
            Capaz de realizar análise documental e gestão de cadastros, com foco
            em otimizar processos e promover a eficiência. Experiência em
            atendimento telefônico e presencial, suporte a todas as áreas da
            Instituição.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 justify-items-center">
            <div className="text-center space-y-2">
              <div className="h-12 w-12 rounded-full bg-slate-900 flex items-center justify-center mx-auto">
                <Medal className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold">10+ anos</h3>
              <p className="text-sm text-slate-600">
                Como um Analista de Projetos
              </p>
            </div>
            <div className="text-center space-y-2">
              <div className="h-12 w-12 rounded-full bg-slate-900 flex items-center justify-center mx-auto">
                <BadgeCheck className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold">50+ projetos entregues</h3>
              <p className="text-sm text-slate-600">
                Com serviço bem avaliado pelos clientes
              </p>
            </div>
            <div className="text-center space-y-2">
              <div className="h-12 w-12 rounded-full bg-slate-900 flex items-center justify-center mx-auto">
                <ChartColumnIncreasing className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold">Resultados Exepcionais</h3>
              <p className="text-sm text-slate-600">
                Com foco na melhoria contínua e na superação de metas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
