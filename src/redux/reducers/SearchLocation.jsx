import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice(
    {
        name: 'location',
        initialState: {
            location: 'Ahamadabad',
            lon: '72.5800568',
            lat: '23.0215374'
        },
        reducers: {
            locationSuccess: (state, action) => {
                const {locationName, lat, lon} = action.payload;
                state.loading = false,
                state.location = locationName,
                state.lon = lon,
                state.lat = lat
            }
        }
    }
);

export const {locationSuccess} = locationSlice.actions;
export default locationSlice.reducer;