import Link from "next/link";
import PageContainer from "@/components/educador/PageContainer";

// Fonte: Organograma Funcional — Manual do Educador 2026 (dados oficiais).
type Tone = "blue" | "yellow" | "red" | "green";

interface Node {
  area: string;
  person: string;
  tone: Tone;
}

const dot: Record<Tone, string> = {
  blue: "bg-brand-blue",
  yellow: "bg-brand-yellow",
  red: "bg-brand-red",
  green: "bg-brand-green",
};

const presidency: Node = { area: "Presidência — Virtus / Colégio Alta Vista", person: "Otávio de Mello Castro", tone: "blue" };
const direction: Node = { area: "Direção Geral", person: "Virginia Aro", tone: "blue" };

const leadership: Node[] = [
  { area: "Vice-Direção Pedagógica", person: "Gabriel Vaccarello", tone: "green" },
  { area: "Vice-Direção Administrativa", person: "Juliana Melo", tone: "red" },
  { area: "Secretaria Escolar", person: "Sirley Silva", tone: "yellow" },
  { area: "Comunicação & Marketing", person: "Patrícia Sanches", tone: "blue" },
];

const pedagogical: Node[] = [
  { area: "Coord. Infantil (Manhã)", person: "Mariana Poteriza", tone: "yellow" },
  { area: "Coord. Infantil (Tarde)", person: "Cecília Rameh", tone: "yellow" },
  { area: "Coord. Fundamental", person: "Priscila Coutinho", tone: "green" },
  { area: "Coord. de Inglês", person: "Anne Karenine", tone: "blue" },
];

const administrative: Node[] = [
  { area: "Recursos Humanos", person: "Renata Resende", tone: "blue" },
  { area: "Coord. Adm.-Financeiro", person: "Berenice Sanna", tone: "red" },
  { area: "Analista Adm.-Financeiro", person: "Gustavo Neves", tone: "green" },
  { area: "Contas a Receber", person: "Giselle Iara", tone: "yellow" },
];

const supportAreas = [
  "Departamento Pessoal",
  "Recepção",
  "Medicina do Trabalho",
  "Suprimentos",
  "Cozinha",
  "Portaria e Segurança",
  "Conservação e Limpeza",
  "Manutenção Predial",
];

function OrgCard({ node, lead = false }: { node: Node; lead?: boolean }) {
  return (
    <div
      className={`rounded-2xl border bg-surface p-5 text-center shadow-[0_1px_3px_rgba(16,24,40,0.04)] ${
        lead ? "border-brand-blue/30" : "border-border"
      }`}
    >
      <span className={`mx-auto mb-2 block h-2 w-2 rounded-full ${dot[node.tone]}`} />
      <p className="text-[12px] font-semibold uppercase tracking-wide text-cav-gray-400">
        {node.area}
      </p>
      <p className="mt-1 text-[15px] font-semibold text-cav-gray-800">{node.person}</p>
    </div>
  );
}

function Divider() {
  return <div className="mx-auto my-4 h-6 w-px bg-cav-gray-200" />;
}

export default function OrganogramaPage() {
  return (
    <PageContainer
      crumbs={[{ label: "Organograma" }]}
      eyebrow="Organograma"
      title="Estrutura organizacional"
      intro="Como o Alta Vista se organiza para cuidar de cada etapa e de cada estudante. Fonte: Manual do Educador 2026."
    >
      <div className="mx-auto max-w-md">
        <OrgCard node={presidency} lead />
      </div>
      <Divider />
      <div className="mx-auto max-w-sm">
        <OrgCard node={direction} lead />
      </div>

      <Divider />
      <p className="mb-3 text-center text-xs font-semibold uppercase tracking-wide text-cav-gray-400">
        Direção e Setores
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {leadership.map((node) => (
          <OrgCard key={node.area} node={node} />
        ))}
      </div>

      <Divider />
      <p className="mb-3 text-center text-xs font-semibold uppercase tracking-wide text-cav-gray-400">
        Coordenações Pedagógicas
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {pedagogical.map((node) => (
          <OrgCard key={node.area} node={node} />
        ))}
      </div>
      <p className="mt-3 text-center text-sm text-cav-gray-500">
        Corpo Docente — Regentes e Especialistas · Assistentes e Auxiliares de Sala
      </p>

      <Divider />
      <p className="mb-3 text-center text-xs font-semibold uppercase tracking-wide text-cav-gray-400">
        Administrativo-Financeiro
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {administrative.map((node) => (
          <OrgCard key={node.area} node={node} />
        ))}
      </div>

      <div className="mt-6">
        <p className="mb-3 text-center text-xs font-semibold uppercase tracking-wide text-cav-gray-400">
          Áreas de Apoio
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {supportAreas.map((area) => (
            <span
              key={area}
              className="rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-cav-gray-600"
            >
              {area}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-border bg-brand-blue-50 p-6 text-center sm:p-8">
        <p className="text-[15px] font-medium text-cav-gray-700">
          Precisa falar com uma área específica?
        </p>
        <p className="mt-1 text-sm text-cav-gray-500">
          A{" "}
          <Link href="/educador/contatos" className="font-medium text-brand-blue-ink underline underline-offset-2">
            Central de Contatos
          </Link>{" "}
          reúne os responsáveis de cada setor.
        </p>
      </div>
    </PageContainer>
  );
}
