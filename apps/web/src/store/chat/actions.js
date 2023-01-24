import { createPayloadAction } from '../_helpers';

export const actionSendMessage = createPayloadAction('messages.send');
export const actionDeleteMessage = createPayloadAction('messages.delete');
export const actionDeleteAllMessages = createPayloadAction('messages.delete.all');
