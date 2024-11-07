// import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { modal_cat_1x, modal_cat_2x } from "../../assets";

export const ModalCongrats = () => {
  return (
    <>
      <div className="mx-auto mb-5 flex size-[80px] items-center justify-center rounded-[50%] bg-[#fff4df]">
        <img
          srcSet={`${modal_cat_1x} 1x, ${modal_cat_2x} 2x`}
          src={modal_cat_1x}
          alt="Cat"
          loading="lazy"
          className="size-[44px]"
        />
      </div>
      <h3 className="mb-5 text-center text-[20px] font-bold leading-[1] tracking-[-0.03em] text-[#f6b83d] sm-max:text-[18px] md:mb-[14px] md:text-[24px] md:leading-[1.17]">
        Congrats
      </h3>
      <p className="mb-[24px] text-center text-[14px] font-medium leading-[1.29] tracking-[-0.02em] text-[#2b2b2a] sm-max:text-[12px] md:mb-[28px]">
        The first fluff in the favorites! May your friendship be the happiest
        and filled with fun.
      </p>

      <Link
        to="/profile/favorites"
        className="link-reg mx-auto block h-[42px] w-full rounded-[30px] border-none bg-[#f6b83d] py-[12px] text-center text-[14px] font-bold leading-[1.25] tracking-[-0.03em] text-white transition duration-500 md:h-[48px] md:w-[250px] md:py-[14px] md:text-[16px]"
      >
        Go to profile
      </Link>
    </>
  );
};
