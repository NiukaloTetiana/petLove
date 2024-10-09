import { useLocation } from "react-router-dom";

import { Icon } from "../../components";

export const SearchField = ({
  onChange,
}: {
  onChange: (news: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const location = useLocation();
  const isNewsPage = location.pathname === "/news";

  return (
    <div className="relative">
      <input
        className={`h-[42px] w-full rounded-[30px] p-[12px] pr-[34px] text-[14px] font-medium leading-[1.29] tracking-[-0.03em] text-[#262626] transition duration-500 hover:shadow-md focus:shadow-md md:h-[48px] md:p-[14px] md:pr-[34px] md:text-[16px] md:leading-[1.25] ${isNewsPage ? "border border-[#26262626] bg-transparent placeholder:text-[#2626267f] hover:border-[#f6b83d] focus:border-[#f6b83d] md:w-[230px]" : "border-none bg-white md:w-[265px]"}`}
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
  );
};
