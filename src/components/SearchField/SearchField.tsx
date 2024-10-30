import { useState } from "react";
import { useLocation } from "react-router-dom";

import { Icon } from "../../components";

export const SearchField = ({
  onChange,
}: {
  onChange: (search: string) => void;
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const isNewsPage = location.pathname === "/news";

  const handleClear = () => {
    setSearchQuery("");
    onChange("");
  };

  return (
    <div
      className={`relative w-full ${isNewsPage ? "md:w-[230px]" : "md:w-[265px]"}`}
    >
      <input
        className={`h-[42px] w-full rounded-[30px] border p-[12px] pr-[50px] text-[14px] font-medium leading-[1.29] tracking-[-0.03em] text-[#262626] transition duration-500 hover:border-[#f6b83d] hover:shadow-md focus:border-[#f6b83d] focus:shadow-md md:h-[48px] md:p-[14px] md:pr-[54px] md:text-[16px] md:leading-[1.25] ${
          isNewsPage
            ? "border-[#26262626] bg-transparent placeholder:text-[#2626267f]"
            : "border-transparent bg-white placeholder:text-[#262626]"
        }`}
        name="search"
        placeholder="Search"
        type="text"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          onChange(e.target.value);
        }}
      />

      {searchQuery && (
        <button
          onClick={handleClear}
          type="button"
          className="absolute right-[34px] top-[12px] transition duration-500 hover:stroke-[#f6b83d] focus:stroke-[#f6b83d] md:right-[36px] md:top-[14px]"
        >
          <Icon id="close" size={18} className="fill-none stroke-[#262626]" />
        </button>
      )}

      <button
        type="button"
        className="absolute right-[12px] top-[12px] transition duration-500 hover:stroke-[#f6b83d] focus:stroke-[#f6b83d] md:right-[14px] md:top-[14px]"
      >
        <Icon id="search" size={18} className="fill-none stroke-[#262626]" />
      </button>
    </div>
  );
};
