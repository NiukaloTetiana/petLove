import { Link } from "react-router-dom";

import {
  error_mobile_1x,
  error_mobile_2x,
  error_tablet_1x,
  error_tablet_2x,
} from "../assets";

const NotFoundPage = () => {
  return (
    <div className="container pb-5 md:pb-[]">
      <div className="flex min-h-screen items-center justify-center rounded-[30px] bg-[#f6b83d] md:rounded-[60px]">
        <div className="text-center">
          <h2 className="mb-5 flex items-center justify-center gap-[8px] text-[120px] font-extrabold leading-[1] text-white md:mb-10 md:text-[300px]">
            4
            <picture>
              <source
                media="(min-width: 768px)"
                srcSet={`${error_tablet_1x} 1x, ${error_tablet_2x} 2x`}
                width={280}
                height={280}
                className="h-[280px] w-[280px]"
                type="image/webp"
              />
              <img
                srcSet={`${error_mobile_1x} 1x, ${error_mobile_2x} 2x`}
                src={error_mobile_1x}
                alt="Cat"
                width={109}
                height={109}
                loading="lazy"
                className="rounded-[50%]"
              />
            </picture>
            4
          </h2>
          <p className="mb-5 text-[16px] font-bold leading-[1.25] tracking-[-0.03em] text-white md:text-[24px] md:leading-[1.17]">
            Ooops! This page not found :(
          </p>

          <Link
            to="/"
            className="link-reg mx-auto block h-[42px] w-[150px] rounded-[30px] bg-[#fff4df] px-[30px] py-[12px] text-[14px] font-bold leading-[1.29] tracking-[-0.03em] text-[#f6b83d] md:h-[48px] md:w-[162px] md:py-[14px] md:text-[16px] md:leading-[1,25]"
          >
            To home page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
