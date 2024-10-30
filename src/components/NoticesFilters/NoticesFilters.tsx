import { useState } from "react";

import { useAppSelector } from "../../hooks";
import { selectCategories, selectSex, selectSpecies } from "../../redux";
import { DropdownSelect, SearchField } from "../../components";

export const NoticesFilters = () => {
  const caterogies = useAppSelector(selectCategories);
  const sex = useAppSelector(selectSex);
  const species = useAppSelector(selectSpecies);

  const [category, setCategory] = useState("Show all");
  const [gender, setGender] = useState("Show all");
  const [type, setType] = useState("Show all");

  const handleSearch = () => {};

  const handleChange = () => {};

  console.log(category);
  console.log(gender);
  console.log(type);

  return (
    <div className="rounded-[30px] bg-[#fff4df] p-5 md:px-[32px] md:py-10 lg:px-10">
      <div className="mb-10 flex flex-wrap gap-[12px] md:gap-[16px]">
        <SearchField onChange={handleChange} onSearch={handleSearch} />
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
      </div>

      <div className="flex flex-wrap gap-[10px] md:gap-[6px]">
        <button type="button" className="notices-button">
          Popular
        </button>

        <button type="button" className="notices-button">
          Unpopular
        </button>

        <button type="button" className="notices-button">
          Expensive
        </button>

        <button type="button" className="notices-button">
          Cheap
        </button>
      </div>
    </div>
  );
};
