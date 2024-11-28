import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  course: "",
  message: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateField: (state, action) => {
      state[action.payload.field] = action.payload.value;
    },
    resetForm: (state) => {
      return initialState;
    },
  },
});

export const { updateField, resetForm } = formSlice.actions;
export default formSlice.reducer;
