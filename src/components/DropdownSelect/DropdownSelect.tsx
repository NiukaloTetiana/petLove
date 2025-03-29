import { RefObject, useEffect, useRef, useState } from "react";

import { Icon } from "../../components";

interface IDropdownSelect {
  options: string[];
  setOption: (option: string) => void;
  defaultOption: string;
  placeholder: string;
  className: string;
}

export const DropdownSelect = ({
  options,
  setOption,
  defaultOption,
  placeholder,
  className,
}: IDropdownSelect) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef: RefObject<HTMLDivElement> = useRef(null);
  const allOptions = ["Show all", ...options];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleSelect = (option: string) => {
    setOption(option);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className={`${className} relative`}>
      <input
        type="text"
        onClick={() => setIsOpen(!isOpen)}
        placeholder={defaultOption === "Show all" ? placeholder : defaultOption}
        className="input-hover h-[42px] w-full cursor-pointer rounded-[30px] p-3 text-[14px] font-medium tracking-[-0.03em] text-[#262626] md:h-[48px] md:p-4 md:text-[16px]"
        readOnly
      />
      <Icon
        onClick={() => setIsOpen(!isOpen)}
        id="chevron-down"
        className={`absolute right-[12px] top-[12px] cursor-pointer fill-none stroke-[#262626] transition duration-300 sm-max:size-4 md:right-[16px] md:top-[16px] md:size-5 ${
          isOpen ? "rotate-180" : ""
        }`}
        size={18}
      />
      {isOpen && (
        <ul className="absolute top-[46px] z-[2] w-full rounded-[15px] bg-white p-3 shadow-md md:top-[54px]">
          {allOptions.map((option) => (
            <li
              key={option}
              onClick={() => handleSelect(option)}
              className={`cursor-pointer capitalize transition hover:text-[#f6b83d] ${
                defaultOption === option ? "text-[#f6b83d]" : "text-[#26262699]"
              }`}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
