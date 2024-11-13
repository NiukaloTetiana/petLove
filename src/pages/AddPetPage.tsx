import { AddPetForm, Loader, PetBlock } from "../components";

import { useAppSelector } from "../hooks";
import { selectIsLoadingUser } from "../redux";

const AddPetPage = () => {
  const isLoading = useAppSelector(selectIsLoadingUser);
  return (
    <>
      <div className="container flex flex-col gap-[10px] pb-5 md:gap-[16px] md:pb-[] lg:flex-row lg:gap-[32px] lg:px-[32px]">
        <PetBlock />
        <AddPetForm />
      </div>

      {isLoading && <Loader />}
    </>
  );
};

export default AddPetPage;
