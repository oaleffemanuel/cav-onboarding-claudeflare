import PageContainer from "@/components/educador/PageContainer";
import FaqAccordion from "@/components/educador/FaqAccordion";
import { faqs } from "@/data/educador";

export default function FaqPage() {
  return (
    <PageContainer
      crumbs={[{ label: "FAQ" }]}
      eyebrow="FAQ"
      title="Perguntas frequentes"
      intro="Respostas rápidas para as dúvidas mais comuns de quem está começando ou no dia a dia da escola."
    >
      <FaqAccordion items={faqs} />

      <div className="mt-8 rounded-2xl border border-border bg-surface p-6 text-center sm:p-8">
        <p className="text-[15px] font-medium text-cav-gray-700">
          Ainda com dúvidas?
        </p>
        <p className="mt-1 text-sm text-cav-gray-500">
          Consulte a{" "}
          <a href="/educador/contatos" className="font-medium text-brand-blue underline underline-offset-2">
            Central de Contatos
          </a>{" "}
          e fale com a equipe responsável.
        </p>
      </div>
    </PageContainer>
  );
}
