import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState : {
        cart: [],
        cartItemsCount: [],
        cartSum: 0,
        cartLength: 0,
        cartRes: null,
        amountToPay: 0,
        restautrant: null
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
            state.loading = false;
            state.cartSum = action.payload
        },
        cartLengthSuccess: (state, action) =>{
            state.loading = false;
            state.cartLength = action.payload
        },
        cartResSuccess: (state, action) => {
            state.loading = false;
            state.cartRes = action.payload
        },
        amountToPaySuccess: (state, action) => {
            state.loading = false;
            state.amountToPay = action.payload
        },
        cartRestautrantSuccess: (state, action) => {
            state.loading = false;
            state.restautrant = action.payload
        }
    }
})


export const {cartSuccess, cartRemoveSuccess, cartClearSuccess, cartItemsCountSuccess, cartItemsTotalSuccess, cartLengthSuccess, cartResSuccess, amountToPaySuccess, cartRestautrantSuccess} = cartSlice.actions;
export default cartSlice.reducer