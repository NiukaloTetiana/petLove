import { useLocation } from "react-router-dom";

import { AuthButton, BurgerMenu, Icon, NavBar } from "../../components";
import { useModal } from "../../hooks";

export const Header = () => {
  const [isMenuOpen, toggleMenu] = useModal();

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <header className={`${isHomePage ? "bg-[#f6b83d]" : "bg-[#F9F9F9]"}`}>
      <div className="mb:py-[28px] container flex items-center justify-between py-[25px]">
        <NavBar
          navClass="flex flex-col gap-[80px] items-center justify-center lg:flex-row lg:gap-[248px]"
          linkListClass="hidden lg:flex gap-[1px]"
        />
        <BurgerMenu
          isOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          classBackdrop={`${isMenuOpen ? "scale-1" : "scale-0"}`}
          classMenu={`${isMenuOpen ? "translate-y-0" : "translate-y-[-100%]"}`}
        />
        <div className="flex items-center gap-[10px] sm-max:gap-[2px] md:gap-[16px]">
          <AuthButton className="hidden lg:flex" />

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
    </header>
  );
};
