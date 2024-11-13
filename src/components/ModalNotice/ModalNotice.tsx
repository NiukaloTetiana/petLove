import { useEffect } from "react";
import { format } from "date-fns";

import { Icon } from "../../components";

import { INotice } from "../../types";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  getNoticeById,
  selectNoticesFavorites,
  selectOneNotice,
} from "../../redux";

interface IModalNoticeProps {
  notice: INotice;
  handleClickFavorite: () => void;
}

export const ModalNotice = ({
  notice: { _id, price },
  handleClickFavorite,
}: IModalNoticeProps) => {
  const dispatch = useAppDispatch();
  const noticesFavorites = useAppSelector(selectNoticesFavorites);
  const oneNotice = useAppSelector(selectOneNotice);

  useEffect(() => {
    dispatch(getNoticeById(_id));
  }, [_id, dispatch]);

  if (!oneNotice) return;

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
    location,
  } = oneNotice;

  const isInFavorites = noticesFavorites.find((elem) => elem._id === _id);

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

      <ul className="wrap mb-[18px] flex flex-wrap justify-center gap-x-[27px] gap-y-[12px] text-[12px] font-medium leading-[1.17] tracking-[-0.02em] text-[#262626] sm-max:gap-[18px]">
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
        <li className="item-notice">
          <span className="span">Location</span>
          {location.cityEn}
        </li>
      </ul>

      <p className="mb-[32px] text-center text-[14px] font-medium leading-[1.29] tracking-[-0.02em] text-[#2b2b2a]">
        {comment}
      </p>

      {price ? (
        <p className="mb-5 text-center text-[16px] font-bold leading-[1.29] tracking-[-0.02em] text-[#2b2b2a] md:text-[18px]">
          ${price}
        </p>
      ) : null}
      <div className="flex justify-center gap-[10px]">
        <button
          type="button"
          onClick={handleClickFavorite}
          className="button-notice group !flex items-center justify-center gap-2 bg-[#f6b83d] !text-white"
        >
          {!isInFavorites ? (
            <>
              Add to
              <Icon
                id="heart"
                size={16}
                className="size-[18px] fill-none stroke-white transition duration-500 group-hover:fill-white"
              />
            </>
          ) : (
            <>
              Remove
              <Icon
                id="trash"
                size={16}
                className="size-[18px] fill-none stroke-white"
              />
            </>
          )}
        </button>

        <a href="tel:" className="button-notice bg-[#fff4df] text-[#f6b83d]">
          Contact
        </a>
      </div>
    </>
  );
};
