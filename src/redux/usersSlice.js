import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  return (await axios.get(`${BASE_URL}/all`)).data;
});

export const dropUser = createAsyncThunk(
  "users/deleteUser",
  async ({ id, index }, { dispatch }) => {
    await axios.delete(`${BASE_URL}/delete/${id}`);
    dispatch(deleteUser(index));
  }
);

export const putUser = createAsyncThunk(
  "users/updateUser",
  async ({ updatedData, index }, { dispatch }) => {
    await axios.put(`${BASE_URL}/update`);
    dispatch(updateUser({ index: index, data: updatedData }));
  }
);

export const createUser = createAsyncThunk(
  "users/create",
  async (data, { dispatch }) => {
    await axios
      .post(`${BASE_URL}/save`, data)
      .then((d) => console.log(d))
      .catch((err) => console.log(err));
    dispatch(addUser(data));
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.users.splice(action.payload, 1);
    },
    updateUser: (state, action) => {
      const { index, data } = action.payload;
      state.users[index] = data;
    },
  },
  extraReducers: {
    [fetchUsers.fulfilled]: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { addUser, deleteUser, updateUser } = usersSlice.actions;
export const getUsers = (state) => state.users.users;

export default usersSlice.reducer;
