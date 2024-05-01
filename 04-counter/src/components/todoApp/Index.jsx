/** @format */

import React, { useReducer } from "react";
import reducer from "../reducer";
import { v4 as uuidv4 } from "uuid";

const ToDo = () => {
  const [state, dispatch] = useReducer(reducer, {
    value: "",
    data: [],
  });

  return (
    <div>
      <input
        type="text"
        value={state.value}
        onChange={(e) => {
          dispatch({
            type: "SetValue",
            value: e.target.value,
          });
        }}
      />
      <button
        onClick={() => {
          dispatch({
            type: "SetData",
            data: state.data,
          });
          //    console.log(state.value);
        }}
      >
        Add
      </button>

      <ul>
        {state.data.map((elem) => {
          return (
            <li key={uuidv4()}>
              {elem}
              <button onClick={() => {}}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ToDo;
