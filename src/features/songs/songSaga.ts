import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import baseURL from '../constants';
import { deleteSongSuccess, getSongSuccess, postSongSuccess, updateSongSuccess } from './songSlice';
import { toast } from 'react-toastify';

function* fetchSongs(): Generator<any, void, any> {
    try {
        const songs = yield call(() => axios.get(`${baseURL}/`));
        const formattedSong = yield songs.data.songs;
        yield put(getSongSuccess(formattedSong));
    } catch (error) {
        toast.error('Something went wrong');
        console.log(error);
    }
}

function* createSong(action: any): Generator<any, void, any> {
    try {
        const data = action.payload;
        const response = yield call(() => axios.post(`${baseURL}/add`, data));
        const createdSong = yield response.data.song;
        yield put(postSongSuccess(createdSong));
    } catch (error) {
        toast.error('Something went wrong');
        console.log(error);
    }
}

function* updateSong(action: any): Generator<any, void, any> {
    try {
        const data = action.payload;
        const response = yield call(() => axios.patch(`${baseURL}/update/${data._id}`, data));
        const updateSong = yield response.data.song;
        yield put(updateSongSuccess(updateSong));
    } catch (error) {
        toast.error('Something went wrong');
        console.log(error);
    }
}

function* deleteSong(action: any): Generator<any, void, any> {
    try {
        const data = action.payload;
        console.log(data);
        const response = yield call(() => axios.delete(baseURL + '/delete/' + data));
        const updateSong = yield response.data;
        yield put(deleteSongSuccess(data));
    } catch (error) {
        toast.error('Something went wrong');
        console.log(error);
    }
}

function* songSaga() {
    yield takeEvery('songs/getSongPending', fetchSongs);
    yield takeEvery('songs/postSongPending', createSong);
    yield takeEvery('songs/updateSongPending', updateSong);
    yield takeEvery('songs/deleteSongPending', deleteSong);
}

export default songSaga;
