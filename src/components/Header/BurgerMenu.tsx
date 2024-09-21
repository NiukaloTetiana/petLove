import { useRef } from "react";
import { useLocation } from "react-router-dom";

import { AuthButton, Icon, LogoutButton, NavBar } from "../../components";
import { useEscapeClose } from "../../hooks";
import { handleClickOnBackdrop } from "../../helpers";

interface IBurgerMenuProps {
  classBackdrop: string;
  classMenu: string;
  isOpen: boolean;
  toggleMenu: () => void;
}

export const BurgerMenu = ({
  toggleMenu,
  classBackdrop,
  classMenu,
  isOpen,
}: IBurgerMenuProps) => {
  const backdropRef = useRef(null);
  const isLogin = false;
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEscapeClose(isOpen, toggleMenu);

  return (
    <div
      onClick={(event) => handleClickOnBackdrop(toggleMenu, event)}
      ref={backdropRef}
      className={`${classBackdrop} fixed left-0 top-0 z-50 h-full w-full bg-transparent backdrop-blur-sm lg:hidden`}
    >
      <div
        className={`${classMenu} relative ml-auto flex h-full w-[218px] flex-col items-center justify-between px-[20px] pb-10 pt-[236px] transition duration-500 md:w-[374px] md:px-[49px] md:pt-[369px] ${isHomePage ? "bg-white" : "bg-[#f6b83d]"}`}
      >
        <button
          type="button"
          className="absolute right-5 top-[28px] flex items-center justify-center outline-none md:right-[39px] md:top-[32px]"
          onClick={toggleMenu}
        >
          <Icon
            id="close"
            className={`fill-none transition duration-300 md:size-[36px] ${isHomePage ? "stroke-[#262626] focus:stroke-[#f6b83d]" : "stroke-white focus:stroke-[#262626]"}`}
            size={32}
          />
        </button>

        <NavBar
          logoClass="hidden"
          linkListClass="flex hidden:lg"
          toggleMenu={toggleMenu}
        />

        {isLogin ? (
          <LogoutButton toggleMenu={toggleMenu} className="block lg:hidden" />
        ) : (
          <AuthButton
            toggleMenu={toggleMenu}
            className="flex flex-col md:flex-row lg:hidden"
          />
        )}
      </div>
    </div>
  );
};
