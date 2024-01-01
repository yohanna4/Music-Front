import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import baseURL from '../baseURL';
import { getGenreSuccess } from './genreSlice';
import { toast } from 'react-toastify';
const url = `${baseURL}/arti`;

function* fetchGenre(): Generator<any, void, any> {
    try {
        const genre = yield call(() => axios.get(url));
        const formattedGenre = yield genre.data;
        yield put(getGenreSuccess(formattedGenre));
    } catch (error) {
              toast.error('Something went wrong');
        console.log(error);
    }
}
function* genreSaga() {
    yield takeEvery('genres/getGenrePending', fetchGenre);
}

export default genreSaga;
