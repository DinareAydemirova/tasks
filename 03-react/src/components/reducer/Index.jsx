/** @format */

import React from "react";

const Reducer = (state, action) => {
  switch (action.type) {
    // case "SetValue":
    //   return { ...state, count: action.count };
    case "SetInc":
      return { ...state, count: state.count + +action.count };
    case "SetDec":
      return { ...state, count: state.count - +action.count };
  }
};

export default Reducer;
