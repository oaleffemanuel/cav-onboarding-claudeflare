import OnboardingLayout from "@/components/OnboardingLayout";
import PageHeader from "@/components/PageHeader";
import InfoCallout from "@/components/InfoCallout";
import { funcionariosNav } from "@/data/navigation";

export default function RotinasPage() {
  return (
    <OnboardingLayout sidebarItems={funcionariosNav} sidebarTitle="Colaboradores">
      <PageHeader
        title="Rotinas Internas"
        description="Conheça o fluxo diário do Colégio Alta Vista e como cada momento do dia é organizado para garantir o bom funcionamento da escola."
      />

      <div className="space-y-8">
        {/* Chegada e Preparo */}
        <section className="rounded-2xl border border-cav-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cav-primary-50 text-cav-primary">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
              </svg>
            </div>
            <h2 className="text-lg font-semibold text-cav-primary">
              Chegada e Preparo (7h00 - 7h20)
            </h2>
          </div>
          <div className="space-y-3 text-sm leading-relaxed text-cav-gray-700">
            <p>
              Os colaboradores devem chegar à escola com pelo menos 20 minutos de antecedência em
              relação ao início das aulas. Esse tempo é destinado à organização do espaço de
              trabalho, verificação de materiais e preparação das atividades do dia. Registre sua
              presença no ponto eletrônico localizado na entrada dos colaboradores.
            </p>
            <p>
              Professores devem verificar o mural da sala dos professores para comunicados
              importantes, alterações de horário e avisos da coordenação. O material pedagógico
              (projetor, caixas de som, livros didáticos) deve ser reservado previamente quando
              necessário.
            </p>
          </div>
        </section>

        {/* Horário das Aulas */}
        <section className="rounded-2xl border border-cav-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cav-primary-50 text-cav-primary">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-lg font-semibold text-cav-primary">
              Horário das Aulas (7h20 - 12h00)
            </h2>
          </div>
          <div className="space-y-3 text-sm leading-relaxed text-cav-gray-700">
            <p>
              As aulas do período da manhã iniciam às 7h20 e encerram às 12h00. O período da tarde,
              quando aplicável, funciona das 13h30 às 17h50. Cada aula tem duração de 50 minutos,
              com troca de sala sinalizada pelo sinal sonoro. Os professores devem estar em sala
              antes do sinal de início.
            </p>
            <p>
              Durante as aulas, é fundamental manter a porta da sala fechada e evitar interrupções
              desnecessárias. Em caso de necessidade de ausentar-se da sala, solicite o apoio de um
              colega ou da coordenação para supervisionar a turma. Jamais deixe os alunos sozinhos
              em sala de aula.
            </p>
            <div className="mt-4 rounded-xl bg-cav-gray-50 p-4">
              <h3 className="mb-2 text-sm font-semibold text-cav-primary">
                Grade resumida - Manhã
              </h3>
              <div className="space-y-1 text-sm text-cav-gray-700">
                <p>1.o horário: 7h20 - 8h10</p>
                <p>2.o horário: 8h10 - 9h00</p>
                <p>Intervalo: 9h00 - 9h20</p>
                <p>3.o horário: 9h20 - 10h10</p>
                <p>4.o horário: 10h10 - 11h00</p>
                <p>5.o horário: 11h10 - 12h00</p>
              </div>
            </div>
          </div>
        </section>

        {/* Intervalo e Recreio */}
        <section className="rounded-2xl border border-cav-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cav-primary-50 text-cav-primary">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-lg font-semibold text-cav-primary">
              Intervalo e Recreio (9h00 - 9h20)
            </h2>
          </div>
          <div className="space-y-3 text-sm leading-relaxed text-cav-gray-700">
            <p>
              O intervalo é um momento importante para os alunos e também exige atenção dos
              colaboradores. Existe uma escala de supervisão do recreio definida pela coordenação no
              início de cada semestre. Os educadores escalados devem estar presentes no pátio,
              quadra e corredores durante todo o período de intervalo.
            </p>
            <p>
              Durante o recreio, observe o comportamento dos alunos, previna situações de conflito e
              esteja atento(a) a possíveis acidentes. Em caso de qualquer incidente, encaminhe o
              aluno imediatamente à enfermaria e comunique a coordenação. Os colaboradores que não
              estão na escala podem utilizar a sala dos professores para descanso e lanche.
            </p>
          </div>
        </section>

        {/* Encerramento do Dia */}
        <section className="rounded-2xl border border-cav-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cav-primary-50 text-cav-primary">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </div>
            <h2 className="text-lg font-semibold text-cav-primary">
              Encerramento do Dia (12h00 - 12h20)
            </h2>
          </div>
          <div className="space-y-3 text-sm leading-relaxed text-cav-gray-700">
            <p>
              Ao final do último horário, o professor deve acompanhar os alunos até o portão de
              saída ou até o ponto de encontro com os responsáveis, conforme a orientação da
              coordenação para cada segmento. Nenhum aluno deve ser liberado antes do horário oficial
              de saída sem autorização prévia da secretaria.
            </p>
            <p>
              Após a saída dos alunos, organize a sala de aula, desligue equipamentos eletrônicos,
              feche janelas e apague as luzes. Materiais pedagógicos compartilhados devem ser
              devolvidos ao local de origem. Registre sua saída no ponto eletrônico. Caso precise
              permanecer na escola para atividades extras, informe a portaria.
            </p>
          </div>
        </section>

        <InfoCallout type="tip" title="Fique atento aos horários atualizados">
          A grade de horários pode sofrer ajustes ao longo do ano letivo. Consulte sempre a versão
          mais recente no mural da sala dos professores ou no Google Drive institucional. Alterações
          pontuais são comunicadas pela coordenação via ClassApp ou e-mail.
        </InfoCallout>
      </div>
    </OnboardingLayout>
  );
}
