// import { useState } from "react";
import { toast } from "react-toastify";
import { Icon } from "../../components";
import {
  FieldErrors,
  FormState,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { editInfoSchema } from "../../schemas";
// import { formatPhoneNumber } from "../../helpers";

export interface FormData {
  name: string;
  email: string;
  avatar?: string;
  phone?: string;
}

interface IModalEditUserProps {
  toggleEditModal: () => void;
}

export const ModalEditUser = ({ toggleEditModal }: IModalEditUserProps) => {
  // const [phone, setPhone] = useState("");

  const {
    register,
    handleSubmit,
    // setValue,
    formState: { errors, dirtyFields },
  } = useForm<FormData>({
    mode: "onChange",
    resolver: yupResolver(editInfoSchema),
  });

  const inputClass = (
    errors: FieldErrors<FormData>,
    dirtyFields: FormState<FormData>["dirtyFields"],
    fieldName: keyof FormData
  ): string => {
    const baseClass = "input w-full";
    const errorClass = "border-red-700";
    const successClass = "border-green-700";
    const avatarClass = "input w-[161px] md:w-[226px] md:h-[42px]";

    if (errors[fieldName] && dirtyFields[fieldName]) {
      return `${baseClass} ${errorClass}`;
    }
    if (!errors[fieldName] && dirtyFields[fieldName]) {
      return `${baseClass} ${successClass}`;
    }

    if (fieldName === "avatar") {
      return `${baseClass} ${avatarClass} ${errors[fieldName] ? errorClass : ""}`;
    }
    return baseClass;
  };

  const renderMessage = (
    errors: FieldErrors<FormData>,
    dirtyFields: FormState<FormData>["dirtyFields"],
    fieldName: keyof FormData
  ) => {
    if (errors[fieldName]) {
      return (
        <p className="message-edit text-red-700">
          {errors[fieldName]?.message}
        </p>
      );
    }
    if (!errors[fieldName] && dirtyFields[fieldName]) {
      return (
        <p className="message-edit text-green-700">{`${fieldName.charAt(0).toUpperCase()}${fieldName.slice(
          1
        )} is entered correctly`}</p>
      );
    }
    return null;
  };

  const onSubmit: SubmitHandler<FormData> = async () => {
    try {
      toggleEditModal();
      toast.info("The information has been successfully updated.");
    } catch (error) {
      toast.error("Oops... Something went wrong. Please, try again.");
    }
  };

  return (
    <>
      <h3 className="mb-5 text-[20px] font-bold leading-[1] text-[#2b2b2a] md:text-[18px] md:leading-[1.33]">
        Edit information
      </h3>
      <div className="mb-3">
        <div className="mx-auto mb-[12px] flex size-[80px] items-center justify-center rounded-[50%] bg-[#fff4df] md:size-[86px]">
          <Icon
            id="user"
            size={40}
            className="fill-[#f6b83d] stroke-[#f6b83d] md:size-[42px]"
          />
        </div>
      </div>

      <form
        className="w-[295px] sm-max:w-[260px] md:w-[380px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="relative mb-[10px] flex w-full gap-[8px] md:mb-5">
          <input
            {...register("avatar")}
            type="text"
            placeholder="Add avatar link"
            className={inputClass(errors, dirtyFields, "avatar")}
          />
          {renderMessage(errors, dirtyFields, "avatar")}

          <button
            type="button"
            className="link-reg flex h-[42px] w-[126px] items-center justify-center gap-[8px] rounded-[30px] bg-[#fff4df] text-[12px] leading-[1.33] text-[#262626] transition duration-500 md:w-[146px] md:text-[14px] md:leading-[1.29]"
          >
            Upload photo
            <Icon
              id="upload-cloud"
              size={18}
              className="fill-none stroke-[#f6b83d]"
            />
          </button>
        </div>

        <div className="relative mb-[10px] w-full md:mb-[14px]">
          <input
            {...register("name")}
            type="text"
            autoComplete="name"
            placeholder="Enter your name"
            className={inputClass(errors, dirtyFields, "name")}
          />
          {renderMessage(errors, dirtyFields, "name")}
        </div>
        <div className="relative mb-[10px] w-full md:mb-[14px]">
          <input
            {...register("email")}
            type="email"
            autoComplete="email"
            placeholder="Enter your email"
            className={inputClass(errors, dirtyFields, "email")}
          />
          {renderMessage(errors, dirtyFields, "email")}
        </div>
        <div className="relative mb-[21px] w-full md:mb-10">
          <input
            {...register("phone")}
            name="phone"
            type="tel"
            // value={phone}
            className={inputClass(errors, dirtyFields, "phone")}
            autoComplete="tel"
            placeholder="+380"
            // onChange={(e) => formatPhoneNumber(e, setPhone, setValue)}
          />
          {renderMessage(errors, dirtyFields, "phone")}
        </div>

        <div className="relative mb-[8px] w-full md:mb-[16px]">
          <button type="submit" className="button-modal link-log">
            Save
          </button>
        </div>
      </form>
    </>
  );
};
