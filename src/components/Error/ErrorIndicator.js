import React from "react";

const ErrorIndicator = ({ message = "Критическая ошибка" }) => {
    return (
        <div className="error-indicator">
            <span>{message}</span>
        </div>
    );
};

export default ErrorIndicator;
