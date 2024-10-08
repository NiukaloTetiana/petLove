import { useAppSelector } from "../../hooks";
import { selectNews } from "../../redux";
import { NewsItem } from "./NewsItem";

export const NewsList = () => {
  const news = useAppSelector(selectNews);

  return (
    <ul className="mb-[44px] flex flex-wrap gap-[24px] md:mb-[60px] md:gap-5 md:gap-x-[24px] md:gap-y-[32px] lg:gap-x-[35px] lg:gap-y-10">
      {news.map((item) => (
        <NewsItem key={item._id} {...{ item }} />
      ))}
    </ul>
  );
};
