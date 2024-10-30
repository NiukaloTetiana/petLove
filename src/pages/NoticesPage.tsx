import { useEffect, useRef, useState } from "react";
import { debounce } from "lodash";

import {
  Loader,
  NoticesFilters,
  NoticesList,
  Pagination,
  Title,
} from "../components";
import { useAppDispatch, useAppSelector } from "../hooks";
import {
  getNotices,
  selectIsLoadingNotices,
  selectNotices,
  selectPageNotices,
  setPageNotices,
} from "../redux";

const NoticesPage = () => {
  const page = useAppSelector(selectPageNotices);
  const notices = useAppSelector(selectNotices);
  const isLoading = useAppSelector(selectIsLoadingNotices);

  const [category, setCategory] = useState("Show all");
  const [gender, setGender] = useState("Show all");
  const [type, setType] = useState("Show all");
  const [search, setSearch] = useState<string>("");

  const dispatch = useAppDispatch();

  const debouncedDispatch = useRef(
    debounce((params) => {
      dispatch(getNotices(params));
    }, 400)
  ).current;

  useEffect(() => {
    const params = {
      page,
      limit: 6,
      keyword: search,
      ...(category !== "Show all" && { category }),
      ...(gender !== "Show all" && { sex: gender }),
      ...(type !== "Show all" && { species: type }),
    };
    debouncedDispatch(params);
  }, [debouncedDispatch, category, dispatch, gender, page, search, type]);

  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPageNotices(1));
    setSearch(event.target.value);
  };

  const handleCategoryChange = (newCategory: string) => {
    dispatch(setPageNotices(1));
    setCategory(newCategory);
  };

  const handleGenderChange = (newGender: string) => {
    dispatch(setPageNotices(1));
    setGender(newGender);
  };

  const handleTypeChange = (newType: string) => {
    dispatch(setPageNotices(1));
    setType(newType);
  };
  return (
    <>
      <div className="container pb-[80px] pt-[34px] md:pb-[80px] md:pt-[46px] lg:pt-[64px]">
        <Title title="Find your favorite pet" className="mb-10 lg:mb-10" />
        <NoticesFilters
          setCategory={handleCategoryChange}
          setGender={handleGenderChange}
          setType={handleTypeChange}
          handleChangeSearch={handleChangeSearch}
        />
        {!notices.length ? (
          <div className="flex h-[calc(100vh-400px)] items-center justify-center">
            <h3 className="text-center text-[22px] font-medium leading-[1.3] tracking-[-0.03em] text-[#262626] md:text-[38px]">
              Nothing was found for your search. Please, try another one query.
            </h3>
          </div>
        ) : (
          <NoticesList />
        )}

        <Pagination />
      </div>

      {isLoading && <Loader />}
    </>
  );
};

export default NoticesPage;
