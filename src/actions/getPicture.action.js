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
        console.log(data.data.data.image_url);
        yield put(fetchPictureSuccess(data.data.data.image_url));
    } catch (error) {
        yield put(fetchPictureError());
    }
}