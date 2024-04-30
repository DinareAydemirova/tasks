const reducer=(state, action)=>{

    console.log("action", action);
    switch (action.type) {
        case "SetValue":
            return { ...state, value: action.value };
        case "SetData":
            return { value: "", data: [...state.data, action.value] };
    }
}

export default reducer