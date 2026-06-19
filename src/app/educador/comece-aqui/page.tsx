import PageContainer from "@/components/educador/PageContainer";
import ContentCard from "@/components/educador/ContentCard";
import Markdown from "@/components/educador/Markdown";
import Checklist from "@/components/educador/Checklist";

const onThisPage = [
  { id: "bem-vindo", label: "Bem-vindo ao Alta Vista" },
  { id: "primeiros-passos", label: "Primeiros Passos" },
  { id: "conheca-a-escola", label: "Conheça a Escola" },
  { id: "video", label: "Vídeo de Apresentação" },
  { id: "checklist", label: "Checklist do Novo Colaborador" },
];

const checklist = [
  "Receber e ativar o e-mail institucional (Outlook / Microsoft 365)",
  "Configurar o acesso ao ClassApp",
  "Entrar nos canais oficiais de comunicação (e-mail institucional, grupos da equipe, canais de avisos e site da escola)",
  "Assinar os documentos de admissão com o RH",
  "Retirar o crachá de identificação",
  "Conhecer a equipe e a coordenação da sua etapa",
  "Ler o Manual do Educador",
  "Fazer um tour pelas instalações da escola",
  "Acessar o calendário escolar no e-mail institucional",
];

export default function ComeceAquiPage() {
  return (
    <PageContainer
      crumbs={[{ label: "Comece Aqui" }]}
      eyebrow="Comece Aqui"
      title="Primeiros passos no Alta Vista"
      intro="Seja muito bem-vindo(a)! Esta página reúne tudo o que você precisa para começar com o pé direito nos seus primeiros dias."
    >
      {/* On this page */}
      <nav className="mb-8 rounded-2xl border border-border bg-surface p-5">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-cav-gray-400">
          Nesta página
        </p>
        <ul className="flex flex-wrap gap-2">
          {onThisPage.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="inline-block rounded-lg bg-cav-gray-50 px-3 py-1.5 text-sm text-cav-gray-600 transition-colors hover:bg-brand-blue-50 hover:text-brand-blue"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="space-y-6">
        <ContentCard id="bem-vindo" title="Bem-vindo ao Alta Vista">
          <Markdown
            content={`É com muita alegria que recebemos você na **família Alta Vista**. Aqui, cada colaborador é parte essencial de uma missão maior: a formação humana e integral de crianças e jovens.

Mais do que um lugar de trabalho, o Alta Vista é uma comunidade educativa que acredita no cuidado, na excelência e na parceria com as famílias.

> "Educar é um ato de amor e esperança. Obrigado por caminhar conosco."`}
          />
        </ContentCard>

        <ContentCard id="primeiros-passos" title="Primeiros Passos">
          <Markdown
            content={`Nos seus primeiros dias, foque nestes pontos essenciais:

1. **Acessos** — o RH cria seu e-mail institucional e o acesso ao ClassApp. Troque a senha provisória no primeiro login.
2. **Documentação** — assine os documentos de admissão e entregue os pendentes ao RH.
3. **Integração** — converse com sua coordenação para entender a rotina da sua etapa.
4. **Ferramentas** — familiarize-se com o [Outlook / Microsoft 365](/educador/ferramentas) e o ClassApp.

Precisa de ajuda? A [Central de Contatos](/educador/contatos) mostra quem procurar para cada assunto.`}
          />
        </ContentCard>

        <ContentCard id="conheca-a-escola" title="Conheça a Escola">
          <Markdown
            content={`O Colégio Alta Vista oferece uma proposta pedagógica personalizada, centrada no desenvolvimento integral do estudante, com programa bilíngue.

- **Educação Infantil** — acolhimento, ludicidade e primeiras descobertas
- **Ensino Fundamental** — base sólida, hábitos de estudo e formação de virtudes
- **Programa Bilíngue** — o inglês integrado à rotina pedagógica

Nossos valores se traduzem no dia a dia: cada estudante é conhecido pelo nome e acompanhado de perto.`}
          />
        </ContentCard>

        <ContentCard id="video" title="Vídeo de Apresentação">
          <p className="mb-4 text-[15px] leading-relaxed text-cav-gray-600">
            Assista à apresentação institucional e conheça um pouco da história,
            da cultura e dos valores do Alta Vista.
          </p>
          <div className="flex aspect-video w-full flex-col items-center justify-center rounded-2xl border border-dashed border-cav-gray-300 bg-cav-gray-50 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue text-white shadow-sm">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="mt-3 text-sm font-medium text-cav-gray-500">
              Vídeo de apresentação institucional
            </p>
            <p className="mt-1 text-xs text-cav-gray-400">
              (Em breve — substitua pelo link oficial do vídeo)
            </p>
          </div>
        </ContentCard>

        <ContentCard id="checklist" title="Checklist do Novo Colaborador">
          <p className="mb-5 text-[15px] leading-relaxed text-cav-gray-600">
            Use a lista abaixo para acompanhar seus primeiros passos. Marque cada
            item conforme for concluindo.
          </p>
          <Checklist items={checklist} />
        </ContentCard>
      </div>
    </PageContainer>
  );
}
