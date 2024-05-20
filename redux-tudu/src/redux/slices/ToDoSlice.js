/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toDo: [],
};

export const counterSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    AddToDo: (state, action) => {
      state.toDo.push(action.payload);
    },
    removeTodo:(state, action)=>{                                      
        state.toDo = state.toDo.filter(toDo => toDo.id !== action.payload.id);
    },
    toggleComplete: (state, action) => {
        const index = state.findIndex(
            (todo) => todo.id === action.payload.id
        )
        state[index].completed = action.payload.completed
    },
    editTodo:(state, action)=>{
       
    }
  },
});

export const { AddToDo, removeTodo,toggleComplete } = counterSlice.actions;

export default counterSlice.reducer;
