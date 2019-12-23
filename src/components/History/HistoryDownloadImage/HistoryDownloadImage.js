import React from "react";
import styles from "./styles";

const HistoryDownloadImage = ({ url, title, importTime, handleDeleteFile }) => (
    <div style={styles.imageContainer} key={title + importTime}>
        <img src={url}
             alt="dynamic gif"
             style={styles.historyImage}
        />
        <div style={styles.label}>
            <strong>{ title }</strong>
            <span>{ importTime }</span>
            <span style={styles.deletePicture} onClick={() => handleDeleteFile(url)}>Удалить</span>
        </div>
    </div>
);


export default HistoryDownloadImage;