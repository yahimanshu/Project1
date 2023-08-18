import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
const ProductDetailSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductDetail(state, action) {
            state.push(action.payload);
        },
        removeProductDetail(state, action) {
            return state.filter((item, index) => index !== action.payload);
        },
    },
});

export const {addProductDetail, removeProductDetail} = ProductDetailSlice.actions;
export default ProductDetailSlice.reducer;