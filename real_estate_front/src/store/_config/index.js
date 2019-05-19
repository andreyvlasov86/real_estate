import { combineReducers, createStore, applyMiddleware } from 'redux';
import auth from '../auth/reducers';
import filesData from '../files/reducers';
import createSagaMiddleware from "redux-saga";



export const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    combineReducers({
        auth,
        filesData,
    }),
    applyMiddleware(sagaMiddleware)
);