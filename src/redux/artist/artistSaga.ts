import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import baseURL from '../baseURL';
import { getArtistSuccess } from './artistSlice';
import { toast } from 'react-toastify';
const url = `${baseURL}/artist`;

function* fetchArtist(): Generator<any, void, any> {
    try {
        const artist = yield call(() => axios.get(url));
        const formattedArtist = yield artist.data;
        yield put(getArtistSuccess(formattedArtist));
    } catch (error) {
        toast.error('Something went wrong');
        console.log(error);
    }
}
function* artistSaga() {
    yield takeEvery('artists/getArtistPending', fetchArtist);
}

export default artistSaga;
