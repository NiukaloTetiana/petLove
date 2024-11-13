import { useEffect } from "react";
import { toast } from "react-toastify";

import { FriendsList, Loader, Title } from "../components";

import { useAppDispatch, useAppSelector } from "../hooks";
import { getFriends, selectIsLoadingFriends } from "../redux";

const FriendsPage = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoadingFriends);

  useEffect(() => {
    dispatch(getFriends())
      .unwrap()
      .catch(() => {
        toast.error("Something went wrong. Please, reload the page.");
      });
  }, [dispatch]);

  return (
    <>
      <div className="container pb-[80px] pt-[34px] md:pt-[46px] lg:pt-[64px]">
        <Title
          title="Our friends"
          className="mb-10 md:mb-[44px] lg:mb-[60px]"
        />
        <FriendsList />
      </div>

      {isLoading && <Loader />}
    </>
  );
};

export default FriendsPage;
