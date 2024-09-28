import { Link } from "react-router-dom";

import { modal_dog_1x, modal_dog_2x } from "../../assets";

// interface IModalAttentionProps {
//   toggleAttentionModal: () => void;
// }

export const ModalAttention = () => {
  return (
    <>
      <div className="mx-auto mb-5 flex size-[80px] items-center justify-center rounded-full bg-[#fff4df]">
        <img
          srcSet={`${modal_dog_1x} 1x, ${modal_dog_2x} 2x`}
          src={modal_dog_1x}
          alt="Dog"
          loading="lazy"
          className="size-[44px]"
        />
      </div>
      <h3 className="mb-5 text-center text-[20px] font-bold leading-[1] tracking-[-0.03em] text-[#f6b83d] md:text-[28px] md:leading-[1.17]">
        Attention
      </h3>

      <p className="mb-[24px] w-[295px] text-center text-[14px] font-medium leading-[1.29] tracking-[-0.02em] text-[#2b2b2a] sm-max:w-full md:mb-[28px] md:w-[346px]">
        We would like to remind you that certain functionality is available only
        to authorized users.If you have an account, please log in with your
        credentials. If you do not already have an account, you must register to
        access these features.
      </p>

      <div className="flex justify-center gap-[8px]">
        <Link
          to="/login"
          className="link-reg button-attention bg-[#f6b83d] text-white"
        >
          Log In
        </Link>

        <Link
          to="/register"
          className="link-reg button-attention bg-[#fff4df] text-[#f6b83d]"
        >
          Registration
        </Link>
      </div>
    </>
  );
};
