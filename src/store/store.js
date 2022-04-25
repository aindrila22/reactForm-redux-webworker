import { configureStore } from "@reduxjs/toolkit";
import { formReducer } from "./form/form-slice";

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});
export default store;
