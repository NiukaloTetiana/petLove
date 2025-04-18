import { Suspense, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";

import { Loader, UserCard } from "../components";

import { useAppDispatch, useAppSelector } from "../hooks";
import { getUserCurrent, selectIsLoadingUser } from "../redux";

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoadingUser);

  useEffect(() => {
    dispatch(getUserCurrent());
  }, [dispatch]);

  return (
    <>
      <div className="container flex flex-col gap-[28px] pb-[80px] lg:flex-row lg:pb-[64px] lg:pl-[32px] lg:pr-[25px]">
        <UserCard />

        <div className="lg:w-[676px]">
          <div className="mb-5 flex items-center gap-[10px] md:gap-[8px] lg:mb-[32px] lg:pt-10">
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

      {isLoading && <Loader />}
    </>
  );
};

export default ProfilePage;
