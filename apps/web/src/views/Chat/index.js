import { Outlet } from 'react-router-dom';
import { Sidebar } from './SideBar';
import { selectChatList, selectMainUser } from '../../store/chat';
import { connect } from 'react-redux';
import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const ChatContainer = styled(Grid)({
  background: '#ffffff',
  maxWidth: '1024px',
  width: 'calc(100vw - 50px)',
  height: 'calc(100vh - 100px)',
  margin: '50px auto',
  borderRadius: '20px',
  overflow: 'hidden'
});

function ChatView ({ chatList, mainUser }) {
  return (
    <Box>
      <ChatContainer container sx={{ flexWrap: 'noWrap', columnGap: '10px' }}>
        <Grid item xs={4}>
          <Sidebar chatList={chatList} mainUser={mainUser} />
        </Grid>
        <Grid item xs>
          <Outlet/>
        </Grid>
      </ChatContainer>
    </Box>
  );
}

const mapState = state => ({
  chatList: selectChatList(state),
  mainUser: selectMainUser(state)
});

export const Chat = connect(mapState)(ChatView);
