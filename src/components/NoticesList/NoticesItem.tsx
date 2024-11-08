import { format } from "date-fns";

import { INotice } from "../../types";
import {
  Icon,
  Modal,
  ModalAttention,
  ModalCongrats,
  ModalNotice,
} from "../../components";
import { useAppDispatch, useAppSelector, useModal } from "../../hooks";
import {
  addNoticeFavorites,
  addNoticeViewed,
  deleteNoticeFavorites,
  selectIsLoggedIn,
  selectNoticesFavorites,
} from "../../redux";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";

interface INoticesItemProps {
  notice: INotice;
}

export const NoticesItem = ({ notice }: INoticesItemProps) => {
  const {
    _id,
    title,
    birthday,
    category,
    comment,
    imgURL,
    name,
    sex,
    popularity,
    species,
    price,
  } = notice;

  const [isOpenModal, toggleModal] = useModal();
  const [isOpenNoticeModal, toggleNoticeModal] = useModal();
  const [isOpenCongratsModal, toggleCongratsModal] = useModal();

  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const noticesFavorites = useAppSelector(selectNoticesFavorites);
  const location = useLocation();

  const isNoticesPage = location.pathname === "/notices";
  const isViewedPage = location.pathname === "/profile/viewed";

  const isInFavorites = noticesFavorites.find((elem) => elem._id === _id);

  const handleClickFavorite = async () => {
    if (isLoggedIn) {
      try {
        const action = isInFavorites
          ? deleteNoticeFavorites(_id)
          : addNoticeFavorites(_id);

        const response = await dispatch(action).unwrap();
        if (noticesFavorites.length === 0 && response.length === 1) {
          toggleCongratsModal();
        }
        toast.success(
          `You have successfully ${!isInFavorites ? "added" : "removed"} notice ${!isInFavorites ? "to" : "from"} your favorites.`
        );
      } catch (error) {
        toast.error("Oops... Something went wrong.");
      }
    } else {
      toggleModal();
    }
  };

  const handleClickLearnMore = async () => {
    if (isLoggedIn) {
      dispatch(addNoticeViewed(_id));
      toggleNoticeModal();
    } else {
      toggleModal();
    }
  };

  return (
    <li
      className={`relative flex h-[430px] w-full flex-col rounded-[16px] bg-white p-[24px] shadow-md sm-max:h-[500px] md:h-[444px] md:w-[342px] lg:w-[363px] ${isNoticesPage ? "" : "sm-max:h-[440px] sm-max:p-[14px] md:h-[388px] md:p-[14px] md:pb-[18px] lg:w-[320px]"}`}
    >
      <div
        className={`relative mb-[24px] flex h-[178px] w-[287px] shrink-0 items-center justify-center overflow-hidden rounded-[16px] sm-max:w-full md:w-[294px] lg:w-[315px] ${isNoticesPage ? "" : "md:mb-[14px] md:h-[162px] md:w-[314px] lg:w-[292px]"}`}
      >
        <img
          src={imgURL}
          alt={species}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="absolute left-3 top-4 h-[32px] overflow-visible rounded-[30px] bg-[#fff4df] px-[14px] py-[8px] text-center text-[14px] font-semibold leading-[1.1] tracking-[-0.02em] text-[#262626] shadow-md sm-max:top-2 sm-max:h-[30px] md:left-2 md:top-2 md:h-[34px] md:text-[16px]">
        {price ? `$${price}` : "Free"}
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

      <ul
        className={`mb-4 flex gap-[13px] text-[12px] font-medium leading-[1.17] tracking-[-0.02em] text-[#262626] sm-max:flex-wrap md:gap-4 ${isNoticesPage ? "lg:gap-5" : ""}`}
      >
        <li className="flex flex-col gap-[2px]">
          <span className="span">Name</span>
          {name}
        </li>
        <li className="flex flex-col gap-[2px]">
          <span className="span">Birthday</span>
          {format(birthday, "dd.MM.yyyy")}
        </li>
        <li className="flex flex-col gap-[2px] capitalize">
          <span className="span">Sex</span>
          {sex}
        </li>
        <li className="flex flex-col gap-[2px] capitalize">
          <span className="span">Species</span>
          {species}
        </li>
        <li className="flex flex-col gap-[2px] capitalize">
          <span className="span">Category</span>
          {category}
        </li>
      </ul>

      <p className="text-[14px] font-medium leading-[1.29] tracking-[-0.02em] text-[#2b2b2a]">
        {comment}
      </p>

      <div className="mt-auto flex items-center justify-between">
        <button
          type="button"
          onClick={handleClickLearnMore}
          className={`link-log w-[231px] rounded-[30px] bg-[#f6b83d] py-[14px] text-center text-[14px] font-medium leading-[1.2] tracking-[-0.03em] text-white shadow-sm transition duration-500 md:leading-[1] ${isNoticesPage ? "h-[46px] sm-max:w-[170px] md:h-[48px] md:w-[236px] lg:w-[257px]" : "h-[44px] sm-max:w-[200px] md:w-[260px] lg:w-[238px]"} ${isViewedPage ? "w-full" : ""}`}
        >
          Learn more
        </button>

        {!isViewedPage ? (
          <button
            onClick={handleClickFavorite}
            type="button"
            className={`link-reg group flex items-center justify-center rounded-full bg-[#fff4df] transition duration-500 ${isNoticesPage ? "size-[46px] md:size-[48px]" : "size-[44px]"}`}
          >
            {!isInFavorites ? (
              <Icon
                id="heart"
                size={16}
                className="fill-none stroke-[#ffc531] transition duration-500 group-hover:fill-[#ffc531]"
              />
            ) : (
              <Icon
                id="trash"
                size={16}
                className="fill-none stroke-[#ffc531]"
              />
            )}
          </button>
        ) : null}
      </div>

      {isOpenNoticeModal && (
        <Modal
          isOpen={isOpenNoticeModal}
          toggleModal={toggleNoticeModal}
          className="px-[28px] py-10 md:w-[473px] md:px-[62px]"
        >
          <ModalNotice
            notice={notice}
            handleClickFavorite={handleClickFavorite}
          />
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

      {isOpenCongratsModal && (
        <Modal
          isOpen={isOpenCongratsModal}
          toggleModal={toggleCongratsModal}
          className="px-5 py-10 md:w-[410px] md:p-[60px]"
        >
          <ModalCongrats />
        </Modal>
      )}
    </li>
  );
};
