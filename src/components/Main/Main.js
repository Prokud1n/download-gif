import React, { useEffect } from "react";

import styles from "./styles";
import MainDownloadImage from "../MainDownloadImage/MainDownloadImage";
import {connect, useDispatch} from "react-redux";
import REQUEST from "../../constants/request";
import {fetchPicture} from "../../actionCreators/fetchactions";

const Main = ({ url, requestStatus }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPicture());
    }, [fetchPicture]);

    const loading = requestStatus === REQUEST.LOADING;
    return (
        <div style={styles.MainContainer}>
            <span style={styles.header}> Главная </span>
            <MainDownloadImage url={url}/>
            <button disabled={loading} style={styles.button} onClick={() => dispatch(fetchPicture())}>Загрузить</button>
        </div>
    );
};
const mapStateToProps = (state) => ({
    url: state.url,
    requestStatus: state.requestStatus,
});
const mapDispatchToProps = {
};

export default connect(
    mapStateToProps, mapDispatchToProps
)(Main);