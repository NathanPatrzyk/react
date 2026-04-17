import { userService } from "@/services/userService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  loading: false,
};

const profile = createAsyncThunk("user/profile", async (user, thunkAPI) => {
  const token = thunkAPI.getState().auth.user.token;

  const data = await userService.profile(user, token);

  return data;
});

const updateProfile = createAsyncThunk(
  "user/update",
  async (user, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;

    const data = await userService.updateProfile(user, token);

    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  },
);

const getUserDetails = createAsyncThunk("user/get", async (id, thunkAPI) => {
  const data = await userService.getUserDetails(id);

  return data;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(profile.pending, (state) => {
        state.loading = true;
      })
      .addCase(profile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(updateProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(updateProfile.rejected, (state) => {
        state.loading = false;
        state.user = {};
      })
      .addCase(getUserDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      });
  },
});

export { profile, updateProfile, getUserDetails, userSlice };
export default userSlice.reducer;
