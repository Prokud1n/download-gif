import React, { useEffect } from "react";

import MainContainer from "./styles";
import MainDownloadImage from "../MainDownloadImage/MainDownloadImage";
import fetchPicture from "../../actions/getPicture.action";
import {connect} from "react-redux";
import REQUEST from "../../constants/request";

const Main = ({ getPicture, url, requestStatus }) => {
    useEffect(() => {
        getPicture();
    }, [getPicture]);

    const loading = requestStatus === REQUEST.STILL;
    return (
        <div style={MainContainer}>
            <h2> Главная </h2>
            <MainDownloadImage url={url}/>
            {loading && <button onClick={getPicture}>Загрузить</button>}
        </div>
    );
};
const mapStateToProps = (state) => ({
    url: state.url,
    requestStatus: state.requestStatus,
});
const mapDispatchToProps = {
    getPicture: fetchPicture,
};

export default connect(
    mapStateToProps, mapDispatchToProps
)(Main);