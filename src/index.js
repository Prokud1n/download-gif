import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from "redux";
import { combineReducers } from "redux-immutable";
import createSagaMiddleware from "redux-saga";
import { Provider } from 'react-redux'
import Immutable from "immutable";

import App from './components/App/App';
import pictureReducer from "./reducers/pictureReducer";
import ErrorBoundary from "./components/Error/ErrorBoundary";
import {watchFetchPicture} from "./actions/getPicture.action";

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({ picture: pictureReducer });
const initialState = Immutable.Map();

//let store = createStore(pictureReducer, applyMiddleware(sagaMiddleware));

let store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchFetchPicture);

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

const application = (
    <Provider store={store}>
        <ErrorBoundary>
        <App />
        </ErrorBoundary>
    </Provider>
);

ReactDOM.render(application, document.getElementById('root'));
