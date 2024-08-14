import { createSlice } from "@reduxjs/toolkit";
import { getAllListMails } from "../action/api";

export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    isLoading: true,
    mailData: null,
    isSuccess: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getAllListMails.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getAllListMails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.mailData = action.payload.data;
      state.isSuccess = action.payload.success;
    });
    builder.addCase(getAllListMails.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
    });
  },
});
