import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState : {
        cart: [],
        cartItemsCount: []
    },
    reducers: {
        cartSuccess: (state, action) => {
            state.loading = false;
            state?.cart?.push(action.payload);
        },
        cartRemoveSuccess: (state, action) =>{
            state.loading = false;
            state.cart = action.payload;
            console.log(state.cart)
        },
        cartClearSuccess: (state) =>{
            state.loading = false;
            state.cart = [];
        },
        cartItemsCountSuccess: (state) =>{
            state.loading = false;
            state.cartItemsCount.push(action.payload);
        }
    }
})


export const {cartSuccess, cartRemoveSuccess, cartClearSuccess, cartItemsCountSuccess} = cartSlice.actions;
export default cartSlice.reducer