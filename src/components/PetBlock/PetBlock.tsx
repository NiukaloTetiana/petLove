import {
  regisrer_desktop_1x,
  regisrer_desktop_2x,
  regisrer_mobile_1x,
  regisrer_mobile_2x,
  regisrer_tablet_1x,
  regisrer_tablet_2x,
  login_desktop_1x,
  login_desktop_2x,
  login_mobile_1x,
  login_mobile_2x,
  login_tablet_1x,
  login_tablet_2x,
  modal_cat_1x,
  modal_cat_2x,
  modal_dog_1x,
  modal_dog_2x,
} from "../../assets";

interface PetBlockProps {
  registration?: boolean;
}

export const PetBlock = ({ registration }: PetBlockProps) => {
  return (
    <div className="relative">
      <picture>
        <source
          media="(min-width: 1280px)"
          srcSet={
            registration
              ? `${regisrer_desktop_1x} 1x, ${regisrer_desktop_2x} 2x`
              : `${login_desktop_1x} 1x, ${login_desktop_2x}`
          }
          width="592"
          height="654"
          type="image/webp"
        />
        <source
          media="(min-width: 768px)"
          srcSet={
            registration
              ? `${regisrer_tablet_1x} 1x, ${regisrer_tablet_2x} 2x`
              : `${login_tablet_1x} 1x, ${login_tablet_2x} 2x`
          }
          width="704"
          height="302"
          type="image/webp"
        />
        <img
          srcSet={
            registration
              ? `${regisrer_mobile_1x} 1x, ${regisrer_mobile_2x} 2x`
              : `${login_mobile_1x} 1x, ${login_mobile_2x} 2x`
          }
          src={registration ? regisrer_mobile_1x : login_mobile_1x}
          alt={registration ? "Cat" : "Dog"}
          width="335"
          height="280"
          loading="lazy"
          className="rounded-[30px] sm-max:w-full md:rounded-[60px]"
        />
      </picture>
      <div className="hidden bg-white md:absolute md:bottom-[32px] md:left-[32px] md:flex md:w-[294px] md:gap-[8px] md:rounded-[20px] md:px-[16px] md:py-[18px] lg:bottom-[97px] lg:left-[61px]">
        <div className="flex size-[60px] items-center justify-center rounded-[50%] bg-[#fff4df]">
          <img
            srcSet={
              registration
                ? `${modal_cat_1x} 1x, ${modal_cat_2x} 2x`
                : `${modal_dog_1x} 1x, ${modal_dog_2x} 2x`
            }
            src={registration ? modal_cat_1x : modal_dog_1x}
            alt={registration ? "Cat" : "Dog"}
            loading="lazy"
            className="h-[32px] w-[32px]"
          />
        </div>
        <div>
          <div className="mb-[8px] flex items-center justify-between">
            <h4 className="text-[16px] font-bold leading-[1.25] tracking-[-0.03em] text-[#f6b83d]">
              {registration ? "Jack" : "Rich"}
            </h4>
            <p className="text-[12px] font-medium leading-[1.17] tracking-[-0.02em] text-[#26262680]">
              Birthday:{" "}
              <span className="text-[#262626]">
                {registration ? "18.10.2021" : "21.09.2020"}
              </span>
            </p>
          </div>
          <p className="w-[194px] text-[12px] font-medium leading-[1.17] tracking-[-0.02em] text-[#262626cc]">
            {registration
              ? "Jack is a gray Persian cat with green eyes. He loves to be pampered and groomed, and enjoys playing with toys."
              : "Rich would be the perfect addition to an active family that loves to play and go on walks. I bet he would love having a doggy playmate too!"}
          </p>
        </div>
      </div>
    </div>
  );
};
