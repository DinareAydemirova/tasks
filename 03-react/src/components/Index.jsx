/** @format */

import React, { useReducer, useRef, useState } from "react";
import Reducer from "./reducer/Index";
const Index = () => {
  const [state, dispatch] = useReducer(Reducer, {
    value: "",
    count: 0,
  });
  console.log(state);
  const decInput = useRef();
  return (
    <div>
      <h1>{state.count}</h1>
      <input type="text" name="" id="" ref={decInput} />
      <button
        onClick={() => {
          console.log(decInput.current.value);
          dispatch({
            type: "SetInc",
            count: decInput.current.value,
          });
        }}
      >
        Inc
      </button>
      <button
        onClick={() => {
          console.log(decInput.current.value);
          dispatch({
            type: "SetDec",
            count: decInput.current.value,
          });
        }}
      >
        Dec
      </button>
    </div>
  );
};

export default Index;
