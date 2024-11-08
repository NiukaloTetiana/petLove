import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../hooks";
import { selectNotices } from "../../redux";
import { NoticesItem } from "./NoticesItem";

export const NoticesList = () => {
  const notices = useAppSelector(selectNotices);
  const location = useLocation();

  const isNoticesPage = location.pathname === "/notices";
  return (
    <ul
      className={`flex flex-wrap gap-5 ${isNoticesPage ? "mb-[44px] md:mb-[60px] lg:gap-x-[32px] lg:gap-y-10 lg:pl-[32px] lg:pr-[31px]" : "lg:gap-[24px]"}`}
    >
      {notices.map((notice) => (
        <NoticesItem key={notice._id} notice={notice} />
      ))}
    </ul>
  );
};
