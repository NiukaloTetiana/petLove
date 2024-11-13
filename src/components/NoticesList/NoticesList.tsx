import { NoticesItem } from "./NoticesItem";

import { useAppSelector } from "../../hooks";
import { selectNotices } from "../../redux";

export const NoticesList = () => {
  const notices = useAppSelector(selectNotices);
  return (
    <ul className="mb-[44px] flex flex-wrap gap-5 md:mb-[60px] lg:gap-x-[32px] lg:gap-y-10 lg:pl-[32px] lg:pr-[31px]">
      {notices.map((notice) => (
        <NoticesItem key={notice._id} notice={notice} />
      ))}
    </ul>
  );
};
