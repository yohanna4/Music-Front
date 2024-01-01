import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import statisticReducer from './statistics/statisticSlice';
import createSagaMiddleware from 'redux-saga';
import statisticsSaga from './statistics/statisticSaga';
import songSaga from './songs/songSaga';
import songReducer from './songs/songSlice';
import albumReducer from './albums/albumSlice';
import albumSaga from './albums/albumSaga';
import artistSaga from './artist/artistSaga';
import artistReducer from './artist/artistSlice';
import genreSaga from './genre/genreSaga';
import genreReducer from './genre/genreSlice';

const saga: any = createSagaMiddleware();

const store = configureStore({
    reducer: {
        statistics: statisticReducer,
        songs: songReducer,
        albums: albumReducer,
        artists: artistReducer,
        genres: genreReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga),
});
saga.run(statisticsSaga);
saga.run(songSaga);
saga.run(albumSaga);
saga.run(artistSaga);
saga.run(genreSaga);

export const statisticsSelector = (state: RootState) => state.statistics;
export const songSelector = (state: RootState) => state.songs;
export const albumSelector = (state: RootState) => state.albums;
export const artistSelector = (state: RootState) => state.artists;
export const genreSelector = (state: RootState) => state.genres;

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
