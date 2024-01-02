import { createSlice } from "@reduxjs/toolkit";

type Songs = {
  _id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
};

type InitialState = {
  songs: Songs[];
  isLoading: boolean;
  errMsg: any;
  error: boolean;
};

const initialState: InitialState = {
  songs: [],
  isLoading: false,
  errMsg: "",
  error: false,
};

const songSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    // fetch
    getSongPending: (state) => {
      state.isLoading = true;
    },
    getSongSuccess: (state, action) => {
      state.isLoading = false;
      state.songs = action.payload;
    },
    getSongFailure: (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.errMsg = action.payload;
    },

    // add
    postSongPending: (state) => {
      state.isLoading = true;
    },
    postSongSuccess: (state, action) => {
      state.isLoading = false;
      state.songs.push(action.payload);
    },
    postSongFailure: (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.errMsg = action.payload;
    },

    // update
    updateSongPending: (state) => {
      state.isLoading = true;
    },
    updateSongSuccess: (state, action) => {
      state.isLoading = false;
      const updatedSong = action.payload;
      state.songs = state.songs.map((song) => {
        if (song._id === updatedSong._id) {
          return updatedSong;
        }
        return song;
      });
    },
    updateSongFailure: (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.errMsg = action.payload;
    },

    // delete
    deleteSongPending: (state) => {
      state.isLoading = true;
    },
    deleteSongSuccess: (state, action) => {
      state.isLoading = false;
      const deletedSongId = action.payload;
      state.songs = state.songs.filter((song) => song._id !== deletedSongId);
    },
    deleteSongFailure: (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.errMsg = action.payload;
    },
  },
});

export const {
  postSongPending,
  postSongSuccess,
  postSongFailure,
  getSongPending,
  getSongSuccess,
  getSongFailure,
  updateSongPending,
  updateSongSuccess,
  updateSongFailure,
  deleteSongFailure,
  deleteSongPending,
  deleteSongSuccess,
} = songSlice.actions;
export default songSlice.reducer;
