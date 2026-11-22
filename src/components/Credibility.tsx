import { Award, FolderCheck, HardHat } from "lucide-react";

const highlights = [
  {
    title: "Técnicos Altamente Qualificados",
    description: "Equipe treinada para projetos, comissionamento e manutenção de sistemas críticos.",
    icon: Award,
  },
  {
    title: "Rigor em Normas de Segurança Industrial",
    description: "Procedimentos alinhados às normas técnicas e à segurança de pessoas e instalações.",
    icon: HardHat,
  },
  {
    title: "Gestão Completa de Contratos",
    description: "Acompanhamento de SLAs, PMOC e ordens de serviço com transparência operacional.",
    icon: FolderCheck,
  },
];

export function Credibility() {
  return (
    <section id="certificacoes" className="bg-navy px-4 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Por que escolher a Com Clima?</h2>
        <p className="mt-3 max-w-2xl text-slate-300">
          Credibilidade técnica e gestão profissional para manter seu ambiente climatizado com previsibilidade.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-navy-light/60 p-6">
                <Icon className="mb-4 h-8 w-8 text-cyan" aria-hidden />
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
