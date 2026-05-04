import OnboardingLayout from "@/components/OnboardingLayout";
import PageHeader from "@/components/PageHeader";
import InfoCallout from "@/components/InfoCallout";
import { paisNav } from "@/data/navigation";

export default function PaisValores() {
  return (
    <OnboardingLayout sidebarItems={paisNav} sidebarTitle="Pais e Responsaveis">
      <PageHeader
        title="Valores e Proposta Pedagogica"
        description="Conheca os principios que orientam nossa pratica educativa e o desenvolvimento integral dos nossos alunos."
      />

      <div className="space-y-8">
        <section className="rounded-2xl border border-cav-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-cav-primary">Missao</h2>
          <p className="mt-3 text-sm leading-relaxed text-cav-gray-700">
            Promover uma educacao de excelencia que forme cidadaos criticos, eticos e
            solidarios, preparados para os desafios do mundo contemporaneo. Buscamos
            desenvolver em cada aluno o prazer pelo conhecimento, a autonomia intelectual
            e a responsabilidade social, em parceria constante com as familias.
          </p>
        </section>

        <section className="rounded-2xl border border-cav-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-cav-primary">Visao</h2>
          <p className="mt-3 text-sm leading-relaxed text-cav-gray-700">
            Ser reconhecido como referencia em educacao na regiao, formando geracoes de
            jovens confiantes, criativos e comprometidos com a construcao de uma
            sociedade mais justa. Queremos que cada aluno que passe pelo Alta Vista leve
            consigo nao apenas conhecimento academico, mas valores humanos solidos que o
            acompanhem por toda a vida.
          </p>
        </section>

        <section className="rounded-2xl border border-cav-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-cav-primary">Nossos Valores</h2>
          <ul className="mt-4 space-y-3">
            {[
              {
                name: "Respeito",
                desc: "Valorizamos cada pessoa em sua individualidade, promovendo o dialogo e a escuta ativa em todas as relacoes.",
              },
              {
                name: "Excelencia",
                desc: "Buscamos a qualidade em tudo o que fazemos, da pratica pedagogica ao atendimento as familias.",
              },
              {
                name: "Colaboracao",
                desc: "Acreditamos que a educacao e uma construcao coletiva entre escola, familia e comunidade.",
              },
              {
                name: "Inovacao",
                desc: "Estamos sempre atualizando nossas praticas, incorporando novas metodologias e tecnologias ao processo de ensino.",
              },
              {
                name: "Acolhimento",
                desc: "Cada aluno e recebido com carinho e atencao, em um ambiente seguro e estimulante para o aprendizado.",
              },
            ].map((valor) => (
              <li
                key={valor.name}
                className="flex items-start gap-3 text-sm text-cav-gray-700"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cav-primary-50 text-xs font-bold text-cav-primary">
                  {valor.name.charAt(0)}
                </span>
                <div>
                  <span className="font-semibold text-cav-primary">{valor.name}</span>
                  <span className="ml-1">{valor.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <InfoCallout type="info" title="Nossa essencia">
          &ldquo;Educar e acreditar no potencial de cada crianca e oferecer as
          ferramentas para que ela construa o seu proprio caminho.&rdquo;
        </InfoCallout>

        <section className="rounded-2xl border border-cav-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-cav-primary">Proposta Pedagogica</h2>
          <div className="mt-3 space-y-4 text-sm leading-relaxed text-cav-gray-700">
            <p>
              Nossa proposta pedagogica e fundamentada em uma abordagem sociointeracionista,
              que valoriza a construcao do conhecimento a partir da interacao do aluno com
              o meio, com os colegas e com os educadores. Trabalhamos com projetos
              interdisciplinares que conectam os conteudos curriculares a situacoes reais
              do cotidiano.
            </p>
            <p>
              Na Educacao Infantil, priorizamos o brincar como linguagem principal,
              estimulando a curiosidade, a criatividade e o desenvolvimento
              socioemocional. No Ensino Fundamental, ampliamos gradualmente a
              complexidade dos desafios, incentivando a pesquisa, o pensamento critico e
              a resolucao de problemas.
            </p>
            <p>
              Contamos com uma equipe pedagogica qualificada e em constante formacao,
              alem de recursos como laboratorio de ciencias, sala de leitura, quadra
              poliesportiva e espacos verdes que enriquecem a experiencia educacional dos
              nossos alunos.
            </p>
          </div>
        </section>
      </div>
    </OnboardingLayout>
  );
}
