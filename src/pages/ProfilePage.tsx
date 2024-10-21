import { useEffect } from "react";

import { UserCard } from "../components";
import { useAppDispatch } from "../hooks";
import { getUserCurrent } from "../redux";

const ProfilePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserCurrent());
  }, [dispatch]);

  return (
    <div className="container pb-[80px] lg:pb-[64px]">
      <UserCard />
    </div>
  );
};

export default ProfilePage;
