import {
  regisrer_desktop_1x,
  regisrer_desktop_2x,
  regisrer_mobile_1x,
  regisrer_mobile_2x,
  regisrer_tablet_1x,
  regisrer_tablet_2x,
} from "../assets";
import { AuthForm, PetInfo } from "../components";

const RegistrationPage = () => {
  return (
    <div className="container px-[32px] pb-[10px] md:pb-[32px]">
      <div className="flex flex-col gap-[10px] md:gap-[16px] lg:flex-row lg:gap-[32px]">
        <div className="relative">
          <picture>
            <source
              media="(min-width: 1280px)"
              srcSet={`${regisrer_desktop_1x} 1x, ${regisrer_desktop_2x} 2x`}
              width="592"
              height="654"
              type="image/webp"
            />
            <source
              media="(min-width: 768px)"
              srcSet={`${regisrer_tablet_1x} 1x, ${regisrer_tablet_2x} 2x`}
              width="704"
              height="302"
              type="image/webp"
            />
            <img
              srcSet={`${regisrer_mobile_1x} 1x, ${regisrer_mobile_2x} 2x`}
              src={regisrer_mobile_1x}
              alt="Cat"
              width="335"
              height="280"
              loading="lazy"
              className="rounded-[30px] sm-max:w-full md:rounded-[60px]"
            />
          </picture>

          <PetInfo registration />
        </div>

        <AuthForm registration />
      </div>
    </div>
  );
};

export default RegistrationPage;
