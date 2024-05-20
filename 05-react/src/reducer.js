const reducer =(state, action)=>{
    switch (action.type) {
        case "SetData":
            return {...state, data:action.data}
         case "SetBasket"  :
            return{...state, basket:action.basket}
        case "SetLocalBasket":
            return {...state, localbasket:action.localbasket}
        case "ItemCount":
            return {...state, itemCount:action.itemCount}
    }
    }
    
    export default reducer