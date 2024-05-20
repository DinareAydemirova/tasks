/** @format */

import { configureStore } from "@reduxjs/toolkit";
import ToDoSlice from "./slices/ToDoSlice";

export const store = configureStore({
  reducer: {
    toDo: ToDoSlice,
  },
});
