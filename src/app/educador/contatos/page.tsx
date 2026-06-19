import { Globe, AtSign, Mail, MessagesSquare, Phone, MapPin } from "lucide-react";
import PageContainer from "@/components/educador/PageContainer";
import ContactCard from "@/components/educador/ContactCard";
import { contacts, institutionalChannels, schoolInfo, PLACEHOLDER } from "@/data/educador";
import type { InstitutionalChannel } from "@/data/educador";

const channelIcon = {
  website: Globe,
  instagram: AtSign,
  email: Mail,
  internal: MessagesSquare,
} as const;

function isFilled(value: string) {
  return value !== PLACEHOLDER.na && value !== PLACEHOLDER.fill;
}

export default function ContatosPage() {
  return (
    <PageContainer
      crumbs={[{ label: "Central de Contatos" }]}
      eyebrow="Central de Contatos"
      title="Quem procurar para cada assunto"
      intro="Encontre o setor certo rapidamente. Os responsáveis, e-mails e telefones serão preenchidos com os dados oficiais da escola."
    >
      {/* Contato principal da escola (dados oficiais do Manual) */}
      <div className="mb-8 overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-brand-blue to-brand-blue-dark p-6 text-white sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-white/80">
          Contato principal
        </p>
        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-8">
          <a href={`tel:${schoolInfo.phone.replace(/[^\d+]/g, "")}`} className="flex items-center gap-2.5 text-white hover:text-white/90">
            <Phone className="h-5 w-5 shrink-0 text-white/80" strokeWidth={1.8} />
            <span className="font-medium">{schoolInfo.phone}</span>
          </a>
          <a href={`mailto:${schoolInfo.email}`} className="flex items-center gap-2.5 break-all text-white hover:text-white/90">
            <Mail className="h-5 w-5 shrink-0 text-white/80" strokeWidth={1.8} />
            <span className="font-medium">{schoolInfo.email}</span>
          </a>
          <span className="flex items-center gap-2.5 text-white/90">
            <MapPin className="h-5 w-5 shrink-0 text-white/80" strokeWidth={1.8} />
            <span className="font-medium">{schoolInfo.city}</span>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {contacts.map((contact) => (
          <ContactCard key={contact.area} contact={contact} />
        ))}
      </div>

      {/* Institutional channels */}
      <section className="mt-12">
        <h2 className="text-lg font-bold tracking-tight text-cav-gray-800">
          Canais Institucionais
        </h2>
        <p className="mt-1 text-sm text-cav-gray-500">
          Endereços oficiais da escola. A preencher com os dados confirmados.
        </p>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {institutionalChannels.map((channel: InstitutionalChannel) => {
            const Icon = channelIcon[channel.kind];
            const filled = isFilled(channel.value);
            return (
              <div
                key={channel.label}
                className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 shadow-[0_1px_3px_rgba(16,24,40,0.04)]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-blue-50 text-brand-blue-ink">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </div>
                <div className="min-w-0">
                  <p className="text-[15px] font-semibold text-cav-gray-800">
                    {channel.label}
                  </p>
                  <p
                    className={`mt-0.5 text-sm ${
                      filled ? "text-cav-gray-600" : "text-cav-gray-400"
                    }`}
                  >
                    {channel.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <div className="mt-10 rounded-2xl border border-border bg-brand-blue-50 p-6 text-center sm:p-8">
        <p className="text-[15px] font-medium text-cav-gray-700">
          Não encontrou o que procurava?
        </p>
        <p className="mt-1 text-sm text-cav-gray-500">
          Procure a Secretaria ou a Direção. Os canais oficiais de contato serão
          confirmados com a escola.
        </p>
      </div>
    </PageContainer>
  );
}
