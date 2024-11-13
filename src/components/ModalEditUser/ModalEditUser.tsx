import { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import {
  FieldErrors,
  FormState,
  SubmitHandler,
  useForm,
} from "react-hook-form";

import { Icon } from "../../components";

import { editInfoSchema } from "../../schemas";
import { formatPhoneNumber } from "../../helpers";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { selectUser, updateUserAvatar, updateUserCurrent } from "../../redux";

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
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors, dirtyFields },
  } = useForm<FormData>({
    mode: "onChange",
    resolver: yupResolver(editInfoSchema),
  });

  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  useEffect(() => {
    user.name && setValue("name", user.name);
    user.email && setValue("email", user.email);
    setValue("avatar", user.avatar || "");
    setValue("phone", user.phone || "+380");
  }, [dispatch, setValue, user.avatar, user.email, user.name, user.phone]);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await dispatch(updateUserCurrent(data)).unwrap();
      toggleEditModal();
      toast.info("The information has been successfully updated.");
    } catch (error) {
      toast.error("Oops... Something went wrong. Please, try again.");
    }
  };

  const handleUploadAvatar = async () => {
    const avatarURL = getValues("avatar");
    if (avatarURL) {
      try {
        await dispatch(updateUserAvatar(avatarURL)).unwrap();
        toggleEditModal();
        toast.info("The avatar has been successfully updated.");
      } catch (error) {
        toast.error("Oops... Something went wrong. Please, try again.");
      }
    }
  };

  const inputClass = (
    errors: FieldErrors<FormData>,
    dirtyFields: FormState<FormData>["dirtyFields"],
    fieldName: keyof FormData
  ): string => {
    const avatarClass =
      "max-w-[161px] md:max-w-none md:w-[226px] sm-max:w-[148px] sm-max:!pr-5 !h-[42px] !pr-[39px] md:!pr-5 truncate";
    const baseClass = `input w-full input-hover ${fieldName === "avatar" ? avatarClass : ""}`;
    const errorClass = "border-red-700";
    const successClass = "border-green-700";

    if (errors[fieldName] && dirtyFields[fieldName]) {
      return `${baseClass} ${errorClass} `;
    }
    if (!errors[fieldName] && dirtyFields[fieldName]) {
      return `${baseClass} ${successClass}`;
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

  return (
    <>
      <h3 className="mb-5 text-[20px] font-bold leading-[1] text-[#2b2b2a] md:text-[18px] md:leading-[1.33]">
        Edit information
      </h3>
      <div className="mb-3">
        <div className="mx-auto flex size-[80px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#fff4df] md:size-[86px]">
          {!user.avatar ? (
            <Icon
              id="user"
              size={40}
              className="fill-[#f6b83d] stroke-[#f6b83d] md:size-[42px]"
            />
          ) : (
            <img
              src={user.avatar}
              alt={user.name || ""}
              className="h-full w-full object-cover"
            />
          )}
        </div>
      </div>

      <form
        className="w-[295px] sm-max:w-[260px] md:w-[380px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="relative mb-[10px] flex w-full gap-[8px] sm-max:gap-[4px] md:mb-5">
          <input
            {...register("avatar")}
            type="text"
            placeholder="Add avatar link"
            className={inputClass(errors, dirtyFields, "avatar")}
          />
          {renderMessage(errors, dirtyFields, "avatar")}

          <button
            onClick={handleUploadAvatar}
            type="button"
            className="link-reg flex h-[42px] w-[126px] items-center justify-center gap-[8px] rounded-[30px] bg-[#fff4df] text-[12px] leading-[1.33] text-[#262626] transition duration-500 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-[#f6b83d] sm-max:gap-[4px] sm-max:text-[11px] md:w-[146px] md:text-[14px] md:leading-[1.29]"
            disabled={!getValues("avatar") || !!errors.avatar}
          >
            Upload photo
            <Icon
              id="upload-cloud"
              size={18}
              className="fill-none stroke-[#f6b83d] sm-max:size-[16px]"
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
            className={inputClass(errors, dirtyFields, "phone")}
            autoComplete="tel"
            onChange={(e) => formatPhoneNumber(e, setValue)}
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
