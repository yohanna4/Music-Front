import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import baseURL from '../baseURL';
import { getStatisticsSuccess } from './statisticSlice';
import { toast } from 'react-toastify';
const url = `${baseURL}/statistics`;

function* fetchStatistics(): Generator<any, void, any> {
    try {
        const statistics = yield call(() => axios.get(url));
        const formattedStatistics = yield statistics.data;
        yield put(getStatisticsSuccess(formattedStatistics));
    } catch (error) {
        toast.error('Something went wrong');
        console.log(error);
    }
}
function* statisticsSaga() {
    yield takeEvery('statistics/getStatisticsPending', fetchStatistics);
}

export default statisticsSaga;
