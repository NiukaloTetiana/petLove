import { useAppSelector } from "../../hooks";
import { selectFriends } from "../../redux";
import { FriendsItem } from "./FriendsItem";

export const FriendsList = () => {
  const friends = useAppSelector(selectFriends);

  return (
    <ul className="flex flex-wrap gap-5 lg:gap-y-[28px]">
      {friends.map((friend) => (
        <FriendsItem key={friend._id} friend={friend} />
      ))}
    </ul>
  );
};
