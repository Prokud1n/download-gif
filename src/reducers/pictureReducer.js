import {FETCH_PICTURE_ERROR, FETCH_PICTURE_START, FETCH_PICTURE_SUCCESS} from "../constants/actionTypes";
import REQUEST from "../constants/request";

const initialState = {
    url: "",
    historyImage: [],
    requestStatus: Request.STILL,
};

function pictureReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PICTURE_START:
            return { ...state, requestStatus: REQUEST.LOADING };
        case FETCH_PICTURE_SUCCESS:
            return { ...state, requestStatus: REQUEST.STILL, url: action.payload, historyImage: [...state.historyImage, action.payload] };
        case FETCH_PICTURE_ERROR:
            return { ...state, requestStatus: REQUEST.ERROR };
        default:
            return state;
    }
}
export default pictureReducer;