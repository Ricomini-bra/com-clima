import { services } from "../data/services";

export function Services() {
  return (
    <section id="servicos" className="bg-navy px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Nossos serviços</h2>
          <p className="mt-3 text-slate-300">
            Soluções completas de ar condicionado e automação, da manutenção programada a instalações de alta complexidade.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="group rounded-2xl border border-white/10 bg-navy-light p-6 shadow-sm transition hover:-translate-y-1 hover:border-cyan hover:shadow-lg"
              >
                <div className="mb-4 inline-flex rounded-xl bg-cyan/15 p-3 text-cyan transition group-hover:bg-cyan group-hover:text-navy">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
