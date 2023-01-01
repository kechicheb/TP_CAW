import { createSlice } from "@reduxjs/toolkit";
export const contactSlice = createSlice({
  initialState: [
    { name: "ali", phone: "21554827", email: "ali@gmail.com" },
    { name: "ali", phone: "21554827", email: "ali@gmail.com" },

  ],
  name: "contactSlice",
  reducers: {
    addContact: (state, action) => {
      return [ action.payload,...state];
    },
  },
});
export const { addContact } = contactSlice.actions;
export default contactSlice.reducer;
