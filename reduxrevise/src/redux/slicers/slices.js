import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [],
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getDatas: (state, action) => {
     state.users=action.payload
    },
    addData:(state, action)=>{
        state.users.push(action.payload)

    }
    
  },
})

export const {getDatas , addData} = usersSlice.actions


export default usersSlice.reducer