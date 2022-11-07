import { configureStore } from "@reduxjs/toolkit";
import isLoggedIn from "./isLoggedIn";

export default configureStore({
    reducer: {
        login: isLoggedIn.reducer,
    },
});

// export default store
