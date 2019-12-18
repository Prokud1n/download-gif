import React, { useState } from "react";
import Pagination from "react-js-pagination";

import HistoryDownloadImage from "./HistoryDownloadImage/HistoryDownloadImage";
import styles from "../Main/styles";
import {connect} from "react-redux";
import {getHistoryImage} from "../../selectors/HistorySelector";

const History = ({ historyImage }) => {
    const [activePage, setActivePage] = useState(1);
    const fiveImage = historyImage.slice(0, 5);

    const handlePageChange = (pageNumber) => {
        setActivePage(pageNumber);
    };
    return (
        <div style={styles.MainContainer}>
            <h2>История</h2>
            {fiveImage.map(url => (
                <HistoryDownloadImage url={url}/>
            ))
            }
            <Pagination
                activePage={activePage}
                itemsCountPerPage={10}
                totalItemsCount={450}
                pageRangeDisplayed={5}
                onChange={handlePageChange}
            />
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