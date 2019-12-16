import axios from "axios";
import {APIPICTURE} from "../constants/url";
import {FETCH_PICTURE_ERROR, FETCH_PICTURE_START, FETCH_PICTURE_SUCCESS} from "../constants/actionTypes";

function fetchPicture() {
    return async (dispatch) => {
        dispatch({ type: FETCH_PICTURE_START });
        try {
            const response = await axios.get(APIPICTURE);
            const payload = response.data.data.image_url;

            dispatch({ type: FETCH_PICTURE_SUCCESS, payload });
        } catch (error) {
            dispatch({ type: FETCH_PICTURE_ERROR });
        }
    }
}
export default fetchPicture;