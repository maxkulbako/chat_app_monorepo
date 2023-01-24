import { WEB_SOCKET_CONNECTION_URL } from '../constants';

import { createWSMiddleware } from '../_utils/middlewares/createWSMiddleware';

import * as actions from './actions';

export default createWSMiddleware({
  connectionUrl: WEB_SOCKET_CONNECTION_URL,
  actions: {
    CONNECT: actions.socketsConnect,
    DISCONNECT: actions.socketsDisconnect,
    EMIT: actions.socketsEmit,
  },
  handlers: {},
});
