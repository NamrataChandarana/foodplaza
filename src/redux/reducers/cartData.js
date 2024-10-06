import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState : {
        cart: [],
        cartItemsCount: [],
        cartSum: 0,
        cartLength: 0
    },
    reducers: {
        cartSuccess: (state, action) => {
            state.loading = false;
            state.cart =[...state.cart, action.payload];
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
            state.loading = false;
            state.cartItemsCount = action.payload;
        },
        cartItemsTotalSuccess: (state, action) => {
            console.log(action.payload)
            state.loading = false;
            state.cartSum = action.payload
        },
        cartLengthSuccess: (state, action) =>{
            state.loading = false;
            state.cartLength = action.payload
        }
    }
})


export const {cartSuccess, cartRemoveSuccess, cartClearSuccess, cartItemsCountSuccess, cartItemsTotalSuccess, cartLengthSuccess} = cartSlice.actions;
export default cartSlice.reducer