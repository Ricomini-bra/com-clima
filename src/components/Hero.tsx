import { ArrowRight } from "lucide-react";
import { whatsappUrl } from "../data/site";
import { ServiceRing } from "./ServiceRing";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-white px-4 py-5 text-navy sm:py-6">
      <div className="mx-auto grid max-w-6xl items-center gap-4 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:gap-5 lg:gap-6">
        <div className="relative z-10 min-w-0">
          <h1 className="text-[1.75rem] font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.75rem]">
            Soluções em Ar&nbsp;Condicionado
            <br />
            e Automação
          </h1>
          <p className="mt-3 max-w-md text-base leading-relaxed text-slate-600 sm:text-lg">
            Instalação, manutenção, PMOC e automação para manter seu ambiente confortável e eficiente.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-cyan px-6 py-3 text-sm font-semibold text-navy shadow-lg transition hover:bg-cyan-deep hover:text-white"
          >
            Fale conosco no WhatsApp
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>

          <img
            src="/imagens/logo.jpg"
            alt="Com Clima"
            className="mt-6 h-auto w-full max-w-[14rem] object-contain object-left opacity-45 sm:max-w-[16rem]"
          />
        </div>

        <div className="flex items-center justify-center md:justify-end">
          <ServiceRing />
        </div>
      </div>
    </section>
  );
}
