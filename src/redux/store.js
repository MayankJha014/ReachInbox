import { configureStore } from "@reduxjs/toolkit";
import { mailSlice } from "./slice/mail";
import { threadSlice } from "./slice/threads";

const store = configureStore({
  reducer: {
    mails: mailSlice.reducer,
    threads: threadSlice.reducer,
  },
});

export default store;
