import { useAppSelector } from "../../hooks";
import { selectPets } from "../../redux";
import { PetsItem } from "./PetsItem";

export const PetsList = () => {
  const pets = useAppSelector(selectPets);

  return (
    <ul className="mb-5 flex flex-wrap justify-center gap-[14px] lg:mb-10">
      {pets.map((pet) => (
        <PetsItem key={pet._id} pet={pet} />
      ))}
    </ul>
  );
};
