import OnboardingLayout from "@/components/OnboardingLayout";
import PageHeader from "@/components/PageHeader";
import SectionCard from "@/components/SectionCard";
import InfoCallout from "@/components/InfoCallout";
import TutorialStep from "@/components/TutorialStep";
import { funcionariosNav } from "@/data/navigation";

export default function FerramentasPage() {
  return (
    <OnboardingLayout sidebarItems={funcionariosNav} sidebarTitle="Colaboradores">
      <PageHeader
        title="Ferramentas e Sistemas"
        description="Conheça as principais ferramentas e plataformas utilizadas no dia a dia do Colégio Alta Vista e saiba como acessá-las."
      />

      <div className="space-y-8">
        {/* Tools grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          <SectionCard
            title="ClassApp"
            description="Plataforma oficial de comunicação entre escola e famílias. Utilizada para envio de comunicados, agendamentos, autorizações e mensagens individuais com pais e responsáveis."
            href="#"
            icon={
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            }
          />
          <SectionCard
            title="Google Workspace"
            description="Suite de produtividade que inclui Gmail institucional, Google Drive, Google Docs, Planilhas, Apresentações e Google Classroom. Seu e-mail @colegioaltavista.com.br é a base de acesso."
            href="#"
            icon={
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            }
          />
          <SectionCard
            title="Sistema de Gestão Escolar"
            description="Plataforma para lançamento de notas, controle de frequência, geração de boletins e acompanhamento pedagógico. Acesso com login e senha fornecidos pelo setor de TI."
            href="#"
            icon={
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
              </svg>
            }
          />
          <SectionCard
            title="Plataforma Pedagógica"
            description="Ambiente digital para disponibilização de materiais didáticos, atividades complementares, exercícios interativos e recursos multimídia para os alunos."
            href="#"
            icon={
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            }
          />
        </div>

        {/* ClassApp tutorial */}
        <section className="rounded-2xl border border-cav-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-2 text-lg font-semibold text-cav-primary">
            Como acessar o ClassApp
          </h2>
          <p className="mb-6 text-sm leading-relaxed text-cav-gray-700">
            O ClassApp é a ferramenta principal de comunicação com as famílias. Siga os passos
            abaixo para configurar seu acesso e começar a utilizar.
          </p>

          <div className="space-y-2">
            <TutorialStep
              step={1}
              title="Baixe o aplicativo"
              description="Acesse a App Store (iOS) ou Google Play (Android) e busque por 'ClassApp'. Baixe e instale o aplicativo no seu celular. Você também pode acessar pelo navegador em app.classapp.com.br."
              screenshotAlt="Tela de download do ClassApp na loja de aplicativos"
            />
            <TutorialStep
              step={2}
              title="Acesse com o código da escola"
              description="Ao abrir o aplicativo, insira o código do Colégio Alta Vista fornecido pela coordenação. Este código vincula seu perfil à instituição e libera o acesso às funcionalidades de educador."
              screenshotAlt="Tela de inserção do código da escola no ClassApp"
            />
            <TutorialStep
              step={3}
              title="Faça login com suas credenciais"
              description="Utilize o e-mail institucional e a senha provisória enviada pelo setor de TI. Na primeira entrada, o sistema solicitará a criação de uma nova senha. Escolha uma senha segura e guarde-a em local protegido."
              screenshotAlt="Tela de login do ClassApp com campos de e-mail e senha"
            />
            <TutorialStep
              step={4}
              title="Explore as funcionalidades"
              description="Após o login, explore o menu principal: Comunicados (para enviar avisos às turmas), Mensagens (para contato individual com famílias), Agenda (para registrar atividades e tarefas) e Relatórios (para acompanhar o engajamento das famílias)."
              screenshotAlt="Tela inicial do ClassApp com menu de funcionalidades"
            />
          </div>
        </section>

        {/* Access info */}
        <div className="rounded-2xl border border-cav-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-lg font-semibold text-cav-primary">
            Credenciais e suporte técnico
          </h2>
          <div className="space-y-3 text-sm leading-relaxed text-cav-gray-700">
            <p>
              As credenciais de acesso para todas as plataformas são fornecidas pelo setor de TI
              durante a primeira semana de trabalho. Você receberá um e-mail institucional
              (@colegioaltavista.com.br) que serve como login para a maioria dos sistemas.
            </p>
            <p>
              Em caso de problemas de acesso, esquecimento de senha ou dúvidas técnicas, entre em
              contato com o suporte de TI pelo e-mail ti@colegioaltavista.com.br ou pelo ramal
              interno 205. O atendimento funciona de segunda a sexta, das 7h30 às 17h00.
            </p>
          </div>
        </div>

        <InfoCallout type="warning" title="Segurança digital">
          Nunca compartilhe suas senhas de acesso com terceiros. Utilize senhas fortes e diferentes
          para cada plataforma. Ao utilizar computadores compartilhados, sempre faça logout ao
          terminar. Reporte imediatamente ao TI qualquer atividade suspeita em sua conta.
        </InfoCallout>
      </div>
    </OnboardingLayout>
  );
}
