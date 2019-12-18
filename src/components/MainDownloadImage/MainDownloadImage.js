import React from "react";

import styles from "./styles";

const MainDownloadImage = ({ url }) => {
    return (
        <img src={url}
             alt="dynamic image"
             style={styles}
        />
    );
};
export default MainDownloadImage;