import React from "react";
import HistoryDownloadImage from "../HistoryDownloadImage/HistoryDownloadImage";
import MainContainer from "../Main/styles";

const History = () => {
    return (
        <div style={MainContainer}>
            <h2>История</h2>
            <HistoryDownloadImage />
        </div>
    );
};
export default History;