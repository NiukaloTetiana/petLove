// import { useState } from "react";

import { useEffect } from "react";
import { NewsList, SearchField, Title } from "../components";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { getNews, selectNews, selectPageNews } from "../redux";
import { Pagination } from "../components/Pagination/Pagination";

const NewsPage = () => {
  const page = useAppSelector(selectPageNews);
  const news = useAppSelector(selectNews);
  const dispatch = useAppDispatch();

  // const [search, setSearch] = useState<string>("");
  const search = true;

  // const handleChangeSearch = (news: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearch(news.target.value);
  // };

  useEffect(() => {
    const params = { page, limit: 6 };

    dispatch(getNews(params));
  }, [dispatch, page]);

  const handleChangeSearch = () => {};

  return (
    <div className="container pb-[80px] pt-[34px] md:pb-[80px] md:pt-[46px] lg:pt-[64px]">
      <div className="mb-[24px] flex flex-col gap-5 md:mb-[44px] md:flex-row md:items-end md:justify-between lg:mb-[60px]">
        <Title title="News" />
        {search && <SearchField onChange={handleChangeSearch} />}
      </div>
      <NewsList />
      {news.length ? <Pagination /> : null}
    </div>
  );
};

export default NewsPage;
