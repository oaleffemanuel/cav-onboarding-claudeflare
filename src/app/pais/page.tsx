import OnboardingLayout from "@/components/OnboardingLayout";
import PageHeader from "@/components/PageHeader";
import SectionCard from "@/components/SectionCard";
import InfoCallout from "@/components/InfoCallout";
import { paisNav } from "@/data/navigation";

export default function PaisBoasVindas() {
  return (
    <OnboardingLayout sidebarItems={paisNav} sidebarTitle="Pais e Responsaveis">
      <PageHeader
        title="Bem-vindo ao Colegio Alta Vista"
        description="Tudo o que voce precisa saber para comecar essa jornada com a gente."
      />

      <div className="space-y-6">
        <section className="rounded-2xl border border-cav-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-cav-primary">
            Uma mensagem da nossa equipe
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-cav-gray-700">
            <p>
              Queridas familias, e com muita alegria que recebemos voces no Colegio Alta
              Vista. Sabemos que escolher a escola dos filhos e uma das decisoes mais
              importantes na vida de uma familia, e nos sentimos honrados pela confianca
              depositada em nosso trabalho.
            </p>
            <p>
              Ao longo de mais de 20 anos, construimos uma comunidade escolar baseada no
              respeito, no dialogo e na busca constante pela excelencia pedagogica. Aqui,
              cada aluno e visto de forma unica, com suas potencialidades e seus desafios,
              e nosso compromisso e caminhar lado a lado com as familias nessa jornada de
              aprendizado e crescimento.
            </p>
            <p>
              Este espaco foi criado para facilitar a sua integracao com a escola.
              Navegue pelas secoes ao lado para conhecer nossos valores, servicos,
              horarios e canais de comunicacao. Estamos a disposicao para qualquer duvida.
              Sejam muito bem-vindos!
            </p>
            <p className="font-medium text-cav-primary">
              -- Equipe de Direcao do Colegio Alta Vista
            </p>
          </div>
        </section>

        <InfoCallout type="tip" title="Dica de navegacao">
          Use o menu lateral para acessar cada secao do onboarding. Recomendamos
          percorrer todas as paginas na ordem para nao perder nenhuma informacao
          importante.
        </InfoCallout>

        <section>
          <h2 className="mb-4 text-lg font-semibold text-cav-primary">
            Explore as secoes
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <SectionCard
              title="Valores e Proposta Pedagogica"
              description="Conheca nossa missao, visao e a abordagem educacional que guia o dia a dia da escola."
              href="/pais/valores"
            />
            <SectionCard
              title="O que Oferecemos"
              description="Alimentacao, plantao, integral e atividades extracurriculares disponiveis para o seu filho."
              href="/pais/oferecemos"
            />
            <SectionCard
              title="Horarios"
              description="Horarios de entrada, saida e funcionamento da secretaria para cada segmento."
              href="/pais/horarios"
            />
            <SectionCard
              title="Contatos"
              description="Todos os canais de comunicacao da escola reunidos em um so lugar."
              href="/pais/contatos"
            />
            <SectionCard
              title="Aplicativo da Escola"
              description="Aprenda a usar o ClassApp para se comunicar com professores e acompanhar a rotina escolar."
              href="/pais/aplicativo"
            />
            <SectionCard
              title="Suporte e Duvidas"
              description="Perguntas frequentes e como buscar ajuda quando precisar."
              href="/pais/suporte"
            />
          </div>
        </section>
      </div>
    </OnboardingLayout>
  );
}
