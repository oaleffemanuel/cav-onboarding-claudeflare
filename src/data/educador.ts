// Alta Vista Hub — centralized content model for the Colégio Alta Vista staff hub.
//
// CONTENT POLICY (important):
// - Do NOT invent official names, e-mails or phone numbers.
// - For any uncertain field use "A preencher" or "N/A" (see PLACEHOLDER below).
// - Lines marked `// TODO: validar` need to be confirmed with the school before launch.
//
// Each tab will be reviewed and corrected manually after this pass.

import type { LucideIcon } from "lucide-react";
import {
  Rocket,
  BookOpen,
  Library,
  Wrench,
  CalendarCheck,
  Link,
  Network,
  Users,
  CircleHelp,
  Fingerprint,
  Hourglass,
  Award,
  Compass,
  HeartHandshake,
  Brain,
  Dumbbell,
  Heart,
  Sparkles,
  Flag,
  ClipboardList,
  ShieldCheck,
  Shirt,
  Clock,
  Laptop,
  FileCheck,
} from "lucide-react";

export const PLACEHOLDER = {
  fill: "A preencher",
  na: "N/A",
  awaiting: "N/A — Aguardando informações",
  confirm: "Confirmar com a escola",
} as const;

export interface EducadorNavItem {
  href: string;
  label: string;
}

export const educadorNav: EducadorNavItem[] = [
  { href: "/educador/comece-aqui", label: "Comece Aqui" },
  { href: "/educador/guias", label: "Guias" },
  { href: "/educador/manual", label: "Manual do Educador" },
  { href: "/educador/ferramentas", label: "Ferramentas" },
  { href: "/educador/rotinas", label: "Rotinas Internas" },
  { href: "/educador/links", label: "Links Úteis" },
  { href: "/educador/organograma", label: "Organograma" },
  { href: "/educador/contatos", label: "Central de Contatos" },
  { href: "/educador/faq", label: "FAQ" },
];

export type BrandTone = "blue" | "yellow" | "red" | "green";

export interface HomeCard {
  href: string;
  icon: LucideIcon;
  title: string;
  description: string;
  tone: BrandTone;
}

export const homeCards: HomeCard[] = [
  { href: "/educador/comece-aqui", icon: Rocket, title: "Comece Aqui", description: "Primeiros passos para novos colaboradores.", tone: "blue" },
  { href: "/educador/guias", icon: BookOpen, title: "Guias", description: "Valores, missão e proposta pedagógica.", tone: "red" },
  { href: "/educador/manual", icon: Library, title: "Manual do Educador", description: "Normas, orientações e documentos oficiais.", tone: "blue" },
  { href: "/educador/ferramentas", icon: Wrench, title: "Ferramentas", description: "Outlook, Microsoft 365, sistemas internos e acessos.", tone: "green" },
  { href: "/educador/rotinas", icon: CalendarCheck, title: "Rotinas Internas", description: "Processos, eventos e glossário institucional.", tone: "yellow" },
  { href: "/educador/links", icon: Link, title: "Links Úteis", description: "Acessos rápidos para plataformas e documentos.", tone: "blue" },
  { href: "/educador/organograma", icon: Network, title: "Organograma", description: "Estrutura organizacional da escola.", tone: "green" },
  { href: "/educador/contatos", icon: Users, title: "Central de Contatos", description: "Quem procurar para cada assunto.", tone: "red" },
  { href: "/educador/faq", icon: CircleHelp, title: "FAQ", description: "Perguntas frequentes.", tone: "yellow" },
];

// ── Pilares pedagógicos do Colégio Alta Vista ────────────────────────
// Conceitos centrais da proposta — devem aparecer com destaque no Hub.
// Fonte: Manual do Educador (proposta pedagógica).
export interface CorePillar {
  icon: LucideIcon;
  title: string;
  description: string;
  tone: BrandTone;
}

export const corePillars: CorePillar[] = [
  { icon: Fingerprint, title: "Educação Personalizada", description: "Ação pedagógica centrada no indivíduo e no crescimento harmônico de todas as suas dimensões pessoais.", tone: "blue" },
  { icon: Hourglass, title: "Aprendizagem Oportuna", description: "Estímulo no ritmo de maturidade de cada aluno, para desenvolver o máximo de suas capacidades e aptidões.", tone: "yellow" },
  { icon: Award, title: "Programa de Virtudes", description: "Estudo estruturado das virtudes, uma por mês, formando bons hábitos dentro e fora da sala de aula.", tone: "red" },
  { icon: Compass, title: "Preceptoria", description: "Atenção pessoal a cada aluno e família, com encontros a cada três meses entre pais e educador.", tone: "green" },
  { icon: HeartHandshake, title: "Formação de Pais", description: "Assessoramento educativo às famílias, com cursos, palestras e a tutoria mensal dos alunos.", tone: "blue" },
];

// ── Educação Personalizada — as 5 dimensões da pessoa ────────────────
// Seção principal do Hub. Fonte: Manual do Educador.
export interface EducationDimension {
  id: string;
  icon: LucideIcon;
  title: string;
  tone: BrandTone;
  purpose: string; // Propósito
  impact: string; // Impacto educativo
  educatorRole: string; // Como o educador contribui
  examples: string[]; // Exemplos práticos
}

export const educationDimensions: EducationDimension[] = [
  {
    id: "intelectual",
    icon: Brain,
    title: "Intelectual",
    tone: "blue",
    purpose: "Formação da inteligência — desenvolver o pensamento, a curiosidade e o gosto pelo conhecimento.",
    impact: "Estudantes que aprendem a pensar com autonomia, criticidade e profundidade.",
    educatorRole: "Propor desafios à altura de cada um, estimulando o raciocínio antes de entregar respostas prontas.",
    examples: [
      "Perguntas que provocam reflexão em vez de respostas decoradas",
      "Projetos que conectam o conteúdo à vida real",
      "Leitura, pesquisa e debate como hábitos de sala",
    ],
  },
  {
    id: "fisico-corporal",
    icon: Dumbbell,
    title: "Físico-Corporal",
    tone: "green",
    purpose: "Formação do desenvolvimento motor — cuidar do corpo, da saúde, da coordenação e dos bons hábitos.",
    impact: "Crianças que conhecem e respeitam o próprio corpo e desenvolvem disciplina.",
    educatorRole: "Valorizar a atividade física, a postura, a organização e o cuidado com o ambiente.",
    examples: [
      "Rotinas de movimento e brincadeiras dirigidas",
      "Cuidado com alimentação, higiene e descanso",
      "Organização do material e do espaço de estudo",
    ],
  },
  {
    id: "afetiva",
    icon: Heart,
    title: "Afetiva",
    tone: "red",
    purpose: "Educação pautada no amor a si, ao próximo e ao mundo em que vivemos.",
    impact: "Estudantes seguros, empáticos e capazes de relações saudáveis.",
    educatorRole: "Acolher com firmeza e carinho, ajudando a nomear e ordenar os sentimentos.",
    examples: [
      "Escuta atenta e acolhimento individual",
      "Mediação de conflitos como oportunidade formativa",
      "Reconhecer esforços, não apenas resultados",
    ],
  },
  {
    id: "transcendental",
    icon: Sparkles,
    title: "Transcendental",
    tone: "yellow",
    purpose: "Reconhecer a alma criada por Deus para ser feliz e fazer o Bem, abrindo o estudante ao sentido da vida.",
    impact: "Pessoas que buscam significado, gratidão e abertura ao bem e ao belo.",
    educatorRole: "Testemunhar valores e cultivar momentos de interioridade e admiração.",
    examples: [
      "Momentos de silêncio, gratidão e reflexão",
      "Celebrações e datas formativas da escola",
      "Diálogo sobre propósito e projeto de vida",
    ],
  },
  {
    id: "vontade",
    icon: Flag,
    title: "Vontade",
    tone: "blue",
    purpose: "Buscar o que é bom, belo e verdadeiro no mundo através das virtudes, com liberdade responsável.",
    impact: "Estudantes capazes de escolher o bem e concluir o que começam.",
    educatorRole: "Propor metas alcançáveis e sustentar o esforço com acompanhamento próximo.",
    examples: [
      "Combinados claros e constância nas rotinas",
      "Pequenas metas que treinam a perseverança",
      "Valorizar o esforço e a superação de dificuldades",
    ],
  },
];

// ── Dados institucionais oficiais (Fonte: Manual do Educador 2026) ──
export const schoolInfo = {
  phone: "(31) 97138-3200",
  email: "institucional@colegioaltavista.com.br",
  city: "Belo Horizonte",
  hrEmail: "renata.resende@colegioaltavista.com.br", // Depto. Pessoal / RH (atestados)
} as const;

// ── Central de Contatos ──────────────────────────────────────────────
// TODO: validar — todos os responsáveis, e-mails e telefones estão como
// placeholder. Preencher com os dados oficiais da escola (não inventar).
export interface Contact {
  area: string; // department (official name — safe to keep)
  person: string; // responsible person — "A preencher" until confirmed
  role: string; // generic role within the department
  email: string; // "N/A" until confirmed
  phone: string; // "N/A" until confirmed
  notes: string; // helpful guidance (not invented contact data)
  tone: BrandTone;
}

// Responsáveis conforme o Organograma Funcional do Manual do Educador 2026.
// E-mails/telefones por setor: "Aguardando informações" (apenas o RH/DP tem e-mail documentado).
const AWAIT = PLACEHOLDER.awaiting;
export const contacts: Contact[] = [
  { area: "Recursos Humanos", person: "Renata Resende", role: "Recursos Humanos / Depto. Pessoal", email: "renata.resende@colegioaltavista.com.br", phone: AWAIT, notes: "Admissão, benefícios, atestados e folha de pagamento.", tone: "red" },
  { area: "Secretaria", person: "Sirley Silva", role: "Secretária Escolar", email: AWAIT, phone: AWAIT, notes: "Documentos escolares, matrículas e declarações.", tone: "yellow" },
  { area: "Coordenação Infantil", person: "Mariana Potenza", role: "Coordenação — Educação Infantil (manhã)", email: AWAIT, phone: AWAIT, notes: "Período da tarde: Cecília Rameh. Assuntos pedagógicos da Infantil.", tone: "green" },
  { area: "Coordenação Fundamental", person: "Anne Karenine", role: "Coordenação — Ensino Fundamental", email: AWAIT, phone: AWAIT, notes: "Assuntos pedagógicos do Ensino Fundamental.", tone: "blue" },
  { area: "Coordenação de Inglês", person: "Anne Karenine", role: "Coordenação — Inglês", email: AWAIT, phone: AWAIT, notes: "Programa bilíngue e assuntos do inglês.", tone: "yellow" },
  { area: "Administrativo-Financeiro", person: "Roberta Bueno", role: "Coordenação Adm.-Financeira", email: AWAIT, phone: AWAIT, notes: "Pagamentos, contas e questões financeiras.", tone: "red" },
  { area: "Comunicação & Marketing", person: "Patrícia Sanches", role: "Comunicação & Marketing", email: AWAIT, phone: AWAIT, notes: "Comunicação institucional e divulgação.", tone: "green" },
];

// ── FAQ ──────────────────────────────────────────────────────────────
// TODO: validar — respostas são orientações gerais; ajustar ao processo real.
export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const faqs: FaqItem[] = [
  { category: "Primeiros Passos", question: "Sou novo na escola. Por onde começo?", answer: "Comece pela seção “Comece Aqui”. Lá você encontra a mensagem de boas-vindas, o checklist do novo colaborador e os primeiros acessos. Em caso de dúvida, procure o RH." },
  { category: "Acessos", question: "Como recebo meu e-mail institucional e acesso ao ClassApp?", answer: "O RH solicita a criação dos seus acessos no seu primeiro dia. Você recebe uma senha provisória que deve ser trocada no primeiro login. O canal e o prazo exatos devem ser confirmados com a escola." },
  { category: "Acessos", question: "Esqueci minha senha. O que faço?", answer: "Para o e-mail institucional (Outlook / Microsoft 365), use a opção “Esqueci minha senha” na tela de login. Se não conseguir recuperar, procure a equipe de Tecnologia pela Central de Contatos. (Plataforma a validar com a escola.)" },
  { category: "Rotinas", question: "O que é Preceptoria?", answer: "É o acompanhamento individual e formativo do estudante, cuidando do seu desenvolvimento humano, acadêmico e relacional. Saiba mais na seção Rotinas Internas." },
  { category: "Comunicação", question: "Qual o canal oficial de comunicação com as famílias?", answer: "O ClassApp é o canal oficial. Comunicados, autorizações e recados devem passar pela coordenação antes do envio para garantir alinhamento institucional." },
  { category: "Documentos", question: "Onde encontro o calendário escolar e os documentos oficiais?", answer: "No Manual do Educador e em Links Úteis. O local exato dos arquivos deve ser confirmado com a coordenação." },
  { category: "Formação", question: "As formações continuadas são obrigatórias?", answer: "A formação permanente faz parte da nossa cultura. O cronograma e as regras de presença devem ser confirmados com a coordenação." },
];

// ── Rotinas Internas (glossário/processos) ───────────────────────────
export interface RotinaSection {
  id: string;
  title: string;
  body: string; // lightweight markdown
}

export const rotinasSections: RotinaSection[] = [
  { id: "preceptoria", title: "O que é Preceptoria?", body: `A **Preceptoria** é o acompanhamento individual e formativo de cada estudante. Mais do que cuidar das notas, o preceptor caminha junto ao aluno, ajudando-o a crescer como pessoa.

- Acompanhamento humano, acadêmico e relacional
- Diálogo próximo entre escola, estudante e família
- Apoio na construção de hábitos de estudo e virtudes

> O objetivo é simples: que cada criança e jovem seja **conhecido pelo nome** e acompanhado de perto.` },
  { id: "sondagem", title: "O que é Sondagem?", body: `A **Sondagem** é a avaliação diagnóstica que nos ajuda a entender o ponto de partida de cada estudante, especialmente na alfabetização.

- Identifica a hipótese de escrita e leitura da criança
- Orienta o planejamento do professor
- É feita periodicamente para acompanhar a evolução

A sondagem não tem caráter de prova: é um instrumento de **escuta pedagógica**.` },
  { id: "formacao-de-pais", title: "O que é Formação de Pais?", body: `A **Formação de Pais** são encontros que fortalecem a parceria entre escola e família, primeira e principal educadora.

- Encontros temáticos ao longo do ano
- Espaço de diálogo sobre educação e valores
- Reforço da corresponsabilidade na formação dos filhos

Acreditamos que **escola e família caminham juntas** na mesma direção.` },
  { id: "conselho-de-classe", title: "O que é Conselho de Classe?", body: `O **Conselho de Classe** é a reunião periódica em que a equipe pedagógica analisa o desenvolvimento de cada turma e estudante.

- Olhar coletivo sobre o desempenho e a trajetória do aluno
- Decisões pedagógicas alinhadas entre professores e coordenação
- Definição de encaminhamentos e apoios necessários

É um momento de **corresponsabilidade docente** pelo crescimento de cada estudante.` },
  { id: "eventos-institucionais", title: "Eventos Institucionais", body: `Ao longo do ano vivemos momentos que expressam a cultura e a identidade do Alta Vista.

- Celebrações e datas formativas
- Encontros com as famílias
- Mostras e momentos de protagonismo dos estudantes

> TODO: validar — confirmar a lista oficial de eventos e o calendário do ano letivo.` },
  { id: "glossario-interno", title: "Glossário Interno", body: `Termos que você vai ouvir no dia a dia:

- **Plano de Aula** — planejamento docente alinhado à proposta pedagógica
- **Roda de Conversa** — momento de diálogo formativo com a turma
- **Recreio Dirigido** — recreio com atividades acompanhadas
- **Comunicado ClassApp** — canal oficial de comunicação com as famílias

> TODO: validar — completar com os termos e siglas usados oficialmente na escola.` },
];

// ── Manual do Educador (modular) ─────────────────────────────────────
// TODO: validar — resumos e pontos-chave são orientações gerais; ajustar ao
// Manual oficial da escola. Manter conciso (sem parágrafos longos).
export interface ManualModule {
  id: string;
  icon: LucideIcon;
  title: string;
  summary: string;
  keyPoints: string[];
  tone: BrandTone;
  details: string; // lightweight markdown — concise
}

export const manualModules: ManualModule[] = [
  {
    id: "normas-e-condutas",
    icon: ClipboardList,
    title: "Normas e Condutas",
    summary: "Responsabilidades administrativas e postura profissional do educador.",
    keyPoints: [
      "Respeito à identidade católica e ao bom nome do Colégio",
      "Assiduidade, pontualidade e vestimenta adequada",
      "Faltas previsíveis comunicadas com 7 dias de antecedência",
    ],
    tone: "blue",
    details: `- Atue de acordo com a **filosofia do Colégio** e zele pelo seu bom nome, dentro e fora dele.
- Mantenha **tratamento respeitoso** com colegas, alunos e famílias.
- Participe de reuniões, formações e solenidades da Instituição.
- Mantenha **discrição e sigilo** sobre alunos, famílias e colegas.
- Zele pelo patrimônio e consulte com frequência o e-mail institucional.`,
  },
  {
    id: "etica-e-lgpd",
    icon: ShieldCheck,
    title: "Código de Ética e LGPD",
    summary: "Sigilo e proteção dos dados de alunos, educadores e famílias (Lei 13.709).",
    keyPoints: [
      "Proibido usar imagens de alunos/pais nas redes pessoais",
      "Dados de terceiros são confidenciais",
      "Negar informações a terceiros, mesmo se solicitadas",
    ],
    tone: "red",
    details: `- É **proibido** publicar, nas próprias redes sociais, imagens de alunos e/ou pais obtidas nos espaços do Colégio.
- Dados como saúde, atipias, origem racial, opinião política e convicção religiosa são **confidenciais**.
- O sistema de gestão possui **perfis de acesso** conforme o setor.
- Em respeito à LGPD, negue-se a prestar informações de alunos a terceiros.`,
  },
  {
    id: "uniforme-e-apresentacao",
    icon: Shirt,
    title: "Uniforme e Apresentação Pessoal",
    summary: "Uso obrigatório do uniforme e orientações de apresentação.",
    keyPoints: [
      "Uniforme obrigatório nas dependências, sempre limpo",
      "Sem uniforme: vestimenta adequada (preta, azul ou jeans)",
      "EPIs obrigatórios para cozinha e limpeza",
    ],
    tone: "yellow",
    details: `- O uso do uniforme é **obrigatório** quando já recebido; ajustes ficam por conta do educador.
- Quem ainda não recebeu deve usar **calça/saia preta, azul ou jeans**, evitando peças justas ou muito acima do joelho.
- Cozinha e limpeza usam **EPIs** (botas, luvas, touca, máscara).
- Em caso de desligamento, devolver o uniforme em bom estado.`,
  },
  {
    id: "horario-e-ponto",
    icon: Clock,
    title: "Horário de Trabalho e Registro de Ponto",
    summary: "Banco de horas, registro de ponto, ajustes e atestados.",
    keyPoints: [
      "Banco de horas zerado a cada 6 meses",
      "Registrar entrada, saída e intervalo todos os dias",
      "Ajustes de ponto nos dias 22 e 23 (Recepção)",
    ],
    tone: "green",
    details: `- O Colégio adota **acordo de compensação** (banco de horas), com saldo zerado a cada seis meses.
- **Atraso na entrada não é compensável** na saída (Art. 482 da CLT).
- Hora extra apenas com **solicitação formal por escrito**.
- Esqueceu o registro? Preencha o **formulário de ocorrência** na Recepção (ajustes nos dias 22 e 23).
- Atestados ao Depto. Pessoal em até **48h** ([${"renata.resende@colegioaltavista.com.br"}](mailto:renata.resende@colegioaltavista.com.br)).`,
  },
  {
    id: "email-e-sistemas",
    icon: Laptop,
    title: "E-mail e Sistemas do Colégio",
    summary: "E-mail institucional e uso responsável dos sistemas.",
    keyPoints: [
      "Política de e-mail ainda em definição",
      "Estagiários e auxiliares geralmente não recebem e-mail institucional",
      "Proibido compartilhar senhas",
    ],
    tone: "blue",
    details: `- A **política de e-mail institucional ainda está sendo finalizada** — os detalhes serão confirmados com a escola.
- No momento, **estagiários e auxiliares geralmente não recebem** conta de e-mail institucional.
- Quando fornecido, o acesso ao **e-mail institucional** é orientado na admissão.
- É **proibido compartilhar senhas** de e-mail e sistemas.
- Sem acesso a alguma informação? Solicite atualização do seu **perfil** ao gestor imediato.
- Usar o sistema com login de outro educador é **grave infração** ao Código de Ética.`,
  },
  {
    id: "recursos-humanos",
    icon: HeartHandshake,
    title: "Recursos Humanos e Benefícios",
    summary: "Bolsa de estudo, planos de saúde, seguro, vale-alimentação e lanche.",
    keyPoints: [
      "Bolsa de Estudo via sindicato (Sinpro ou Saae)",
      "Plano de Saúde Unimed e Odontológico",
      "Seguro de Vida, Vale-Alimentação e lanche",
    ],
    tone: "red",
    details: `- **Bolsa de Estudo** (educador e dependentes): solicitar no sindicato da categoria (Sinpro ou Saae).
- **Plano de Saúde Unimed** (parceria CDL-BH) e **Plano Odontológico**.
- **Seguro de Vida** contratado no mês da admissão.
- **Vale-Alimentação** (cartão Flash) e **lanche** em 2 turnos (9h–10h e 15h–16h, até 15 min).`,
  },
  {
    id: "termo-de-ciencia",
    icon: FileCheck,
    title: "Termo de Ciência",
    summary: "Declaração de leitura e ciência das normas do Manual.",
    keyPoints: [
      "Assinatura declara ciência de todo o conteúdo",
      "Descumprimento sujeito à CLT e às CCTs",
      "Documento revisado periodicamente",
    ],
    tone: "green",
    details: `- A assinatura do Termo atesta que o educador **leu e está ciente** de todo o Manual.
- O não cumprimento sujeita o educador às penalidades das legislações trabalhista, de ensino e das CCTs.
- O Colégio assegura a **proteção dos dados** (LGPD — Lei 13.709).
- Este documento é **revisado e atualizado periodicamente**.`,
  },
];

// ── Status flag used across tools and links (for later auditing) ─────
// "Confirmado" = verified · "A validar" = likely but unconfirmed · "A preencher" = unknown
export type DataStatus = "Confirmado" | "A validar" | "A preencher";

// ── Ferramentas ──────────────────────────────────────────────────────
// IMPORTANT: the institutional ecosystem is **Microsoft**, not Google.
// TODO: validar — confirmar com a escola quais ferramentas são oficiais.
export interface ToolItem {
  name: string;
  description: string;
  status: DataStatus;
  tone: BrandTone;
}

export const tools: ToolItem[] = [
  { name: "Outlook / E-mail institucional", description: "E-mail oficial da escola (Microsoft 365).", status: "A validar", tone: "blue" },
  { name: "Microsoft 365", description: "Word, Excel, PowerPoint, OneDrive e Teams.", status: "A validar", tone: "blue" },
  { name: "Microsoft Teams", description: "Reuniões e comunicação interna (se aplicável).", status: "A preencher", tone: "green" },
  { name: "ClassApp", description: "Comunicação com as famílias.", status: "A validar", tone: "yellow" },
  { name: "Sistema Acadêmico", description: "Diário de classe, notas e frequência.", status: "A preencher", tone: "red" },
  { name: "Acessos e Senhas", description: "Credenciais pessoais e suporte de TI.", status: "A validar", tone: "green" },
];

// ── Links Úteis (grouped) ────────────────────────────────────────────
export interface LinkItem {
  label: string;
  description: string;
  href?: string; // omitted/undefined = no confirmed URL yet
  status: DataStatus;
  tone: BrandTone;
}

export interface LinkGroup {
  id: string;
  title: string;
  description: string;
  items: LinkItem[];
}

export const linkGroups: LinkGroup[] = [
  {
    id: "plataformas",
    title: "Plataformas e Sistemas",
    description: "Ferramentas de trabalho do dia a dia (ecossistema Microsoft).",
    items: [
      { label: "Outlook Web", description: "E-mail institucional pelo navegador.", status: "A preencher", tone: "blue" },
      { label: "Microsoft Teams", description: "Reuniões e comunicação interna.", status: "A preencher", tone: "blue" },
      { label: "ClassApp", description: "Comunicação com as famílias.", status: "A validar", tone: "yellow" },
      { label: "Portal Acadêmico", description: "Diário, notas e frequência.", status: "A preencher", tone: "red" },
    ],
  },
  {
    id: "canais-publicos",
    title: "Canais Institucionais Públicos",
    description: "Presença oficial da escola. URLs a confirmar.",
    items: [
      { label: "Site da Escola", description: "Página institucional do Colégio Alta Vista.", status: "A preencher", tone: "blue" },
      { label: "Instagram Oficial", description: "Perfil oficial da escola.", status: "A preencher", tone: "red" },
    ],
  },
  {
    id: "documentos-formularios",
    title: "Documentos e Formulários",
    description: "Calendário e formulários internos da equipe.",
    items: [
      { label: "Calendário Escolar", description: "Datas, eventos e feriados do ano letivo.", status: "A preencher", tone: "green" },
      { label: "Formulários Internos", description: "Solicitações, autorizações e registros.", status: "A preencher", tone: "yellow" },
    ],
  },
  {
    id: "comunicacao-interna",
    title: "Comunicação Interna",
    description: "Precisa de ajuda ou de acesso a um canal interno? Veja com quem falar.",
    items: [
      { label: "Central de Contatos", description: "Quem procurar para cada assunto e onde pedir ajuda.", href: "/educador/contatos", status: "Confirmado", tone: "blue" },
    ],
  },
];

// ── Canais institucionais (mostrados também na Central de Contatos) ──
// TODO: validar — preencher com os endereços oficiais (não inventar).
export interface InstitutionalChannel {
  label: string;
  value: string; // "A preencher" / "N/A" until confirmed
  kind: "website" | "instagram" | "email" | "internal";
}

export const institutionalChannels: InstitutionalChannel[] = [
  { label: "Site da Escola", value: PLACEHOLDER.awaiting, kind: "website" },
  { label: "Instagram Oficial", value: PLACEHOLDER.awaiting, kind: "instagram" },
  { label: "E-mail Institucional", value: PLACEHOLDER.awaiting, kind: "email" },
  { label: "Canal de Comunicação Interna", value: PLACEHOLDER.awaiting, kind: "internal" },
];

// ── Global search index (command palette) ───────────────────────────
// `category` is the group shown in the palette; `description` is an optional
// one-line hint; `external: true` opens the href in a new tab.
export type SearchCategory =
  | "Início"
  | "Documentação"
  | "Operação"
  | "Institucional"
  | "Ferramentas externas";

export interface SearchEntry {
  title: string;
  category: SearchCategory;
  description?: string;
  href: string;
  keywords: string;
  external?: boolean;
}

const baseSearchIndex: SearchEntry[] = [
  { title: "Comece Aqui", category: "Início", description: "Primeiros passos e checklist do novo colaborador.", href: "/educador/comece-aqui", keywords: "primeiros passos novo colaborador boas-vindas onboarding checklist" },
  { title: "Bem-vindo ao Alta Vista", category: "Início", href: "/educador/comece-aqui#bem-vindo", keywords: "boas vindas mensagem cultura família" },
  { title: "Primeiros Passos", category: "Início", href: "/educador/comece-aqui#primeiros-passos", keywords: "acessos email senha classapp primeiro dia" },
  { title: "Checklist do Novo Colaborador", category: "Início", href: "/educador/comece-aqui#checklist", keywords: "checklist tarefas documentos crachá" },
  { title: "Guias", category: "Documentação", description: "Valores, missão e proposta pedagógica.", href: "/educador/guias", keywords: "valores missão visão proposta pedagógica cultura" },
  { title: "Manual do Educador", category: "Documentação", description: "Normas e orientações oficiais.", href: "/educador/manual", keywords: "normas orientações documentos oficiais regras conduta" },
  { title: "FAQ", category: "Documentação", description: "Perguntas frequentes e dúvidas comuns.", href: "/educador/faq", keywords: "perguntas frequentes dúvidas ajuda" },
  { title: "Ferramentas", category: "Operação", description: "Outlook, Microsoft 365 e sistemas internos.", href: "/educador/ferramentas", keywords: "classapp microsoft 365 outlook sistemas internos acessos ti" },
  { title: "Rotinas Internas", category: "Operação", description: "Preceptoria, sondagem, conselho de classe e glossário.", href: "/educador/rotinas", keywords: "preceptoria sondagem formação pais conselho de classe eventos glossário" },
  { title: "O que é Preceptoria?", category: "Operação", href: "/educador/rotinas#preceptoria", keywords: "acompanhamento individual formativo aluno" },
  { title: "O que é Sondagem?", category: "Operação", href: "/educador/rotinas#sondagem", keywords: "avaliação diagnóstica alfabetização" },
  { title: "O que é Formação de Pais?", category: "Operação", href: "/educador/rotinas#formacao-de-pais", keywords: "encontros família parceria" },
  { title: "O que é Conselho de Classe?", category: "Operação", href: "/educador/rotinas#conselho-de-classe", keywords: "reunião pedagógica turma desempenho" },
  { title: "Glossário Interno", category: "Operação", href: "/educador/rotinas#glossario-interno", keywords: "termos siglas vocabulário" },
  { title: "Links Úteis", category: "Operação", description: "Atalhos para plataformas e documentos.", href: "/educador/links", keywords: "atalhos plataformas drive calendário sistema" },
  { title: "Organograma", category: "Institucional", description: "Estrutura organizacional do colégio.", href: "/educador/organograma", keywords: "estrutura organizacional hierarquia direção coordenação" },
  { title: "Central de Contatos", category: "Institucional", description: "Quem procurar para cada assunto.", href: "/educador/contatos", keywords: "rh secretaria financeiro coordenação direção tecnologia telefone email" },
];

// External tools (Microsoft 365 ecosystem + ClassApp + ActiveSoft).
// Microsoft URLs are canonical sign-in pages. ClassApp/ActiveSoft URLs are the
// public portals — TODO: confirm the school's exact URLs and replace below.
export const externalTools: SearchEntry[] = [
  { title: "Outlook", category: "Ferramentas externas", description: "E-mail institucional (Microsoft 365).", href: "https://outlook.office.com/mail/", keywords: "email outlook microsoft 365 correio mensagens", external: true },
  { title: "Microsoft Teams", category: "Ferramentas externas", description: "Reuniões e comunicação interna.", href: "https://teams.microsoft.com/", keywords: "teams reunião chamada vídeo chat comunicação", external: true },
  { title: "OneDrive", category: "Ferramentas externas", description: "Arquivos e documentos na nuvem.", href: "https://www.microsoft365.com/launch/onedrive", keywords: "onedrive arquivos nuvem documentos armazenamento drive", external: true },
  { title: "Microsoft Calendar", category: "Ferramentas externas", description: "Agenda e compromissos (Outlook).", href: "https://outlook.office.com/calendar/", keywords: "calendário agenda compromissos eventos outlook", external: true },
  { title: "ClassApp", category: "Ferramentas externas", description: "Comunicação com as famílias.", href: "https://web.classapp.com.br/", keywords: "classapp comunicação famílias mensagens responsáveis", external: true },
  { title: "ActiveSoft", category: "Ferramentas externas", description: "Sistema acadêmico e financeiro (ERP).", href: "https://www.activesoft.com.br/", keywords: "activesoft sponte erp sistema acadêmico financeiro secretaria matrícula", external: true },
];

// Compose the full index from base sections + manual modules + contacts + FAQ + tools.
export const searchIndex: SearchEntry[] = [
  ...baseSearchIndex,
  ...manualModules.map((m): SearchEntry => ({ title: m.title, category: "Documentação", description: m.summary, href: `/educador/manual#${m.id}`, keywords: `${m.summary} ${m.keyPoints.join(" ")}` })),
  ...contacts.map((c): SearchEntry => ({ title: c.area, category: "Institucional", description: c.role, href: "/educador/contatos", keywords: `${c.person} ${c.role} ${c.notes} contato` })),
  ...faqs.map((f): SearchEntry => ({ title: f.question, category: "Documentação", description: f.category, href: "/educador/faq", keywords: `${f.category} ${f.answer}` })),
  ...externalTools,
];
