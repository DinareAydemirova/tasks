import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './slices/basketSlice'
import productsReducer from './slices/adminSlice'


export const store = configureStore({
  reducer: {
    products:basketReducer,
    products:productsReducer
  },
})