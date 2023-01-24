import { WEB_SOCKET_CONNECTION_URL } from '../constants';

import { createWSMiddleware } from '../_utils/middlewares/createWSMiddleware';

import * as actions from './actions';

export default createWSMiddleware({
  connectionUrl: WEB_SOCKET_CONNECTION_URL,
  actions: {
    connect: actions.socketsConnect.TYPE,
    disconnect: actions.socketsDisconnect.TYPE,
    emit: actions.socketsEmit.TYPE,
  },
  handlers: {},
});
