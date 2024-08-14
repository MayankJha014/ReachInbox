import { createAsyncThunk } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

export const getAllListMails = createAsyncThunk("getAllListMails", async () => {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(
      "https://hiring.reachinbox.xyz/api/v1/onebox/list",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    );
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error);
    }

    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    throw new Error(error);
  }
});
export const getThreadsById = createAsyncThunk("getThreadsById", async (id) => {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(
      `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    );
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error);
    }

    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    throw new Error(error);
  }
});
