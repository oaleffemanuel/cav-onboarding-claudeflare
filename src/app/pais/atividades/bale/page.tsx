import OnboardingLayout from "@/components/OnboardingLayout";
import PageHeader from "@/components/PageHeader";
import OfferCard from "@/components/OfferCard";
import InfoCallout from "@/components/InfoCallout";
import { paisNav } from "@/data/navigation";

export default function PaisAtividadesBale() {
  return (
    <OnboardingLayout sidebarItems={paisNav} sidebarTitle="Pais e Responsaveis">
      <PageHeader
        title="Bale"
        description="Aulas de bale classico que desenvolvem coordenacao, expressao artistica e disciplina desde a primeira infancia."
      />

      <div className="space-y-6">
        <section className="rounded-2xl border border-cav-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-cav-primary">Sobre a Atividade</h2>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-cav-gray-700">
            <p>
              O bale classico no Colegio Alta Vista e ministrado por professora
              formada em danca, com experiencia em ensino para criancas. As aulas
              trabalham postura, flexibilidade, ritmo e expressao corporal, alem de
              estimular a sensibilidade artistica e a autoestima dos alunos.
            </p>
            <p>
              As turmas sao organizadas por faixa etaria, com no maximo 15 alunos por
              turma, garantindo atencao individualizada. Ao longo do ano, os alunos
              participam de apresentacoes internas e do tradicional espetaculo de
              encerramento do Alta Vista.
            </p>
          </div>
        </section>

        <InfoCallout type="info" title="Horarios das aulas">
          As aulas de bale acontecem as tercas e quintas-feiras, no contraturno. Turma
          1 (3 a 5 anos): 13h30 as 14h15. Turma 2 (6 a 9 anos): 14h20 as 15h10.
        </InfoCallout>

        <div className="max-w-md">
          <OfferCard
            title="Bale Classico"
            description="Aulas semanais de bale com professora especializada, em turmas reduzidas por faixa etaria."
            includes={[
              "Duas aulas semanais de 45 minutos",
              "Turmas reduzidas (maximo 15 alunos)",
              "Participacao em apresentacoes da escola",
              "Uniforme de bale nao incluso",
            ]}
            price="R$ 180,00"
            ctaLabel="Inscrever no Bale"
          />
        </div>
      </div>
    </OnboardingLayout>
  );
}
