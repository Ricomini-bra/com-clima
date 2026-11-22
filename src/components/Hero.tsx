import { ArrowRight } from "lucide-react";
import { whatsappUrl } from "../data/site";
import { ServiceRing } from "./ServiceRing";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-white px-4 py-6 text-navy sm:py-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 md:grid-cols-2 md:grid-rows-2 md:gap-x-10 md:gap-y-8">
        <div className="md:col-start-1 md:row-start-1">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Serviços de Ar Condicionado e Automação.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Instalação, manutenção, PMOC e automação para manter seu ambiente confortável e eficiente.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan px-6 py-3 text-sm font-semibold text-navy shadow-lg transition hover:bg-cyan-deep hover:text-white"
          >
            Fale conosco no WhatsApp
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </div>

        <div className="flex items-center justify-center px-2 md:col-start-2 md:row-span-2 md:row-start-1">
          <ServiceRing />
        </div>

        <div className="flex items-center md:col-start-1 md:row-start-2">
          <img
            src="/imagens/logo.jpg"
            alt="Com Clima"
            className="h-auto w-full object-contain object-left opacity-50"
          />
        </div>
      </div>
    </section>
  );
}
