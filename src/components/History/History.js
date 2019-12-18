import React from "react";
import HistoryDownloadImage from "../HistoryDownloadImage/HistoryDownloadImage";
import styles from "../Main/styles";
import {connect} from "react-redux";

const History = ({ historyImage }) => {
    const fiveImage = historyImage.slice(0, 5);
    return (
        <div style={styles.MainContainer}>
            <h2>История</h2>
            {fiveImage.map(url => (
                <HistoryDownloadImage url={url}/>
            ))
            }
        </div>
    );
};

const mapStateToProps = (state) => ({
    historyImage: state.historyImage,
});
const mapDispatchToProps = {};

export default connect(
    mapStateToProps, mapDispatchToProps
)(History);