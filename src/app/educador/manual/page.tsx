import PageContainer from "@/components/educador/PageContainer";
import ManualModules from "@/components/educador/ManualModules";

export default function ManualPage() {
  return (
    <PageContainer
      crumbs={[{ label: "Manual do Educador" }]}
      eyebrow="Manual do Educador"
      title="Normas, orientações e documentos oficiais"
      intro="Tudo o que orienta a nossa atuação no Alta Vista — organizado em blocos curtos e fáceis de consultar. Toque em “Ver detalhes” para abrir cada tema."
    >
      <ManualModules />

      <div className="mt-8 rounded-2xl border border-border bg-brand-blue-50 p-6 text-center sm:p-8">
        <p className="text-[15px] font-medium text-cav-gray-700">
          Os arquivos oficiais completos ficam no Drive da equipe.
        </p>
        <p className="mt-1 text-sm text-cav-gray-500">
          Veja os atalhos em{" "}
          <a href="/educador/links" className="font-medium text-brand-blue underline underline-offset-2">
            Links Úteis
          </a>{" "}
          ou fale com o{" "}
          <a href="/educador/contatos" className="font-medium text-brand-blue underline underline-offset-2">
            RH
          </a>
          .
        </p>
      </div>
    </PageContainer>
  );
}
