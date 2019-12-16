import React from "react";
import HistoryDownloadImage from "../HistoryDownloadImage/HistoryDownloadImage";
import MainContainer from "../Main/styles";
import {connect} from "react-redux";

const History = ({ historyImage }) => {
    console.log(historyImage);
    return (
        <div style={MainContainer}>
            <h2>История</h2>
            {historyImage.map(url => (
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