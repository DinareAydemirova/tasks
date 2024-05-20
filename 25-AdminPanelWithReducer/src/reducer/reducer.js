function reducer(state, action) {
  
    switch (action.type) {
      case "SetProducts":
        return {
          ...state,
          products: action.products,
          filteredProd: action.products,
        };
  
      case "SearchWord": {
        let arr = state.products.filter((elem) =>
          elem.title.includes(action.searchValue)
        );
  
        return { ...state, filteredProd: arr };
      }
      case "AtoZ": {
        let arr = [...state.products].sort((a, b) =>
          a.title.localeCompare(b.title)
        );
  
        return { ...state, filteredProd: arr };
      }
      case "DeleteProduct": {
        const filteredProducts = state.products.filter(
          (product) => product.id !== action.productId
        );
        return {
          ...state,
          products: filteredProducts,
          filteredProd: filteredProducts,
        };
      }
      default:
        break;
    }
  }
  
  export default reducer;