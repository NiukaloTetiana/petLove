import { toast } from "react-toastify";
import { modal_cat_1x, modal_cat_2x } from "../../assets";

interface ILogOutProps {
  toggleLogOutModal: () => void;
}

export const LogOut = ({ toggleLogOutModal }: ILogOutProps) => {
  const handleLogout = async () => {
    try {
      toast.info("If you want to continue, you must log in.");
    } catch (error) {
      toast.error("Oops... Something went wrong.");
    }
  };

  return (
    <div>
      <div className="mx-auto mb-5 flex size-[80px] items-center justify-center rounded-[50%] bg-[#fff4df]">
        <img
          srcSet={`${modal_cat_1x} 1x, ${modal_cat_2x} 2x`}
          src={modal_cat_1x}
          alt="Cat"
          loading="lazy"
          className="h-[44px] w-[44px]"
        />
      </div>
      <h3 className="mb-[28px] text-center text-[20px] font-bold leading-[1] tracking-[-0.03em] text-[#262626] md:text-[28px] md:leading-[1.17]">
        Already leaving?
      </h3>
      <div className="flex justify-center gap-[8px]">
        <button
          type="button"
          onClick={handleLogout}
          className="button link-reg bg-[#f6b83d] text-white"
        >
          Yes
        </button>
        <button
          type="button"
          onClick={toggleLogOutModal}
          className="button link-reg bg-[#262626] bg-opacity-[5%] text-[#262626]"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
