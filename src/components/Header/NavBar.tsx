import { Link, NavLink, useLocation } from "react-router-dom";

import { navItems } from "../../constants";
import { Icon } from "../Icon/Icon";

interface INavBarProps {
  navClass?: string;
  logoClass?: string;
  linkListClass?: string;
  linkItemClasses?: string;
  linkClasses?: string;
  className?: string;
  toggleMenu?: () => void;
}

export const NavBar = ({
  navClass = "",
  logoClass = "",
  linkListClass = "",
  linkItemClasses = "",
  linkClasses = "",
  toggleMenu,
}: INavBarProps) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <nav className={navClass}>
      <Link
        to="/"
        className={`${logoClass} flex items-center justify-center text-2xl text-[20px] font-bold leading-none tracking-[-0.04em] md:text-[28px] ${
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

      <ul className={linkListClass}>
        {navItems.map((item) => (
          <li key={item.path} className={linkItemClasses}>
            <NavLink
              to={item.path}
              onClick={toggleMenu}
              className={linkClasses}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
