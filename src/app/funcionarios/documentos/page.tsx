import OnboardingLayout from "@/components/OnboardingLayout";
import PageHeader from "@/components/PageHeader";
import SectionCard from "@/components/SectionCard";
import InfoCallout from "@/components/InfoCallout";
import { funcionariosNav } from "@/data/navigation";

export default function DocumentosPage() {
  return (
    <OnboardingLayout sidebarItems={funcionariosNav} sidebarTitle="Colaboradores">
      <PageHeader
        title="Documentos Importantes"
        description="Acesse os documentos essenciais para o seu dia a dia como colaborador do Colégio Alta Vista."
      />

      <div className="space-y-8">
        <InfoCallout type="info" title="Onde encontrar os documentos">
          Todos os documentos listados abaixo estão disponíveis na versão mais atualizada no
          Google Drive institucional, na pasta &quot;Documentos Gerais - Colaboradores&quot;. Em caso de
          dúvida sobre algum documento, procure a secretaria ou a coordenação.
        </InfoCallout>

        <div className="grid gap-4 sm:grid-cols-2">
          <SectionCard
            title="Regimento Interno"
            description="Documento que estabelece as normas de funcionamento do colégio, direitos e deveres de alunos, famílias e colaboradores, regras disciplinares e procedimentos administrativos."
            href="#"
            icon={
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            }
          />
          <SectionCard
            title="Calendário Escolar"
            description="Calendário completo do ano letivo com datas de início e término dos bimestres, feriados, recessos, semanas pedagógicas, conselhos de classe e eventos institucionais."
            href="#"
            icon={
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            }
          />
          <SectionCard
            title="Tabela de Horários"
            description="Grade horária completa com distribuição de aulas por turma, professor e disciplina. Inclui horários de intervalos, recreios e atividades extracurriculares."
            href="#"
            icon={
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />
          <SectionCard
            title="Organograma"
            description="Estrutura organizacional do colégio com a hierarquia de cargos, setores e suas respectivas lideranças. Útil para entender a quem recorrer em cada situação."
            href="#"
            icon={
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            }
          />
          <SectionCard
            title="PPP - Projeto Político-Pedagógico"
            description="Documento norteador da proposta educacional do colégio, com diretrizes pedagógicas, filosóficas e organizacionais que orientam todas as ações da escola."
            href="#"
            icon={
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            }
          />
          <SectionCard
            title="Manual de Segurança"
            description="Procedimentos de segurança, rotas de evacuação, protocolos em caso de emergência e orientações para situações de risco no ambiente escolar."
            href="#"
            icon={
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            }
          />
        </div>

        <div className="rounded-2xl border border-cav-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-lg font-semibold text-cav-primary">
            Documentos pessoais e admissionais
          </h2>
          <p className="text-sm leading-relaxed text-cav-gray-700">
            Os documentos necessários para o processo admissional (cópias de RG, CPF, comprovante de
            residência, certificados de formação, atestado de saúde ocupacional, entre outros) devem
            ser entregues ao setor de Recursos Humanos no prazo informado durante a contratação.
            Mantenha seus dados sempre atualizados junto à secretaria e ao RH, especialmente
            endereço, telefone e contato de emergência.
          </p>
        </div>

        <InfoCallout type="warning" title="Mantenha-se atualizado">
          Os documentos institucionais são revisados periodicamente. Sempre consulte a versão mais
          recente no Google Drive antes de utilizar qualquer documento como referência. Em caso de
          divergências, a versão digital é considerada oficial.
        </InfoCallout>
      </div>
    </OnboardingLayout>
  );
}
