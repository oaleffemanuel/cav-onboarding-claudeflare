import OnboardingLayout from "@/components/OnboardingLayout";
import PageHeader from "@/components/PageHeader";
import InfoCallout from "@/components/InfoCallout";
import { paisNav } from "@/data/navigation";

export default function PaisContatos() {
  return (
    <OnboardingLayout sidebarItems={paisNav} sidebarTitle="Pais e Responsaveis">
      <PageHeader
        title="Contatos"
        description="Todos os canais de comunicacao da escola reunidos em um so lugar."
      />

      <div className="space-y-6">
        <section className="rounded-2xl border border-cav-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-cav-primary">
            ClassApp (Canal Principal)
          </h2>
          <div className="space-y-3 text-sm leading-relaxed text-cav-gray-700">
            <p>
              O ClassApp e o canal oficial de comunicacao entre a escola e as
              familias. Atraves dele, voce recebe comunicados, envia mensagens para
              professores e coordenadores, acompanha eventos e justifica faltas ou
              atrasos.
            </p>
            <p>
              Todas as familias recebem acesso ao ClassApp no momento da matricula.
              Caso ainda nao tenha configurado, consulte a secao{" "}
              <a href="/pais/aplicativo" className="font-medium text-cav-primary underline">
                Aplicativo da Escola
              </a>{" "}
              para um passo a passo completo.
            </p>
          </div>
        </section>

        <div className="grid gap-4 sm:grid-cols-2">
          <section className="rounded-2xl border border-cav-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-base font-semibold text-cav-primary">Telefone</h3>
            <div className="mt-3 space-y-2 text-sm text-cav-gray-700">
              <p>
                <span className="font-medium">Secretaria:</span> (21) 3456-7890
              </p>
              <p>
                <span className="font-medium">Coordenacao Infantil:</span> (21) 3456-7891
              </p>
              <p>
                <span className="font-medium">Coordenacao Fundamental:</span> (21) 3456-7892
              </p>
              <p className="text-xs text-cav-gray-500">
                Horario de atendimento: segunda a sexta, 7h as 18h
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-cav-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-base font-semibold text-cav-primary">WhatsApp</h3>
            <div className="mt-3 space-y-2 text-sm text-cav-gray-700">
              <p>
                <span className="font-medium">Atendimento geral:</span> (21) 99876-5432
              </p>
              <p>
                Exclusivo para duvidas rapidas e informacoes sobre matricula. Para
                assuntos pedagogicos, utilize o ClassApp.
              </p>
              <p className="text-xs text-cav-gray-500">
                Resposta em ate 24 horas uteis
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-cav-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-base font-semibold text-cav-primary">E-mail</h3>
            <div className="mt-3 space-y-2 text-sm text-cav-gray-700">
              <p>
                <span className="font-medium">Secretaria:</span>{" "}
                secretaria@colegioaltavista.com.br
              </p>
              <p>
                <span className="font-medium">Financeiro:</span>{" "}
                financeiro@colegioaltavista.com.br
              </p>
              <p>
                <span className="font-medium">Direcao:</span>{" "}
                direcao@colegioaltavista.com.br
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-cav-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-base font-semibold text-cav-primary">Endereco</h3>
            <div className="mt-3 space-y-2 text-sm text-cav-gray-700">
              <p>
                Rua das Palmeiras, 1250 - Centro
                <br />
                Cidade Exemplo - RJ, 25000-000
              </p>
              <p className="text-xs text-cav-gray-500">
                Estacionamento disponivel para visitantes na entrada principal
              </p>
            </div>
          </section>
        </div>

        <InfoCallout type="tip" title="Qual canal usar?">
          Para assuntos <strong>pedagogicos</strong> (desempenho, comportamento,
          duvidas sobre conteudo), use o ClassApp e envie mensagem diretamente ao
          professor ou coordenador. Para assuntos <strong>administrativos</strong>{" "}
          (matricula, documentos, financeiro), ligue para a secretaria ou envie
          e-mail. Para <strong>emergencias</strong> durante o horario escolar, ligue
          diretamente para a secretaria.
        </InfoCallout>

        <section className="rounded-2xl border border-cav-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-cav-primary">
            Departamentos e Contato Direto
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-cav-gray-200">
                  <th className="pb-3 pr-4 font-semibold text-cav-primary">Departamento</th>
                  <th className="pb-3 pr-4 font-semibold text-cav-primary">Canal</th>
                  <th className="pb-3 font-semibold text-cav-primary">Quando procurar</th>
                </tr>
              </thead>
              <tbody className="text-cav-gray-700">
                <tr className="border-b border-cav-gray-100">
                  <td className="py-3 pr-4 font-medium">Secretaria</td>
                  <td className="py-3 pr-4">Telefone / E-mail</td>
                  <td className="py-3">Matriculas, documentos, declaracoes</td>
                </tr>
                <tr className="border-b border-cav-gray-100">
                  <td className="py-3 pr-4 font-medium">Coordenacao</td>
                  <td className="py-3 pr-4">ClassApp</td>
                  <td className="py-3">Desempenho, adaptacao, questoes pedagogicas</td>
                </tr>
                <tr className="border-b border-cav-gray-100">
                  <td className="py-3 pr-4 font-medium">Financeiro</td>
                  <td className="py-3 pr-4">E-mail / Telefone</td>
                  <td className="py-3">Boletos, mensalidades, negociacoes</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">Direcao</td>
                  <td className="py-3 pr-4">E-mail / Agendamento</td>
                  <td className="py-3">Sugestoes, reclamacoes, reunioes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </OnboardingLayout>
  );
}
