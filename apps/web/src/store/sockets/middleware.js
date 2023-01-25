import { WEB_SOCKET_CONNECTION_URL } from '../constants';

import { createWSMiddleware } from '../_utils/middlewares/createWSMiddleware';

import * as actions from './actions';
import { actionReceiveWSMessage } from '../chat/actions';

export default createWSMiddleware({
  connectionUrl: WEB_SOCKET_CONNECTION_URL,
  actions: {
    connect: actions.socketsConnect.TYPE,
    disconnect: actions.socketsDisconnect.TYPE,
    emit: actions.socketsEmit.TYPE,
  },
  handlers: {
    MessageToClient: (dispatch, data) => {
      console.log(dispatch)
      console.log(data)
      dispatch(actionReceiveWSMessage(data))
    }
  },
});
