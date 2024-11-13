import { useAppSelector } from "../../hooks";
import { selectNoticesViewed } from "../../redux";
import { NoticesItem } from "../NoticesList/NoticesItem";

const Viewed = () => {
  const noticesViewed = useAppSelector(selectNoticesViewed);

  return noticesViewed.length === 0 ? (
    <h4 className="mx-auto mt-[60px] text-center text-[14px] font-medium leading-[1.29] tracking-[-0.02em] text-[#262626] md:mt-[160px] md:w-[458px] md:text-[16px] md:leading-[1.25]">
      Oops,{" "}
      <span className="font-bold text-[#f6b83d]">
        it looks like you haven't viewed any furry friends
      </span>{" "}
      on our page yet. Start exploring and check out some adorable pets. Your
      recently viewed items will appear here!
    </h4>
  ) : (
    <ul className="scrollbar flex flex-col gap-5 md:flex-row md:flex-wrap lg:max-h-[796px]">
      {noticesViewed.map((notice) => (
        <NoticesItem key={notice._id} notice={notice} />
      ))}
    </ul>
  );
};

export default Viewed;
