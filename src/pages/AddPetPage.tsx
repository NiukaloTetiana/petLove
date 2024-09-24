import { AddPetForm, PetBlock } from "../components";

const AddPetPage = () => {
  return (
    <div className="container flex flex-col gap-[10px] pb-5 md:gap-[16px] md:pb-[] lg:flex-row lg:gap-[32px] lg:px-[32px]">
      <PetBlock />
      <AddPetForm />
    </div>
  );
};

export default AddPetPage;
