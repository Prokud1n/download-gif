import React from "react";
import styles from "./styles";

const HistoryDownloadImage = ({ url }) => {
    return (
        <img src={url}
             alt="dynamic gif"
             style={styles.historyImage}
        />
    );
};
export default HistoryDownloadImage;