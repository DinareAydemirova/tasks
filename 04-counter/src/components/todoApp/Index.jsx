import React, { useReducer } from "react";
import reducer from "../reducer";
import { v4 as uuidv4 } from "uuid";

const ToDo = () => {
  const [state, dispatch] = useReducer(reducer, {
    value: "",
    data: [],
  });


  const handleDelete = (id) => {
    dispatch({
      type: "delTodo",
      id: id,
    });
  };

  

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
            value: state.value,
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
              <button onClick={() => {handleDelete(elem.id)}}>Delete</button>
              <button onClick={()=>{
                let newTOdO= prompt("edit todo", elem.name)
              }}>Edit</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ToDo;
