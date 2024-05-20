
import * as Yup from "yup";

export const loginValidationSchema = Yup.object().shape({
    username: Yup.string()
    .required("Username is required")
    .min(3, "too short")
    .max(8, "too long"),
    password: Yup.string()
    .required("Password is required")
    .matches(/^(?=.*[A-Z])/, "Must contain at least one uppercase character")
    .matches(/^(?=.*[0-9])/, "Must contain at least one number")
    .matches(/^(?=.*[0-9])/, "Must contain at least one number")
  });