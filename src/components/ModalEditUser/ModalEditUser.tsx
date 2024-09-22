import { toast } from "react-toastify";
import { Icon } from "../Icon/Icon";

export const ModalEditUser = () => {
  const handleSubmit = async () => {
    try {
      toast.info("The information has been successfully updated.");
    } catch (error) {
      toast.error("Oops... Something went wrong. Please, try again.");
    }
  };
  return (
    <>
      <h3 className="mb-5 text-[20px] font-bold leading-[1] text-[#2b2b2a] md:text-[18px] md:leading-[1.33]">
        Edit information
      </h3>
      <div className="mb-[21px] md:mb-10">
        <button
          type="button"
          className="mx-auto mb-[12px] flex size-[80px] items-center justify-center rounded-[50%] bg-[#fff4df] md:size-[86px]"
        >
          <Icon
            id="user"
            size={40}
            className="fill-[#f6b83d] stroke-[#f6b83d] md:size-[42px]"
          />
        </button>
      </div>

      <button
        type="submit"
        onSubmit={handleSubmit}
        className="button-modal link-log"
      >
        Save
      </button>
    </>
  );
};
