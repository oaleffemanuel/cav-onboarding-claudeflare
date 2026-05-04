import OnboardingLayout from "@/components/OnboardingLayout";
import PageHeader from "@/components/PageHeader";
import InfoCallout from "@/components/InfoCallout";
import { paisNav } from "@/data/navigation";

export default function PaisHorarios() {
  return (
    <OnboardingLayout sidebarItems={paisNav} sidebarTitle="Pais e Responsaveis">
      <PageHeader
        title="Horarios"
        description="Confira os horarios de funcionamento da escola, aulas e atendimento da secretaria."
      />

      <div className="space-y-6">
        <section className="rounded-2xl border border-cav-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-cav-primary">
            Horario das Aulas por Segmento
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-cav-gray-200">
                  <th className="pb-3 pr-4 font-semibold text-cav-primary">Segmento</th>
                  <th className="pb-3 pr-4 font-semibold text-cav-primary">Turno</th>
                  <th className="pb-3 pr-4 font-semibold text-cav-primary">Entrada</th>
                  <th className="pb-3 font-semibold text-cav-primary">Saida</th>
                </tr>
              </thead>
              <tbody className="text-cav-gray-700">
                <tr className="border-b border-cav-gray-100">
                  <td className="py-3 pr-4 font-medium">Educacao Infantil</td>
                  <td className="py-3 pr-4">Manha</td>
                  <td className="py-3 pr-4">7h30</td>
                  <td className="py-3">11h45</td>
                </tr>
                <tr className="border-b border-cav-gray-100">
                  <td className="py-3 pr-4 font-medium">Educacao Infantil</td>
                  <td className="py-3 pr-4">Tarde</td>
                  <td className="py-3 pr-4">13h15</td>
                  <td className="py-3">17h30</td>
                </tr>
                <tr className="border-b border-cav-gray-100">
                  <td className="py-3 pr-4 font-medium">Fundamental I (1o ao 5o)</td>
                  <td className="py-3 pr-4">Manha</td>
                  <td className="py-3 pr-4">7h15</td>
                  <td className="py-3">11h45</td>
                </tr>
                <tr className="border-b border-cav-gray-100">
                  <td className="py-3 pr-4 font-medium">Fundamental I (1o ao 5o)</td>
                  <td className="py-3 pr-4">Tarde</td>
                  <td className="py-3 pr-4">13h15</td>
                  <td className="py-3">17h45</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">Fundamental II (6o ao 9o)</td>
                  <td className="py-3 pr-4">Manha</td>
                  <td className="py-3 pr-4">7h00</td>
                  <td className="py-3">12h20</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-2xl border border-cav-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-cav-primary">
            Entrada e Saida dos Alunos
          </h2>
          <div className="space-y-3 text-sm leading-relaxed text-cav-gray-700">
            <p>
              Os portoes da escola sao abertos 15 minutos antes do horario de entrada
              e permanecem abertos ate 10 minutos apos o horario de inicio das aulas.
              Apos esse periodo, a entrada sera registrada como atraso.
            </p>
            <p>
              Na saida, os alunos da Educacao Infantil e do Fundamental I sao
              entregues exclusivamente a pessoas autorizadas previamente pela familia.
              Os alunos do Fundamental II podem ser autorizados a sair sozinhos,
              mediante termo assinado pelo responsavel.
            </p>
          </div>
        </section>

        <InfoCallout type="warning" title="Atencao a pontualidade">
          Atrasos frequentes prejudicam o aproveitamento do aluno e a rotina da
          turma. Em caso de atraso, o aluno sera recebido na secretaria e encaminhado
          a sala de aula no intervalo mais proximo. Apos 3 atrasos no mes, a familia
          sera contatada pela coordenacao.
        </InfoCallout>

        <section className="rounded-2xl border border-cav-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-cav-primary">
            Horario da Secretaria
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-cav-gray-200">
                  <th className="pb-3 pr-4 font-semibold text-cav-primary">Dia</th>
                  <th className="pb-3 pr-4 font-semibold text-cav-primary">Horario</th>
                </tr>
              </thead>
              <tbody className="text-cav-gray-700">
                <tr className="border-b border-cav-gray-100">
                  <td className="py-3 pr-4 font-medium">Segunda a Sexta</td>
                  <td className="py-3">7h00 as 18h00</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">Sabado</td>
                  <td className="py-3">8h00 as 12h00 (somente matriculas)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </OnboardingLayout>
  );
}
