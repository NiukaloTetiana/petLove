import { Suspense, useEffect } from "react";

import { UserCard } from "../components";
import { useAppDispatch } from "../hooks";
import { getUserCurrent } from "../redux";
import { NavLink, Outlet } from "react-router-dom";

const ProfilePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserCurrent());
  }, [dispatch]);

  return (
    <div className="container flex flex-col gap-[32px] pb-[80px] lg:flex-row lg:gap-10 lg:px-[32px] lg:pb-[64px]">
      <UserCard />

      <div className="lg:w-[664px]">
        <div className="mb-5 flex items-center gap-[10px] md:gap-[8px] lg:mb-[32px]">
          <NavLink to="favorites" className="link-profile">
            My favorite pets
          </NavLink>
          <NavLink to="viewed" className="link-profile">
            Viewed
          </NavLink>
        </div>
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default ProfilePage;
