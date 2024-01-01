import { createSlice } from '@reduxjs/toolkit';

type Artist = {
    artist: string;
    albumCount: number;
    songCount: number;
};

type InitialState = {
    artists: Artist[];
    isLoading: boolean;
    errMsg: any;
    error: boolean;
};

const initialState: InitialState = {
    artists: [],
    isLoading: false,
    errMsg: '',
    error: false,
};
const artistSlice = createSlice({
    name: 'artists',
    initialState,
    reducers: {
        getArtistPending: (state) => {
            state.isLoading = true;
        },
        getArtistSuccess: (state, action) => {
            state.isLoading = false;
            state.artists = action.payload;
        },
        getArtistFailure: (state, action) => {
            state.isLoading = false;
            state.error = true;
            state.errMsg = action.payload;
        },
    },
});

export const { getArtistPending, getArtistSuccess, getArtistFailure } = artistSlice.actions;
export default artistSlice.reducer;
