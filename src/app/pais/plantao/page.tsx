import OnboardingLayout from "@/components/OnboardingLayout";
import PageHeader from "@/components/PageHeader";
import OfferCard from "@/components/OfferCard";
import InfoCallout from "@/components/InfoCallout";
import { paisNav } from "@/data/navigation";

export default function PaisPlantao() {
  return (
    <OnboardingLayout sidebarItems={paisNav} sidebarTitle="Pais e Responsaveis">
      <PageHeader
        title="Plantao Escolar"
        description="Horario estendido com atividades dirigidas para as familias que precisam de maior flexibilidade."
      />

      <div className="space-y-6">
        <section className="rounded-2xl border border-cav-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-cav-primary">
            Como funciona o Plantao
          </h2>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-cav-gray-700">
            <p>
              O Plantao Escolar e um servico de permanencia estendida oferecido antes e
              apos o horario regular de aula. Durante esse periodo, os alunos participam
              de atividades recreativas, jogos educativos e momentos de descanso,
              sempre acompanhados por educadores da escola.
            </p>
            <p>
              O servico e ideal para familias que precisam de flexibilidade nos
              horarios de entrada e saida. O Plantao funciona de segunda a sexta-feira
              e pode ser contratado de forma mensal.
            </p>
          </div>
        </section>

        <InfoCallout type="info" title="Horarios do Plantao">
          O Plantao matutino funciona das 7h00 as 7h30 e o Plantao vespertino das
          17h30 as 18h30. Para situacoes excepcionais, entre em contato com a
          secretaria.
        </InfoCallout>

        <div className="max-w-md">
          <OfferCard
            title="Plantao Escolar"
            description="Permanencia estendida com atividades recreativas e acompanhamento de educadores."
            includes={[
              "Horario estendido antes e apos as aulas",
              "Atividades recreativas e jogos educativos",
              "Acompanhamento por educadores qualificados",
              "Lanche incluso no periodo do Plantao",
            ]}
            price="R$ 280,00"
            ctaLabel="Contratar Plantao"
          />
        </div>
      </div>
    </OnboardingLayout>
  );
}
