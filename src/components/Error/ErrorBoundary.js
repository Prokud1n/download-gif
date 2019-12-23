import React, { PureComponent } from "react";
import ErrorIndicator from "./ErrorIndicator";

export default class ErrorBoundary extends PureComponent {
    state = {
        hasError: false,
    };
    componentDidCatch() {
        this.setState({ hasError: true })
    }
    render() {
        const {hasError} = this.state;
        const {children} = this.props;

        return hasError ? <ErrorIndicator message="Неопознанная ошибка!" /> : children;
    }
}