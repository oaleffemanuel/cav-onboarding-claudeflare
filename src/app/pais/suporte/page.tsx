import OnboardingLayout from "@/components/OnboardingLayout";
import PageHeader from "@/components/PageHeader";
import InfoCallout from "@/components/InfoCallout";
import { paisNav } from "@/data/navigation";

export default function PaisSuporte() {
  return (
    <OnboardingLayout sidebarItems={paisNav} sidebarTitle="Pais e Responsaveis">
      <PageHeader
        title="Suporte e Duvidas"
        description="Respostas para as perguntas mais frequentes e orientacoes sobre como buscar ajuda."
      />

      <div className="space-y-6">
        <section className="rounded-2xl border border-cav-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-cav-primary">
            Como buscar suporte
          </h2>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-cav-gray-700">
            <p>
              O Colegio Alta Vista esta sempre disponivel para atender as familias.
              Para agilizar o atendimento, e importante direcionar sua duvida ou
              solicitacao ao departamento correto. Veja abaixo como falar com cada
              setor.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-cav-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-cav-primary">
            Contato por departamento via ClassApp
          </h2>
          <div className="space-y-4 text-sm leading-relaxed text-cav-gray-700">
            <div>
              <h3 className="font-semibold text-cav-primary">Professores</h3>
              <p>
                Para tratar sobre desempenho academico, tarefas, conteudos e rotina
                em sala de aula. No ClassApp, acesse &ldquo;Mensagens&rdquo; e selecione o
                professor da disciplina desejada.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-cav-primary">Coordenacao Pedagogica</h3>
              <p>
                Para questoes de adaptacao, comportamento, dificuldades de
                aprendizagem e orientacao educacional. No ClassApp, selecione
                &ldquo;Coordenacao&rdquo; como destinatario.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-cav-primary">Secretaria</h3>
              <p>
                Para documentos, declaracoes, transferencias e informacoes gerais
                sobre a escola. No ClassApp, selecione &ldquo;Secretaria&rdquo; ou ligue para
                (21) 3456-7890.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-cav-primary">Financeiro</h3>
              <p>
                Para boletos, mensalidades, negociacoes e segunda via de documentos
                financeiros. Envie e-mail para financeiro@colegioaltavista.com.br ou
                ligue para (21) 3456-7890.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-cav-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-cav-primary">
            Perguntas Frequentes
          </h2>
          <div className="space-y-5 text-sm leading-relaxed text-cav-gray-700">
            <div>
              <h3 className="font-semibold text-cav-primary">
                Meu filho faltou. Como justificar a ausencia?
              </h3>
              <p>
                Envie uma mensagem pelo ClassApp para a Coordenacao informando o
                motivo da falta. Se a ausencia for por motivo de saude, anexe o
                atestado medico pela propria plataforma.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-cav-primary">
                Como solicito uma declaracao de matricula ou frequencia?
              </h3>
              <p>
                Entre em contato com a Secretaria pelo ClassApp, telefone ou
                presencialmente. O documento sera emitido em ate 3 dias uteis.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-cav-primary">
                Posso autorizar outra pessoa a buscar meu filho?
              </h3>
              <p>
                Sim. Envie uma mensagem pelo ClassApp para a Coordenacao com o nome
                completo e documento de identidade da pessoa autorizada. A autorizacao
                permanente pode ser feita na secretaria mediante preenchimento de
                formulario especifico.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-cav-primary">
                Como agendar uma reuniao com a coordenacao ou direcao?
              </h3>
              <p>
                Envie uma mensagem pelo ClassApp solicitando o agendamento, ou ligue
                para a secretaria. As reunioes sao agendadas conforme disponibilidade,
                preferencialmente no horario de atendimento da coordenacao.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-cav-primary">
                Onde encontro o cardapio da semana?
              </h3>
              <p>
                O cardapio semanal e enviado toda sexta-feira pelo ClassApp. Voce
                tambem pode consulta-lo no mural da escola, proximo a entrada da
                cantina.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-cav-primary">
                Como faco para trocar o turno do meu filho?
              </h3>
              <p>
                Solicitacoes de troca de turno devem ser feitas na secretaria, com
                antecedencia minima de 30 dias. A troca esta sujeita a
                disponibilidade de vagas no turno desejado.
              </p>
            </div>
          </div>
        </section>

        <InfoCallout type="info" title="Nao encontrou sua resposta?">
          Se sua duvida nao esta listada acima, envie uma mensagem pelo ClassApp
          para a Secretaria ou ligue para (21) 3456-7890. Teremos prazer em
          ajudar.
        </InfoCallout>

        <InfoCallout type="warning" title="Situacoes de emergencia">
          Em caso de emergencia envolvendo a saude ou seguranca do aluno durante o
          horario escolar, a escola entrara em contato imediatamente com os
          responsaveis pelos telefones cadastrados na ficha de matricula. Mantenha
          seus dados de contato sempre atualizados.
        </InfoCallout>
      </div>
    </OnboardingLayout>
  );
}
