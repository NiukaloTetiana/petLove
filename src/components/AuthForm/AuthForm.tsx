import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

import { registerSchema, loginSchema } from "../../schemas/validationSchemas";
import { InputField } from "../InputField/InputField";
import { IFormData } from "../InputField/InputField";
import { Link } from "react-router-dom";

interface IAuthFormProps {
  registration?: boolean;
  toggleModal?: () => void;
}

export const AuthForm = ({ registration, toggleModal }: IAuthFormProps) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm<IFormData>({
    mode: "onChange",
    resolver: yupResolver(registration ? registerSchema : loginSchema),
  });

  const onSubmit: SubmitHandler<IFormData> = async ({ name }) => {
    try {
      if (registration && name) {
        toast.success(`Yohoo! ${name}, you are successfully registered!`);
      } else {
        toast.success(`Welcome back!`);
      }
      toggleModal && toggleModal();
      reset();
    } catch (error) {
      toast.error(error as string);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`w-full rounded-[30px] bg-white px-5 md:rounded-[60px] md:px-[140px] lg:h-[654px] lg:w-[592px] lg:px-[84px] ${registration ? "py-5 md:py-[30px] lg:py-[77px]" : "py-[55px] md:py-[71px] lg:py-[118px]"}`}
    >
      <h2 className="mb-[12px] text-[28px] font-bold leading-[1] tracking-[-0.04em] text-[#262626] md:mb-[16px] md:text-[54px]">
        {registration ? "Registration" : "Log in"}
      </h2>
      <p className="mb-[24px] text-[14px] font-medium leading-[1.29] tracking-[-0.02em] text-[#262626] md:mb-[32px] md:text-[18px] md:leading-[1.22]">
        {registration
          ? "Thank you for your interest in our platform."
          : "Welcome! Please enter your credentials to login to the platform:"}
      </p>

      {registration && (
        <InputField
          name="name"
          type="text"
          placeholder="Name"
          errors={errors}
          dirtyFields={dirtyFields}
          register={register}
        />
      )}

      <InputField
        name="email"
        type="email"
        placeholder="Email"
        errors={errors}
        dirtyFields={dirtyFields}
        register={register}
      />

      <InputField
        name="password"
        type="password"
        placeholder="Password"
        errors={errors}
        dirtyFields={dirtyFields}
        register={register}
      />

      {registration && (
        <InputField
          name="confirmPassword"
          type="password"
          placeholder="Confirm password"
          errors={errors}
          dirtyFields={dirtyFields}
          register={register}
          registration
        />
      )}

      <button
        type="submit"
        className="link-reg mb-[12px] h-[42px] w-full rounded-[30px] bg-[#f6b83d] p-[12px] text-center text-[14px] font-bold uppercase leading-[1.29] tracking-[-0.03em] text-white transition duration-500 md:mb-[16px] md:h-[52px] md:p-[16px] md:text-[16px] md:leading-[1]"
      >
        {registration ? "Registration" : "Log in"}
      </button>

      <p className="w-full text-center text-[12px] font-medium leading-[1.17] tracking-[-0.03em] text-[#2626267f] md:text-[14px] md:leading-[1.43]">
        {registration ? "Already have an account?" : "Don't have an account?"}{" "}
        <Link
          to={registration ? "/login" : "/register"}
          className="font-bold text-[#f6b83d] underline"
        >
          {registration ? "Login" : "Registration"}
        </Link>
      </p>
    </form>
  );
};
