import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: "login",
    initialState: { isLoggedIn: null },
    reducers: {
        login: (state, value) => {
            state.isLoggedIn = value;
        },
        logout: (state) => {
            state.isLoggedIn = null;
        },
    },
});

//This is for dispatch
export const loginActions = loginSlice.actions;

//This is for ConfigureStore
export default loginSlice.reducer;
