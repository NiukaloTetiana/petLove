import { Link, useLocation } from "react-router-dom";

import { Icon, LogoutBtn } from "../../components";

interface IUserBarProps {
  toggleMenu: () => void;
}

export const UserBar = ({ toggleMenu }: IUserBarProps) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="flex items-center justify-center lg:gap-[8px]">
      <LogoutBtn toggleMenu={toggleMenu} className="hidden lg:block" />

      <div className="flex items-center justify-center gap-[8px]">
        <Link
          to="/profile"
          className="flex size-10 items-center justify-center rounded-[50%] bg-[#fff4df] md:size-[50px]"
        >
          <Icon
            id="user"
            size={20}
            className="fill-[#f6b83d] stroke-[#f6b83d] md:size-[24px]"
          />
        </Link>
        <p
          className={`hidden md:block md:text-[20px] md:font-bold md:leading-[1] md:tracking-[-0.03em] ${isHomePage ? "text-white" : "text-[#262626]"}`}
        >
          Anna
        </p>
      </div>
    </div>
  );
};
