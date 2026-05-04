import OnboardingLayout from "@/components/OnboardingLayout";
import PageHeader from "@/components/PageHeader";
import OfferCard from "@/components/OfferCard";
import InfoCallout from "@/components/InfoCallout";
import { paisNav } from "@/data/navigation";

export default function PaisAtividadesJudo() {
  return (
    <OnboardingLayout sidebarItems={paisNav} sidebarTitle="Pais e Responsaveis">
      <PageHeader
        title="Judo"
        description="Uma arte marcial que ensina valores como respeito, disciplina e superacao, contribuindo para a formacao integral do aluno."
      />

      <div className="space-y-6">
        <section className="rounded-2xl border border-cav-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-cav-primary">Sobre a Atividade</h2>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-cav-gray-700">
            <p>
              O judo e uma das atividades extracurriculares mais procuradas do
              Colegio Alta Vista. Ministrado por sensei faixa preta com formacao em
              Educacao Fisica, as aulas vao muito alem das tecnicas de luta:
              trabalham respeito ao proximo, autocontrole, perseveranca e espirito
              esportivo.
            </p>
            <p>
              Os alunos sao organizados por faixa etaria e nivel de experiencia. Ao
              longo do ano, participam de exames de graduacao de faixa e,
              opcionalmente, de competicoes regionais interescolares. O judo e
              recomendado tanto para meninos quanto para meninas a partir dos 4 anos.
            </p>
          </div>
        </section>

        <InfoCallout type="info" title="Horarios das aulas">
          As aulas de judo acontecem as segundas e quartas-feiras, no contraturno.
          Turma Iniciante (4 a 6 anos): 13h30 as 14h20. Turma Avancada (7 a 10 anos):
          14h30 as 15h30.
        </InfoCallout>

        <div className="max-w-md">
          <OfferCard
            title="Judo"
            description="Aulas de judo com sensei graduado, desenvolvendo disciplina, condicionamento fisico e valores marciais."
            includes={[
              "Duas aulas semanais de 50 minutos",
              "Exames de graduacao de faixa inclusos",
              "Participacao em eventos esportivos da escola",
              "Judogi (quimono) nao incluso",
            ]}
            price="R$ 200,00"
            ctaLabel="Inscrever no Judo"
          />
        </div>
      </div>
    </OnboardingLayout>
  );
}
