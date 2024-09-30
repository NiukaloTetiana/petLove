// import { useState } from "react";

import { NewsList, SearchField, Title } from "../components";

const NewsPage = () => {
  // const [search, setSearch] = useState<string>("");
  const search = true;

  // const handleChangeSearch = (news: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearch(news.target.value);
  // };
  const handleChangeSearch = () => {};

  return (
    <div className="container pb-[80px] pt-[34px] md:pb-[80px] md:pt-[46px] lg:pt-[64px]">
      <div className="relative">
        <Title title="News" className="mb-[86px] lg:mb-[60px]" />
        {search && <SearchField onChange={handleChangeSearch} />}
        <NewsList />
      </div>
    </div>
  );
};

export default NewsPage;
