import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import { Provider } from 'react-redux'
import './index.css';
import App from './components/App/App';
import pictureReducer from "./reducers/pictureReducer";
import ErrorBoundary from "./components/Error/ErrorBoundary";

let store = createStore(pictureReducer, applyMiddleware(thunk));

console.log(store);

const application = (
    <Provider store={store}>
        <ErrorBoundary>
        <App />
        </ErrorBoundary>
    </Provider>
);

ReactDOM.render(application, document.getElementById('root'));
