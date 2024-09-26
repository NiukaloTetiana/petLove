import { IFriend } from "../../types";
import { formatWorkDays } from "../../helpers";

interface IFriendsItemProps {
  friend: IFriend;
}

export const FriendsItem = ({ friend }: IFriendsItemProps) => {
  const { title, url, addressUrl, imageUrl, address, workDays, phone, email } =
    friend;

  return (
    <li className="relative flex w-full gap-[14px] rounded-[15px] bg-white px-5 py-10 sm-max:gap-[8px] md:w-[342px] md:gap-[16px] lg:w-[371px] lg:gap-5">
      <div className="flex h-[80px] w-[80px] shrink-0 items-center justify-center overflow-hidden rounded-full sm-max:h-[60px] sm-max:w-[60px] md:h-[75px] md:w-[75px] lg:h-[90px] lg:w-[90px]">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>

      <div>
        <h4 className="tracking:-[-0.04em] mb-[14px] text-[16px] font-bold leading-[1.25] text-[#262626] transition duration-500 hover:text-[#f6b83d] focus:text-[#f6b83d] md:mb-5 md:text-[20px] md:leading-[1.3]">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={title}
          >
            {title}
          </a>
        </h4>

        <address>
          <ul className="flex w-full flex-col gap-2">
            <li className="item">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`mailto:${email}`}
                className="a-hover"
              >
                <span className="text-[#2626267f]">Email: </span>
                {email}
              </a>
            </li>
            <li className="item">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={addressUrl}
                className="a-hover"
              >
                <span className="text-[#2626267f]">Address: </span>
                {address}
              </a>
            </li>
            <li className="item">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`tel:${phone}`}
                className="a-hover"
              >
                <span className="text-[#2626267f]">Phone: </span>
                {phone}
              </a>
            </li>
          </ul>
        </address>
      </div>

      <div className="absolute right-[12px] top-[12px] h-[32px] rounded-[30px] bg-[#fff4df] p-2 text-[12px] font-medium leading-[1.33] tracking-[-0.02em] text-[#f6b83d] will-change-contents md:h-[34px] md:text-[14px] md:leading-[1.29]">
        {formatWorkDays(workDays)}
      </div>
    </li>
  );
};
