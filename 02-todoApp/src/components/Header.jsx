import { useState } from "react"
import { v4 as uuidv4 } from "uuid";
import React from 'react'

const Header = ({ todos, setTodos }         ) => {
    let [inputValue, setinputValue] = useState("");
  return (
    <div>
        
        <input type="text" name="" id="" value={inputValue} onChange={(e)=>{
            setinputValue(e.target.value)
            

        }}/>
        <button onClick={()=>{
          let obj = {
            id: uuidv4(),
            todo: inputValue,
          };

          setTodos([...todos, obj]);

          setinputValue("");
        }}>Add</button>
    </div>
  )
}

export default Header