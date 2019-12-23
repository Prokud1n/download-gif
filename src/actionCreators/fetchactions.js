import {
    DELETE_IMAGE,
    FETCH_PICTURE,
    FETCH_PICTURE_ERROR,
    FETCH_PICTURE_START,
    FETCH_PICTURE_SUCCESS
} from "../constants/actionTypes";

export const fetchPictureStart = () => ({
    type: FETCH_PICTURE_START,
});

export const fetchPictureSuccess = ({ url, title, importTime }) => ({
    type: FETCH_PICTURE_SUCCESS,
    payload: {url, title, importTime}
});

export const fetchPictureError = () => ({
    type: FETCH_PICTURE_ERROR,
});

export const fetchPicture = () => ({
    type: FETCH_PICTURE,
});

export const deleteImage = (historyImage) => ({
    type: DELETE_IMAGE,
    payload: { historyImage }
});