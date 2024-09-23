import { ChangeEvent } from "react";
import { UseFormSetValue } from "react-hook-form";

import { FormData } from "../components";

export const formatPhoneNumber = (
  e: ChangeEvent<HTMLInputElement>,
  setPhone: (value: string) => void,
  setValue: UseFormSetValue<FormData>
) => {
  const inputValue = e.target.value.replace(/\D/g, "");
  const formattedValue = "+380 " + inputValue.slice(3);
  setPhone(formattedValue);
  setValue("phone", formattedValue, {
    shouldValidate: true,
    shouldDirty: true,
  });
};
