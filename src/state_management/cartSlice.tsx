import { createSlice } from "@reduxjs/toolkit";
import { CartType } from '../interfaces/Props';


export const cartSlice = createSlice({
    name: 'Cart',
    initialState: {
        cart: [] as Array<CartType>
    },
    reducers: {
        addToCart: (state, action) => {
            console.log(action.payload);
            state.cart.push(action.payload);
        },
        deleteFromCart: (state, action) => {
            state.cart = state.cart.filter((item: CartType, index: number) => item.id !== action.payload);
        },
        UpdateFromCart: (state, action) => {
            let ind = state.cart.findIndex((x: CartType) => x.id === action.payload.id);            
            state.cart[ind] = action.payload;            
        }
    }
});

export const { addToCart, deleteFromCart, UpdateFromCart} = cartSlice.actions;
export default  cartSlice.reducer;