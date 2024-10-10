import { debounce } from "lodash";
import { useEffect, useRef, useState } from "react";

import {
  Loader,
  NewsList,
  Pagination,
  SearchField,
  Title,
} from "../components";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import {
  getNews,
  selectIsLoadingNews,
  selectNews,
  selectPageNews,
  setPageNews,
} from "../redux";

const NewsPage = () => {
  const page = useAppSelector(selectPageNews);
  const news = useAppSelector(selectNews);
  const isLoading = useAppSelector(selectIsLoadingNews);
  const dispatch = useAppDispatch();

  const [search, setSearch] = useState<string>("");

  const debouncedDispatch = useRef(
    debounce((params) => {
      dispatch(getNews(params));
    }, 400)
  ).current;

  useEffect(() => {
    const params = { page, limit: 6, keyword: search };

    debouncedDispatch(params);
  }, [debouncedDispatch, dispatch, page, search]);

  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPageNews(1));
    setSearch(event.target.value);
  };

  return (
    <>
      <div className="container pb-[80px] pt-[34px] md:pb-[80px] md:pt-[46px] lg:pt-[64px]">
        <div className="mb-[24px] flex flex-col gap-5 md:mb-[44px] md:flex-row md:items-end md:justify-between lg:mb-[60px]">
          <Title title="News" />
          <SearchField onChange={handleChangeSearch} />
        </div>

        {!news.length ? (
          <div className="flex h-[calc(100vh-400px)] items-center justify-center">
            <h3 className="text-center text-[25px] font-semibold leading-[1] tracking-[-0.03em] text-[#f6b83d] md:text-[48px]">
              Nothing was found for your request.
            </h3>
          </div>
        ) : (
          <NewsList />
        )}

        {news.length ? <Pagination /> : null}
      </div>

      <Loader isLoading={isLoading} />
    </>
  );
};

export default NewsPage;
