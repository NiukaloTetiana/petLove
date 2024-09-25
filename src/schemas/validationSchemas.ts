import * as yup from "yup";

import { dateRegExp, emailRegExp, phoneRegExp, urlRegExp } from "../constants";

export const registerSchema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Min length must be more than 2 chars")
    .max(32, "Max length must be less than 32 chars"),
  email: yup
    .string()
    .required("Email is required")
    .email("Enter a valid email")
    .matches(emailRegExp, "Enter a valid email")
    .max(64, "Max length must be less than 64 chars"),
  password: yup
    .string()
    .required("Password is required")
    .min(7, "Min length must be more than 8 chars")
    .max(64, "Max length must be less than 64 chars"),
  confirmPassword: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Enter a valid email")
    .matches(emailRegExp, "Enter a valid email")
    .max(64, "Max length must be less than 64 chars"),
  password: yup.string().required("Password is required"),
});

export const editInfoSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .matches(emailRegExp, "Email must be a valid email address")
    .required("Email is required"),
  avatar: yup
    .string()
    .optional()
    .matches(urlRegExp, "Avatar URL must be a valid image link"),
  phone: yup
    .string()
    .optional()
    .matches(
      phoneRegExp,
      "Phone number is incorrect. Please use the format: +380962939397"
    ),
});

export const addPetSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  name: yup.string().required("Name is required"),
  imgUrl: yup
    .string()
    .required("Image URL is required")
    .matches(
      urlRegExp,
      "Image URL must be a valid link to an image (png, jpg, jpeg, gif, bmp, webp)"
    ),
  species: yup.string().required("Species is required"),
  birthday: yup
    .string()
    .required("Birthday is required")
    .matches(dateRegExp, "Birthday must be in the format: '17.10.2020'"),
  sex: yup
    .string()
    .oneOf(["male", "female", "multiple"])
    .required("Sex is required"),
});
