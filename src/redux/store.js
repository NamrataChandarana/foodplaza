import { configureStore } from "@reduxjs/toolkit";
import locationSlice from './reducers/SearchLocation'

const store = configureStore({
    reducer:{
        location: locationSlice
    }
});

export default store;
