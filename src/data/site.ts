export const site = {
  name: "Com Clima",
  phoneDisplay: "+55 19 99937-2910",
  phoneHref: "https://wa.me/5519999372910",
  email: "comercial@comclima.com.br",
  whatsappNumber: "5519999372910",
  whatsappMessage:
    "Olá, gostaria de falar com a Com Clima sobre serviços de ar condicionado e automação.",
  osPortalHref: "#contato",
} as const;

export const whatsappUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`;

export const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#certificacoes", label: "Certificações" },
  { href: "#contato", label: "Contato" },
] as const;
