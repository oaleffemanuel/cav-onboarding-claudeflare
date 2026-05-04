export default function Footer() {
  return (
    <footer className="border-t border-cav-gray-100 bg-cav-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-sm font-bold tracking-tight text-cav-gray-700">
              Colégio Alta Vista
            </p>
            <p className="mt-1 text-xs text-cav-gray-400">
              Educação de qualidade com valores que transformam.
            </p>
          </div>
          <p className="text-xs text-cav-gray-400">
            &copy; {new Date().getFullYear()} Colégio Alta Vista. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
