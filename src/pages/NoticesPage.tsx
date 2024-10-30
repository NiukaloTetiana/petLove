import { useEffect, useRef, useState } from "react";
import { debounce } from "lodash";
// import { toast } from "react-toastify";

import {
  Loader,
  NoticesFilters,
  NoticesList,
  Pagination,
  Title,
} from "../components";
import { useAppDispatch, useAppSelector } from "../hooks";
import {
  getCities,
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
  const [sortOrder, setSortOrder] = useState<string>("");

  const dispatch = useAppDispatch();

  useEffect(() => {
    try {
      dispatch(getCities());
    } catch (error) {
      // toast.error();
    }
  }, [dispatch]);

  const debouncedDispatch = useRef(
    debounce((params) => {
      dispatch(getNotices(params));
    }, 400)
  ).current;

  useEffect(() => {
    const sort = sortOrder ? sortOrder.split("=") : "";
    const params = {
      page,
      limit: 6,
      ...(search && { keyword: search }),
      ...(category !== "Show all" && { category }),
      ...(gender !== "Show all" && { sex: gender }),
      ...(type !== "Show all" && { species: type }),
      ...(sortOrder && { [sort[0]]: sort[1] }),
    };
    debouncedDispatch(params);
  }, [
    debouncedDispatch,
    category,
    dispatch,
    gender,
    page,
    search,
    type,
    sortOrder,
  ]);

  const handleChangeSearch = (search: string) => {
    dispatch(setPageNotices(1));
    setSearch(search);
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
      <div className="container pb-[80px] pt-[34px] md:pb-[80px] md:pt-[46px] lg:px-[32px] lg:pt-[64px]">
        <Title title="Find your favorite pet" className="mb-10 lg:mb-10" />
        <NoticesFilters
          setCategory={handleCategoryChange}
          setGender={handleGenderChange}
          setType={handleTypeChange}
          handleChangeSearch={handleChangeSearch}
          setSortOrder={setSortOrder}
          category={category}
          type={type}
          gender={gender}
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
