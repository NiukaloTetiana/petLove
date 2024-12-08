import { useLocation } from "react-router-dom";

import { Modal, ModalApproveAction } from "../../components";

import { useModal } from "../../hooks";

interface ILogoutBtnProps {
  className?: string;
  toggleMenu?: () => void;
}

export const LogoutBtn = ({ toggleMenu, className }: ILogoutBtnProps) => {
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
        className={`${className} link-reg h-[42px] rounded-[30px] bg-[#f6b83d] py-[12px] text-center text-[14px] font-bold uppercase leading-[1.29] tracking-[-0.03em] text-[#f6b83d] transition duration-300 md:h-[50px] md:py-[15px] md:text-[16px] md:leading-[1.4] lg:w-[136px] lg:text-white ${isHomePage ? "text-white lg:outline lg:outline-1 lg:outline-[#ffffff66]" : "bg-[#fff4df] lg:bg-[#f6b83d]"}`}
      >
        Log out
      </button>

      {isOpenModal && (
        <Modal
          isOpen={isOpenModal}
          toggleModal={toggleModal}
          className="bg-[#fff4df] px-[28px] py-10 md:p-[80px]"
        >
          <ModalApproveAction toggleLogOutModal={toggleModal} />
        </Modal>
      )}
    </>
  );
};
