import { ExternalLink } from "lucide-react";
import PageContainer from "@/components/educador/PageContainer";
import StatusBadge from "@/components/educador/StatusBadge";
import { linkGroups, PLACEHOLDER } from "@/data/educador";
import { toneStyles } from "@/components/educador/tones";

export default function LinksPage() {
  return (
    <PageContainer
      crumbs={[{ label: "Links Úteis" }]}
      eyebrow="Links Úteis"
      title="Acessos rápidos"
      intro="Plataformas, canais institucionais e onde pedir ajuda. Itens sem link confirmado aparecem como “A preencher” — serão validados com a escola."
    >
      <div className="space-y-10">
        {linkGroups.map((group) => (
          <section key={group.id}>
            <div className="mb-4">
              <h2 className="text-lg font-bold tracking-tight text-cav-gray-800">
                {group.title}
              </h2>
              <p className="mt-1 text-sm text-cav-gray-500">{group.description}</p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {group.items.map((item) => {
                const tone = toneStyles[item.tone];
                const hasLink = Boolean(item.href);
                const external = item.href?.startsWith("http");
                const Wrapper = hasLink ? "a" : "div";
                return (
                  <Wrapper
                    key={item.label}
                    {...(hasLink
                      ? {
                          href: item.href,
                          ...(external
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {}),
                        }
                      : {})}
                    className={`group flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 shadow-[0_1px_3px_rgba(16,24,40,0.04)] transition-all duration-200 ${
                      hasLink
                        ? "hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(16,24,40,0.08)] dark:hover:shadow-[0_10px_28px_rgba(0,0,0,0.45)]"
                        : ""
                    }`}
                  >
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${tone.soft} ${tone.text}`}
                    >
                      <ExternalLink className="h-5 w-5" strokeWidth={1.8} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-[15px] font-semibold text-cav-gray-800">
                          {item.label}
                        </p>
                        <StatusBadge status={item.status} />
                      </div>
                      <p className="mt-0.5 text-sm text-cav-gray-500">
                        {item.description}
                      </p>
                      {!hasLink ? (
                        <p className="mt-1 text-xs font-medium text-cav-gray-400">
                          {PLACEHOLDER.awaiting}
                        </p>
                      ) : null}
                    </div>
                  </Wrapper>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </PageContainer>
  );
}
