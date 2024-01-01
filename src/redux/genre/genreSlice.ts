import { createSlice } from '@reduxjs/toolkit';

type Genre = {
    genre: string;
    songCount: number;
};

type InitialState = {
    genres: Genre[];
    isLoading: boolean;
    errMsg: any;
    error: boolean;
};

const initialState: InitialState = {
    genres: [],
    isLoading: false,
    errMsg: '',
    error: false,
};
const genreSlice = createSlice({
    name: 'genres',
    initialState,
    reducers: {
        getGenrePending: (state) => {
            state.isLoading = true;
        },
        getGenreSuccess: (state, action) => {
            state.isLoading = false;
            state.genres = action.payload;
        },
        getGenreFailure: (state, action) => {
            state.isLoading = false;
            state.error = true;
            state.errMsg = action.payload;
        },
    },
});

export const { getGenrePending, getGenreSuccess, getGenreFailure } = genreSlice.actions;
export default genreSlice.reducer;
