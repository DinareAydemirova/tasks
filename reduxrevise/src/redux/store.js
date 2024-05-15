import { configureStore } from '@reduxjs/toolkit'
import usersReducer  from "./slicers/slices"
import favsReducer  from "./slicers/favSlices"


export const store = configureStore({
  reducer: {
    users:usersReducer,
    fav:favsReducer

  },
})