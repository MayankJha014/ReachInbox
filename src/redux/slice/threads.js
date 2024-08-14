import { createSlice } from "@reduxjs/toolkit";
import {
  deleteThreadsById,
  getAllListMails,
  getThreadsById,
} from "../action/api";

export const threadSlice = createSlice({
  name: "thread",
  initialState: {
    isLoading: true,
    threadData: null,
    isSuccess: null,
    isMessage: null,
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
    builder.addCase(deleteThreadsById.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(deleteThreadsById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isMessage = action.payload.message;
      state.isSuccess = action.payload.success;
    });
    builder.addCase(deleteThreadsById.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
    });
  },
});
