import { configureStore } from "@reduxjs/toolkit";
import  cartSlice  from './cartSlice';


export const store = configureStore({
    reducer: {
        cartCounter: cartSlice
        // user: null // we can have multiple reducers
    }
});