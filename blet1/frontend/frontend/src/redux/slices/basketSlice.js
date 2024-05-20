import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: JSON.parse(localStorage.getItem("basket")) || [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState, 
  reducers: {
    setBasket: (state, action) => {
      const elemIndex = state.basket.findIndex((elem) => elem._id === action.payload._id);
      if (elemIndex === -1) {
        state.basket = [...state.basket, { ...action.payload, count: 1 }];
      } else {
        state.basket[elemIndex].count++;
      }
      localStorage.setItem("basket", JSON.stringify(state.basket));
    },
  },
});

export const { setBasket } = basketSlice.actions;

export default basketSlice.reducer;
