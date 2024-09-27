import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState : {
        cart: [],
        cartItemsCount: []
    },
    reducers: {
        cartSuccess: (state, action) => {
            console.log(action.payload)
            state.loading = false;
            state.cart =[...state.cart, action.payload];
            console.log(state.cart)
        },
        cartRemoveSuccess: (state, action) =>{
            state.loading = false;
            state.cart = action.payload;
        },
        cartClearSuccess: (state) =>{
            state.loading = false;
            state.cart = [];
        },
        cartItemsCountSuccess: (state, action) =>{
            console.log(action.payload)
            state.loading = false;
            state.cartItemsCount = action.payload;
            console.log(state.cartItemsCount)
        }
    }
})


export const {cartSuccess, cartRemoveSuccess, cartClearSuccess, cartItemsCountSuccess} = cartSlice.actions;
export default cartSlice.reducer