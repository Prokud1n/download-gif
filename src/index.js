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

let store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchFetchPicture);

const application = (
    <Provider store={store}>
        <ErrorBoundary>
        <App />
        </ErrorBoundary>
    </Provider>
);

ReactDOM.render(application, document.getElementById('root'));
