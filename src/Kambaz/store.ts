import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/Reducer";
import accountReducer from "./Account/Reducer";
const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
  },
});
export default store;