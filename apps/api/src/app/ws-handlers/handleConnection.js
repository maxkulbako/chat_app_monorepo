// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { createMockMessage } from '@mock';

export function handleConnection(socket, server) {


  socket.on('MessageToServer', (msgData) => {
    server.emit('MessageToClient', {
      text: createMockMessage({
        name: 'Max Kulbako',
        secondary: msgData.text,
      }),
      roomId: msgData.roomId
    });
  });
}
