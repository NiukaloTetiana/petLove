import { FriendsList, Title } from "../components";

const FriendsPage = () => {
  return (
    <div className="container pb-[80px] pt-[34px] md:pt-[46px] lg:pt-[64px]">
      <Title title="Find your favorite pet" className="mb-10 lg:mb-10" />
      <FriendsList />
    </div>
  );
};

export default FriendsPage;
