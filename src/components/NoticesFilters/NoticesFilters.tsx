import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";

import { useAppSelector } from "../../hooks";
import {
  selectCategories,
  selectCities,
  selectSex,
  selectSpecies,
} from "../../redux";
import { DropdownSelect, Icon, SearchField } from "../../components";
import { optionsList } from "../../constants";
import {
  CustomOption,
  IndicatorSeparator,
  DropdownIndicator,
} from "../../helpers";

interface INoticesFilters {
  setCategory: (option: string) => void;
  setGender: (option: string) => void;
  setType: (option: string) => void;
  setSortOrder: (option: string) => void;
  handleChangeSearch: (search: string) => void;
  category: string;
  type: string;
  gender: string;
}

export const NoticesFilters = ({
  setCategory,
  setGender,
  setType,
  setSortOrder,
  handleChangeSearch,
  category,
  type,
  gender,
}: INoticesFilters) => {
  const caterogies = useAppSelector(selectCategories);
  const sex = useAppSelector(selectSex);
  const species = useAppSelector(selectSpecies);
  const locations = useAppSelector(selectCities);

  const [selectedSort, setSelectedSort] = useState("");

  const { register, watch, reset } = useForm({
    defaultValues: { sortOrder: "" },
  });

  const sortOrder = watch("sortOrder");

  useEffect(() => {
    setSortOrder(sortOrder);
    setSelectedSort(sortOrder);
  }, [setSortOrder, sortOrder]);

  const handleClear = () => {
    reset();
  };

  const handleResetClick = () => {
    reset();
    setCategory("Show all");
    setGender("Show all");
    setType("Show all");
    handleChangeSearch("");
  };

  return (
    <div className="mb-10 rounded-[30px] bg-[#fff4df] p-5 md:mb-[32px] md:px-[32px] md:py-10 lg:mb-10 lg:px-10">
      <div className="relative mb-10 flex flex-wrap gap-[12px] before:absolute before:-bottom-5 before:left-0 before:h-[1px] before:w-full before:bg-[#26262619] before:content-[''] md:gap-[16px]">
        <SearchField onChange={handleChangeSearch} />
        <DropdownSelect
          options={caterogies}
          setOption={setCategory}
          defaultOption={category}
          placeholder="Category"
          className="w-[141px] capitalize sm-max:w-full md:w-[170px] lg:w-[190px]"
        />

        <DropdownSelect
          options={sex}
          setOption={setGender}
          defaultOption={gender}
          placeholder="By gender"
          className="w-[141px] capitalize sm-max:w-full md:w-[170px] lg:w-[190px]"
        />

        <DropdownSelect
          options={species}
          setOption={setType}
          defaultOption={type}
          placeholder="By type"
          className="w-full capitalize md:w-[190px]"
        />

        <Select
          className="basic-single"
          classNamePrefix="select"
          placeholder="Location"
          options={locations}
          getOptionLabel={(option) => option.cityEn + ", " + option.countyEn}
          components={{
            Option: CustomOption,
            IndicatorSeparator,
            DropdownIndicator,
          }}
        />
      </div>

      <div className="flex flex-wrap gap-[10px] md:gap-[8px]">
        {optionsList.map((option) => (
          <label
            key={option.value}
            className="notices-label flex gap-[6px] md:gap-[8px]"
          >
            <input
              {...register("sortOrder")}
              type="radio"
              value={option.value}
              className="notices-real-radio"
            />
            {option.label}

            {selectedSort === option.value && (
              <button onClick={handleClear} type="button">
                <Icon id="close" size={18} className="fill-none stroke-white" />
              </button>
            )}
          </label>
        ))}

        <button
          type="button"
          onClick={handleResetClick}
          className="notices-label"
        >
          Reset all filter
        </button>
      </div>
    </div>
  );
};
