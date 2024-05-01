/** @format */

import { useState, useReducer } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Increment from "./components/increment/Index";
import Decrement from "./components/decrement/Index";
import Count from "./components/count/Index";
import reducer from "./components/reducer";
import ToDo from "./components/todoApp/Index";

function App() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
  });

  return (
    <>
      <Increment state={state} dispatch={dispatch} />
      <Count state={state}/>
      <Decrement state={state} dispatch={dispatch} />
      <ToDo />
    </>
  );
}

export default App;
