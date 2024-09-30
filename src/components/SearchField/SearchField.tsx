import { Icon } from "../../components";

export const SearchField = ({
  onChange,
}: {
  onChange: (news: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="absolute right-0 top-[48px] md:top-[6px]">
      <div className="relative">
        <input
          className="h-[42px] w-[335px] rounded-[30px] border border-[#26262626] bg-transparent p-[12px] pr-[34px] text-[14px] font-medium leading-[1.29] tracking-[-0.03em] text-[#262626] transition duration-500 placeholder:text-[#2626267f] hover:border-[#f6b83d] hover:shadow-md focus:border-[#f6b83d] sm-max:w-[280px] md:h-[48px] md:w-[230px] md:p-[14px] md:pr-[34px] md:text-[16px] md:leading-[1.25]"
          name="search"
          placeholder="Search"
          type="text"
          onChange={onChange}
        />

        <Icon
          id="search"
          size={18}
          className="absolute right-[12px] top-[12px] fill-none stroke-[#262626] md:right-[14px] md:top-[14px]"
        />
      </div>
    </div>
  );
};
