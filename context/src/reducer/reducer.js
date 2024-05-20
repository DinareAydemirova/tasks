function reducer(state, action) {
  
    switch (action.type) {
      case "SetProducts":
        return {
          ...state,
          products: action.products,
          filteredProd: action.products,
        };
        case "SetUsers":
          return {
            ...state,
            users: action.users,
            filteredUsers: action.users,
          };
      
      default:
        break;
    }
  }
  
  export default reducer;