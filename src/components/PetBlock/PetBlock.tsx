import { useLocation } from "react-router-dom";

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
  pet_mobile_1x,
  pet_mobile_2x,
  pet_tablet_1x,
  pet_tablet_2x,
  pet_desktop_1x,
  pet_desktop_2x,
} from "../../assets";

export const PetBlock = () => {
  const location = useLocation();
  const isRegistrationPage = location.pathname === "/register";
  const isLoginPage = location.pathname === "/login";

  return (
    <div className="relative">
      <picture>
        <source
          media="(min-width: 1280px)"
          srcSet={
            isRegistrationPage
              ? `${regisrer_desktop_1x} 1x, ${regisrer_desktop_2x} 2x`
              : isLoginPage
                ? `${login_desktop_1x} 1x, ${login_desktop_2x} 2x`
                : `${pet_desktop_1x} 1x, ${pet_desktop_2x} 2x`
          }
          width={592}
          height={654}
          type="image/webp"
        />
        <source
          media="(min-width: 768px)"
          srcSet={
            isRegistrationPage
              ? `${regisrer_tablet_1x} 1x, ${regisrer_tablet_2x} 2x`
              : isLoginPage
                ? `${login_tablet_1x} 1x, ${login_tablet_2x} 2x`
                : `${pet_tablet_1x} 1x, ${pet_tablet_2x} 2x`
          }
          width={704}
          type="image/webp"
        />
        <img
          srcSet={
            isRegistrationPage
              ? `${regisrer_mobile_1x} 1x, ${regisrer_mobile_2x} 2x`
              : isLoginPage
                ? `${login_mobile_1x} 1x, ${login_mobile_2x} 2x`
                : `${pet_mobile_1x} 1x, ${pet_mobile_2x} 2x`
          }
          src={
            isRegistrationPage
              ? regisrer_mobile_1x
              : isLoginPage
                ? login_mobile_1x
                : pet_mobile_1x
          }
          alt={isRegistrationPage ? "Cat" : isLoginPage ? "Dog" : "Pet"}
          width={335}
          loading="lazy"
          className="#f6b83d rounded-[30px] sm-max:w-full md:rounded-[60px]"
        />
      </picture>
      {(isRegistrationPage || isLoginPage) && (
        <div className="hidden bg-white md:absolute md:bottom-[32px] md:left-[32px] md:flex md:w-[294px] md:gap-[8px] md:rounded-[20px] md:px-[16px] md:py-[18px] lg:bottom-[97px] lg:left-[61px]">
          <div className="flex size-[60px] items-center justify-center rounded-[50%] bg-[#fff4df]">
            <img
              srcSet={
                isRegistrationPage
                  ? `${modal_cat_1x} 1x, ${modal_cat_2x} 2x`
                  : `${modal_dog_1x} 1x, ${modal_dog_2x} 2x`
              }
              src={isRegistrationPage ? modal_cat_1x : modal_dog_1x}
              alt={isRegistrationPage ? "Cat" : "Dog"}
              loading="lazy"
              className="h-[32px] w-[32px]"
            />
          </div>
          <div>
            <div className="mb-[8px] flex items-center justify-between">
              <h4 className="text-[16px] font-bold leading-[1.25] tracking-[-0.03em] text-[#f6b83d]">
                {isRegistrationPage ? "Jack" : "Rich"}
              </h4>
              <p className="text-[12px] font-medium leading-[1.17] tracking-[-0.02em] text-[#26262680]">
                Birthday:{" "}
                <span className="text-[#262626]">
                  {isRegistrationPage ? "18.10.2021" : "21.09.2020"}
                </span>
              </p>
            </div>
            <p className="w-[194px] text-[12px] font-medium leading-[1.17] tracking-[-0.02em] text-[#262626cc]">
              {isRegistrationPage
                ? "Jack is a gray Persian cat with green eyes. He loves to be pampered and groomed, and enjoys playing with toys."
                : "Rich would be the perfect addition to an active family that loves to play and go on walks. I bet he would love having a doggy playmate too!"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
