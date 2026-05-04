import ScreenshotPlaceholder from "./ScreenshotPlaceholder";

interface TutorialStepProps {
  step: number;
  title: string;
  description: string;
  screenshotAlt?: string;
}

export default function TutorialStep({
  step,
  title,
  description,
  screenshotAlt,
}: TutorialStepProps) {
  return (
    <div className="flex gap-4">
      <div className="flex shrink-0 flex-col items-center">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cav-primary text-sm font-bold text-white">
          {step}
        </div>
        <div className="mt-2 w-px flex-1 bg-cav-gray-200" />
      </div>
      <div className="pb-8">
        <h4 className="text-base font-semibold text-cav-primary">{title}</h4>
        <p className="mt-1 text-sm leading-relaxed text-cav-gray-500">
          {description}
        </p>
        {screenshotAlt ? (
          <div className="mt-4">
            <ScreenshotPlaceholder alt={screenshotAlt} />
          </div>
        ) : null}
      </div>
    </div>
  );
}
