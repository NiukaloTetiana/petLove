import { useAppSelector } from "../../hooks";
import { selectNoticesFavorites } from "../../redux";
import { NoticesItem } from "../NoticesList/NoticesItem";

const Favorites = () => {
  const noticesFavorites = useAppSelector(selectNoticesFavorites);

  return (
    <div className="flex items-center justify-center">
      {noticesFavorites.length === 0 ? (
        <h4 className="text-center text-[14px] font-medium leading-[1.29] tracking-[-0.02em] text-[#262626] md:w-[458px] md:text-[16px] md:leading-[1.25]">
          Oops,{" "}
          <span className="font-bold text-[#f6b83d]">
            looks like there aren't any furries
          </span>{" "}
          on our adorable page yet. Do not worry! View your pets on the "find
          your favorite pet" page and add them to your favorites.
        </h4>
      ) : (
        <ul className="scrollbar flex flex-col gap-5 md:flex-row md:flex-wrap lg:max-h-[796px]">
          {noticesFavorites.map((notice) => (
            <NoticesItem key={notice._id} notice={notice} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;
