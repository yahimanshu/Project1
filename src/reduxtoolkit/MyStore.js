import { configureStore } from "@reduxjs/toolkit";
import CardReducer from "./CartSlice";
import ProductSlice from "./ProductSlice";

const MyStore = configureStore({
    reducer: {
        cart: CardReducer,
        prodcuct: ProductSlice,
    },
});

export default MyStore;