import { FormEvent, useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-cyan/40 bg-navy-light p-6 text-white">
        <p className="font-semibold">Mensagem registrada localmente.</p>
        <p className="mt-2 text-sm text-slate-300">
          Em breve a equipe da Com Clima retornará o contato. Você também pode falar pelo WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-white/10 bg-navy-light p-6 shadow-sm">
      <div>
        <label htmlFor="nome" className="mb-1 block text-sm font-medium text-white">
          Nome
        </label>
        <input
          id="nome"
          name="nome"
          required
          className="w-full rounded-lg border border-white/15 bg-navy px-3 py-2 text-sm text-white outline-none ring-cyan focus:ring-2"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-white">
          E-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-white/15 bg-navy px-3 py-2 text-sm text-white outline-none ring-cyan focus:ring-2"
        />
      </div>
      <div>
        <label htmlFor="telefone" className="mb-1 block text-sm font-medium text-white">
          Telefone
        </label>
        <input
          id="telefone"
          name="telefone"
          type="tel"
          required
          className="w-full rounded-lg border border-white/15 bg-navy px-3 py-2 text-sm text-white outline-none ring-cyan focus:ring-2"
        />
      </div>
      <div>
        <label htmlFor="mensagem" className="mb-1 block text-sm font-medium text-white">
          Mensagem
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={4}
          required
          className="w-full rounded-lg border border-white/15 bg-navy px-3 py-2 text-sm text-white outline-none ring-cyan focus:ring-2"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-cyan py-3 text-sm font-semibold text-navy transition hover:bg-cyan-deep hover:text-white"
      >
        Enviar mensagem
      </button>
    </form>
  );
}
