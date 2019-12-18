import axios from "axios";
import {APIPICTURE} from "../constants/url";
import { FETCH_PICTURE } from "../constants/actionTypes";
import { call, put, takeEvery } from 'redux-saga/effects'
import { fetchPictureError, fetchPictureStart, fetchPictureSuccess } from "../actionCreators/fetchactions";

export function* watchFetchPicture() {
    yield takeEvery(FETCH_PICTURE, fetchPictureAsync);
}

// function fetchPicture() {
//     return async (dispatch) => {
//         dispatch({ type: FETCH_PICTURE_START });
//         try {
//             const response = yield call(axios.get(APIPICTURE), response.data.data.image_url);
//             const payload = response.data.data.image_url;
//
//             dispatch({ type: FETCH_PICTURE_SUCCESS, payload });
//         } catch (error) {
//             dispatch({ type: FETCH_PICTURE_ERROR });
//         }
//     }
// }
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