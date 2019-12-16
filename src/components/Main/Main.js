import React from "react";
import MainContainer from "./styles";
import MainDownloadImage from "../MainDownloadImage/MainDownloadImage";

const Main = () => {
    return (
        <div style={MainContainer}>
            <h2> Главная </h2>
            <MainDownloadImage/>
            <button>Загрузить</button>
        </div>
    );
};
export default Main;