import axios from "axios";
import {APIPICTURE} from "../constants/url";
import { FETCH_PICTURE } from "../constants/actionTypes";
import { call, put, takeEvery } from 'redux-saga/effects'
import { fetchPictureError, fetchPictureStart, fetchPictureSuccess } from "../actionCreators/fetchactions";

export function* watchFetchPicture() {
    yield takeEvery(FETCH_PICTURE, fetchPictureAsync);
}

export function* fetchPictureAsync() {
    try {
        yield put(fetchPictureStart());
        const data = yield call(() => {
            return axios.get(APIPICTURE);
        });
        const { image_url: url, title, import_datetime: importTime } = data.data.data;
        yield put(fetchPictureSuccess({
            url,
            title,
            importTime,
        }));
    } catch (error) {
        yield put(fetchPictureError());
    }
}