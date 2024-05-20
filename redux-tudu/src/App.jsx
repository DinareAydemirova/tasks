/** @format */

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { AddToDo ,removeTodo, toggleComplete} from "./redux/slices/ToDoSlice";

function App() {
  const dispatch = useDispatch();

  const toDo = useSelector((state) => state.toDo.toDo);
  const [Value, setValue] = useState("");

  
  return (
    <>
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <div className="mb-4">
            <h1 className="text-grey-darkest">Todo List</h1>
            <div className="flex mt-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                placeholder="Add Todo"
                type="text"
                onChange={(e) => {
                  setValue(e.target.value);
                }}
              />
              <button
                className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal"
                onClick={() => {
                  dispatch(AddToDo(Value));
                 
                }}
              >
                Add
              </button>
            </div>
          </div>
          <div>
            {toDo?.map((elem) => {
              return (
                <div className="flex mb-4 items-center">
                  <input type="checkbox" name="" id="" />
                  <p className="w-full text-grey-darkest">{elem}</p>
                  <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green">
                    Edit
                  </button>
                  <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red"
                  onClick={()=>{
                    dispatch(removeTodo({id: elem.id}))
                  }}
                  >
                    delete
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
