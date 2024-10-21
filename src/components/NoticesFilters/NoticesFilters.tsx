// import { useAppSelector } from "../../hooks";
// import { selectCategories, selectSex, selectSpecies } from "../../redux";
import { SearchField } from "../SearchField/SearchField";

export const NoticesFilters = () => {
  // const caterogies = useAppSelector(selectCategories);
  // const sex = useAppSelector(selectSex);
  // const species = useAppSelector(selectSpecies);
  const handleSearch = () => {};

  const handleChange = () => {};

  return (
    <div className="rounded-[30px] bg-[#fff4df] p-5 md:px-[32px] md:py-10 lg:px-10">
      <SearchField onChange={handleChange} onSearch={handleSearch} />
    </div>
  );
};
