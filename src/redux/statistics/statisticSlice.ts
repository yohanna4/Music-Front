import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import baseURL from '../baseURL';
import { get } from 'http';

type Statistics = {
    totalSongs: number;
    totalArtists: number;
    totalAlbums: number;
    totalGenres: number;
    songsByGenre: Record<string, number>;
    songsAndAlbumsByArtist: Record<string, { totalSongs: number; totalAlbums: number }>;
    songsInEachAlbum: Record<string, number>;
};

type InitialState = {
    statistics: Statistics[];
    isLoading: boolean;
    errMsg: any;
    error: boolean;
};

const initialState: InitialState = {
    statistics: [],
    isLoading: false,
    errMsg: '',
    error: false,
};
const statisticSlice = createSlice({
    name: 'statistics',
    initialState,
    reducers: {
        getStatisticsPending: (state) => {
            state.isLoading = true;
        },
        getStatisticsSuccess: (state, action) => {
            state.isLoading = false;
            state.statistics.push(action.payload);
        },
        getStatisticsFailure: (state, action) => {
            state.isLoading = false;
            state.error = true;
            state.errMsg = action.payload;
        },
    },
});

export const { getStatisticsPending, getStatisticsSuccess, getStatisticsFailure } = statisticSlice.actions;
export default statisticSlice.reducer;
