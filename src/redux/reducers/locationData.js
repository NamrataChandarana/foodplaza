import { createSlice } from "@reduxjs/toolkit";

const locationDataSlice = createSlice({
    name:'locations',
    initialState: {
        locations: []
    },
    reducers:{
        locationDataSuccess: (state, action) =>{
            state.loading = false,
            state.locations = action.payload
        }
    }
})

export const {locationDataSuccess} = locationDataSlice.actions;
export default locationDataSlice.reducer;