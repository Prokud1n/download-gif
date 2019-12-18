import {FETCH_PICTURE, FETCH_PICTURE_ERROR, FETCH_PICTURE_START, FETCH_PICTURE_SUCCESS} from "../constants/actionTypes";

export const fetchPictureStart = () => {
    return { type: FETCH_PICTURE_START }
};

export const fetchPictureSuccess = (data) => {
    return { type: FETCH_PICTURE_SUCCESS, url: data }
};

export const fetchPictureError = () => {
    return { type: FETCH_PICTURE_ERROR }
};

export const fetchPicture = () => {
    return { type: FETCH_PICTURE }
};