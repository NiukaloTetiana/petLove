// import { INew} from "../../types";
import { NewsItem } from "./NewsItem";
import news from "../../assets/news.json";

// interface INewsListProps {
//   news: INew[];
// }

export const NewsList = () => {
  return (
    <ul className="mb-[44px] flex flex-wrap gap-[24px] md:mb-[60px] md:gap-5 md:gap-x-[24px] md:gap-y-[32px] lg:gap-x-[35px] lg:gap-y-10">
      {news.results.map((news, index) => (
        <NewsItem key={index} news={news} />
      ))}
    </ul>
  );
};
