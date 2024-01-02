import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import statisticReducer from './statistics/statisticSlice';
import createSagaMiddleware from 'redux-saga';
import statisticsSaga from './statistics/statisticSaga';
import songSaga from './songs/songSaga';
import songReducer from './songs/songSlice';

const saga: any = createSagaMiddleware();

const store = configureStore({
    reducer: {
        statistics: statisticReducer,
        songs: songReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga),
});
saga.run(statisticsSaga);
saga.run(songSaga);

export const statisticsSelector = (state: RootState) => state.statistics;
export const songSelector = (state: RootState) => state.songs;

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
