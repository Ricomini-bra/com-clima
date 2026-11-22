import { useState } from "react";
import { Menu, User, X } from "lucide-react";
import { navLinks, site } from "../data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <a href="#inicio" className="flex items-center gap-2" aria-label={site.name}>
          {logoFailed ? (
            <span className="text-lg font-bold tracking-tight text-white">{site.name}</span>
          ) : (
            <img
              src="/imagens/logo2.jpg"
              alt={site.name}
              className="h-12 w-auto"
              onError={() => setLogoFailed(true)}
            />
          )}
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-white lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-cyan">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.osPortalHref}
            className="inline-flex items-center gap-2 rounded-full bg-cyan px-3 py-2 text-xs font-semibold text-navy shadow-sm transition hover:bg-white sm:px-4 sm:text-sm"
          >
            <User className="h-4 w-4" aria-hidden />
            Acompanhar OS / PMOC
          </a>
          <button
            type="button"
            className="inline-flex rounded-md p-2 text-white lg:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-white/10 bg-navy px-4 py-4 lg:hidden">
          <ul className="flex flex-col gap-3 text-sm font-medium text-white">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)} className="block py-1">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
