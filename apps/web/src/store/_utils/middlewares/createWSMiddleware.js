import { io, Socket } from 'socket.io-client';


function isActionCreator(handler) {
  return typeof handler === 'function' && 'TYPE' in handler;
}

export function createWSMiddleware({ connectionUrl, actions, handlers, }) {
  return store => {
    let socket = Socket | null;

    function connect() {
      if (socket) {
        disconnect();
      }

      socket = io(connectionUrl);
    }

    function disconnect() {
      socket?.disconnect();
      socket = null;
    }

    function bindHandlers() {
      if (!socket) {
        return;
      }

      Object
        .entries(handlers)
        // eslint-disable-next-line array-callback-return
        .map(([handlerName, handler]) => {
          socket?.on(handlerName, data => {
            if (isActionCreator(handler)) {
              store.dispatch(handler(data));
            } else {
              handler(store, data);
            }
          });
        });
    }

    function emitMessage(type, data) {
      socket?.emit(type, data);
    }

    return next => action => {
      if (action.type === actions.connect) {
        connect();
        bindHandlers();
      }

      if (action.type === actions.disconnect) {
        disconnect();
      }

      if (action.type === actions.emit) {
        const { wsType, wsData } = action.payload;
        emitMessage(wsType, wsData);
      }

      next(action);
    };
  };
}
