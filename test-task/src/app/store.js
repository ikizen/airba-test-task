import { configureStore } from "@reduxjs/toolkit";
import LoggedInSlice from "./IsLoggedIn";

export default configureStore({
    reducer: {
        login: LoggedInSlice.reducer,
    },
});

// export default store
