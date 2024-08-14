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
export const deleteThreadsById = createAsyncThunk(
  "deleteThreadsById",
  async (id) => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${id}`,
        {
          method: "DELETE",
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
  }
);

export const resetMail = createAsyncThunk("resetMail", async () => {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(
      `https://hiring.reachinbox.xyz/api/v1/onebox/reset`,
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

export const replyMail = createAsyncThunk("replyMail", async (id, postData) => {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(
      `https://hiring.reachinbox.xyz/api/v1/onebox/reply/${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(postData),
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
