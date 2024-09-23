import { AuthForm, PetBlock } from "../components";

const RegistrationPage = () => {
  return (
    <div className="container px-5 pb-[10px] md:pb-[32px]">
      <div className="flex flex-col gap-[10px] md:gap-[16px] lg:flex-row lg:gap-[32px]">
        <PetBlock />
        <AuthForm registration />
      </div>
    </div>
  );
};

export default RegistrationPage;
