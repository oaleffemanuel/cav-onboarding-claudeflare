import OnboardingLayout from "@/components/OnboardingLayout";
import PageHeader from "@/components/PageHeader";
import InfoCallout from "@/components/InfoCallout";
import { paisNav } from "@/data/navigation";

export default function PaisAtividadesCatequese() {
  return (
    <OnboardingLayout sidebarItems={paisNav} sidebarTitle="Pais e Responsaveis">
      <PageHeader
        title="Catequese"
        description="Formacao religiosa em parceria com a comunidade paroquial, oferecida gratuitamente aos alunos interessados."
      />

      <div className="space-y-6">
        <section className="rounded-2xl border border-cav-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-cav-primary">Sobre a Atividade</h2>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-cav-gray-700">
            <p>
              O Colegio Alta Vista oferece, em parceria com a Paroquia local, o
              programa de catequese para alunos que desejam participar da formacao
              religiosa. Os encontros sao conduzidos por catequistas voluntarios da
              comunidade e acontecem nas dependencias da escola, em horario especifico
              no contraturno.
            </p>
            <p>
              A participacao na catequese e totalmente voluntaria e aberta a todos os
              alunos, independentemente do segmento. O programa segue o calendario da
              paroquia e prepara os alunos para os sacramentos da Primeira Eucaristia e
              Crisma, conforme a faixa etaria.
            </p>
            <p>
              Os encontros acontecem as sextas-feiras, das 14h00 as 15h00, e nao ha
              custo adicional para as familias.
            </p>
          </div>
        </section>

        <InfoCallout type="tip" title="Atividade gratuita">
          A catequese e oferecida sem custo adicional para as familias do Colegio
          Alta Vista. Basta manifestar interesse na secretaria da escola para
          realizar a inscricao do aluno.
        </InfoCallout>

        <section className="rounded-2xl border border-cav-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-cav-primary">Como se inscrever</h2>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-cav-gray-700">
            <p>
              Para inscrever seu filho na catequese, procure a secretaria da escola ou
              envie uma mensagem pelo ClassApp para o canal da Coordenacao. A inscricao
              pode ser feita a qualquer momento do ano letivo, e o aluno sera integrado
              ao grupo correspondente a sua faixa etaria.
            </p>
            <p>
              Documentos necessarios: certidao de batismo (se houver) e autorizacao
              assinada pelo responsavel.
            </p>
          </div>
        </section>
      </div>
    </OnboardingLayout>
  );
}
