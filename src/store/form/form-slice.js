import { createSlice } from "@reduxjs/toolkit";

const initialFormState = {
  topic: "",
  username: "",
  review: "",
};

const formSlice = createSlice({
  name: "review",
  initialState: initialFormState,
  reducers: {
    getInfo(state, action) {
      state.topic = action.payload.topic;
      state.username = action.payload.username;
      state.review = action.payload.review;
    },
  },
});

export const formAction = formSlice.actions;
export const formReducer = formSlice.reducer;
