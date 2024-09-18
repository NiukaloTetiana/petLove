import { Link } from "react-router-dom";

interface IAuthButtonProps {
  className: string;
  toggleMenu?: () => void;
}

export const AuthButton = ({
  toggleMenu,
  className = "",
}: IAuthButtonProps) => {
  return (
    <>
      <ul className={`justify-center items-center gap-[14px] ${className}`}>
        <li>
          <Link
            to="/register"
            onClick={() => {
              if (toggleMenu) {
                toggleMenu();
              }
            }}
            className=""
          >
            Registration
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            onClick={() => {
              if (toggleMenu) {
                toggleMenu();
              }
            }}
            className=""
          >
            Login
          </Link>
        </li>
      </ul>
    </>
  );
};
