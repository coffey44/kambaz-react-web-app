import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/Reducer.ts";
import accountReducer from "./Account/reducer";
const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
  },
});
export default store;