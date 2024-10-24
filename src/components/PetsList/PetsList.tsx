import { useAppSelector } from "../../hooks";
import { selectPets } from "../../redux";
import { PetsItem } from "./PetsItem";

export const PetsList = () => {
  const pets = useAppSelector(selectPets);

  return (
    <ul className="scrollbar mb-5 flex max-h-[440px] flex-wrap gap-[14px] pr-[2px] lg:mb-10">
      {pets.map((pet) => (
        <PetsItem key={pet._id} pet={pet} />
      ))}
    </ul>
  );
};
