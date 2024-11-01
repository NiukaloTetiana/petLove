import {
  components,
  OptionProps,
  DropdownIndicatorProps,
  GroupBase,
  Props,
} from "react-select";

import { ICity } from "../types";
import { Icon } from "../components";

interface CustomSelectProps extends Props<ICity, boolean, GroupBase<ICity>> {
  clearValue: () => void;
  inputValue: string;
}

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
  const { clearValue, inputValue } = props.selectProps as CustomSelectProps;

  return (
    <components.DropdownIndicator {...props}>
      {inputValue && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            clearValue();
          }}
          className="mr-[4px]"
        >
          <Icon id="close" size={18} className="fill-none stroke-[#262626]" />
        </button>
      )}
      <Icon id="search" size={18} className="fill-none stroke-[#262626]" />
    </components.DropdownIndicator>
  );
};
