import OnboardingLayout from "@/components/OnboardingLayout";
import PageHeader from "@/components/PageHeader";
import SectionCard from "@/components/SectionCard";
import InfoCallout from "@/components/InfoCallout";
import { funcionariosNav } from "@/data/navigation";

export default function LinksPage() {
  return (
    <OnboardingLayout sidebarItems={funcionariosNav} sidebarTitle="Colaboradores">
      <PageHeader
        title="Links Úteis"
        description="Acesso rápido às principais plataformas, sites e recursos que você utilizará no dia a dia como colaborador."
      />

      <div className="space-y-8">
        <div className="grid gap-4 sm:grid-cols-2">
          <SectionCard
            title="Site do Colégio"
            description="Página oficial do Colégio Alta Vista com informações institucionais, notícias, eventos e área de contato para famílias e comunidade."
            href="#"
            icon={
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            }
          />
          <SectionCard
            title="ClassApp"
            description="Plataforma de comunicação com famílias. Acesse para enviar comunicados, responder mensagens e gerenciar a agenda escolar da sua turma."
            href="#"
            icon={
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            }
          />
          <SectionCard
            title="Google Workspace"
            description="Acesse o Gmail institucional, Google Drive, Documentos, Planilhas e demais ferramentas de produtividade com seu login @colegioaltavista.com.br."
            href="#"
            icon={
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            }
          />
          <SectionCard
            title="Calendário Escolar"
            description="Visualize todas as datas importantes do ano letivo: feriados, recessos, semanas pedagógicas, conselhos de classe e eventos institucionais."
            href="#"
            icon={
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            }
          />
          <SectionCard
            title="Materiais de Apoio"
            description="Pasta no Google Drive com modelos de planejamento, fichas de avaliação, formulários internos, templates de comunicados e outros recursos de uso frequente."
            href="#"
            icon={
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
              </svg>
            }
          />
          <SectionCard
            title="Sistema de Gestão Escolar"
            description="Plataforma para lançamento de notas, controle de frequência, consulta de turmas e geração de relatórios pedagógicos."
            href="#"
            icon={
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
              </svg>
            }
          />
        </div>

        <InfoCallout type="tip" title="Salve nos favoritos">
          Recomendamos que você salve os links mais utilizados nos favoritos do seu navegador para
          acesso rápido. Caso algum link esteja fora do ar ou com problema de acesso, entre em
          contato com o setor de TI pelo e-mail ti@colegioaltavista.com.br.
        </InfoCallout>

        <div className="rounded-2xl border border-cav-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-lg font-semibold text-cav-primary">
            Precisa de outro recurso?
          </h2>
          <p className="text-sm leading-relaxed text-cav-gray-700">
            Se você precisa de acesso a alguma ferramenta ou plataforma que não está listada aqui,
            entre em contato com a coordenação ou com o setor de TI. Estamos sempre abertos a
            sugestões de novos recursos que possam facilitar o seu trabalho e melhorar a experiência
            educacional dos nossos alunos.
          </p>
        </div>
      </div>
    </OnboardingLayout>
  );
}
