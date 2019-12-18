import React, { useEffect } from "react";

import styles from "./styles";
import MainDownloadImage from "../MainDownloadImage/MainDownloadImage";
import {connect, useDispatch} from "react-redux";
import REQUEST from "../../constants/request";
import {fetchPicture} from "../../actionCreators/fetchactions";
import {getRequestStatus, getUrl} from "../../selectors/MainSelector";

const Main = ({ url, requestStatus }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPicture());
    }, [fetchPicture]);

    const isLoading = requestStatus === REQUEST.LOADING;
    return (
        <div style={styles.MainContainer}>
            <span style={styles.header}> Главная </span>
            <MainDownloadImage url={url} isLoading={isLoading}/>
            <button disabled={isLoading} style={styles.button} onClick={() => dispatch(fetchPicture())}>Загрузить</button>
        </div>
    );
};
const mapStateToProps = (state) => ({
    url: getUrl(state),
    requestStatus: getRequestStatus(state),
});
const mapDispatchToProps = {};

export default connect(
    mapStateToProps, mapDispatchToProps
)(Main);