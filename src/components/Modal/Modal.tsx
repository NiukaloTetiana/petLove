import ReactDOM from "react-dom";

import { useEscapeClose } from "../../hooks";
import { handleClickOnBackdrop } from "../../helpers";
import { Icon } from "../../components";

interface ModalProps {
  isOpen: boolean;
  className?: string;
  children: React.ReactNode;
  toggleModal: () => void;
}

const modalRoot = document.querySelector("#modalRoot")!;

export const Modal = ({
  isOpen,
  className,
  children,
  toggleModal,
}: ModalProps) => {
  useEscapeClose(isOpen, toggleModal);

  return ReactDOM.createPortal(
    <div
      className="fixed left-0 top-0 z-40 flex h-full w-full items-center justify-center bg-[#262626] bg-opacity-30 backdrop-blur-sm"
      onClick={(e) => handleClickOnBackdrop(toggleModal, e)}
    >
      <div
        className={`relative max-h-[95%] max-w-[343px] rounded-[30px] bg-white shadow-lg sm-max:max-w-[300px] md:max-w-[700px] lg:max-w-[1180px] ${className}`}
      >
        <button
          type="button"
          onClick={toggleModal}
          className="absolute right-5 top-5"
        >
          <Icon
            id="close"
            className="fill-none stroke-[#262626] transition duration-300 focus:fill-[#F6B83D] lg:hover:fill-[#F6B83D]"
            size={24}
          />
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};
