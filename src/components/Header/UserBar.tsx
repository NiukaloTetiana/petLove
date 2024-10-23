import { Link, useLocation } from "react-router-dom";

import { Icon, LogoutBtn } from "../../components";
import { useAppSelector } from "../../hooks";
import { selectUser } from "../../redux";

export const UserBar = () => {
  const user = useAppSelector(selectUser);

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="flex items-center justify-center lg:gap-[8px]">
      <LogoutBtn className="hidden lg:block" />

      <div className="flex items-center justify-center gap-[8px]">
        <Link
          to="/profile"
          className="link-reg flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#fff4df] transition duration-500 md:size-[50px]"
        >
          {!user.avatar ? (
            <Icon
              id="user"
              size={20}
              className="fill-[#f6b83d] stroke-[#f6b83d] md:size-[24px]"
            />
          ) : (
            <img
              src={user.avatar}
              alt={user.name || ""}
              className="h-full w-full object-cover"
            />
          )}
        </Link>
        <p
          className={`hidden md:block md:text-[20px] md:font-bold md:leading-[1] md:tracking-[-0.03em] ${isHomePage ? "text-white" : "text-[#262626]"}`}
        >
          {user.name}
        </p>
      </div>
    </div>
  );
};
