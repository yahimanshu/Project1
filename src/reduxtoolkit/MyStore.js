import { configureStore } from "@reduxjs/toolkit";
import CardReducer from "./CartSlice";

const MyStore = configureStore({
    reducer: {
        cart: CardReducer,
    },
});

export default MyStore;