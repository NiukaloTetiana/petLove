import { Link } from "react-router-dom";
import {
  Icon,
  ModalApproveAction,
  LogoutBtn,
  Modal,
  ModalEditUser,
} from "../components";
import { useModal } from "../hooks";

interface IProfilePageProps {
  toggleMenu: () => void;
}

const ProfilePage = ({ toggleMenu }: IProfilePageProps) => {
  const [isOpenModal, toggleModal] = useModal();
  const [isOpenEditModal, toggleEditModal] = useModal();
  return (
    <div className="container pb-[80px] lg:pb-[64px]">
      <div className="rounded-[30px] bg-white px-5 pb-10 pt-[18px]">
        <div className="flex items-center justify-between">
          <div className="flex h-[38px] w-[80px] items-center justify-center gap-[4px] rounded-[30px] bg-[#f6b83d] px-[14px] py-[10px]">
            <p className="text-[14px] font-medium leading-[1.29] tracking-[-0.02em] text-white">
              User
            </p>
            <Icon
              id="user"
              size={18}
              className="fill-white stroke-white md:size-[px]"
            />
          </div>
          <button
            onClick={toggleEditModal}
            type="button"
            className="size-[38px] rounded-[50%] bg-[#fff4df] p-[10px] transition duration-500"
          >
            <Icon id="edit" size={18} className="fill-none stroke-[#f6b83d]" />
          </button>

          {isOpenEditModal && (
            <Modal
              isOpen={isOpenModal}
              toggleModal={toggleEditModal}
              className="px-5 py-10 md:p-[50px]"
            >
              <ModalEditUser />
            </Modal>
          )}
        </div>
        <button
          type="button"
          className="mx-auto mb-[8px] block size-[94px] rounded-[50%] bg-[#fff4df] p-[27px] md:size-[110px]"
        >
          <Icon
            id="user"
            size={40}
            className="fill-[#f6b83d] stroke-[#f6b83d] md:size-[px]"
          />
        </button>
        <p className="mb-[28px] text-center text-[12px] font-medium leading-[1.33] tracking-[-0.02em] text-[#262626] underline">
          Upload photo
        </p>
        <h4 className="mb-5 text-[16px] font-bold leading-[1.25] text-[#2b2b2a]">
          My information
        </h4>

        <div className="mb-10 flex items-center justify-between">
          <h4 className="text-[16px] font-bold leading-[1.25] text-[#2b2b2a]">
            My pets
          </h4>
          <Link
            to="/add-pet"
            className="flex h-[38px] w-[103px] items-center justify-center gap-[4px] rounded-[30px] bg-[#f6b83d] px-[16px] py-[10px] text-[14px] font-medium leading-[1.29] tracking-[-0.03em] text-white"
          >
            Add pet
            <Icon
              id="plus"
              size={18}
              className="fill-white stroke-white md:size-[px]"
            />
          </Link>
        </div>

        <LogoutBtn
          toggleMenu={toggleMenu}
          className="w-[114px] md:w-[155px] lg:bg-[#fff4df] lg:text-[#f6b83d]"
        />

        {isOpenModal && (
          <Modal
            isOpen={isOpenModal}
            toggleModal={toggleModal}
            className="px-[28px] py-10 md:px-[80px] md:py-[80px]"
          >
            <ModalApproveAction toggleLogOutModal={toggleModal} />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
