import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartCount: 0,
};

const cartSlice = createSlice({
  name: "cartCount",
  initialState,
  reducers: {
    setCount: (state) => {
      state.cartCount +=1;
    },
  },
});

export const { setCount } = cartSlice.actions;

export default cartSlice.reducer;