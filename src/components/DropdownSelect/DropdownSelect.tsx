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
  const [isListVisible, setIsListVisible] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>(defaultOption);
  const sortRef: RefObject<HTMLDivElement> = useRef(null);

  const newOptions = ["Show all", ...options];

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setIsListVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setSelectedOption(defaultOption);
  }, [defaultOption]);

  const handleListClick = () => {
    setIsListVisible(!isListVisible);
  };

  const handleLabelClick = (option: string) => {
    setOption(option);
    setIsListVisible(false);
    setSelectedOption(option);
  };

  return (
    <div ref={sortRef} className={`${className} relative`}>
      <input
        type="text"
        onClick={handleListClick}
        placeholder={
          selectedOption === "Show all"
            ? capitalizeFirstLetter(placeholder)
            : capitalizeFirstLetter(selectedOption)
        }
        className="input-hover h-[42px] w-full cursor-pointer rounded-[30px] p-3 text-[14px] font-medium leading-[1.29] tracking-[-0.03em] text-[#262626] placeholder:text-[#262626] md:h-[48px] md:p-4 md:text-[16px] md:leading-[1.25]"
        readOnly
      />

      <Icon
        onClick={handleListClick}
        id="chevron-down"
        className={`absolute right-[12px] top-[12px] cursor-pointer fill-none stroke-[#262626] transition duration-300 sm-max:size-4 md:right-[16px] md:top-[16px] md:size-5 ${
          isListVisible ? "rotate-180" : ""
        }`}
        size={18}
      />

      {isListVisible && (
        <ul className="scrollbar absolute top-[46px] z-[2] max-h-[216px] w-full space-y-[8px] rounded-[15px] bg-white p-3 text-[14px] font-medium leading-[1.25] tracking-[-0.03em] text-[#26262699] shadow-md md:top-[54px] md:max-h-[190px] md:p-[14px] md:text-[16px] md:leading-[1.29]">
          {newOptions.map((label) => (
            <li
              key={label}
              onClick={() => handleLabelClick(label)}
              className={`cursor-pointer capitalize transition duration-300 hover:text-[#f6b83d] ${
                selectedOption === label ? "text-[#f6b83d]" : ""
              }`}
            >
              {label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
