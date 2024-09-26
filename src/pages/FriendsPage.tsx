import { FriendsList, Title } from "../components";

const FriendsPage = () => {
  return (
    <div className="container pb-[80px] pt-[34px] md:pt-[46px] lg:pt-[64px]">
      <Title title="Our friends" className="mb-10 lg:mb-[60px]" />
      <FriendsList />
    </div>
  );
};

export default FriendsPage;
