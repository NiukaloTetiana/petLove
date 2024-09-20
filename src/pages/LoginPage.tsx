import {
  login_desktop_1x,
  login_desktop_2x,
  login_mobile_1x,
  login_mobile_2x,
  login_tablet_1x,
  login_tablet_2x,
} from "../assets";
import { AuthForm, PetInfo } from "../components";

const LoginPage = () => {
  return (
    <div className="container px-[32px] pb-[10px] md:pb-[32px]">
      <div className="flex flex-col gap-[10px] md:gap-[16px] lg:flex-row lg:gap-[32px]">
        <div className="relative">
          <picture>
            <source
              media="(min-width: 1280px)"
              srcSet={`${login_desktop_1x} 1x, ${login_desktop_2x} 2x`}
              width="592"
              height="654"
              type="image/webp"
            />
            <source
              media="(min-width: 768px)"
              srcSet={`${login_tablet_1x} 1x, ${login_tablet_2x} 2x`}
              width="704"
              height="302"
              type="image/webp"
            />
            <img
              srcSet={`${login_mobile_1x} 1x, ${login_mobile_2x} 2x`}
              src={login_mobile_1x}
              alt="Dog"
              width="335"
              height="280"
              loading="lazy"
              className="rounded-[30px] sm-max:w-full md:rounded-[60px]"
            />
          </picture>

          <PetInfo />
        </div>

        <AuthForm />
      </div>
    </div>
  );
};

export default LoginPage;
