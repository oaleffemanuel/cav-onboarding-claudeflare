import Link from "next/link";
import { educadorNav } from "@/data/educador";

export default function EducadorFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="text-base font-bold tracking-tight text-cav-gray-800">
              Alta Vista Hub
            </p>
            <p className="mt-1 text-xs font-medium text-brand-blue">
              Área do Educador · Colégio Alta Vista
            </p>
            <p className="mt-3 text-sm leading-relaxed text-cav-gray-500">
              Formação humana, desenvolvimento integral e parceria entre escola e
              família. Bem-vindo(a) à família Alta Vista.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-10 gap-y-2 sm:grid-cols-3">
            {educadorNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-cav-gray-500 transition-colors hover:text-brand-blue"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-cav-gray-400">
            &copy; {new Date().getFullYear()} Colégio Alta Vista — Portal do
            Educador.
          </p>
          <p className="text-xs text-cav-gray-400">
            Dúvidas sobre o portal? Fale com a{" "}
            <Link href="/educador/contatos" className="font-medium text-brand-blue">
              Central de Contatos
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
