import { createSlice } from "@reduxjs/toolkit";
import { getAllListMails, getThreadsById } from "../action/api";

export const threadSlice = createSlice({
  name: "thread",
  initialState: {
    isLoading: true,
    threadData: null,
    isSuccess: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getThreadsById.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getThreadsById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.threadData = action.payload.data;
      state.isSuccess = action.payload.success;
    });
    builder.addCase(getThreadsById.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
    });
  },
});
