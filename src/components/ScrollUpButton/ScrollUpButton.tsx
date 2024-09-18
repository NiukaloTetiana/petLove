import { useEffect, useRef, useState } from "react";
import throttle from "lodash.throttle";
import { Icon } from "../../components";

export const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = throttle(() => {
      scrollYRef.current = window.scrollY;
      setIsVisible(scrollYRef.current > 300);
    }, 400);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClickBtn = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={handleClickBtn}
      className={`fixed bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#F6B83D] shadow-md transition duration-300 hover:bg-[#FFF4DF] md:bottom-[30px] md:right-[30px] lg:bottom-[40px] lg:right-[60px] ${
        !isVisible ? "scale-0" : "scale-1"
      }`}
    >
      <Icon id="arrow-up" className="fill-white" size={20} />
    </button>
  );
};
