interface ScreenshotPlaceholderProps {
  alt: string;
  width?: string;
}

export default function ScreenshotPlaceholder({
  alt,
  width = "max-w-md",
}: ScreenshotPlaceholderProps) {
  return (
    <div
      className={`${width} flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-cav-gray-200 bg-cav-gray-50 px-6 py-14`}
    >
      <svg
        className="mb-3 h-10 w-10 text-cav-gray-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      <p className="text-center text-sm font-medium text-cav-gray-400">
        {alt}
      </p>
      <p className="mt-1 text-center text-xs text-cav-gray-300">
        Adicionar print aqui
      </p>
    </div>
  );
}
