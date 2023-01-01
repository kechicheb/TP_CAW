import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "./slices/mycontacts";
import postSlice from "./slices/myposts";
const store = configureStore({
  reducer: {
    contact: contactSlice,
    post: postSlice,
  },
});
export default store;
