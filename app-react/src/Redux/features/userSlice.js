import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    firstname: "",
    username: "toto",
    token: "",
  },
  reducers: {
    setUser: (state, action) => {
      const { name, firstname, username, token } = action.payload;
      state.name = name;
      state.firstname = firstname;
      state.username = username;
      state.token = token;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
