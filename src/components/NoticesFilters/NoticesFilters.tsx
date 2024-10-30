import Select from "react-select";

import { useAppSelector } from "../../hooks";
import {
  selectCategories,
  selectCities,
  selectSex,
  selectSpecies,
} from "../../redux";
import { DropdownSelect, SearchField } from "../../components";

interface INoticesFilters {
  setCategory: (option: string) => void;
  setGender: (option: string) => void;
  setType: (option: string) => void;
  handleChangeSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const NoticesFilters = ({
  setCategory,
  setGender,
  setType,
  handleChangeSearch,
}: INoticesFilters) => {
  const caterogies = useAppSelector(selectCategories);
  const sex = useAppSelector(selectSex);
  const species = useAppSelector(selectSpecies);
  const locations = useAppSelector(selectCities);

  // const formatOptionLabel = ({ label }, { inputValue }) => (
  //   <span
  //     dangerouslySetInnerHTML={{ __html: highlightText(label, inputValue) }}
  //   />
  // );

  return (
    <div className="rounded-[30px] bg-[#fff4df] p-5 md:px-[32px] md:py-10 lg:px-10">
      <div className="mb-10 flex flex-wrap gap-[12px] md:gap-[16px]">
        <SearchField onChange={handleChangeSearch} />
        <DropdownSelect
          options={caterogies}
          setOption={setCategory}
          defaultOption={"Show all"}
          placeholder="Category"
          className="w-[141px] capitalize sm-max:w-full md:w-[170px] lg:w-[190px]"
        />

        <DropdownSelect
          options={sex}
          setOption={setGender}
          defaultOption={"Show all"}
          placeholder="By gender"
          className="w-[141px] capitalize sm-max:w-full md:w-[170px] lg:w-[190px]"
        />

        <DropdownSelect
          options={species}
          setOption={setType}
          defaultOption={"Show all"}
          placeholder="By type"
          className="w-full capitalize md:w-[190px]"
        />

        <Select
          className="basic-single"
          classNamePrefix="select"
          placeholder="Location"
          // defaultValue={colourOptions[0]}
          // isDisabled={isDisabled}
          // isLoading={isLoading}
          // isClearable={isClearable}
          // isRtl={isRtl}
          // isSearchable={isSearchable}
          options={locations}
          // name={}
        />
      </div>

      <div className="flex flex-wrap gap-[10px] md:gap-[6px]">
        <button type="button" className="notices-button">
          Popular
        </button>

        <button type="button" className="notices-button">
          Unpopular
        </button>

        <button type="button" className="notices-button">
          Cheap
        </button>

        <button type="button" className="notices-button">
          Expensive
        </button>
      </div>
    </div>
  );
};
