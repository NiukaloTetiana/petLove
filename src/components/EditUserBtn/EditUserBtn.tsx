import { Icon } from "../../components";

interface IEditUserBtnProps {
  toggleEditModal: () => void;
}

export const EditUserBtn = ({ toggleEditModal }: IEditUserBtnProps) => {
  return (
    <button
      onClick={toggleEditModal}
      type="button"
      className="link-reg size-[38px] rounded-[50%] bg-[#fff4df] p-[10px] transition duration-500"
    >
      <Icon id="edit" size={18} className="fill-none stroke-[#f6b83d]" />
    </button>
  );
};
