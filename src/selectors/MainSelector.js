import {createSelector} from "reselect";

const url = (state) => state.url;
const requestStatus = (state) => state.requestStatus;

export const getUrl = createSelector(
    [url],
    (url) => url
);

export const getRequestStatus = createSelector(
    [requestStatus],
    (requestStatus) => requestStatus
);