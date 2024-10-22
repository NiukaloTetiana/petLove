import { useState, useEffect } from "react";

export const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const nextProgress = prev + 1;
        if (nextProgress >= 99) {
          clearInterval(interval);
        }
        return nextProgress;
      });
    }, 5);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-img fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
      <div className="size-[292px] animate-spin rounded-full border-t-2 border-slate-300 md:size-[427px] lg:size-[396px]"></div>
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[50px] font-bold leading-[1] tracking-[-0.04em] text-white md:text-[80px]">
        {progress}%
      </span>
    </div>
  );
};
