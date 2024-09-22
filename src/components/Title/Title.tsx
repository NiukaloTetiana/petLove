interface ITitleProps {
  title: string;
  className?: string;
}

export const Title = ({ title, className }: ITitleProps) => {
  return (
    <div className={`md:mb-[44px] ${className}`}>
      <h2 className="text-[28px] font-bold leading-[1] tracking-[-0.03em] text-[#262626] md:text-[54px]">
        {title}
      </h2>
    </div>
  );
};
