// import { useState } from "react";

import { useEffect } from "react";
import { NewsList, SearchField, Title } from "../components";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { getNews, selectPageNews } from "../redux";
import { Pagination } from "../components/Pagination/Pagination";

const NewsPage = () => {
  const page = useAppSelector(selectPageNews);
  const dispatch = useAppDispatch();

  // const [search, setSearch] = useState<string>("");
  const search = true;

  // const handleChangeSearch = (news: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearch(news.target.value);
  // };

  useEffect(() => {
    const params = { page, limit: 6, keyword: "" };

    dispatch(getNews(params));
  }, [dispatch, page]);

  const handleChangeSearch = () => {};

  return (
    <div className="container pb-[80px] pt-[34px] md:pb-[80px] md:pt-[46px] lg:pt-[64px]">
      <div className="relative">
        <Title title="News" className="mb-[86px] lg:mb-[60px]" />
        {search && <SearchField onChange={handleChangeSearch} />}
        <NewsList />
      </div>
      <Pagination />
    </div>
  );
};

export default NewsPage;
