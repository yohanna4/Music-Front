import { createSlice } from '@reduxjs/toolkit';

type Album = {
    album: string;
    songCount: number;
};

type InitialState = {
    albums: Album[];
    isLoading: boolean;
    errMsg: any;
    error: boolean;
};

const initialState: InitialState = {
    albums: [],
    isLoading: false,
    errMsg: '',
    error: false,
};
const albumSlice = createSlice({
    name: 'albums',
    initialState,
    reducers: {
        getAlbumPending: (state) => {
            state.isLoading = true;
        },
        getAlbumSuccess: (state, action) => {
            state.isLoading = false;
            state.albums = action.payload;
        },
        getAlbumFailure: (state, action) => {
            state.isLoading = false;
            state.error = true;
            state.errMsg = action.payload;
        },
    },
});

export const { getAlbumPending, getAlbumSuccess, getAlbumFailure } = albumSlice.actions;
export default albumSlice.reducer;
