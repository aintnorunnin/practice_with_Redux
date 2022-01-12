import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authenticationSlice";
import counterSlice from "./counterSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    authentication: authSlice.reducer,
  },
});

export default store;
