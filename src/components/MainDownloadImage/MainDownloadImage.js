import React from "react";

import styles from "./styles";

const MainDownloadImage = ({ url, isLoading }) => {
    return isLoading
        ? (<p style={styles}>Loading...</p>)
        :(
            <img src={url}
                 alt="dynamic image"
                 style={styles}
            />
        );
};
export default MainDownloadImage;