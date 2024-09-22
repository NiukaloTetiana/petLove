import { useLocation } from "react-router-dom";

import { LogOut, Modal } from "../../components";
import { useModal } from "../../hooks";

interface ILogoutButtonProps {
  className?: string;
  toggleMenu: () => void;
}

export const LogoutButton = ({ toggleMenu, className }: ILogoutButtonProps) => {
  const [isOpenModal, toggleModal] = useModal();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <button
        onClick={() => {
          toggleMenu && toggleMenu();
          toggleModal();
        }}
        type="button"
        className={`${className} link-reg lg::w-[136px] h-[42px] w-full rounded-[30px] bg-[#f6b83d] py-[12px] text-center text-[14px] font-bold uppercase leading-[1.29] tracking-[-0.03em] text-[#f6b83d] transition duration-300 md:h-[50px] md:w-[155px] md:py-[15px] md:text-[16px] md:leading-[1.4] lg:w-[136px] lg:text-white ${isHomePage ? "text-white lg:outline lg:outline-1 lg:outline-[#ffffff66]" : "bg-[#fff4df] lg:bg-[#f6b83d]"}`}
      >
        Log out
      </button>

      {isOpenModal && (
        <Modal
          isOpen={isOpenModal}
          toggleModal={toggleModal}
          className="px-[28px] py-10 md:px-[80px] md:py-[80px]"
        >
          <LogOut toggleLogOutModal={toggleModal} />
        </Modal>
      )}
    </>
  );
};
