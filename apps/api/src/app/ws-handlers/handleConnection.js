import { createMockMessage } from '@mock';

export function handleConnection(socket, server) {


  socket.on('MessageToServer', (msgData) => {
    server.emit('MessageToClient', createMockMessage({
      text: msgData,
    }));
  });
}
