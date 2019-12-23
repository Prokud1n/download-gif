import {createSelector} from "reselect";

const url = (state) => {
    const localState = state.get("picture");
    return localState.get("url");
};
const requestStatus = (state) => {
    const localState = state.get("picture");
    return localState.get("requestStatus");
};

export const getUrl = createSelector(
    [url],
    (url) => url
);

export const getRequestStatus = createSelector(
    [requestStatus],
    (requestStatus) => requestStatus
);