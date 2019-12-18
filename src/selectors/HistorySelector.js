import {createSelector} from "reselect";

const historyImage = (state) => state.historyImage;

export const getHistoryImage = createSelector(
    [historyImage],
    (historyImage) => historyImage
);