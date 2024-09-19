import { useState, useEffect, FC } from "react";

interface LoaderProps {
  isLoading: boolean;
}
export const Loader: FC<LoaderProps> = ({ isLoading }) => {
  const [progress, setProgress] = useState(0);
  const [wasLoading, setWasLoading] = useState(false);

  useEffect(() => {
    let interval: number | undefined;
    if (isLoading && !wasLoading) {
      setProgress(0);
      setWasLoading(true);
    }

    if (!isLoading && wasLoading) {
      interval = setInterval(() => {
        setProgress((prev) => {
          const nextProgress = prev + 1;
          if (nextProgress >= 101) {
            clearInterval(interval);

            setWasLoading(false);
          }
          return nextProgress;
        });
      }, 30);
    }

    return () => clearInterval(interval);
  }, [isLoading, wasLoading, progress]);

  return progress <= 100 && wasLoading ? (
    <div className="bg-img fixed inset-1 z-50 flex items-center justify-center">
      <div className="size-[292px] animate-spin rounded-full border-t-2 border-slate-300 md:size-[427px] lg:size-[396px]"></div>
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[50px] font-bold leading-[1] tracking-[-0.04em] text-white md:text-[80px]">
        {Math.floor(progress)}%
      </span>
    </div>
  ) : null;
};
