import { AuthForm, PetBlock } from "../components";

const LoginPage = () => {
  return (
    <div className="container px-[32px] pb-[10px] md:pb-[32px]">
      <div className="flex flex-col gap-[10px] md:gap-[16px] lg:flex-row lg:gap-[32px]">
        <PetBlock />
        <AuthForm />
      </div>
    </div>
  );
};

export default LoginPage;
