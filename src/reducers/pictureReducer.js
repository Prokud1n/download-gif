import { fromJS } from "immutable";

import {DELETE_IMAGE, FETCH_PICTURE_ERROR, FETCH_PICTURE_START, FETCH_PICTURE_SUCCESS} from "../constants/actionTypes";
import REQUEST from "../constants/request";

const initialState = fromJS({
    url: "",
    historyImage: [],
    requestStatus: REQUEST.STILL,
});

function pictureReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PICTURE_START:
            return state.set("requestStatus", REQUEST.LOADING);
        case FETCH_PICTURE_SUCCESS:
            return state
                .update('historyImage', historyImage => historyImage.concat([{
                   url: action.payload.url,
                   title: action.payload.title,
                   importTime: action.payload.importTime,
                }]))
                .set("url", action.payload.url)
                .set("requestStatus", REQUEST.STILL);
        case FETCH_PICTURE_ERROR:
            return state.set("requestStatus", REQUEST.ERROR);
        case DELETE_IMAGE:
            return state.set("historyImage", fromJS(action.payload.historyImage));
        default:
            return state;
    }
}
export default pictureReducer;