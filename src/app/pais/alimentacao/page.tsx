import OnboardingLayout from "@/components/OnboardingLayout";
import PageHeader from "@/components/PageHeader";
import OfferCard from "@/components/OfferCard";
import InfoCallout from "@/components/InfoCallout";
import { paisNav } from "@/data/navigation";

export default function PaisAlimentacao() {
  return (
    <OnboardingLayout sidebarItems={paisNav} sidebarTitle="Pais e Responsaveis">
      <PageHeader
        title="Alimentacao"
        description="Uma alimentacao saudavel e equilibrada faz parte do nosso compromisso com o bem-estar dos alunos."
      />

      <div className="space-y-6">
        <section className="rounded-2xl border border-cav-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-cav-primary">
            Nosso Programa de Nutricao
          </h2>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-cav-gray-700">
            <p>
              O servico de alimentacao do Colegio Alta Vista e acompanhado por uma
              nutricionista que elabora cardapios semanais equilibrados, respeitando as
              necessidades nutricionais de cada faixa etaria. Todos os alimentos sao
              preparados na cozinha da escola com ingredientes frescos e de qualidade.
            </p>
            <p>
              Trabalhamos tambem a educacao alimentar em sala de aula, incentivando os
              alunos a experimentar novos sabores e a desenvolver habitos saudaveis que
              levarao para a vida toda. O cardapio da semana e compartilhado com as
              familias pelo ClassApp toda sexta-feira.
            </p>
          </div>
        </section>

        <InfoCallout type="info" title="Restricoes alimentares">
          Caso seu filho possua alguma restricao alimentar ou alergia, informe a
          secretaria no ato da matricula. Nossa nutricionista preparara um cardapio
          adaptado para garantir seguranca e qualidade na alimentacao.
        </InfoCallout>

        <div className="max-w-md">
          <OfferCard
            title="Plano Alimentacao"
            description="Refeicoes completas e balanceadas, preparadas diariamente na escola com acompanhamento nutricional."
            includes={[
              "Almoco completo com proteina, carboidrato, salada e sobremesa",
              "Dois lanches diarios (manha e tarde)",
              "Cardapio semanal elaborado por nutricionista",
              "Adaptacao para restricoes alimentares e alergias",
              "Educacao alimentar integrada ao curriculo",
            ]}
            price="R$ 450,00"
            ctaLabel="Contratar Alimentacao"
            highlight
          />
        </div>
      </div>
    </OnboardingLayout>
  );
}
