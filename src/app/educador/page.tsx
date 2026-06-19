import Link from "next/link";
import Image from "next/image";
import { Quote, ArrowRight } from "lucide-react";
import { homeCards, corePillars } from "@/data/educador";
import HomeCard from "@/components/educador/HomeCard";
import HeroSearch from "@/components/educador/HeroSearch";
import { toneStyles } from "@/components/educador/tones";

export default function EducadorHome() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Hero */}
      <section className="relative overflow-hidden py-14 sm:py-20">
        {/* soft brand glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 h-80 w-[44rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-blue/10 via-brand-yellow/10 to-brand-red/10 blur-3xl"
        />
        <div className="relative mx-auto max-w-3xl text-center animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-brand-blue-50 px-4 py-1.5 text-sm font-semibold text-brand-blue">
            <Image
              src="/logo-altavista.png"
              alt=""
              width={20}
              height={20}
              className="h-5 w-5 rounded-full object-cover"
            />
            Área do Educador
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-cav-gray-800 sm:text-5xl lg:text-6xl">
            Alta Vista Hub
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-cav-gray-500 sm:text-xl">
            A central de conhecimento do Colégio Alta Vista para colaboradores
            encontrarem orientações, documentos, rotinas, contatos e ferramentas
            em um só lugar.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/educador/comece-aqui"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-blue px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:bg-brand-blue-dark hover:shadow-md sm:w-auto"
            >
              Comece Aqui
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/educador/manual"
              className="inline-flex w-full items-center justify-center rounded-xl border border-border bg-surface px-6 py-3.5 text-base font-semibold text-cav-gray-700 shadow-sm transition-all duration-200 hover:border-brand-blue hover:text-brand-blue sm:w-auto"
            >
              Ver Manual do Educador
            </Link>
          </div>

          {/* Prominent global search */}
          <HeroSearch />
        </div>
      </section>

      {/* Cards */}
      <section className="pb-8">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-cav-gray-800">
              Explore o portal
            </h2>
            <p className="mt-1 text-sm text-cav-gray-500">
              Tudo o que você precisa para fazer parte do Alta Vista, em um só
              lugar.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {homeCards.map((card) => (
            <HomeCard key={card.href} card={card} />
          ))}
        </div>
      </section>

      {/* Institutional section — "More than teaching, we form people" */}
      <section className="my-14">
        <div className="overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-brand-blue to-brand-blue-dark px-6 py-12 text-center text-white sm:px-12 sm:py-14">
          <Quote className="mx-auto h-8 w-8 text-white/60" strokeWidth={2} />
          <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
            Mais do que ensinar, formamos pessoas.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            No Alta Vista, acreditamos na formação humana integral e na parceria
            entre escola e família. Nossa proposta pedagógica se apoia em cinco
            pilares — e cada educador é parte essencial dessa missão.
          </p>
        </div>

        {/* Core pillars */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {corePillars.map((pillar) => {
            const tone = toneStyles[pillar.tone];
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 shadow-[0_1px_3px_rgba(16,24,40,0.04)]"
              >
                <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-2xl ${tone.soft} ${tone.text}`}>
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <h3 className="text-[15px] font-semibold text-cav-gray-800">{pillar.title}</h3>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-cav-gray-500">
                  {pillar.description}
                </p>
              </div>
            );
          })}
          <Link
            href="/educador/guias"
            className="group flex h-full flex-col justify-center rounded-2xl border border-dashed border-brand-blue/30 bg-brand-blue-50 p-6 text-center transition-colors hover:bg-brand-blue-100"
          >
            <span className="text-[15px] font-semibold text-brand-blue-ink">
              Conheça a proposta pedagógica
            </span>
            <span className="mt-1 inline-flex items-center justify-center gap-1 text-sm text-brand-blue-ink/80">
              As 5 dimensões da pessoa
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
