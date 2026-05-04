import OnboardingLayout from "@/components/OnboardingLayout";
import PageHeader from "@/components/PageHeader";
import InfoCallout from "@/components/InfoCallout";
import { funcionariosNav } from "@/data/navigation";

export default function ComunicacaoPage() {
  return (
    <OnboardingLayout sidebarItems={funcionariosNav} sidebarTitle="Colaboradores">
      <PageHeader
        title="Comunicação entre Setores"
        description="Saiba como e quando entrar em contato com cada departamento do Colégio Alta Vista para resolver suas demandas de forma eficiente."
      />

      <div className="space-y-8">
        <InfoCallout type="info" title="Regra geral de comunicação">
          Para assuntos formais e que necessitem de registro, utilize sempre o e-mail institucional.
          Para questões urgentes do dia a dia, o contato presencial ou por telefone interno é o mais
          indicado. Evite tratar assuntos profissionais por WhatsApp pessoal.
        </InfoCallout>

        {/* Direção */}
        <section className="rounded-2xl border border-cav-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-lg font-semibold text-cav-primary">
            Direção
          </h2>
          <div className="space-y-3 text-sm leading-relaxed text-cav-gray-700">
            <p>
              A Direção é responsável pelas decisões estratégicas, representação institucional e
              gestão geral do colégio. Para assuntos que envolvam questões administrativas de grande
              porte, parcerias externas, situações disciplinares graves ou demandas que não foram
              resolvidas pela coordenação, a Direção deve ser acionada.
            </p>
            <div className="rounded-xl bg-cav-gray-50 p-4">
              <p><span className="font-semibold text-cav-primary">Canal preferencial:</span> E-mail ou agendamento presencial via secretaria</p>
              <p><span className="font-semibold text-cav-primary">E-mail:</span> direcao@colegioaltavista.com.br</p>
              <p><span className="font-semibold text-cav-primary">Ramal:</span> 201</p>
              <p><span className="font-semibold text-cav-primary">Horário de atendimento:</span> Segunda a sexta, 8h00 - 12h00 e 13h30 - 17h00</p>
            </div>
          </div>
        </section>

        {/* Secretaria */}
        <section className="rounded-2xl border border-cav-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-lg font-semibold text-cav-primary">
            Secretaria
          </h2>
          <div className="space-y-3 text-sm leading-relaxed text-cav-gray-700">
            <p>
              A Secretaria cuida de toda a documentação escolar, matrículas, transferências,
              declarações, históricos e atualização cadastral. É também o setor responsável pelo
              controle de ponto, solicitações de férias, atestados e demandas administrativas dos
              colaboradores.
            </p>
            <div className="rounded-xl bg-cav-gray-50 p-4">
              <p><span className="font-semibold text-cav-primary">Canal preferencial:</span> Presencial ou e-mail</p>
              <p><span className="font-semibold text-cav-primary">E-mail:</span> secretaria@colegioaltavista.com.br</p>
              <p><span className="font-semibold text-cav-primary">Ramal:</span> 202</p>
              <p><span className="font-semibold text-cav-primary">Horário de atendimento:</span> Segunda a sexta, 7h30 - 17h30</p>
            </div>
          </div>
        </section>

        {/* Coordenação */}
        <section className="rounded-2xl border border-cav-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-lg font-semibold text-cav-primary">
            Coordenação Pedagógica
          </h2>
          <div className="space-y-3 text-sm leading-relaxed text-cav-gray-700">
            <p>
              A Coordenação Pedagógica é o principal ponto de apoio para os educadores. É
              responsável pelo acompanhamento do planejamento, suporte metodológico, mediação de
              conflitos com alunos e famílias, organização dos conselhos de classe e formações
              internas. Para dúvidas sobre currículo, avaliações ou situações em sala de aula,
              procure a coordenação do seu segmento.
            </p>
            <div className="rounded-xl bg-cav-gray-50 p-4">
              <p><span className="font-semibold text-cav-primary">Canal preferencial:</span> Presencial, ClassApp ou e-mail</p>
              <p><span className="font-semibold text-cav-primary">E-mail (Ed. Infantil):</span> coord.infantil@colegioaltavista.com.br</p>
              <p><span className="font-semibold text-cav-primary">E-mail (Fundamental):</span> coord.fundamental@colegioaltavista.com.br</p>
              <p><span className="font-semibold text-cav-primary">Ramal:</span> 203 (Infantil) / 204 (Fundamental)</p>
              <p><span className="font-semibold text-cav-primary">Horário de atendimento:</span> Segunda a sexta, 7h30 - 17h00</p>
            </div>
          </div>
        </section>

        {/* Financeiro */}
        <section className="rounded-2xl border border-cav-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-lg font-semibold text-cav-primary">
            Financeiro
          </h2>
          <div className="space-y-3 text-sm leading-relaxed text-cav-gray-700">
            <p>
              O setor Financeiro é responsável pela folha de pagamento, benefícios, reembolsos,
              adiantamentos e questões contratuais dos colaboradores. Para dúvidas sobre
              contracheque, vale-transporte, vale-alimentação ou qualquer assunto financeiro, entre
              em contato diretamente com o setor.
            </p>
            <div className="rounded-xl bg-cav-gray-50 p-4">
              <p><span className="font-semibold text-cav-primary">Canal preferencial:</span> E-mail</p>
              <p><span className="font-semibold text-cav-primary">E-mail:</span> financeiro@colegioaltavista.com.br</p>
              <p><span className="font-semibold text-cav-primary">Ramal:</span> 206</p>
              <p><span className="font-semibold text-cav-primary">Horário de atendimento:</span> Segunda a sexta, 8h00 - 12h00 e 13h30 - 17h00</p>
            </div>
          </div>
        </section>

        {/* TI */}
        <section className="rounded-2xl border border-cav-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-lg font-semibold text-cav-primary">
            Tecnologia da Informação (TI)
          </h2>
          <div className="space-y-3 text-sm leading-relaxed text-cav-gray-700">
            <p>
              O setor de TI oferece suporte técnico para todas as ferramentas e equipamentos
              utilizados no colégio. Isso inclui problemas com computadores, projetores, Wi-Fi,
              acesso a plataformas, criação de contas e manutenção de equipamentos de sala de aula.
              Para solicitar suporte, envie um e-mail descrevendo o problema com detalhes (local,
              equipamento, erro apresentado).
            </p>
            <div className="rounded-xl bg-cav-gray-50 p-4">
              <p><span className="font-semibold text-cav-primary">Canal preferencial:</span> E-mail ou ramal interno</p>
              <p><span className="font-semibold text-cav-primary">E-mail:</span> ti@colegioaltavista.com.br</p>
              <p><span className="font-semibold text-cav-primary">Ramal:</span> 205</p>
              <p><span className="font-semibold text-cav-primary">Horário de atendimento:</span> Segunda a sexta, 7h30 - 17h00</p>
            </div>
          </div>
        </section>

        <InfoCallout type="tip" title="Dica de comunicação">
          Ao enviar e-mails internos, utilize sempre o assunto de forma clara e objetiva (ex:
          &quot;Solicitação de reserva de projetor - Sala 12 - 05/03&quot;). Isso facilita a organização e
          agiliza o atendimento. Para assuntos urgentes, combine o e-mail com um contato por ramal.
        </InfoCallout>
      </div>
    </OnboardingLayout>
  );
}
