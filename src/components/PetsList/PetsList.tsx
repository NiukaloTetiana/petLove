import { useAppSelector } from "../../hooks";
import { selectUser } from "../../redux";
import { PetsItem } from "./PetsItem";

export const PetsList = () => {
  const user = useAppSelector(selectUser);

  return (
    <ul className="mb-5 flex flex-wrap justify-center gap-[14px] lg:mb-10">
      {user.pets.map((pet) => (
        <PetsItem key={pet._id} pet={pet} />
      ))}
    </ul>
  );
};
