/** @format */

import React, { useEffect, useReducer, useState } from "react";
import "./style.css";
import axios from "axios";
const Index = () => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");


  const [state, ]useReducer

  // const baseURL = "https://northwind.vercel.app/api/categories";
  const getAll = async () => {
    let response = await axios.get(baseURL);
    setCategory(response.data);
  };

  const addCategory = async (e) => {
    e.preventDefault();

    let newCat = {
      name: category,
    };

    let res = await axios.post(baseURL, newCat);

    setCategories([...categories, res.data]);

    setCategory("");
  };

const deleteCategory=async (id)=>{
      await axios.delete(`${baseURL}/${id}`)
                                 
}

  useEffect(() => {
    getAll();
  }, []);

  return (
    <div className="body">
      <div className="container">
        <div className="addTask">
          <form onSubmit={(e)=> addCategory(e)}>
            <input
              id="input"
              type="text"
              placeholder="Add your task"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
            <button id="add" className="btn" onClick={() => {}}>
              Add Task
            </button>
          </form>
        </div>
        <div className="taskList">
          <ul>
            {categories.map((elem) => {
              return (
                <li key={elem.id}>
                  <span>{elem.name}</span>
                  <button id="delete" className="btn">
                    Delete Task
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Index;
