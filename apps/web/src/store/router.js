import { Chat } from '../views/Chat';
import { ChatRoom } from '../views/Chat/ChatRoom';
import { EmptyRoom } from '../views/Chat/EmptyRoom';
import App from '../App';
import { createBrowserRouter } from 'react-router-dom';

import { AuthSignIn, AuthSignUp, AuthForgot } from '../views/Auth';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        element: <Chat />,
        children: [
          {
            index: true,
            element: <EmptyRoom/>
          },
          {
            path: ':roomId',
            element: <ChatRoom />
          }
        ]
      }
    ]
  },
  {
    path: '/signin',
    element: <AuthSignIn />
  },
  {
    path: '/signup',
    element: <AuthSignUp />
  },
  {
    path: '/forgot',
    element: <AuthForgot />
  }
]);
