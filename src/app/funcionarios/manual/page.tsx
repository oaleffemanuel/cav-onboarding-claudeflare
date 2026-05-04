import OnboardingLayout from "@/components/OnboardingLayout";
import PageHeader from "@/components/PageHeader";
import InfoCallout from "@/components/InfoCallout";
import { funcionariosNav } from "@/data/navigation";

export default function ManualPage() {
  return (
    <OnboardingLayout sidebarItems={funcionariosNav} sidebarTitle="Colaboradores">
      <PageHeader
        title="Manual do Educador"
        description="Diretrizes, orientações e boas práticas para o exercício profissional no Colégio Alta Vista."
      />

      <div className="space-y-8">
        {/* Conduta e Ética Profissional */}
        <section className="rounded-2xl border border-cav-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-cav-primary">
            Conduta e Ética Profissional
          </h2>
          <div className="space-y-4 text-sm leading-relaxed text-cav-gray-700">
            <p>
              O Colégio Alta Vista espera de seus colaboradores uma postura ética, profissional e
              comprometida com os valores institucionais. A pontualidade, o respeito mútuo e a
              discrição são pilares fundamentais para a convivência harmoniosa no ambiente escolar.
              Todos os colaboradores devem zelar pela imagem da instituição dentro e fora do colégio.
            </p>
            <p>
              É responsabilidade de cada profissional manter sigilo sobre informações confidenciais
              de alunos, famílias e da própria instituição. Questões internas devem ser tratadas nos
              canais apropriados, evitando comentários em redes sociais ou ambientes informais que
              possam comprometer a confiança das famílias ou a reputação do colégio.
            </p>
            <p>
              O uso de celular durante o horário de trabalho deve ser restrito a fins profissionais.
              Em sala de aula, o celular deve permanecer em modo silencioso. Em casos de urgência
              pessoal, comunique a coordenação para que as medidas adequadas sejam tomadas sem
              prejuízo ao atendimento dos alunos.
            </p>
          </div>

          <InfoCallout type="warning" title="Atenção">
            Qualquer situação que envolva conflito com alunos, famílias ou colegas deve ser
            comunicada imediatamente à coordenação ou à direção. Nunca tente resolver sozinho(a)
            situações delicadas que possam gerar desconforto ou mal-entendidos.
          </InfoCallout>
        </section>

        {/* Relação com Alunos e Famílias */}
        <section className="rounded-2xl border border-cav-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-cav-primary">
            Relação com Alunos e Famílias
          </h2>
          <div className="space-y-4 text-sm leading-relaxed text-cav-gray-700">
            <p>
              A relação com os alunos deve ser pautada pelo respeito, acolhimento e firmeza. O
              educador é uma referência para o estudante e, por isso, suas atitudes, palavras e
              postura são observadas e internalizadas. Mantenha sempre um tom de voz calmo, use
              linguagem adequada e demonstre genuíno interesse pelo bem-estar e pelo aprendizado de
              cada aluno.
            </p>
            <p>
              O contato com as famílias deve ocorrer exclusivamente pelos canais oficiais da escola,
              como o ClassApp e os e-mails institucionais. Evite adicionar pais ou responsáveis em
              redes sociais pessoais. As reuniões de pais são momentos privilegiados para fortalecer
              a parceria escola-família. Prepare-se para esses encontros com registros de
              acompanhamento e observações individualizadas.
            </p>
            <p>
              Em situações de queixas ou reclamações das famílias, ouça com atenção, demonstre
              empatia e encaminhe à coordenação quando necessário. Nunca discuta questões pedagógicas
              ou disciplinares na porta da sala ou em corredores. Agende um horário adequado para
              conversas mais aprofundadas.
            </p>
          </div>

          <InfoCallout type="tip" title="Boa prática">
            Mantenha um caderno ou planilha de observações sobre o desenvolvimento dos alunos. Esses
            registros são valiosos para reuniões pedagógicas, conselhos de classe e devolutivas às
            famílias.
          </InfoCallout>
        </section>

        {/* Planejamento Pedagógico */}
        <section className="rounded-2xl border border-cav-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-cav-primary">
            Planejamento Pedagógico
          </h2>
          <div className="space-y-4 text-sm leading-relaxed text-cav-gray-700">
            <p>
              O planejamento é a base de uma prática pedagógica consistente e significativa. Todos os
              educadores devem entregar seus planos de aula semanalmente à coordenação pedagógica,
              conforme o modelo disponibilizado no Google Drive institucional. O planejamento deve
              contemplar objetivos claros, metodologias, recursos necessários e critérios de
              avaliação.
            </p>
            <p>
              Os projetos interdisciplinares são realizados por bimestre e devem ser elaborados em
              conjunto com os colegas das áreas envolvidas. A coordenação pedagógica disponibiliza
              horários para reuniões de planejamento colaborativo. Aproveite esses momentos para
              trocar experiências, alinhar conteúdos e propor atividades integradoras.
            </p>
            <p>
              A adaptação curricular para alunos com necessidades especiais deve ser feita em
              parceria com a equipe de inclusão e a coordenação. Os Planos de Desenvolvimento
              Individual (PDI) são elaborados no início do ano e revisados bimestralmente, garantindo
              que cada aluno receba o suporte adequado ao seu ritmo de aprendizagem.
            </p>
          </div>
        </section>

        {/* Avaliação e Acompanhamento */}
        <section className="rounded-2xl border border-cav-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-cav-primary">
            Avaliação e Acompanhamento
          </h2>
          <div className="space-y-4 text-sm leading-relaxed text-cav-gray-700">
            <p>
              A avaliação no Colégio Alta Vista é processual e formativa. Isso significa que o
              aprendizado do aluno é acompanhado de forma contínua ao longo do bimestre, e não
              apenas em momentos pontuais de prova. Utilize instrumentos diversificados: atividades
              em grupo, produções textuais, apresentações, portfólios, autoavaliações e, quando
              pertinente, avaliações escritas.
            </p>
            <p>
              Os resultados das avaliações devem ser lançados no sistema de gestão escolar dentro dos
              prazos estipulados pela secretaria. As notas e pareceres descritivos compõem o boletim
              que é compartilhado com as famílias ao final de cada bimestre. Em caso de alunos com
              desempenho abaixo do esperado, elabore um plano de recuperação contínua e comunique a
              coordenação.
            </p>
            <p>
              Os conselhos de classe são realizados ao final de cada bimestre e contam com a
              participação de todos os educadores. Prepare-se trazendo dados concretos sobre o
              desempenho e o comportamento dos alunos. Este é o momento de alinhar estratégias,
              identificar dificuldades recorrentes e propor intervenções coletivas.
            </p>
          </div>

          <InfoCallout type="info" title="Prazos importantes">
            Os prazos para lançamento de notas e entrega de planejamentos são divulgados no
            calendário escolar e reforçados pela coordenação no início de cada bimestre. Fique
            atento(a) e organize-se para cumprir todas as datas.
          </InfoCallout>
        </section>
      </div>
    </OnboardingLayout>
  );
}
