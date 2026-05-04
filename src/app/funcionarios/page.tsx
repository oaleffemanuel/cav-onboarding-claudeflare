import OnboardingLayout from "@/components/OnboardingLayout";
import PageHeader from "@/components/PageHeader";
import SectionCard from "@/components/SectionCard";
import InfoCallout from "@/components/InfoCallout";
import { funcionariosNav } from "@/data/navigation";

export default function FuncionariosPage() {
  return (
    <OnboardingLayout sidebarItems={funcionariosNav} sidebarTitle="Colaboradores">
      <PageHeader
        title="Bem-vindo à Equipe Alta Vista"
        description="Estamos felizes em ter você conosco. Este portal reúne tudo o que você precisa para começar sua jornada como colaborador do Colégio Alta Vista."
      />

      <div className="space-y-6">
        {/* Welcome letter */}
        <div className="rounded-2xl border border-cav-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-cav-primary">
            Carta de Boas-vindas da Direção
          </h2>
          <div className="space-y-4 text-sm leading-relaxed text-cav-gray-700">
            <p>
              Prezado(a) colaborador(a), seja muito bem-vindo(a) ao Colégio Alta Vista. Ao integrar
              nossa equipe, você passa a fazer parte de uma comunidade educacional que há anos se
              dedica a formar cidadãos conscientes, criativos e preparados para os desafios do
              futuro. Acreditamos que cada profissional que compõe nosso time traz consigo talentos
              únicos que enriquecem nosso projeto pedagógico e fortalecem o ambiente escolar.
            </p>
            <p>
              Nossa missão vai além do ensino em sala de aula. Cultivamos um espaço de acolhimento,
              respeito e desenvolvimento integral, onde alunos, famílias e colaboradores caminham
              juntos. Contamos com a sua dedicação, entusiasmo e compromisso para manter esse
              ambiente vivo e inspirador. Independentemente da sua função, o seu papel é fundamental
              para que cada aluno se sinta seguro, motivado e valorizado.
            </p>
            <p>
              Nas próximas páginas, você encontrará informações sobre nossos valores, rotinas,
              ferramentas e tudo o que precisa para se ambientar. Explore com calma, tire suas
              dúvidas com a coordenação e lembre-se: estamos aqui para apoiar você nessa nova etapa.
              Juntos, vamos construir um ano letivo extraordinário.
            </p>
            <p className="font-medium text-cav-primary">
              Com carinho,
              <br />
              Direção do Colégio Alta Vista
            </p>
          </div>
        </div>

        <InfoCallout type="tip" title="Dica de navegação">
          Use o menu lateral para explorar todas as seções do onboarding. Recomendamos que você
          comece pelos Valores e Proposta Pedagógica e siga a ordem sugerida para uma experiência
          completa.
        </InfoCallout>

        {/* Section cards grid */}
        <div>
          <h2 className="mb-4 text-lg font-semibold text-cav-primary">
            Explore as seções
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <SectionCard
              title="Valores e Proposta Pedagógica"
              description="Conheça a missão, visão e os valores que guiam o nosso trabalho no dia a dia."
              href="/funcionarios/valores"
              icon={
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              }
            />
            <SectionCard
              title="Manual do Educador"
              description="Orientações de conduta, ética profissional e boas práticas pedagógicas."
              href="/funcionarios/manual"
              icon={
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              }
            />
            <SectionCard
              title="Formações e Desenvolvimento"
              description="Programas de capacitação, treinamentos e oportunidades de crescimento profissional."
              href="/funcionarios/formacoes"
              icon={
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              }
            />
            <SectionCard
              title="Documentos Importantes"
              description="Regimento interno, calendário escolar, organograma e outros documentos essenciais."
              href="/funcionarios/documentos"
              icon={
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              }
            />
            <SectionCard
              title="Rotinas Internas"
              description="Horários, fluxo do dia, procedimentos de chegada e saída e organização diária."
              href="/funcionarios/rotinas"
              icon={
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
            />
            <SectionCard
              title="Ferramentas e Sistemas"
              description="ClassApp, Google Workspace, sistema de gestão e plataformas do dia a dia."
              href="/funcionarios/ferramentas"
              icon={
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              }
            />
            <SectionCard
              title="Comunicação entre Setores"
              description="Canais de contato com direção, secretaria, coordenação, financeiro e TI."
              href="/funcionarios/comunicacao"
              icon={
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              }
            />
            <SectionCard
              title="Links Úteis"
              description="Acesso rápido ao site, ClassApp, Google Workspace, calendário e materiais de apoio."
              href="/funcionarios/links"
              icon={
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              }
            />
          </div>
        </div>
      </div>
    </OnboardingLayout>
  );
}
