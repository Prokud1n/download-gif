import React from "react";
import HistoryDownloadImage from "../HistoryDownloadImage/HistoryDownloadImage";
import styles from "../Main/styles";
import {connect} from "react-redux";
import {getHistoryImage} from "../../selectors/HistorySelector";

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
    historyImage: getHistoryImage(state),
});
const mapDispatchToProps = {};

export default connect(
    mapStateToProps, mapDispatchToProps
)(History);