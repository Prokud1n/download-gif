import React from "react";
import {connect} from "react-redux";

import {getHistoryImage} from "../../selectors/HistorySelector";
import styles from "./styles";
import {deleteImage} from "../../actionCreators/fetchactions";
import Pagination from "../Pagination/Pagination"
import {Link} from "react-router-dom";

const History = ({ historyImage, handleDeleteFile }) => {
    return (
        <div style={styles.HistoryContainer}>
            <Link to="/main" style={styles.header}>{`<- История`}</Link>
            <div style={styles.imageContainer}>
                <Pagination historyImage={historyImage} handleDeleteFile={handleDeleteFile}/>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    historyImage: getHistoryImage(state),
});
const mapDispatchToProps = {
    handleDeleteFile: deleteImage,
};

export default connect(
    mapStateToProps, mapDispatchToProps
)(History);