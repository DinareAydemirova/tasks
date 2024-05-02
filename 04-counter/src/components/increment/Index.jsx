import React from "react";
import reducer from "../reducer";

const Increment = ({ state, dispatch }) => {
  return (
    <button
      onClick={() => {
        dispatch({
          type: "setInc",
          count: 1,
        });
      }}
    >
      +
    </button>
  );
};

export default Increment;
