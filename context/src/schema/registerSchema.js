import * as Yup from "yup";


export const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("Username is required")
      .min(3, "too short")
      .max(8, "too long"),
    password: Yup.string()
      .required("Password is required")
      .matches(/^(?=.*[A-Z])/, "Must contain at least one uppercase character")
      .matches(/^(?=.*[0-9])/, "Must contain at least one number")
      .matches(/^(?=.*[0-9])/, "Must contain at least one number"),
      name: Yup.string()
      .required("Name is required")
      .matches(/^[A-Z][a-z]*$/, "Name must start with a capital letter"),
    surname: Yup.string()
      .required("Surname is required")
      .matches(/^[A-Z][a-z]*$/, "Surname must start with a capital letter"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    registrationDate: Yup.date().required("Registration date is required"),
    isAdmin: Yup.boolean().required("isAdmin is required"),
  });
