import { createSlice } from '@reduxjs/toolkit';
import { stat } from 'fs';

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
    errMsg: '',
    error: false,
};
const songSlice = createSlice({
    name: 'songs',
    initialState,
    reducers: {
        // post song
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
        // get song
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
        // update song
        updateSongPending: (state) => {
            state.isLoading = true;
        },
        updateSongSuccess: (state, action) => {
            state.isLoading = false;
            const updatedSong = action.payload; // Assuming the updated song is available in action.payload

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

        // delete song
        deleteSongPending: (state) => {
            state.isLoading = true;
        },
        deleteSongSuccess: (state, action) => {
            state.isLoading = false;
            const deletedSongId = action.payload;
            state.songs = state.songs.filter((song) => song._id !== deletedSongId);
            console.log(state.songs, 'start');
            console.log(deletedSongId, 'end');
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
