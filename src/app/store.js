import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import createPromise from 'redux-promise-middleware';

import math from './reducers/mathReducer';
import user from './reducers/userReducer';

console.log(createPromise)
export default createStore(
    combineReducers({ user,math }), 
    {}, 
    applyMiddleware(createLogger(), thunk, createPromise)
);