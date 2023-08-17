import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCartItem(state, action) {
            state.push(action.payload);
        },
        removeCartItem(state, action) {
            return state.filter((item, index) => index !== action.payload);
        },
    },
});

export const {addCartItem, removeCartItem} = CartSlice.actions;
export default CartSlice.reducer;