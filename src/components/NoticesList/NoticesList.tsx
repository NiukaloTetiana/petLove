// import { INotice} from "../../types";
import { NoticesItem } from "./NoticesItem";
import notices from "../../assets/notices.json";

// interface INoticesListProps {
//   notices: INotice[];
// }

export const NoticesList = () => {
  return (
    <ul className="flex flex-wrap gap-5 lg:gap-x-[32px] lg:gap-y-10">
      {notices.results.map((notice, index) => (
        <NoticesItem key={index} notice={notice} />
      ))}
    </ul>
  );
};
