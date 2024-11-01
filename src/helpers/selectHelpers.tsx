import {
  components,
  OptionProps,
  DropdownIndicatorProps,
  GroupBase,
} from "react-select";

import { ICity } from "../types";
import { Icon } from "../components";

export const CustomOption = (props: OptionProps<ICity>) => {
  const inputValue = props.selectProps.inputValue || "";
  const { cityEn, countyEn } = props.data;

  const highlightMatch = (text: string) => {
    const regex = new RegExp(`(${inputValue})`, "gi");
    return text.split(regex).map((part, index) =>
      part.toLowerCase() === inputValue.toLowerCase() ? (
        <span key={index} style={{ color: "#262626" }}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <components.Option {...props}>
      {highlightMatch(`${cityEn}, ${countyEn}`)}
    </components.Option>
  );
};

export const IndicatorSeparator = () => null;

export const DropdownIndicator = (
  props: DropdownIndicatorProps<ICity, boolean, GroupBase<ICity>>
) => {
  return (
    <components.DropdownIndicator {...props}>
      <Icon id="search" size={18} className="fill-none stroke-[#262626]" />
    </components.DropdownIndicator>
  );
};
