import PageContainer from "@/components/educador/PageContainer";
import ContentCard from "@/components/educador/ContentCard";
import Markdown from "@/components/educador/Markdown";
import { rotinasSections } from "@/data/educador";

export default function RotinasPage() {
  return (
    <PageContainer
      crumbs={[{ label: "Rotinas Internas" }]}
      eyebrow="Rotinas Internas"
      title="Processos, eventos e glossário institucional"
      intro="Entenda os principais conceitos e rotinas que fazem parte do dia a dia pedagógico do Alta Vista."
    >
      {/* Quick index */}
      <nav className="mb-8 rounded-2xl border border-border bg-surface p-5">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-cav-gray-400">
          Nesta página
        </p>
        <ul className="flex flex-wrap gap-2">
          {rotinasSections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="inline-block rounded-lg bg-cav-gray-50 px-3 py-1.5 text-sm text-cav-gray-600 transition-colors hover:bg-brand-blue-50 hover:text-brand-blue"
              >
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="space-y-6">
        {rotinasSections.map((section) => (
          <ContentCard key={section.id} id={section.id} title={section.title}>
            <Markdown content={section.body} />
          </ContentCard>
        ))}
      </div>
    </PageContainer>
  );
}
