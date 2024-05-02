/** @format */

const reducer = (state, action) => {
  switch (action.type) {
    case "setInc":
      return { ...state, count: state.count + action.count };
    case "setDec":
      return { ...state, count: state.count - action.count };

    case "SetValue":
      return { ...state, value: action.value };

    case "SetData":
      return { value: "", data: [...state.data, action.value] };

    case "delTodo":
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.id),
      };

    case "editTodo":
      return
  }
};
export default reducer;
