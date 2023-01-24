import { createAction, createPayloadAction } from '../_utils';

// Connection actions
export const socketsConnect = createAction('ws.connect');
export const socketsDisconnect = createAction('ws.disconnect');

// Emit actions
export const socketsEmit = createPayloadAction('ws.emit');
