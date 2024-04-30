import React, { useReducer } from 'react'
import "./style.css";
import reducer from "./reducer"

const ToDo = () => {
    
const [state, dispatch]=useReducer(reducer ,{
  value:"",
  data:[]
})

  return (
    <div className="body">
    <div className="container">
      <div className="addTask">
        <form>
          <input
            id="input"
            type="text"
            placeholder="Add your task"
           value={state.value} onChange={(e)=>{
            dispatch({
                type: "SetValue",
                value: e.target.value,
              });
           }}
          />
          <button id="add" className="btn" onClick={()=>{
            dispatch({
                type:"SetData",
                data:state.value
            })
          }}>
            Add Task
          </button>
        </form>
      </div>
    
    </div>
  </div>
  )
}

export default ToDo