import OnboardingLayout from "@/components/OnboardingLayout";
import PageHeader from "@/components/PageHeader";
import OfferCard from "@/components/OfferCard";
import InfoCallout from "@/components/InfoCallout";
import { paisNav } from "@/data/navigation";

export default function PaisAtividadesFutebol() {
  return (
    <OnboardingLayout sidebarItems={paisNav} sidebarTitle="Pais e Responsaveis">
      <PageHeader
        title="Futebol"
        description="Escolinha de futebol com abordagem educacional, promovendo saude, cooperacao e espirito esportivo."
      />

      <div className="space-y-6">
        <section className="rounded-2xl border border-cav-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-cav-primary">Sobre a Atividade</h2>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-cav-gray-700">
            <p>
              A escolinha de futebol do Colegio Alta Vista tem como foco o
              desenvolvimento motor, o trabalho em equipe e a socializacao. Mais do
              que formar atletas, buscamos utilizar o esporte como ferramenta
              educacional, ensinando valores como cooperacao, fair play e superacao.
            </p>
            <p>
              As aulas sao conduzidas por professor de Educacao Fisica na quadra
              poliesportiva da escola. Os treinos incluem atividades ludicas,
              fundamentos tecnicos e mini-jogos adaptados a idade dos alunos. A
              modalidade esta aberta para meninos e meninas a partir de 4 anos.
            </p>
          </div>
        </section>

        <InfoCallout type="info" title="Horarios das aulas">
          As aulas de futebol acontecem as tercas e quintas-feiras, no contraturno.
          Turma 1 (4 a 6 anos): 15h20 as 16h10. Turma 2 (7 a 10 anos): 16h15 as
          17h15.
        </InfoCallout>

        <div className="max-w-md">
          <OfferCard
            title="Futebol"
            description="Aulas de futebol com professor de Educacao Fisica, na quadra poliesportiva da escola."
            includes={[
              "Duas aulas semanais de 50 minutos",
              "Uniforme esportivo da escola incluso (camiseta)",
              "Participacao em torneios internos e amistosos",
              "Seguro esportivo incluso",
            ]}
            price="R$ 170,00"
            ctaLabel="Inscrever no Futebol"
          />
        </div>
      </div>
    </OnboardingLayout>
  );
}
