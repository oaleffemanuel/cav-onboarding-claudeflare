import PageContainer from "@/components/educador/PageContainer";
import ContentCard from "@/components/educador/ContentCard";
import Markdown from "@/components/educador/Markdown";
import StatusBadge from "@/components/educador/StatusBadge";
import { tools } from "@/data/educador";
import { toneStyles } from "@/components/educador/tones";

export default function FerramentasPage() {
  return (
    <PageContainer
      crumbs={[{ label: "Ferramentas" }]}
      eyebrow="Ferramentas"
      title="Outlook, Microsoft 365 e sistemas internos"
      intro="As ferramentas que apoiam o seu trabalho. Cada item traz um status (Confirmado · A validar · A preencher) para revisão com a escola."
    >
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {tools.map((t) => {
          const tone = toneStyles[t.tone];
          return (
            <div
              key={t.name}
              className="rounded-2xl border border-border bg-surface p-5 shadow-[0_1px_3px_rgba(16,24,40,0.04)]"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className={`text-[15px] font-semibold text-cav-gray-800`}>
                  {t.name}
                </h3>
                <StatusBadge status={t.status} />
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-cav-gray-500">
                {t.description}
              </p>
              <span className={`mt-3 inline-block h-1 w-10 rounded-full ${tone.solid}`} />
            </div>
          );
        })}
      </div>

      <ContentCard title="Como conseguir seus acessos">
        <Markdown
          content={`Os acessos **não são iguais para todos**: cada pessoa recebe as contas de acordo com a **sua função**. Por isso, **nem todo colaborador recebe todas as contas** — **estagiários e auxiliares podem não receber** alguns acessos.

1. No seu primeiro dia, o **RH** providencia as contas e os acessos **adequados à sua função**.
2. Você recebe uma **senha provisória** — troque-a no primeiro login.
3. Para o Sistema Acadêmico, a **coordenação** libera seu perfil.
4. Problemas de acesso? Procure a equipe de **Tecnologia** pela [Central de Contatos](/educador/contatos).

> O ecossistema institucional é **Microsoft (Outlook / Microsoft 365)**. Plataformas e procedimentos exatos devem ser confirmados com a escola.

> Nunca compartilhe suas senhas. Cada acesso é pessoal e intransferível.`}
        />
      </ContentCard>
    </PageContainer>
  );
}
