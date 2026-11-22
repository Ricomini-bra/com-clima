import type { LucideIcon } from "lucide-react";
import {
  ClipboardCheck,
  Cpu,
  Factory,
  Network,
  ShieldCheck,
  Wind,
  Wrench,
} from "lucide-react";

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "Manutenção Corretiva",
    description:
      "Diagnóstico e correção ágil de falhas para restabelecer o conforto térmico com segurança operacional.",
    icon: Wrench,
  },
  {
    title: "Manutenção Preventiva",
    description:
      "Planos periódicos que evitam paradas, prolongam a vida útil dos equipamentos e reduzem custos.",
    icon: ShieldCheck,
  },
  {
    title: "PMOC",
    description:
      "Gestão completa do Plano de Manutenção, Operação e Controle, com laudos e conformidade normativa.",
    icon: ClipboardCheck,
  },
  {
    title: "Instalação de Chiller's",
    description:
      "Projetos e instalações de alta capacidade para ambientes industriais e comerciais de grande porte.",
    icon: Factory,
  },
  {
    title: "Instalação de VRF's",
    description:
      "Sistemas de fluxo de refrigerante variável com eficiência energética e controle zona a zona.",
    icon: Network,
  },
  {
    title: "Instalação de Splitões",
    description:
      "Climatização comercial robusta para áreas amplas, com instalação técnica e comissionamento.",
    icon: Wind,
  },
  {
    title: "Automação",
    description:
      "Integração e controle inteligente de sistemas de climatização, com monitoramento, eficiência energética e operação centralizada.",
    icon: Cpu,
  },
];
