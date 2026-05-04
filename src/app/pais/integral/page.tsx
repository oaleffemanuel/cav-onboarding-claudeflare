import OnboardingLayout from "@/components/OnboardingLayout";
import PageHeader from "@/components/PageHeader";
import OfferCard from "@/components/OfferCard";
import InfoCallout from "@/components/InfoCallout";
import { paisNav } from "@/data/navigation";

export default function PaisIntegral() {
  return (
    <OnboardingLayout sidebarItems={paisNav} sidebarTitle="Pais e Responsaveis">
      <PageHeader
        title="Periodo Integral"
        description="Uma jornada completa de aprendizado, convivencia e desenvolvimento para o seu filho."
      />

      <div className="space-y-6">
        <section className="rounded-2xl border border-cav-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-cav-primary">
            Sobre o Periodo Integral
          </h2>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-cav-gray-700">
            <p>
              O Periodo Integral do Colegio Alta Vista oferece uma experiencia
              educacional ampliada, com uma rotina cuidadosamente planejada que
              combina estudo, atividades culturais, esportivas e momentos de lazer. O
              aluno permanece na escola durante todo o dia, em um ambiente acolhedor
              e estimulante.
            </p>
            <p>
              Alem das aulas regulares, os alunos do integral participam de oficinas
              pedagogicas, estudo dirigido com acompanhamento de professores,
              atividades artisticas e esportivas. A alimentacao completa (almoco e
              lanches) esta inclusa no programa.
            </p>
            <p>
              O Integral funciona de segunda a sexta-feira, das 7h00 as 18h30, e esta
              disponivel para alunos da Educacao Infantil e do Ensino Fundamental I.
            </p>
          </div>
        </section>

        <InfoCallout type="tip" title="Adaptacao gradual">
          Para alunos que estao ingressando no Integral pela primeira vez,
          oferecemos um periodo de adaptacao gradual nas primeiras semanas, com
          horarios flexiveis para que a crianca se sinta segura e confortavel.
        </InfoCallout>

        <div className="max-w-md">
          <OfferCard
            title="Periodo Integral"
            description="Jornada completa com ensino regular, alimentacao, estudo dirigido e atividades complementares."
            includes={[
              "Permanencia de 7h00 as 18h30",
              "Almoco e dois lanches diarios inclusos",
              "Estudo dirigido com acompanhamento pedagogico",
              "Oficinas de arte, musica e movimento",
              "Atividades esportivas e recreativas",
              "Momento de descanso orientado",
            ]}
            price="R$ 850,00"
            ctaLabel="Contratar Integral"
            highlight
          />
        </div>
      </div>
    </OnboardingLayout>
  );
}
