import { format } from "date-fns";
import { INotice } from "../../types";
import { Icon } from "../Icon/Icon";

interface IModalNoticeProps {
  notice?: INotice;
}

export const ModalNotice = ({ notice }: IModalNoticeProps) => {
  if (!notice) {
    return null;
  }

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

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        id="star"
        size={16}
        className={
          index < popularity
            ? "fill-[#ffc531] stroke-[#ffc531]"
            : "fill-[#f4f4f4] stroke-[#f4f4f4]"
        }
      />
    ));
  };

  return (
    <>
      <div className="relative mx-auto mb-5 flex items-center justify-center md:mb-4">
        <img
          src={imgURL}
          alt={species}
          loading="lazy"
          className="size-[120px] rounded-full md:size-[150px]"
        />

        <div className="absolute left-[74px] top-0 h-[32px] rounded-[30px] bg-[#fff4df] px-[14px] py-[8px] text-[12px] font-medium leading-[1.33] tracking-[-0.02em] text-[#f6b83d] sm-max:h-[30px] md:left-[94px] md:h-[34px] md:text-[14px] md:leading-[1.29]">
          {capitalizeFirstLetter(category)}
        </div>
      </div>

      <h4 className="mb-[10px] text-center text-[16px] font-bold leading-[1.25] text-[#2b2b2a] md:text-[18px] md:leading-[1.33]">
        {title}
      </h4>

      <div className="mb-[24px] flex items-center justify-center gap-[4px] md:mb-5">
        <div className="flex gap-[4px]">{renderStars()}</div>
        <p className="text-[14px] font-medium leading-[1.43] text-[#2b2b2a]">
          {popularity}
        </p>
      </div>

      <ul className="mb-[18px] flex justify-center gap-[27px] text-[12px] font-medium leading-[1.17] tracking-[-0.02em] text-[#262626] sm-max:gap-[18px]">
        <li className="item-notice">
          <span className="span">Name</span>
          {name}
        </li>
        <li className="item-notice">
          <span className="span">Birthday</span>
          {format(birthday, "dd.mm.yyyy")}
        </li>
        <li className="item-notice">
          <span className="span">Sex</span>
          {capitalizeFirstLetter(sex)}
        </li>
        <li className="item-notice">
          <span className="span">Species</span>
          {capitalizeFirstLetter(species)}
        </li>
      </ul>

      <p className="mb-10 text-center text-[14px] font-medium leading-[1.29] tracking-[-0.02em] text-[#2b2b2a]">
        {comment}
      </p>

      <div className="flex justify-center gap-[10px]">
        <button
          type="button"
          className="button-notice group !flex items-center justify-center gap-2 bg-[#f6b83d] !text-white"
        >
          Add to
          <Icon
            id="heart"
            size={16}
            className="size-[18px] fill-none stroke-white !font-medium transition-colors duration-500 group-hover:fill-white group-focus:fill-white"
          />
        </button>

        <button
          type="button"
          className="button-notice bg-[#fff4df] text-[#f6b83d]"
        >
          Contact
        </button>
      </div>
    </>
  );
};
