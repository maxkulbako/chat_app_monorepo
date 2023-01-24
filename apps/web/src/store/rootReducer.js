import { combineReducers } from 'redux';
import { chatRoomsReducer } from '../store/chat/reducer';

export const rootReducer = combineReducers({
  chatRooms: chatRoomsReducer
});
