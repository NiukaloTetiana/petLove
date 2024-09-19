import { NavLink, useLocation } from "react-router-dom";

interface IAuthButtonProps {
  className: string;
  toggleMenu?: () => void;
}

export const AuthButton = ({
  toggleMenu,
  className = "",
}: IAuthButtonProps) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <ul className={`items-center justify-center gap-[8px] ${className}`}>
        <li>
          <NavLink
            to="/login"
            onClick={() => {
              if (toggleMenu) {
                toggleMenu();
              }
            }}
            className={`link-auth bg-[#f6b83d] text-white md:w-[119px] ${isHomePage ? "hover:bg-[#f9b020] focus:bg-[#f9b020] lg:outline lg:outline-1 lg:outline-[#ffffff7f]" : "link-log"}`}
          >
            Log in
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/register"
            onClick={() => {
              if (toggleMenu) {
                toggleMenu();
              }
            }}
            className="link-auth link-reg bg-[#fff4df] text-[#f6b83d] md:w-[149px]"
          >
            Registration
          </NavLink>
        </li>
      </ul>
    </>
  );
};
