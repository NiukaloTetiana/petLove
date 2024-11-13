import {
  Icon,
  ModalApproveAction,
  LogoutBtn,
  Modal,
  ModalEditUser,
  EditUserBtn,
  PetsBlock,
} from "../../components";

import { useAppSelector, useModal } from "../../hooks";
import { selectUser } from "../../redux";

export const UserCard = () => {
  const [isOpenModal, toggleModal] = useModal();
  const [isOpenEditModal, toggleEditModal] = useModal();

  const user = useAppSelector(selectUser);

  return (
    <div className="rounded-[30px] bg-white px-5 pb-10 pt-[18px] md:rounded-[60px] md:p-10 lg:max-h-[928px] lg:w-[520px]">
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
      <div className="mx-auto mb-[8px] flex size-[94px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#fff4df] md:mt-[-38px] md:size-[110px]">
        {!user.avatar ? (
          <Icon
            id="user"
            size={40}
            className="fill-[#f6b83d] stroke-[#f6b83d] md:size-[50px]"
          />
        ) : (
          <img
            src={user.avatar}
            alt={user.name || "User"}
            className="h-full w-full object-cover"
          />
        )}
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
          .map((key) => {
            return (
              <input
                className={`input md:w-[305px] lg:w-full ${user[key as keyof typeof user] ? "border-[#f6b83d]" : "border-[#26262626]"}`}
                key={key}
                value={
                  key === "phone"
                    ? user[key] || "+380"
                    : user[key as keyof typeof user] || ""
                }
                readOnly
              />
            );
          })}
      </div>

      <PetsBlock />

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
