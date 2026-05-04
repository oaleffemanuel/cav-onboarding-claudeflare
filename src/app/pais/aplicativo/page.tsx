import OnboardingLayout from "@/components/OnboardingLayout";
import PageHeader from "@/components/PageHeader";
import TutorialStep from "@/components/TutorialStep";
import InfoCallout from "@/components/InfoCallout";
import { paisNav } from "@/data/navigation";

export default function PaisAplicativo() {
  return (
    <OnboardingLayout sidebarItems={paisNav} sidebarTitle="Pais e Responsaveis">
      <PageHeader
        title="Aplicativo da Escola"
        description="Aprenda a instalar e usar o ClassApp, o canal oficial de comunicacao entre a escola e as familias."
      />

      <div className="space-y-6">
        <section className="rounded-2xl border border-cav-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-cav-primary">O que e o ClassApp?</h2>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-cav-gray-700">
            <p>
              O ClassApp e a plataforma oficial de comunicacao do Colegio Alta Vista.
              Atraves dele, voce recebe comunicados da escola, envia mensagens
              diretamente para professores e coordenadores, acompanha o calendario de
              eventos e pode justificar faltas ou atrasos do seu filho.
            </p>
            <p>
              E fundamental que todos os responsaveis tenham o aplicativo instalado e
              configurado para nao perder nenhuma informacao importante. Siga o passo
              a passo abaixo para comecar.
            </p>
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-lg font-semibold text-cav-primary">
            Passo a passo para configuracao
          </h2>
          <div className="space-y-0">
            <TutorialStep
              step={1}
              title="Baixe o aplicativo"
              description="Acesse a App Store (iPhone) ou Google Play (Android) e busque por 'ClassApp'. Baixe o aplicativo oficial, identificado pelo logotipo azul com um balao de conversa. O download e gratuito."
              screenshotAlt="Tela da loja de aplicativos mostrando o ClassApp para download"
            />
            <TutorialStep
              step={2}
              title="Faca login com seu codigo"
              description="Ao abrir o aplicativo pela primeira vez, voce precisara informar o codigo da escola e o seu codigo de acesso pessoal. O codigo da escola e ALTAVISTA. O codigo de acesso foi enviado por SMS para o numero cadastrado na matricula. Caso nao tenha recebido, entre em contato com a secretaria."
              screenshotAlt="Tela de login do ClassApp com campos para codigo da escola e codigo de acesso"
            />
            <TutorialStep
              step={3}
              title="Escolha o perfil do aluno"
              description="Se voce possui mais de um filho matriculado, o aplicativo exibira todos os perfis vinculados ao seu acesso. Selecione o perfil do aluno que deseja acompanhar. Voce pode alternar entre os perfis a qualquer momento pelo menu superior."
              screenshotAlt="Tela do ClassApp mostrando a selecao de perfil do aluno"
            />
            <TutorialStep
              step={4}
              title="Envie sua primeira mensagem"
              description="No menu inferior, toque em 'Mensagens' e depois no botao '+' para criar uma nova mensagem. Escolha o destinatario (professor, coordenacao ou secretaria) e escreva sua mensagem. Voce recebera uma notificacao quando a escola responder. Ative as notificacoes do app para nao perder nada."
              screenshotAlt="Tela do ClassApp mostrando a composicao de uma nova mensagem"
            />
          </div>
        </section>

        <InfoCallout type="tip" title="Ative as notificacoes">
          Para garantir que voce receba todos os comunicados em tempo real, ative
          as notificacoes do ClassApp nas configuracoes do seu celular. Assim, voce
          sera avisado sempre que a escola enviar uma mensagem ou comunicado.
        </InfoCallout>

        <InfoCallout type="info" title="Precisa de ajuda?">
          Se tiver dificuldades para acessar o ClassApp, entre em contato com a
          secretaria pelo telefone (21) 3456-7890 ou presencialmente. A equipe
          podera reenviar seu codigo de acesso ou auxiliar na configuracao.
        </InfoCallout>
      </div>
    </OnboardingLayout>
  );
}
