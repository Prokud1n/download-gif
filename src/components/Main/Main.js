import React from "react";
import MainContainer from "./styles";
import DownloadImage from "../DownloadImage/DownloadImage";
import Button from "../Button/Button";
const Main = () => {
    return (
        <div style={MainContainer}>
            <h2> Главная </h2>
            <DownloadImage />
            <Button />
        </div>
    );
};
export default Main;