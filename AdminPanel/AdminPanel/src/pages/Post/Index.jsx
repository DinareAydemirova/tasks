/** @format */

import React, { useState } from "react";
import "./style.css";
import axios from "axios";

const Post = () => {
  const [inputValues, setInputValues] = useState({
    companyName: "",
    contactName: "",
    address: {
      city: "",
      region: "",
    },
  });
  return (
    <div className="post">
      <form
        className="w-full max-w-sm"
        onSubmit={(e) => {
          e.preventDefault();
          axios.post("https://northwind.vercel.app/api/suppliers", inputValues);
        }}
      >
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              Company Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              value={inputValues.companyName}
              onChange={(e) => {
                setInputValues({ ...inputValues, companyName: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-password"
            >
              Contact Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-password"
              type="text"
              value={inputValues.contactName}
              onChange={(e) => {
                setInputValues({ ...inputValues, contactName: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-password"
            >
              city
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-password"
              type="text"
              value={inputValues.address.city}
              onChange={(e) => {
                setInputValues({
                  ...inputValues,
                  address: { city: e.target.value },
                });
              }}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-password"
            >
              region
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-password"
              type="text"
              value={inputValues.address.region}
              onChange={(e) => {
                setInputValues({
                  ...inputValues,
                  address: { region: e.target.value },
                });
              }}
            />
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3" />
          <div className="md:w-2/3">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Post;
