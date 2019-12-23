import {createSelector} from "reselect";

const historyImage = (state) => {
    const localState = state.get("picture");
    return localState.get("historyImage");
};

export const getHistoryImage = createSelector(
    [historyImage],
    (historyImage) => historyImage
);