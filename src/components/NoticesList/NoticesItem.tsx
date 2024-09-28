import { format } from "date-fns";

import { INotice } from "../../types";
import { Icon, Modal, ModalAttention, ModalNotice } from "../../components";
import { useModal } from "../../hooks";

interface INoticesItemProps {
  notice: INotice;
  toggleNoticeModal: () => void;
}

export const NoticesItem = ({ notice }: INoticesItemProps) => {
  const {
    title,
    birthday,
    category,
    comment,
    imgURL,
    name,
    sex,
    popularity,
    species,
  } = notice;
  const [isOpenModal, toggleModal] = useModal();
  const [isOpenNoticeModal, toggleNoticeModal] = useModal();

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <li className="w-full gap-[14px] rounded-[16px] bg-white p-[24px] shadow-md md:w-[342px] lg:w-[363px]">
      <div className="mb-[24px] flex h-[178px] w-[287px] shrink-0 items-center justify-center overflow-hidden rounded-[16px] sm-max:w-full md:w-[294px] lg:w-[315px]">
        <img
          src={imgURL}
          alt={species}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="mb-2 flex justify-between">
        <h4 className="text-[16px] font-bold leading-[1.25] text-[#2b2b2a] md:text-[18px] md:leading-[1.33]">
          {title}
        </h4>

        <div className="flex items-center gap-[4px] sm-max:gap-[2px]">
          <Icon
            id="star"
            size={16}
            className="fill-[#ffc531] stroke-[#ffc531]"
          />
          <p className="text-[14px] font-medium leading-[1.29] text-[#2b2b2a] md:leading-[1.43]">
            {popularity}
          </p>
        </div>
      </div>

      <ul className="mb-4 flex gap-[13px] text-[12px] font-medium leading-[1.17] tracking-[-0.02em] text-[#262626] md:gap-4 lg:gap-5">
        <li className="flex flex-col gap-[2px]">
          <span className="span">Name</span>
          {name}
        </li>
        <li className="flex flex-col gap-[2px]">
          <span className="span">Birthday</span>
          {format(birthday, "dd.mm.yyyy")}
        </li>
        <li className="flex flex-col gap-[2px]">
          <span className="span">Sex</span>
          {capitalizeFirstLetter(sex)}
        </li>
        <li className="flex flex-col gap-[2px]">
          <span className="span">Species</span>
          {capitalizeFirstLetter(species)}
        </li>
        <li className="flex flex-col gap-[2px]">
          <span className="span">Category</span>
          {capitalizeFirstLetter(category)}
        </li>
      </ul>

      <p className="mb-[42px] text-[14px] font-medium leading-[1.29] tracking-[-0.02em] text-[#2b2b2a] md:mb-[32px] lg:mb-[50px]">
        {comment}
      </p>

      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={toggleNoticeModal}
          className="link-log h-[46px] w-[231px] rounded-[30px] bg-[#f6b83d] py-[14px] text-center text-[14px] font-medium leading-[1.29] tracking-[-0.03em] text-white shadow-sm transition duration-500 sm-max:w-[170px] md:h-[48px] md:w-[236px] md:leading-[1] lg:w-[257px]"
        >
          Learn more
        </button>

        <button
          onClick={toggleModal}
          type="button"
          className="link-reg group flex size-[46px] items-center justify-center rounded-full bg-[#fff4df] transition duration-500 md:size-[48px]"
        >
          <Icon
            id="heart"
            size={16}
            className="fill-none stroke-[#ffc531] transition-colors duration-500 group-hover:fill-[#ffc531] group-focus:fill-[#ffc531]"
          />
        </button>
      </div>

      {isOpenNoticeModal && (
        <Modal
          isOpen={isOpenNoticeModal}
          toggleModal={toggleNoticeModal}
          className="px-[28px] py-10 md:px-[72px]"
        >
          <ModalNotice notice={notice} />
        </Modal>
      )}

      {isOpenModal && (
        <Modal
          isOpen={isOpenModal}
          toggleModal={toggleModal}
          className="px-5 py-10 md:p-[60px]"
        >
          <ModalAttention />
        </Modal>
      )}
    </li>
  );
};
