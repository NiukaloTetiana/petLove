import { Link, NavLink, useLocation } from "react-router-dom";

import { Icon } from "../../components";

import { navItems } from "../../constants";

interface INavBarProps {
  logoClass?: string;
  linkListClass?: string;
  toggleMenu?: () => void;
}

export const NavBar = ({
  logoClass = "",
  linkListClass = "",
  toggleMenu,
}: INavBarProps) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div
      className={`lg:flex lg:items-center ${isHomePage ? "lg:gap-[280px]" : "lg:gap-[313px]"}`}
    >
      <Link
        to="/"
        className={`${logoClass} flex items-end justify-center gap-[1.7px] text-[20px] font-bold leading-none tracking-[-0.04em] md:text-[28px] ${
          isHomePage ? "text-white md:font-extrabold" : "text-[#262626]"
        }`}
      >
        petl
        <Icon
          id="heart"
          size={17}
          className={`md:size-[23px] ${
            isHomePage
              ? "fill-white stroke-white"
              : "fill-[#f6b83d] stroke-[#f6b83d]"
          }`}
        />
        ve
      </Link>
      <nav>
        <ul
          className={`flex flex-col items-center justify-center gap-[10px] lg:flex-row ${linkListClass}`}
        >
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                onClick={toggleMenu}
                className={`block h-[48px] w-[119px] rounded-[30px] border bg-transparent py-[15px] text-center text-[14px] font-medium leading-[1.29] tracking-[-0.03em] md:h-[50px] md:text-[16px] md:leading-[1.25] lg:w-auto lg:px-5 ${isHomePage ? "link-home" : "link-next"}`}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
