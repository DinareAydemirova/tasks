import React, { useEffect, useState } from "react";
import { getAllData } from "../../services";
import { BASE_URL, endPoints } from "../../services/api";
import axios from "axios";
import { Link } from "react-router-dom";

const Users = ({ state, dispatch }) => {
  const [sortType, setSortType] = useState("");
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [showAdmins, setShowAdmins] = useState(false);
  const [showFemales, setShowFemales] = useState(false);
  const [showMales, setShowMales] = useState(false);


  useEffect(() => {
    getAllData(endPoints.users).then((data) => {
      dispatch({
        type: "SetUsers",
        users: data,
      });
    });
  }, []);

  const SearchInput = (e) => {
    setSearch(e.target.value);
  };

  const filterUsers = () => {
    if (!state.users) {
      return [];
    }

    let filteredUsers = [...state.users];

    if (search) {
      filteredUsers = filteredUsers.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (sortType === "a-z") {
      filteredUsers.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortType === "z-a") {
      filteredUsers.sort((a, b) => b.name.localeCompare(a.name));
    }

    if (showAdmins) {
      filteredUsers = filteredUsers.filter((user) => user.isAdmin);
    }

    if (showFemales) {
      filteredUsers = filteredUsers.filter((user) => user.gender === "femele");
    }
    if (showMales) {
      filteredUsers = filteredUsers.filter((user) => user.gender === "male");
    }
    return filteredUsers;
  };

  const handleSort = (type) => {
    setSortType(type);
  };

  const ShowAdmins = () => {
    setShowAdmins(!showAdmins);
  };
  const ShowFemales = () => {
    setShowFemales(!showFemales);
  };
  const ShowMales = () => {
    setShowMales(!showMales);
  };
  return (
    <div className="relative overflow-x-auto">
      <div className=" my-3">
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          placeholder="Search..."
          value={search}
          onChange={SearchInput}
        />
        <button
          type="button"
          className="focus:outline-none text-white bg-indigo-500 hover:bg-indigo-500 focus:ring-4 focus:ring-indigo-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-indigo-500 dark:hover:bg-indigo-500 dark:focus:ring-indigo-500"
          onClick={() => handleSort("a-z")}
        >
          A-Z
        </button>
        <button
          type="button"
          className="focus:outline-none text-white bg-indigo-500 hover:bg-indigo-500 focus:ring-4 focus:ring-indigo-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-indigo-500 dark:hover:bg-indigo-500 dark:focus:ring-indigo-500"
          onClick={() => handleSort("z-a")}
        >
          Z-A
        </button>
        
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onChange={ShowAdmins}
            checked={showAdmins}
          />
          <label
            htmlFor="default-checkbox"
            className="ms-2 mr-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Show Admins
          </label>
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="w-4  h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onChange={ShowFemales}
            checked={showFemales}
          />
          <label
            htmlFor="default-checkbox"
            className="ms-2 mr-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Females
          </label>
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onChange={ShowMales}
            checked={showMales}
          />
          <label
            htmlFor="default-checkbox"
            className="ms-2 mr-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Males
          </label>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              id
            </th>
            <th scope="col" className="px-6 py-3">
              user name
            </th>
            <th scope="col" className="px-6 py-3">
              name
            </th>
            <th scope="col" className="px-6 py-3">
              surname
            </th>
            <th scope="col" className="px-6 py-3">
              password
            </th>
            <th scope="col" className="px-6 py-3">
              email
            </th>
            <th scope="col" className="px-6 py-3">
              register date
            </th>
            <th scope="col" className="px-6 py-3">
              Balence
            </th>
            <th scope="col" className="px-6 py-3">
              Delete
            </th>
            <th scope="col" className="px-6 py-3">
              Edit
            </th>
            <th scope="col" className="px-6 py-3">
              Detail
            </th>
          </tr>
        </thead>
        <tbody>
          {filterUsers()?.map((elem) => {
            return (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">{elem.id}</td>
                <td className="px-6 py-4">{elem.userName}</td>
                <td className="px-6 py-4">{elem.name}</td>
                <td className="px-6 py-4">{elem.surname}</td>
                <td className="px-6 py-4">{elem.password}</td>
                <td className="px-6 py-4">{elem.email}</td>
                <td className="px-6 py-4">{elem.registeredDate}</td>
                <td className="px-6 py-4">{elem.balence}</td>

                <td className="px-6 py-4 ">
                  <button
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    onClick={() => {
                      let arr = state.users.filter((e) => e.id !== elem.id);
                      setData([...arr]);
                      axios.delete(`${BASE_URL + endPoints.users + elem.id}`);
                    }}
                  >
                    Delete
                  </button>
                </td>
                <td className="px-6 py-4 ">
                  <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" >
                    Edit
                  </button>
                </td>
                <td className="px-6 py-4 ">
                  <button className="focus:outline-none text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                    Detail
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
