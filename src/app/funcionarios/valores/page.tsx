import OnboardingLayout from "@/components/OnboardingLayout";
import PageHeader from "@/components/PageHeader";
import InfoCallout from "@/components/InfoCallout";
import { funcionariosNav } from "@/data/navigation";

export default function ValoresPage() {
  return (
    <OnboardingLayout sidebarItems={funcionariosNav} sidebarTitle="Colaboradores">
      <PageHeader
        title="Valores e Proposta Pedagógica"
        description="Os pilares que orientam nossa prática educacional e o convívio diário no Colégio Alta Vista."
      />

      <div className="space-y-8">
        {/* Missão */}
        <section className="rounded-2xl border border-cav-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-lg font-semibold text-cav-primary">Missão</h2>
          <p className="text-sm leading-relaxed text-cav-gray-700">
            Promover uma educação de excelência que integre formação acadêmica, desenvolvimento
            humano e valores éticos, preparando nossos alunos para serem protagonistas de suas
            histórias e agentes de transformação na sociedade. Acreditamos que educar é um ato de
            amor, responsabilidade e compromisso com o futuro.
          </p>
        </section>

        {/* Visão */}
        <section className="rounded-2xl border border-cav-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-lg font-semibold text-cav-primary">Visão</h2>
          <p className="text-sm leading-relaxed text-cav-gray-700">
            Ser referência em educação integral na região, reconhecida pela qualidade do ensino,
            pelo acolhimento das famílias e pelo desenvolvimento contínuo de seus colaboradores.
            Buscamos construir uma comunidade escolar onde cada pessoa se sinta valorizada,
            respeitada e inspirada a dar o seu melhor todos os dias.
          </p>
        </section>

        {/* Valores */}
        <section className="rounded-2xl border border-cav-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-cav-primary">Valores</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-cav-primary-50 p-4">
              <h3 className="mb-1 text-sm font-semibold text-cav-primary">Acolhimento</h3>
              <p className="text-sm leading-relaxed text-cav-gray-700">
                Recebemos cada aluno, família e colega com empatia e respeito, criando um ambiente
                seguro onde todos se sintam bem-vindos e pertencentes.
              </p>
            </div>
            <div className="rounded-xl bg-cav-primary-50 p-4">
              <h3 className="mb-1 text-sm font-semibold text-cav-primary">Excelência</h3>
              <p className="text-sm leading-relaxed text-cav-gray-700">
                Buscamos a melhoria contínua em tudo o que fazemos, da preparação das aulas à
                organização dos espaços, sempre com dedicação e profissionalismo.
              </p>
            </div>
            <div className="rounded-xl bg-cav-primary-50 p-4">
              <h3 className="mb-1 text-sm font-semibold text-cav-primary">Ética</h3>
              <p className="text-sm leading-relaxed text-cav-gray-700">
                Agimos com integridade, transparência e coerência, sendo exemplo para nossos alunos
                e fortalecendo a confiança das famílias.
              </p>
            </div>
            <div className="rounded-xl bg-cav-primary-50 p-4">
              <h3 className="mb-1 text-sm font-semibold text-cav-primary">Colaboração</h3>
              <p className="text-sm leading-relaxed text-cav-gray-700">
                Trabalhamos em equipe, valorizando a contribuição de cada profissional e construindo
                soluções conjuntas para os desafios do cotidiano escolar.
              </p>
            </div>
            <div className="rounded-xl bg-cav-primary-50 p-4">
              <h3 className="mb-1 text-sm font-semibold text-cav-primary">Inovação</h3>
              <p className="text-sm leading-relaxed text-cav-gray-700">
                Estamos abertos a novas ideias, metodologias e tecnologias que enriqueçam o processo
                de ensino-aprendizagem e a gestão escolar.
              </p>
            </div>
            <div className="rounded-xl bg-cav-primary-50 p-4">
              <h3 className="mb-1 text-sm font-semibold text-cav-primary">Responsabilidade Social</h3>
              <p className="text-sm leading-relaxed text-cav-gray-700">
                Formamos cidadãos conscientes e comprometidos com a comunidade, incentivando ações
                solidárias e o respeito ao meio ambiente.
              </p>
            </div>
          </div>
        </section>

        {/* Proposta Pedagógica */}
        <section className="rounded-2xl border border-cav-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-lg font-semibold text-cav-primary">Proposta Pedagógica</h2>
          <div className="space-y-4 text-sm leading-relaxed text-cav-gray-700">
            <p>
              O Colégio Alta Vista adota uma abordagem pedagógica que combina o rigor acadêmico com
              a formação integral do aluno. Nossa proposta é fundamentada em metodologias ativas, que
              colocam o estudante no centro do processo de aprendizagem e incentivam o pensamento
              crítico, a criatividade e a autonomia.
            </p>
            <p>
              Trabalhamos com projetos interdisciplinares, aprendizagem colaborativa e uso
              intencional de tecnologia, sempre respeitando as etapas de desenvolvimento de cada
              faixa etária. O currículo é enriquecido com atividades culturais, esportivas e de
              cidadania, garantindo que a formação vá além dos conteúdos tradicionais.
            </p>
            <p>
              A avaliação é processual e formativa, valorizando o progresso individual de cada aluno
              e oferecendo devolutivas construtivas tanto para estudantes quanto para famílias. Nossos
              educadores são mediadores do conhecimento, facilitando descobertas e promovendo
              experiências de aprendizagem significativas.
            </p>
          </div>
        </section>

        <InfoCallout type="info" title="O seu papel nessa missão">
          Cada colaborador do Colégio Alta Vista, independentemente da sua função, é um educador.
          Nossos valores se manifestam nas pequenas atitudes do dia a dia: no sorriso ao receber um
          aluno, na organização dos espaços, na comunicação respeitosa com as famílias e no cuidado
          com os colegas de equipe. Você é parte essencial dessa missão.
        </InfoCallout>
      </div>
    </OnboardingLayout>
  );
}
