import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './rootReducer';
import logger from 'redux-logger';
import messagesMiddleware from './sockets/middleware';

export const store = createStore(rootReducer, applyMiddleware(logger, messagesMiddleware));
