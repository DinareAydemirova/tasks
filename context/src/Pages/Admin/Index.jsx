import React, { useState } from "react";
import axios from "axios";
import { BASE_URL, endPoints } from "../../services/api";
import { Link } from "react-router-dom";

const Admin = ({ state, dispatch }) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");


  const filterProducts = () => {
    let filteredProducts = state.products;

    if (search) {
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (sortType === "a-z") {
      filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortType === "z-a") {
      filteredProducts.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortType === "high-low") {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortType === "low-high") {
      filteredProducts.sort((a, b) => b.price - a.price);
    }
   

    return filteredProducts;
  };

  
  const SearchInput = (e) => {
    setSearch(e.target.value);
  };

  const handleSort = (type) => {
    setSortType(type);
  };


  const CategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  return (
    <div>
      <>
        <link
          rel="stylesheet"
          href="https://cdn.tailgrids.com/tailgrids-fallback.css"
        />
        {/* ====== Table Section Start */}

        <section className="bg-white py-20 lg:py-[120px]">
        <div class="container gap-x-1 flex items-center justify-between">
        <div>
            <input
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                placeholder="Search..."
                value={search}
                onChange={SearchInput}
            />
            <button
                type="button"
                class="focus:outline-none text-white bg-indigo-500 hover:bg-indigo-500 focus:ring-4 focus:ring-indigo-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-indigo-500 dark:hover:bg-indigo-500 dark:focus:ring-indigo-500"
                onClick={() => handleSort("a-z")}
            >
                A-Z
            </button>
            <button
                type="button"
                class="focus:outline-none text-white bg-indigo-500 hover:bg-indigo-500 focus:ring-4 focus:ring-indigo-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-indigo-500 dark:hover:bg-indigo-500 dark:focus:ring-indigo-500"
                onClick={() => handleSort("z-a")}
            >
                Z-A
            </button>
            <button
                type="button"
                class="focus:outline-none text-white bg-indigo-500 hover:bg-indigo-500 focus:ring-4 focus:ring-indigo-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-indigo-500 dark:hover:bg-indigo-500 dark:focus:ring-indigo-500"
                onClick={() => handleSort("high-low")}
            >
                High-Low
            </button>
            <button
                type="button"
                class="focus:outline-none text-white bg-indigo-500 hover:bg-indigo-500 focus:ring-4 focus:ring-indigo-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-indigo-500 dark:hover:bg-indigo-500 dark:focus:ring-indigo-500"
                onClick={() => handleSort("low-high")}
            >
                Low-High
            </button>
        </div>
        <div>
        <select
          id="categories"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={selectedCategory}
          onChange={CategoryChange}
        >
          <option value="">Choose a category</option>
          <option value="electronics">Electronics</option>
          <option value="women's clothing">Women's Clothing</option>
          <option value="jewelery">Jewelry</option>
          <option value="men's clothing">Men's Clothing</option>
        </select>
           
        </div>
    </div>

          <div className="container">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4">
                <div className="max-w-full overflow-x-auto">
                  <table className="table-auto w-full">
                    <thead>
                      <tr className="bg-indigo-500 text-center">
                        <th
                          className="
                     w-1/6
                     min-w-[160px]
                     text-lg
                     font-semibold
                     text-white
                     py-2
                     lg:py-7
                     px-2
                     lg:px-4
                     border-l border-transparent
                     "
                        >
                          Image
                        </th>
                        <th
                          className="
                     w-1/6
                     min-w-[160px]
                     text-lg
                     font-semibold
                     text-white
                     py-2
                     lg:py-7
                     px-2
                     lg:px-4
                     "
                        >
                          Title
                        </th>
                        <th
                          className="
                     w-1/6
                     min-w-[160px]
                     text-lg
                     font-semibold
                     text-white
                     py-2
                     lg:py-7
                     px-2
                     lg:px-4
                     "
                        >
                          Price
                        </th>
                        <th
                          className="
                     w-1/6
                     min-w-[160px]
                     text-lg
                     font-semibold
                     text-white
                     py-2
                     lg:py-7
                     px-2
                     lg:px-4
                     "
                        >
                          Category
                        </th>
                        <th
                          className="
                     w-1/6
                     min-w-[160px]
                     text-lg
                     font-semibold
                     text-white
                     py-2
                     lg:py-7
                     px-2
                     lg:px-4
                     "
                        >
                          Rate
                        </th>
                        <th
                          className="
                     w-1/6
                     min-w-[160px]
                     text-lg
                     font-semibold
                     text-white
                     py-2
                     lg:py-7
                     px-2
                     lg:px-4
                     "
                        >
                          Count
                        </th>
                        <th
                          className="
                     w-1/6
                     min-w-[160px]
                     text-lg
                     font-semibold
                     text-white
                     py-2
                     lg:py-7
                     px-2
                     lg:px-4
                     "
                        >
                          Delete
                        </th>
                        <th
                          className="
                     w-1/6
                     min-w-[160px]
                     text-lg
                     font-semibold
                     text-white
                     py-2
                     lg:py-7
                     px-2
                     lg:px-4
                     border-r border-transparent
                     "
                        >
                          Edit
                        </th>
                        <th
                          className="
                     w-1/6
                     min-w-[160px]
                     text-lg
                     font-semibold
                     text-white
                     py-2
                     lg:py-7
                     px-2
                     lg:px-4
                     border-r border-transparent
                     "
                        >
                          Detail
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {filterProducts().map((elem) => {
                        const count = parseInt(elem.rating.count);
                        let countColorClass = "";
                        if (count < 100) {
                          countColorClass = "bg-red-500";
                        } else if (count < 200) {
                          countColorClass = "bg-yellow-500";
                        }
                        return (
                          <tr key={elem.id}>
                            <th
                              className={`text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8] ${countColorClass}`}
                            >
                              <img src={elem.image} alt="" className=" w-20" />
                            </th>
                            <td
                              className={`text-center font-medium  bg-[#F3F6FF] border-b border-l border-[#E8E8E8] ${countColorClass}`}
                            >
                              {elem.title}
                            </td>
                            <td
                              className={`text-center font-medium  bg-[#F3F6FF] border-b border-l border-[#E8E8E8] ${countColorClass}`}
                            >
                              {elem.price}
                            </td>
                            <td
                              className={`text-center font-medium  bg-[#F3F6FF] border-b border-l border-[#E8E8E8] ${countColorClass}`}
                            >
                              {elem.category}
                            </td>
                            <td
                              className={`text-center font-medium  bg-[#F3F6FF] border-b border-l border-[#E8E8E8] ${countColorClass}`}
                            >
                              {elem.rating.rate}
                            </td>
                            <td
                              className={`text-center font-medium  bg-[#F3F6FF] border-b border-l border-[#E8E8E8] ${countColorClass}`}
                            >
                              {elem.rating.count}
                            </td>
                            <td
                              className={`text-center font-medium  bg-[#F3F6FF] border-b border-l border-[#E8E8E8] ${countColorClass}`}
                            >
                              <button
                                type="button"
                                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                onClick={() => {
                                  let arr = state.products.filter(
                                    (e) => e.id !== elem.id
                                  );
                                  setData([...arr]);
                                  axios.delete(
                                    `${BASE_URL + endPoints.products + elem.id}`
                                  );
                                }}
                              >
                                Delete
                              </button>
                            </td>
                            <td
                              className={`text-center font-medium py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8] ${countColorClass}`}
                            >
                              <button
                                type="button"
                                className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                           
                              >
                               Edit
                              </button>
                            </td>
                            <td
                              className={`text-center font-medium py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8] ${countColorClass}`}
                            >
                              <button
                                type="button"
                                className="focus:outline-none text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                              >
                                Detail
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ====== Table Section End */}
      </>
    </div>
  );
};

export default Admin;
