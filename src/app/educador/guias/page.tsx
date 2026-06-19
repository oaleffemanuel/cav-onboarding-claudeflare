import { Target, Eye, Compass as CompassIcon } from "lucide-react";
import PageContainer from "@/components/educador/PageContainer";
import ContentCard from "@/components/educador/ContentCard";
import { corePillars, educationDimensions } from "@/data/educador";
import { toneStyles } from "@/components/educador/tones";

export default function GuiasPage() {
  return (
    <PageContainer
      crumbs={[{ label: "Guias" }]}
      eyebrow="Guias"
      title="Valores, missão e proposta pedagógica"
      intro="A essência do Alta Vista: uma educação personalizada e integral, em parceria com as famílias, que forma a melhor versão de cada estudante."
    >
      {/* Missão · Visão · Propósito */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {[
          { icon: Target, label: "Missão", text: "Promover o desenvolvimento integral dos alunos em estreita parceria com os pais, a fim de que cada criança se transforme na melhor versão de si mesma.", tone: "blue" as const },
          { icon: Eye, label: "Visão", text: "Lealdade, caridade, transparência, amor à liberdade, identidade cristã católica, respeito, espírito de serviço, excelência e amor ao Belo, ao Bem e ao Verdadeiro.", tone: "red" as const },
          { icon: CompassIcon, label: "Propósito", text: "Estar na vanguarda da educação personalizada e influir positivamente na sociedade, por meio de uma formação integral de excelência.", tone: "green" as const },
        ].map((item) => {
          const tone = toneStyles[item.tone];
          const Icon = item.icon;
          return (
            <div key={item.label} className="flex flex-col rounded-2xl border border-border bg-surface p-6 shadow-[0_1px_3px_rgba(16,24,40,0.04)]">
              <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-2xl ${tone.soft} ${tone.text}`}>
                <Icon className="h-5 w-5" strokeWidth={2} />
              </div>
              <h2 className="text-[15px] font-bold text-cav-gray-800">{item.label}</h2>
              <p className="mt-2 text-sm leading-relaxed text-cav-gray-500">{item.text}</p>
            </div>
          );
        })}
      </div>

      {/* Pilares pedagógicos */}
      <section className="mt-12">
        <h2 className="text-xl font-bold tracking-tight text-cav-gray-800">
          Nossos pilares pedagógicos
        </h2>
        <p className="mt-1 text-sm text-cav-gray-500">
          Conceitos que sustentam toda a proposta do Colégio Alta Vista.
        </p>
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {corePillars.map((pillar) => {
            const tone = toneStyles[pillar.tone];
            const Icon = pillar.icon;
            return (
              <div key={pillar.title} className="flex flex-col rounded-2xl border border-border bg-surface p-6 shadow-[0_1px_3px_rgba(16,24,40,0.04)]">
                <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-2xl ${tone.soft} ${tone.text}`}>
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <h3 className="text-[15px] font-semibold text-cav-gray-800">{pillar.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-cav-gray-500">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Flagship — Educação Personalizada: as 5 dimensões */}
      <section className="mt-14">
        <div className="rounded-3xl border border-border bg-gradient-to-br from-brand-blue to-brand-blue-dark p-8 text-white sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-white/80">
            Educação Personalizada
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
            As cinco dimensões da pessoa
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/85">
            Formamos cada estudante de maneira integral, cuidando do crescimento
            harmônico de todas as suas dimensões — intelectual, físico-corporal,
            afetiva, transcendental e da vontade.
          </p>
        </div>

        <div className="mt-6 space-y-5">
          {educationDimensions.map((dim, i) => {
            const tone = toneStyles[dim.tone];
            const Icon = dim.icon;
            return (
              <article
                key={dim.id}
                id={dim.id}
                className="scroll-mt-24 rounded-2xl border border-border bg-surface p-6 shadow-[0_1px_3px_rgba(16,24,40,0.04)] sm:p-8"
              >
                <div className="flex items-center gap-4">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${tone.soft} ${tone.text}`}>
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </div>
                  <div>
                    <span className={`text-xs font-semibold uppercase tracking-wide ${tone.text}`}>
                      Dimensão {i + 1}
                    </span>
                    <h3 className="text-lg font-bold tracking-tight text-cav-gray-800">
                      {dim.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-4 text-[15px] leading-relaxed text-cav-gray-700">
                  {dim.purpose}
                </p>

                <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-cav-gray-400">
                      Impacto educativo
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-cav-gray-600">{dim.impact}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-cav-gray-400">
                      Como o educador contribui
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-cav-gray-600">{dim.educatorRole}</p>
                  </div>
                </div>

                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-cav-gray-400">
                    Exemplos práticos
                  </p>
                  <ul className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-3">
                    {dim.examples.map((ex) => (
                      <li
                        key={ex}
                        className={`rounded-xl ${tone.soft} px-3 py-2 text-sm text-cav-gray-700`}
                      >
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <ContentCard title="Nossa identidade">
        <p className="text-[15px] leading-relaxed text-cav-gray-600">
          O Colégio Alta Vista nasceu da associação de famílias e educadores em
          prol de uma educação de qualidade e personalizada, de identidade cristã
          católica. É parceiro da Solar Colégios (Fomento Centros de Enseñanza),
          rede presente em diversos estados, unindo protagonismo das famílias,
          educação integral e excelência acadêmica.
        </p>
      </ContentCard>
    </PageContainer>
  );
}
