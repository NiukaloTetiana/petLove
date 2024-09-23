import { useLocation } from "react-router-dom";

import {
  AuthButton,
  BurgerMenu,
  Icon,
  NavBar,
  UserBar,
} from "../../components";
import { useModal } from "../../hooks";

export const Header = () => {
  const [isMenuOpen, toggleMenu] = useModal();
  const isLogin = true;
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <header
      className={`${isHomePage ? "bg-white pt-[10px] md:pt-[16px]" : "bg-[#F9F9F9]"}`}
    >
      <div className={`container ${isHomePage ? "lg:px-[32px]" : ""}`}>
        <div
          className={`flex items-center justify-between ${isHomePage ? "rounded-t-[30px] bg-[#f6b83d] px-5 pb-[28px] pt-[18px] md:rounded-t-[60px] md:px-[32px] md:pb-[39px] md:pt-[23px] lg:px-[64px] lg:pb-[32px] lg:pt-[16px]" : "bg-[#F9F9F9] py-5 md:py-[39px] lg:py-[32px]"}`}
        >
          <NavBar linkListClass="hidden lg:flex" />
          <BurgerMenu
            isOpen={isMenuOpen}
            toggleMenu={toggleMenu}
            classBackdrop={`${isMenuOpen ? "scale-1" : "scale-0"}`}
            classMenu={`${isMenuOpen ? "translate-y-0" : "translate-y-[-100%]"}`}
          />
          <div className="flex items-center gap-[12px] sm-max:gap-[8px] md:gap-[16px]">
            {isLogin ? <UserBar /> : <AuthButton className="hidden lg:flex" />}
            <button
              type="button"
              onClick={() => {
                toggleMenu();
              }}
              className="flex justify-between outline-none lg:hidden"
            >
              <Icon
                id="menu"
                className={`fill-none md:size-[36px] ${
                  isHomePage ? "stroke-white" : "stroke-[#262626]"
                }`}
                size={32}
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
