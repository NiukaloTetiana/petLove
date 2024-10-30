// import { INotice} from "../../types";
import { useAppSelector } from "../../hooks";
import { selectNotices } from "../../redux";
import { NoticesItem } from "./NoticesItem";

export const NoticesList = () => {
  const notices = useAppSelector(selectNotices);
  return (
    <ul className="lg:gap-y- mb-[44px] flex flex-wrap gap-5 md:mb-[60px] lg:gap-x-[32px] lg:pl-[32px] lg:pr-[31px]">
      {notices.map((notice) => (
        <NoticesItem key={notice._id} notice={notice} />
      ))}
    </ul>
  );
};
