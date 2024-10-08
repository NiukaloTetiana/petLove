import { useEffect } from "react";
import { FriendsList, Title } from "../components";
import { useAppDispatch } from "../hooks";
import { getFriends } from "../redux";
import { toast } from "react-toastify";

const FriendsPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFriends())
      .unwrap()
      .catch(() => {
        toast.error("Something went wrong. Please, reload the page.");
      });
  }, [dispatch]);

  return (
    <div className="container pb-[80px] pt-[34px] md:pt-[46px] lg:pt-[64px]">
      <Title title="Our friends" className="mb-10 md:mb-[44px] lg:mb-[60px]" />
      <FriendsList />
    </div>
  );
};

export default FriendsPage;
