import { createSlice } from "@reduxjs/toolkit";

const LoggedInSlice = createSlice({
    name: "login",
    initialState: { isLoggedIn: false },
    reducers: {
        loggedIn: (state) => {
            state.isLoggedIn = true;
        },
        notLoggedIn: (state) => {
            state.isLoggedIn = false;
        },
    },
});

//This is for dispatch
export const { LoginRedux } = LoggedInSlice.actions;

//This is for ConfigureStore
export default LoggedInSlice.reducer;
