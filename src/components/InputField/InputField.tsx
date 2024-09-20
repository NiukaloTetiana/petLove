import { FieldErrors, FormState, UseFormRegister } from "react-hook-form";
import { useState } from "react";
import { Icon } from "../../components";

export interface IFormData {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

interface InputFieldProps {
  name: keyof IFormData;
  type: string;
  placeholder: string;
  errors: FieldErrors<IFormData>;
  dirtyFields: FormState<IFormData>["dirtyFields"];
  register: UseFormRegister<IFormData>;
  setShowPass?: (value: boolean) => void;
}

export const InputField = ({
  name,
  type,
  placeholder,
  errors,
  dirtyFields,
  register,
}: InputFieldProps) => {
  const [showPass, setShowPass] = useState(false);

  const baseClass =
    "bg-white w-full h-[42px] border border-[#26262626] rounded-[30px] p-[12px] md:p-[16px] text-[14px] md:text-[16px] leading-[1.29] md:leading-[1.25] tracking-[-0.03em] text-[#262626cc] placeholder:text-[#2626267f] hover:shadow-md focus:shadow-md hover:border-[#f6b83d] focus:border-[#f6b83d] transition duration-500";
  const errorClass =
    "border-[#ef2447] hover:border-[#ef2447] focus:border-[#ef2447] transition duration-300";
  const successClass =
    "border-[#08aa83] hover:border-[#08aa83] focus:border-[#08aa83] transition duration-300";

  const inputClass =
    !errors[name] && dirtyFields[name]
      ? `${baseClass} ${successClass}`
      : errors[name]
        ? `${baseClass} ${errorClass}`
        : baseClass;

  return (
    <div className="relative mb-5 last:mb-20 md:mb-[30px]">
      <input
        type={type === "password" && showPass ? "text" : type}
        placeholder={placeholder}
        className={inputClass}
        {...register(name)}
      />
      <div className="absolute right-[12px] top-1/2 flex -translate-y-1/2 transform items-center space-x-2 md:right-[15px]">
        {!errors[name]?.message && dirtyFields[name] && (
          <Icon
            id="check"
            size={18}
            className="fill-none stroke-[#08aa83] md:size-[22px]"
          />
        )}
        {errors[name]?.message && dirtyFields[name] && (
          <Icon
            id="close"
            size={18}
            className="fill-none stroke-[#ef2447] md:size-[22px]"
          />
        )}
        {type === "password" && setShowPass && (
          <button
            type="button"
            onClick={() => setShowPass(!showPass)}
            className="ml-2 md:ml-3"
          >
            <Icon
              id={showPass ? "eye" : "eye-off"}
              size={18}
              className="fill-none stroke-[#f6b83d] md:size-[22px]"
            />
          </button>
        )}
      </div>

      {errors[name] && (
        <p className="text-message text-[#ef2447]">{errors[name]?.message}</p>
      )}
      {!errors[name] && dirtyFields[name] && (
        <p className="text-message text-[#08aa83]">
          {`${name.charAt(0).toUpperCase()}${name.slice(1)} is secure`}
        </p>
      )}
    </div>
  );
};
