import * as Yup from "yup";


export const productValidationSchema = Yup.object().shape({
    image: Yup.string().required("Image is required"),
    title: Yup.string().required("Title is required").matches(/^[A-Z][a-z]*$/, "Name must start with a capital letter"),
    price: Yup.number()
      .typeError("Price must be a number")
      .positive("Price must be positive")
      .required("Price is required"),
    category: Yup.string().required("Category is required"),
    rate: Yup.number().typeError("Rate must be a number").required("Rate is required"),
    count: Yup.number().typeError("Count must be a number").required("Rate is required"),
  });

 
