import React, { useState } from "react";
import axios from "axios";
import { BASE_URL, endPoints } from "../../services/api";
import { v4 as uuidv4 } from "uuid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { productValidationSchema } from "../../schema/postProductSchema";
import { userValidationSchema } from "../../schema/postUsersSchema";


const Post = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const productInitialValues = {
    image: "",
    title: "",
    price: "",
    category: "",
    rate: "",
    count: "",
  };

  const userInitialValues = {
    userName: "",
    name: "",
    surname: "",
    password: "",
    email: "",
    registeredDate: "",
    isAdmin: false,
  };

 
  return (
    <div>
      <select
        value={selectedOption}
        onChange={handleOptionChange}
        className="max-w-sm mx-auto mt-12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="">Select what to post</option>
        <option value="postProduct">Post Product</option>
        <option value="postUsers">Post Users</option>
      </select>

      {selectedOption === "postProduct" && (
        
       <div  className="flex justify-center">
         <Formik
          initialValues={productInitialValues}
          validationSchema={productValidationSchema}
          onSubmit={(values, { resetForm }) => {
            axios.post(BASE_URL + endPoints.products, values);
            resetForm();
          }}
        >
          {({ errors, touched }) => (
            <Form className="w-6/12 mt-20">
           <div className="justify-center">
           <div className="md:flex md:items-center mb-6">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                  Image
                </label>
                <div className="md:w-2/3">
                  <Field
                    name="image"
                    type="text"
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  />
                  <ErrorMessage
                    name="image"
                    component="div"
                    className="text-red-500 mt-1"
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                  Title
                </label>
                <div className="md:w-2/3">
                  <Field
                    name="title"
                    type="text"
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  />
                  <ErrorMessage
                    name="title"
                    component="div"
                    className="text-red-500 mt-1"
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                  Price
                </label>
                <div className="md:w-2/3">
                  <Field
                    name="price"
                    type="number"
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  />
                  <ErrorMessage
                    name="price"
                    component="div"
                    className="text-red-500 mt-1"
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                  Category
                </label>
                <div className="md:w-2/3">
                  <Field
                    name="category"
                    type="text"
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  />
                  <ErrorMessage
                    name="category"
                    component="div"
                    className="text-red-500 mt-1"
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                  Rate
                </label>
                <div className="md:w-2/3">
                  <Field
                    name="rate"
                    type="number"
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  />
                  <ErrorMessage
                    name="rate"
                    component="div"
                    className="text-red-500 mt-1"
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                  Count
                </label>
                <div className="md:w-2/3">
                  <Field
                    name="count"
                    type="number"
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  />
                  <ErrorMessage
                    name="count"
                    component="div"
                    className="text-red-500 mt-1"
                  />
                </div>
              </div>
           </div>
              <button
                type="submit"
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
       </div>
      )}

      {selectedOption === "postUsers" && (
        <div  className="flex justify-center">
        <Formik
          initialValues={userInitialValues}
          validationSchema={userValidationSchema}
          onSubmit={(values, { resetForm }) => {
            const id = uuidv4();
            axios.post(BASE_URL + endPoints.users, { ...values, id });
            resetForm();
          }}
        >
          {({ errors, touched }) => (
            <Form className="w-6/12 mt-20">
              <div className="md:flex md:items-center mb-6">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                  Username
                </label>
                <div className="md:w-2/3">
                  <Field
                    name="userName"
                    type="text"
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  />
                  <ErrorMessage
                    name="userName"
                    component="div"
                    className="text-red-500 mt-1"
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                  Name
                </label>
                <div className="md:w-2/3">
                  <Field
                    name="name"
                    type="text"
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 mt-1"
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                  Surname
                </label>
                <div className="md:w-2/3">
                  <Field
                    name="surname"
                    type="text"
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  />
                  <ErrorMessage
                    name="surname"
                    component="div"
                    className="text-red-500 mt-1"
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                  Password
                </label>
                <div className="md:w-2/3">
                  <Field
                    name="password"
                    type="password"
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 mt-1"
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                  Email
                </label>
                <div className="md:w-2/3">
                  <Field
                    name="email"
                    type="email"
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 mt-1"
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                  Registered Date
                </label>
                <div className="md:w-2/3">
                  <Field
                    name="registeredDate"
                    type="datetime-local"
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  />
                  <ErrorMessage
                    name="registeredDate"
                    component="div"
                    className="text-red-500 mt-1"
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                  isAdmin
                </label>
                <div className="md:w-2/3">
                  <Field
                    name="isAdmin"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="isAdmin"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    isAdmin
                  </label>
                  <ErrorMessage
                    name="isAdmin"
                    component="div"
                    className="text-red-500 mt-1"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
        </div>
      )}
    </div>
  );
};

export default Post;
