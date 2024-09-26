// import { IFriend } from "../../types";
import { FriendsItem } from "./FriendsItem";
import friends from "../../assets/friends.json";

// interface IFriendsListProps {
//   friends: IFriend[];
// }

export const FriendsList = () => {
  return (
    <ul className="flex flex-wrap gap-5 lg:gap-y-[28px]">
      {friends.map((friend, index) => (
        <FriendsItem key={index} friend={friend} />
      ))}
    </ul>
  );
};
