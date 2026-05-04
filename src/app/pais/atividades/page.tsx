import OnboardingLayout from "@/components/OnboardingLayout";
import PageHeader from "@/components/PageHeader";
import SectionCard from "@/components/SectionCard";
import InfoCallout from "@/components/InfoCallout";
import { paisNav } from "@/data/navigation";

export default function PaisAtividades() {
  return (
    <OnboardingLayout sidebarItems={paisNav} sidebarTitle="Pais e Responsaveis">
      <PageHeader
        title="Atividades Extracurriculares"
        description="Opcoes de atividades que complementam a formacao dos alunos, desenvolvendo habilidades fisicas, artisticas e sociais."
      />

      <div className="space-y-6">
        <p className="text-sm leading-relaxed text-cav-gray-700">
          As atividades extracurriculares do Colegio Alta Vista acontecem no
          contraturno das aulas regulares e sao conduzidas por profissionais
          especializados. Cada modalidade contribui de forma unica para o
          desenvolvimento integral dos alunos, estimulando disciplina, criatividade,
          saude e convivencia social.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <SectionCard
            title="Bale"
            description="Aulas de bale classico para criancas a partir de 3 anos. Desenvolve coordenacao, postura e expressao artistica."
            href="/pais/atividades/bale"
          />
          <SectionCard
            title="Judo"
            description="Artes marciais com foco educacional, trabalhando respeito, disciplina e autoconfianca desde a infancia."
            href="/pais/atividades/judo"
          />
          <SectionCard
            title="Futebol"
            description="Escolinha de futebol que valoriza o esporte como ferramenta de socializacao e desenvolvimento motor."
            href="/pais/atividades/futebol"
          />
          <SectionCard
            title="Catequese"
            description="Formacao religiosa em parceria com a comunidade paroquial, sem custo adicional para as familias."
            href="/pais/atividades/catequese"
          />
        </div>

        <InfoCallout type="info" title="Inscricoes">
          As inscricoes para as atividades extracurriculares podem ser realizadas a
          qualquer momento do ano letivo, sujeitas a disponibilidade de vagas. Acesse
          a pagina de cada atividade para mais detalhes sobre horarios, valores e
          como se inscrever.
        </InfoCallout>
      </div>
    </OnboardingLayout>
  );
}
