import { configureStore } from "@reduxjs/toolkit";
import CardReducer from "./CartSlice";
import ProductSlice from "./ProductSlice";
import ProductDetailSlice from "./ProductDetailSlice";

const MyStore = configureStore({
    reducer: {
        cart: CardReducer,
        prodcuct: ProductSlice,
        prodcuctdetail: ProductDetailSlice,
    },
});

export default MyStore;