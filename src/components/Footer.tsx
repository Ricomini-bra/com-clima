import { Mail, Phone } from "lucide-react";
import { navLinks, site, whatsappUrl } from "../data/site";
import { ContactForm } from "./ContactForm";

export function Footer() {
  return (
    <footer id="contato" className="bg-navy px-4 py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white">Fale com a Com Clima</h2>
          <p className="mt-3 text-slate-300">
            Conte o desafio do seu ambiente. Nossa equipe responde com diagnóstico e proposta técnica.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-navy-light p-8 text-white">
          <div>
            <h3 className="text-lg font-semibold">{site.name}</h3>
            <p className="mt-2 text-sm text-slate-300">Serviços de Ar Condicionado e Automação.</p>

            <ul className="mt-8 space-y-3 text-sm">
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-cyan"
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 hover:text-cyan">
                  <Mail className="h-4 w-4" aria-hidden />
                  {site.email}
                </a>
              </li>
            </ul>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-cyan">Links rápidos</p>
              <ul className="mt-3 space-y-2 text-sm">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="hover:text-cyan">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-10 text-xs text-slate-400">
            © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
