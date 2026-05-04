import type { NavItem } from "@/components/SidebarNav";

export const paisNav: NavItem[] = [
  { href: "/pais", label: "Boas-vindas" },
  { href: "/pais/valores", label: "Valores e Proposta Pedagógica" },
  { href: "/pais/oferecemos", label: "O que Oferecemos" },
  { href: "/pais/alimentacao", label: "Alimentação" },
  { href: "/pais/plantao", label: "Plantão" },
  { href: "/pais/integral", label: "Integral" },
  {
    href: "/pais/atividades",
    label: "Atividades Extracurriculares",
    children: [
      { href: "/pais/atividades/bale", label: "Balé" },
      { href: "/pais/atividades/judo", label: "Judô" },
      { href: "/pais/atividades/futebol", label: "Futebol" },
      { href: "/pais/atividades/catequese", label: "Catequese" },
    ],
  },
  { href: "/pais/horarios", label: "Horários" },
  { href: "/pais/contatos", label: "Contatos" },
  { href: "/pais/aplicativo", label: "Aplicativo da Escola" },
  { href: "/pais/suporte", label: "Suporte e Dúvidas" },
];

export const funcionariosNav: NavItem[] = [
  { href: "/funcionarios", label: "Boas-vindas" },
  { href: "/funcionarios/valores", label: "Valores e Proposta Pedagógica" },
  { href: "/funcionarios/manual", label: "Manual do Educador" },
  { href: "/funcionarios/formacoes", label: "Formações" },
  { href: "/funcionarios/documentos", label: "Documentos Importantes" },
  { href: "/funcionarios/rotinas", label: "Rotinas Internas" },
  { href: "/funcionarios/ferramentas", label: "Ferramentas" },
  { href: "/funcionarios/comunicacao", label: "Comunicação" },
  { href: "/funcionarios/links", label: "Links Úteis" },
];
