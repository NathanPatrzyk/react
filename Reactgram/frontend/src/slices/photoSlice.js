import { photoService } from "@/services/photoService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  photos: [],
  photo: {},
  loading: false,
};

const publishPhoto = createAsyncThunk(
  "photo/publish",
  async (photo, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;

    const data = await photoService.publishPhoto(photo, token);

    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  },
);

const getUserPhotos = createAsyncThunk(
  "photo/userphotos",
  async (id, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;

    const data = await photoService.getUserPhotos(id, token);

    return data;
  },
);

const deletePhoto = createAsyncThunk("photo/delete", async (id, thunkAPI) => {
  const token = thunkAPI.getState().auth.user.token;

  const data = await photoService.deletePhoto(id, token);

  if (data.errors) {
    return thunkAPI.rejectWithValue(data.errors[0]);
  }

  return data;
});

const updatePhoto = createAsyncThunk(
  "photo/update",
  async (photo, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;

    const data = await photoService.updatePhoto(
      { title: photo.title },
      photo.id,
      token,
    );

    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  },
);

const getPhoto = createAsyncThunk("photo/getphoto", async (id, thunkAPI) => {
  const token = thunkAPI.getState().auth.user.token;

  const data = await photoService.getPhoto(id, token);

  return data;
});

const like = createAsyncThunk("photo/like", async (id, thunkAPI) => {
  const token = thunkAPI.getState().auth.user.token;

  const data = await photoService.like(id, token);

  if (data.errors) {
    return thunkAPI.rejectWithValue(data.errors[0]);
  }

  return data;
});

const comment = createAsyncThunk(
  "photo/comment",
  async (commentData, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;

    const data = await photoService.comment(
      { comment: commentData.comment },
      commentData.id,
      token,
    );

    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  },
);

const getPhotos = createAsyncThunk("photo/getall", async (_, thunkAPI) => {
  const token = thunkAPI.getState().auth.user.token;

  const data = await photoService.getPhotos(token);

  return data;
});

const photoSlice = createSlice({
  name: "photo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(publishPhoto.pending, (state) => {
        state.loading = true;
      })
      .addCase(publishPhoto.fulfilled, (state, action) => {
        state.loading = false;
        state.photo = action.payload;
        state.photos.unshift(action.payload);
      })
      .addCase(publishPhoto.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getUserPhotos.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserPhotos.fulfilled, (state, action) => {
        state.loading = false;
        state.photos = action.payload;
      })
      .addCase(deletePhoto.pending, (state) => {
        state.loading = true;
      })
      .addCase(deletePhoto.fulfilled, (state, action) => {
        state.loading = false;
        state.photos = state.photos.filter(
          (photo) => photo._id !== action.payload.id,
        );
      })
      .addCase(deletePhoto.rejected, (state) => {
        state.loading = false;
        state.photo = {};
      })
      .addCase(updatePhoto.pending, (state) => {
        state.loading = true;
      })
      .addCase(updatePhoto.fulfilled, (state, action) => {
        state.loading = false;
        state.photos.map((photo) => {
          if (photo._id === action.payload.photo._id) {
            return (photo.title = action.payload.photo.title);
          }
          return photo;
        });
      })
      .addCase(updatePhoto.rejected, (state) => {
        state.loading = false;
        state.photo = {};
      })
      .addCase(getPhoto.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPhoto.fulfilled, (state, action) => {
        state.loading = false;
        state.photo = action.payload;
      })
      .addCase(like.fulfilled, (state, action) => {
        state.loading = false;

        if (state.photo.likes) {
          state.photo.likes.push(action.payload.userId);
        }

        state.photos.map((photo) => {
          if (photo._id === action.payload.photoId) {
            return photo.likes.push(action.payload.userId);
          }
          return photo;
        });
      })
      .addCase(like.rejected, (state) => {
        state.loading = false;
      })
      .addCase(comment.fulfilled, (state, action) => {
        state.loading = false;

        state.photo.comments.push(action.payload.comment);
      })
      .addCase(comment.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getPhotos.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPhotos.fulfilled, (state, action) => {
        state.loading = false;
        state.photos = action.payload;
      });
  },
});

export {
  publishPhoto,
  getUserPhotos,
  deletePhoto,
  updatePhoto,
  getPhoto,
  like,
  comment,
  getPhotos,
  photoSlice,
};
export default photoSlice.reducer;
