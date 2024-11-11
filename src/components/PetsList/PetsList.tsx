import { useAppSelector } from "../../hooks";
import { selectPets } from "../../redux";
import { PetsItem } from "./PetsItem";

export const PetsList = () => {
  const pets = useAppSelector(selectPets);

  return (
    <ul className="scrollbar mb-5 flex h-[279px] flex-wrap gap-[14px] pr-[2px] md:h-[150px] md:gap-x-[12px] lg:mb-10 lg:h-[275px]">
      {pets.map((pet) => (
        <PetsItem key={pet._id} pet={pet} />
      ))}
    </ul>
  );
};
