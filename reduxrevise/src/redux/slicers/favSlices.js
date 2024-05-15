import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  fav:[]
}

export const favsSlice = createSlice({
  name: 'fav',
  initialState,
  reducers: {
    addToFav:(state, action)=>{
        let elemIndex=state.fav.findIndex((elem)=>elem.id==action.payload.id)
        if(elemIndex==-1){
            state.fav=[...state.fav, {...action.payload}]
        }else{
            state.fav=state.fav.filter((el)=>el.id!=action.payload.id)
        }
    }
         
    
  },
})

export const { addToFav  } = favsSlice.actions


export default favsSlice.reducer