// import { IPet } from "../../types";
import { PetsItem } from "./PetsItem";
import pets from "../../assets/pets.json";

// interface IPetsListProps {
//   pets: IPet[];
// }

export const PetsList = () => {
  return (
    <ul className="mb-5 flex flex-wrap justify-center gap-[14px] lg:mb-10">
      {pets.map((pet, index) => (
        <PetsItem key={index} pet={pet} />
      ))}
    </ul>
  );
};
