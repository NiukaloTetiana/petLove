import {
  components,
  OptionProps,
  DropdownIndicatorProps,
  GroupBase,
  Props,
} from "react-select";

import { ICity } from "../../types";
import { Icon } from "../../components";

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
    <components.Option
      {...props}
      className={props.isSelected ? "!text-[#262626]" : ""}
    >
      {highlightMatch(`${cityEn}, ${countyEn}`)}
    </components.Option>
  );
};

export const IndicatorSeparator = () => null;

export const DropdownIndicator = (
  props: DropdownIndicatorProps<ICity, boolean, GroupBase<ICity>>
) => {
  const { clearValue, inputValue, value, onChange } =
    props.selectProps as CustomSelectProps;

  return (
    <components.DropdownIndicator {...props}>
      {(inputValue || value) && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();

            inputValue && clearValue();
            if (value && onChange) {
              onChange(null, { action: "clear", removedValues: [] });
            }
          }}
          className="mr-[4px]"
        >
          <components.ClearIndicator {...props}>
            <Icon
              id="close"
              size={18}
              className="fill-none stroke-[#262626] transition duration-300 hover:stroke-[#f6b83d]"
            />
          </components.ClearIndicator>
        </button>
      )}
      <Icon id="search" size={18} className="fill-none stroke-[#262626]" />
    </components.DropdownIndicator>
  );
};
