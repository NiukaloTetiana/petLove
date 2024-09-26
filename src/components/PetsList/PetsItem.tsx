import { format } from "date-fns";

import { IPet } from "../../types";
import { Icon } from "../../components";

interface IPetsItemProps {
  pet: IPet;
}

export const PetsItem = ({ pet }: IPetsItemProps) => {
  const { imgUrl, title, name, birthday, sex, species } = pet;

  const handleRemovePet = async () => {};

  return (
    <li className="relative flex items-start gap-[14px] rounded-[20px] border border-[#26262619] p-4 sm-max:gap-[8px] md:w-[305px] md:px-[16px] md:py-[22px] lg:w-full lg:items-center lg:gap-[25px] lg:p-5">
      <div className="flex size-[66px] shrink-0 items-center justify-center overflow-hidden rounded-full sm-max:size-[60px] md:size-[75px] lg:size-[90px]">
        <img
          src={imgUrl}
          alt="Pet's photo"
          className="h-full w-full object-cover"
        />
      </div>

      <div>
        <h4 className="mb-[8px] w-[145px] truncate text-[14px] font-bold leading-[1.29] text-[#2b2b2a] sm-max:w-[110px] md:mb-[12px] lg:w-full">
          {title}
        </h4>
        <ul className="flex flex-wrap gap-[10px] text-[12px] font-medium leading-[1.17] tracking-[-0.02em] text-[#262626] lg:gap-[27px]">
          <li className="item">
            <span className="span">Name</span>
            {name}
          </li>
          <li className="item">
            <span className="span">Birthday</span>
            {format(birthday, "dd.mm.yyyy")}
          </li>
          <li className="item">
            <span className="span">Sex</span>
            {sex}
          </li>
          <li className="item">
            <span className="span">Species</span>
            {species}
          </li>
        </ul>
      </div>

      <button
        onClick={handleRemovePet}
        type="submit"
        className="link-reg absolute right-[12px] top-[12px] flex size-[30px] items-center justify-center rounded-full bg-[#fff4df] md:size-[38px] lg:right-5 lg:top-5"
      >
        <Icon
          id="trash"
          size={16}
          className="fill-none stroke-[#f6b83d] md:size-[18px]"
        />
      </button>
    </li>
  );
};
