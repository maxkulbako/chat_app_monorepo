import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './rootReducer';
import logger from 'redux-logger';
import createWSMiddleware from './sockets/middleware';

export const store = createStore(rootReducer, applyMiddleware(logger, createWSMiddleware));
