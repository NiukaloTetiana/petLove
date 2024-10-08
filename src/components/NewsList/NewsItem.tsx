import { format } from "date-fns";

import { INew } from "../../types";

interface INewsItemProps {
  item: INew;
}

export const NewsItem = ({ item }: INewsItemProps) => {
  const { date, imgUrl, text, title, url } = item;

  return (
    <li className="flex w-full flex-col rounded-[16px] md:h-[476px] md:w-[340px] md:pb-[28px] lg:w-[361px]">
      <div className="mb-5 flex h-[190px] w-full shrink-0 items-center justify-center overflow-hidden rounded-[15px] md:mb-[28px] md:h-[226px]">
        <img src={imgUrl} alt={title} className="h-full w-full object-cover" />
      </div>

      <h4 className="mb-[12px] min-h-[52px] text-[16px] font-bold leading-[1.25] tracking-[-0.03em] text-[#262626] md:mb-[14px] md:text-[20px] md:leading-[1.3]">
        {title}
      </h4>

      <p className="line-clamp-4 text-[14px] font-medium leading-[1.29] tracking-[-0.02em] text-[#262626] md:text-[16px] md:leading-[1.25]">
        {text}
      </p>

      <div className="mt-auto flex items-center justify-between text-[14px] font-medium leading-[1.29] tracking-[-0.02em] md:leading-[1.25]">
        <p className="text-[#2626267f]">{format(date, "dd/MM/yyyy")}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#ffc531] underline transition duration-500 hover:text-[#f9b020] hover:shadow-sm focus:text-[#f9b020] focus:shadow-sm"
        >
          Read more
        </a>
      </div>
    </li>
  );
};
