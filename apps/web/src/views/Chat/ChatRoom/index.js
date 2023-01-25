import { selectChatList, selectMainUser } from '../../../store/chat';
import { useParams } from 'react-router-dom';
import { Message } from './message';
import { Input } from './input';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import Grid from '@mui/material/Grid';
import * as React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { actionDeleteMessage, actionDeleteAllMessages } from '../../../store/chat/actions';
import { socketsConnect, socketsDisconnect, socketsEmit } from '../../../store/sockets/actions'
import { BasicSpeedDial, ChatHeader } from './components';

export function ChatRoomView ({ chatList, deleteMessage, deleteAll, mainUser, wsConnect, wsDisconnect, wsSend }) {
  const { roomId } = useParams();
  const activeRoom = chatList.find(item => item.id === roomId);
  const name = activeRoom.name;
  const avatar = activeRoom.avatar;

  useEffect(() => {
    wsConnect();

    return () => {
      wsDisconnect()
    };
  }, []);

  return (
    <Grid container direction='column' justifyContent='space-between' sx={{ height: '100%', flexWrap: 'noWrap' }} item xs>
      <Grid>
        <ChatHeader name={name} avatar={avatar}/>
        <Divider/>
      </Grid>
      <Grid sx={{ overflow: 'auto' }}>
        <List sx={{ mb: 3 }}>
          {activeRoom.messages.map(({ id, secondary, name }) => (
            <React.Fragment key={id}>
              {id === '1' && (
                <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                  Yesterday
                </ListSubheader>
              )}

              {id === '3' && (
                <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                  Today
                </ListSubheader>
              )}

              <Message
                deleteMessage={deleteMessage}
                messageId={id}
                secondary={secondary}
                avatar={avatar}
                name={name}
                mainUser={mainUser}
                roomId={roomId}
              />
            </React.Fragment>
          ))}
        </List>
        <BasicSpeedDial roomId={roomId} actionFn={deleteAll}/>
      </Grid>
      <Grid>
        <Divider/>
        <Input roomId={roomId} sendMessage={wsSend}/>
      </Grid>
    </Grid>
  );
}

const mapState = state => ({
  chatList: selectChatList(state),
  mainUser: selectMainUser(state)
});

const mapDispatch = (dispatch) => ({
  deleteMessage: (message) => dispatch(actionDeleteMessage(message)),
  deleteAll: (messages) => dispatch(actionDeleteAllMessages(messages)), 
  wsConnect: () => dispatch(socketsConnect()),
  wsDisconnect: () => dispatch(socketsDisconnect()),
  wsSend: (message) => dispatch(socketsEmit({wsType: 'MessageToServer', wsData: message}))
});

export const ChatRoom = connect(mapState, mapDispatch)(ChatRoomView);
