import React from "react";

import styles from "./styles";

const MainDownloadImage = ({ url, isLoading }) => {
    return isLoading
        ? (<p style={{...styles.img, ...styles.loading}}>Loading...</p>)
        :(
            <img src={url}
                 alt="dynamic image"
                 style={styles.img}
            />
        );
};
export default MainDownloadImage;