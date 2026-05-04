import OnboardingLayout from "@/components/OnboardingLayout";
import PageHeader from "@/components/PageHeader";
import SectionCard from "@/components/SectionCard";
import InfoCallout from "@/components/InfoCallout";
import { funcionariosNav } from "@/data/navigation";

export default function FormacoesPage() {
  return (
    <OnboardingLayout sidebarItems={funcionariosNav} sidebarTitle="Colaboradores">
      <PageHeader
        title="Formações e Desenvolvimento"
        description="O Colégio Alta Vista investe no crescimento profissional de seus colaboradores. Conheça as oportunidades de formação disponíveis."
      />

      <div className="space-y-8">
        <div className="rounded-2xl border border-cav-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-lg font-semibold text-cav-primary">
            Nosso compromisso com o seu desenvolvimento
          </h2>
          <p className="text-sm leading-relaxed text-cav-gray-700">
            Acreditamos que educadores em constante formação oferecem uma educação mais rica,
            atualizada e significativa. Por isso, promovemos ao longo do ano diversas oportunidades
            de capacitação, desde formações internas conduzidas pela coordenação até parcerias com
            instituições especializadas. Participar dessas formações é parte integrante do seu papel
            como membro da equipe Alta Vista.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-lg font-semibold text-cav-primary">
            Programas de Formação
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <SectionCard
              title="Formação Pedagógica"
              description="Encontros mensais com a coordenação para estudo de metodologias ativas, gestão de sala de aula, avaliação formativa e planejamento por competências. Inclui rodas de conversa e análise de práticas."
              href="#"
              icon={
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              }
            />
            <SectionCard
              title="Tecnologia na Educação"
              description="Capacitação em ferramentas digitais, Google Workspace for Education, plataformas pedagógicas e uso intencional de tecnologia em sala de aula. Oficinas práticas com suporte da equipe de TI."
              href="#"
              icon={
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              }
            />
            <SectionCard
              title="Primeiros Socorros"
              description="Treinamento obrigatório anual ministrado por profissionais de saúde. Aborda procedimentos básicos de emergência, uso de kit de primeiros socorros, protocolos em caso de acidentes e orientações para situações de risco."
              href="#"
              icon={
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              }
            />
            <SectionCard
              title="Inclusão e Acessibilidade"
              description="Formação sobre práticas inclusivas, adaptação curricular, transtornos de aprendizagem e estratégias de acolhimento para alunos com necessidades especiais. Parceria com equipe multidisciplinar."
              href="#"
              icon={
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              }
            />
          </div>
        </div>

        {/* Additional training info */}
        <div className="rounded-2xl border border-cav-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-lg font-semibold text-cav-primary">
            Como funcionam as formações
          </h2>
          <div className="space-y-4 text-sm leading-relaxed text-cav-gray-700">
            <p>
              As formações internas acontecem em horários planejados dentro da jornada de trabalho,
              geralmente nas semanas pedagógicas (início de cada semestre) e nos encontros mensais
              às quartas-feiras. A presença é obrigatória e registrada pela coordenação.
            </p>
            <p>
              Formações externas e cursos de especialização podem ser solicitados pelo colaborador
              mediante aprovação da direção. O colégio avalia possibilidades de subsídio parcial
              para capacitações alinhadas ao projeto pedagógico da escola. Converse com a
              coordenação sobre as oportunidades disponíveis.
            </p>
          </div>
        </div>

        <InfoCallout type="info" title="Próximas formações agendadas">
          Fique atento(a) ao calendário de formações divulgado pela coordenação no início de cada
          semestre. As datas são comunicadas via ClassApp e e-mail institucional. Em caso de dúvidas
          sobre inscrições ou conteúdos, procure a coordenação pedagógica.
        </InfoCallout>
      </div>
    </OnboardingLayout>
  );
}
