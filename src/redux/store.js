import { configureStore } from "@reduxjs/toolkit";
import locationSlice from './reducers/SearchLocation';
import cartSlice from './reducers/cartData'

const store = configureStore({
    reducer:{
        location: locationSlice,
        cart: cartSlice
    }
});

export default store;
