/** @format */

import { useEffect, useState } from "react";

import "./App.css";
import axios from "axios";
import { useList } from "./context/Index";
import List from "./components/list";
import Register from "./components/Register";


function App() {
  const {setData }= useList();
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/posts").then((res)=>{
     setData(res.data)

   })

   
  },[]);
  return (
    <>
      {/* <List></List> */}
      <Register></Register>
    </>
  );
}

export default App;
