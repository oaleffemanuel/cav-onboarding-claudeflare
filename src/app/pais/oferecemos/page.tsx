import OnboardingLayout from "@/components/OnboardingLayout";
import PageHeader from "@/components/PageHeader";
import SectionCard from "@/components/SectionCard";
import InfoCallout from "@/components/InfoCallout";
import { paisNav } from "@/data/navigation";

export default function PaisOferecemos() {
  return (
    <OnboardingLayout sidebarItems={paisNav} sidebarTitle="Pais e Responsaveis">
      <PageHeader
        title="O que Oferecemos"
        description="Conheca os servicos complementares e atividades disponiveis para enriquecer a experiencia escolar do seu filho."
      />

      <div className="space-y-6">
        <p className="text-sm leading-relaxed text-cav-gray-700">
          Alem do ensino regular de alta qualidade, o Colegio Alta Vista oferece uma
          serie de servicos e atividades que complementam a formacao dos alunos e
          facilitam a rotina das familias. Explore cada opcao abaixo para saber mais
          detalhes, valores e como contratar.
        </p>

        <section>
          <h2 className="mb-4 text-lg font-semibold text-cav-primary">
            Servicos Complementares
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <SectionCard
              title="Alimentacao"
              description="Refeicoes balanceadas preparadas por nutricionista, com cardapio semanal variado e adaptacoes para restricoes alimentares."
              href="/pais/alimentacao"
            />
            <SectionCard
              title="Plantao Escolar"
              description="Horario estendido para familias que precisam de flexibilidade, com atividades dirigidas e acompanhamento pedagogico."
              href="/pais/plantao"
            />
            <SectionCard
              title="Periodo Integral"
              description="Jornada completa com alimentacao, estudo dirigido, atividades recreativas e oficinas pedagogicas."
              href="/pais/integral"
            />
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-lg font-semibold text-cav-primary">
            Atividades Extracurriculares
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <SectionCard
              title="Bale"
              description="Aulas de bale classico que desenvolvem coordenacao motora, disciplina e expressao artistica."
              href="/pais/atividades/bale"
            />
            <SectionCard
              title="Judo"
              description="Arte marcial que ensina disciplina, respeito e autoconfianca, alem de promover condicionamento fisico."
              href="/pais/atividades/judo"
            />
            <SectionCard
              title="Futebol"
              description="Escolinha de futebol com foco no esporte educacional, trabalho em equipe e desenvolvimento motor."
              href="/pais/atividades/futebol"
            />
            <SectionCard
              title="Catequese"
              description="Formacao religiosa oferecida em parceria com a comunidade paroquial, aberta a todos os alunos interessados."
              href="/pais/atividades/catequese"
            />
          </div>
        </section>

        <InfoCallout type="tip" title="Como contratar?">
          Para contratar qualquer servico complementar ou inscrever seu filho em
          atividades extracurriculares, entre na pagina do servico desejado e clique
          no botao de contratacao. Voce tambem pode procurar a secretaria da escola
          para mais informacoes.
        </InfoCallout>
      </div>
    </OnboardingLayout>
  );
}
