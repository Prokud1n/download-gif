import React, { useState } from "react";
import styles from "./styles";
import HistoryDownloadImage from "../History/HistoryDownloadImage/HistoryDownloadImage";

const Pagination = ({ historyImage, handleDeleteFile }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [historyPerPage] = useState(4);

    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id));
    };

    const indexOfLastTodo = currentPage * historyPerPage;
    const indexOfFirstTodo = indexOfLastTodo - historyPerPage;
    const currentHistory = historyImage.toJS().slice(indexOfFirstTodo, indexOfLastTodo);

    const deleteFile = (url) => {
        const newHistoryImage = historyImage.filter(image => image.url !== url);
        handleDeleteFile(newHistoryImage);
    };

    const renderHistoryImage = currentHistory.map(({ url, title, importTime }) => (
        <HistoryDownloadImage key={importTime + title} url={url} title={title} importTime={importTime} handleDeleteFile={deleteFile}/>
    ));

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(historyImage.toJS().length / historyPerPage); i++) {
        pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => (
            <li
                style={styles.li}
                key={number}
                id={number}
                onClick={handleClick}
            >
                {number}
            </li>
        )
    );

    return (
        <div>
            <ul style={styles.historyImage}>
                {renderHistoryImage}
            </ul>
            <ul style={styles.pageNumber}>
                {renderPageNumbers}
            </ul>
        </div>
    );
};

export default Pagination;