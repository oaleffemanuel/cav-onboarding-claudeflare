interface PageHeaderProps {
  title: string;
  description?: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="mb-10 border-b border-cav-gray-100 pb-6">
      <h1 className="text-2xl font-bold tracking-tight text-cav-gray-800 sm:text-3xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-cav-gray-500">
          {description}
        </p>
      ) : null}
    </div>
  );
}
