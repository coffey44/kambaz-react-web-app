import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer.ts";
import accountReducer from "./Account/reducer.ts";
const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
  },
});
export default store;