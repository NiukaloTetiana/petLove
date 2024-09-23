import { Link } from "react-router-dom";

import { useModal } from "../../hooks";
import {
  Icon,
  ModalApproveAction,
  LogoutBtn,
  Modal,
  ModalEditUser,
  EditUserBtn,
} from "../../components";

export const UserCard = () => {
  const [isOpenModal, toggleModal] = useModal();
  const [isOpenEditModal, toggleEditModal] = useModal();

  const user = {
    name: "John Doe",
    email: "XjKZB@example.com",
    phone: "",
  };

  return (
    <div className="rounded-[30px] bg-white px-5 pb-10 pt-[18px] md:rounded-[60px] md:p-10">
      <div className="flex items-center justify-between">
        <div className="flex h-[38px] w-[80px] items-center justify-center gap-[4px] rounded-[30px] bg-[#f6b83d] px-[14px] py-[10px]">
          <p className="text-[14px] font-medium leading-[1.29] tracking-[-0.02em] text-white">
            User
          </p>
          <Icon id="user" size={18} className="fill-white stroke-white" />
        </div>

        <EditUserBtn toggleEditModal={toggleEditModal} />
        {isOpenEditModal && (
          <Modal
            isOpen={isOpenEditModal}
            toggleModal={toggleEditModal}
            className="px-5 py-10 md:p-[50px]"
          >
            <ModalEditUser toggleEditModal={toggleEditModal} />
          </Modal>
        )}
      </div>
      <div className="mx-auto mb-[8px] block size-[94px] rounded-[50%] bg-[#fff4df] p-[27px] md:size-[110px] md:p-[30px]">
        <Icon
          id="user"
          size={40}
          className="fill-[#f6b83d] stroke-[#f6b83d] md:size-[50px]"
        />
      </div>
      <button
        type="button"
        onClick={toggleEditModal}
        className="mb-[28px] w-full text-center text-[12px] font-medium leading-[1.33] tracking-[-0.02em] text-[#262626] underline transition duration-300 hover:text-[#f6b83d] focus:text-[#f6b83d] md:mb-5 md:text-[14px] md:leading-[1.29] lg:mb-[28px]"
      >
        Upload photo
      </button>
      <h4 className="mb-5 text-[16px] font-bold leading-[1.25] text-[#2b2b2a]">
        My information
      </h4>
      <div className="mb-10 flex flex-col flex-wrap gap-[10px] md:flex-row md:gap-[14px] lg:flex-col">
        {Object.keys(user)
          .filter((key) => ["name", "email", "phone"].includes(key))
          .map((key) => (
            <input
              className={`input md:w-[305px] lg:w-full ${user[key as keyof typeof user] ? "border-[#f6b83d]" : "border-[#26262626]"}`}
              key={key}
              value={
                key === "phone"
                  ? user[key] || "+380"
                  : user[key as keyof typeof user]
              }
              readOnly
            />
          ))}
      </div>

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

      <LogoutBtn className="w-[114px] md:w-[155px] lg:bg-[#fff4df] lg:!text-[#f6b83d]" />

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
  );
};
