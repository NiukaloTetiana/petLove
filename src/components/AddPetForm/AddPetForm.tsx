import { RefObject, useEffect, useRef, useState } from "react";
import {
  Controller,
  FieldErrors,
  FormState,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import DatePicker from "react-datepicker";
import { toast } from "react-toastify";
import "react-datepicker/dist/react-datepicker.css";

import { addPetSchema } from "../../schemas";
import { Icon } from "../../components";

export interface AddPetFormData {
  title: string;
  name: string;
  imgUrl: string;
  species: string;
  birthday: string;
  sex: "male" | "female" | "multiple";
}

const speciesOptions = [
  { label: "dog" },
  { label: "cat" },
  { label: "monkey" },
  { label: "bird" },
  { label: "snake" },
  { label: "turtle" },
  { label: "lizard" },
  { label: "frog" },
  { label: "fish" },
  { label: "ants" },
  { label: "bees" },
  { label: "butterfly" },
  { label: "spider" },
  { label: "scorpion" },
];

export const AddPetForm = () => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors, dirtyFields },
  } = useForm<AddPetFormData>({
    mode: "onChange",
    resolver: yupResolver(addPetSchema),
  });

  const [isListVisible, setIsListVisible] = useState<boolean>(false);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const sortRef: RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setIsListVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleListClick = () => {
    setIsListVisible(!isListVisible);
  };

  const handleLabelClick = (type: string) => {
    setValue("species", type);
    setIsListVisible(false);
    setSelectedType(type);
  };

  const inputClass = (
    errors: FieldErrors<AddPetFormData>,
    dirtyFields: FormState<AddPetFormData>["dirtyFields"],
    fieldName: keyof AddPetFormData
  ): string => {
    const imgUrlClass =
      "max-w-[161px] md:max-w-none md:w-[278px] sm-max:w-[130px] sm-max:!pr-5 !h-[42px] !pr-[39px] md:!pr-5 truncate";
    const baseClass = `input border-[#26262626] w-full placeholder:text-[#2626267f] input-hover ${fieldName === "imgUrl" ? imgUrlClass : ""}`;
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
    errors: FieldErrors<AddPetFormData>,
    dirtyFields: FormState<AddPetFormData>["dirtyFields"],
    fieldName: keyof AddPetFormData
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

  const onSubmit: SubmitHandler<AddPetFormData> = async () => {
    try {
      toast.info("The information has been successfully updated.");
    } catch (error) {
      toast.error("Oops... Something went wrong. Please, try again.");
    }
  };

  return (
    <div className="md:py-p-10 rounded-[30px] bg-white p-5 pt-[28px] md:rounded-[60px] md:px-[136px] lg:w-[592px] lg:px-[80px] lg:py-[60px]">
      <h3 className="mb-[24px] text-[28px] font-bold leading-[1] tracking-[-0.03em] text-[#2b2b2a] sm-max:text-[24px] md:mb-10 md:text-[32px]">
        Add my pet /{" "}
        <span className="text-[14px] leading-[1.29] text-[#2b2b2a66] md:text-[16px] md:leading-[1.25]">
          Personal details
        </span>
      </h3>

      <div className="mx-auto mb-[16px] flex size-[68px] items-center justify-center rounded-full bg-[#fff4df] md:mb-[12px] md:size-[86px]">
        <Icon
          id="footprint"
          size={34}
          className="fill-[#f6b83d] stroke-none md:size-[44px]"
        />
      </div>

      <form
        className="w-[295px] sm-max:w-full md:w-[432px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="relative mb-[10px] flex w-full gap-[8px] sm-max:gap-[4px] md:mb-5">
          <input
            {...register("imgUrl")}
            type="text"
            placeholder="Enter URL"
            className={inputClass(errors, dirtyFields, "imgUrl")}
          />
          {renderMessage(errors, dirtyFields, "imgUrl")}

          <button
            type="button"
            className="link-reg flex h-[42px] w-[126px] items-center justify-center gap-[8px] rounded-[30px] bg-[#fff4df] text-[12px] leading-[1.33] text-[#262626] transition duration-500 sm-max:gap-[4px] sm-max:text-[11px] md:w-[146px] md:text-[14px] md:leading-[1.29]"
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
            {...register("title")}
            type="text"
            autoComplete="title"
            placeholder="Title"
            className={inputClass(errors, dirtyFields, "title")}
          />
          {renderMessage(errors, dirtyFields, "title")}
        </div>

        <div className="relative mb-[10px] w-full md:mb-[14px]">
          <input
            {...register("name")}
            type="text"
            autoComplete="name"
            placeholder="Pet's Name"
            className={inputClass(errors, dirtyFields, "name")}
          />
          {renderMessage(errors, dirtyFields, "name")}
        </div>

        <div className="relative mb-[31px] flex gap-2 md:mb-10 md:gap-3">
          <div className="relative">
            <Controller
              control={control}
              name="birthday"
              render={({ field }) => (
                <DatePicker
                  value={field.value}
                  selected={field.value ? new Date(field.value) : null}
                  maxDate={new Date()}
                  onChange={(date) => {
                    field.onChange(date);
                  }}
                  dateFormat="dd.MM.yyyy"
                  placeholderText="00.00.0000"
                  className="input !w-[144px] placeholder:text-[#2626267f] sm-max:!w-[130px] md:!w-[210px]"
                />
              )}
            />

            <Icon
              id="calendar"
              size={18}
              className="absolute right-[12px] top-[12px] fill-none stroke-[#262626] sm-max:size-4 md:right-[16px] md:top-[16px] md:size-5"
            />

            {renderMessage(errors, dirtyFields, "birthday")}
          </div>

          <div ref={sortRef} className="relative">
            <input
              {...register("species")}
              type="text"
              onClick={handleListClick}
              placeholder="Type of pet"
              className="input !w-[143px] truncate placeholder:text-[#2626267f] sm-max:!w-[102px] sm-max:pr-6 md:!w-[210px]"
              readOnly
            />

            <Icon
              id="chevron-down"
              className={`absolute right-[12px] top-[12px] fill-none stroke-[#262626] transition duration-300 sm-max:size-4 md:right-[16px] md:top-[16px] md:size-5 ${
                isListVisible ? "rotate-180" : ""
              }`}
              size={18}
            />

            {isListVisible && (
              <ul className="scrollbar absolute top-[46px] z-[2] h-[78px] w-[143px] space-y-[8px] rounded-[15px] border border-[#26262626] bg-white p-3 text-[14px] font-medium leading-[1.25] tracking-[-0.03em] text-[#26262699] shadow-md sm-max:w-[102px] md:top-[54px] md:h-[126px] md:w-[210px] md:p-[14px] md:text-[16px] md:leading-[1.29]">
                {speciesOptions.map(({ label }) => (
                  <li
                    key={label}
                    onClick={() => handleLabelClick(label)}
                    className={`cursor-pointer hover:text-[#f6b83d] ${
                      selectedType === label ? "text-[#f6b83d]" : ""
                    }`}
                  >
                    {label}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <Link
            to="/profile"
            className="link-reg flex h-[42px] w-[100px] items-center justify-center rounded-[30px] bg-[#262626] bg-opacity-[0.05] text-[14px] font-bold leading-[1.29] tracking-[-0.03em] text-[#262626] transition duration-500 md:h-[52px] md:w-[170px] md:text-[16px] md:leading-[1.25]"
          >
            Back
          </Link>
          <button
            type="submit"
            className="link-reg h-[42px] w-[100px] rounded-[30px] bg-[#f6b83d] text-center text-[14px] font-bold leading-[1.29] tracking-[-0.03em] text-white transition duration-500 md:h-[52px] md:w-[170px] md:text-[16px] md:leading-[1.25]"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
