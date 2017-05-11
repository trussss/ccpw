import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import allReducers from './reducers';
import {saveState, loadState} from './localstorage';

const configureStore = () =>{

    const logger = createLogger();
    const persistedState = loadState();
    const store = createStore(
        allReducers,
        persistedState,
        applyMiddleware(logger)
    );

    store.subscribe(() => {
        saveState(store.getState());
    });
    console.log("STORE: ",  store.getState())
    return store;
};
export default configureStore;