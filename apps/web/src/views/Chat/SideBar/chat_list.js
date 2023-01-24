import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link, useParams } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';

const StyleLink = styled(Link)({
  textDecoration: 'none'
});

export function ChatList ({ chatList }) {
  const { roomId } = useParams();
  const list = chatList.map((item) => (
    <Box key={item.id}>
      <StyleLink to={`/${item.id}`}>
        <ChatListButton
          name={item.name}
          avatar={item.avatar}
          lastMessage= {item.messages && item.messages.length > 0 ? item.messages[item.messages.length - 1].secondary : 'no messages'}
          date={item.date}
          isSelected = {roomId === item.id}
        />
      </StyleLink>
      <Divider/>
    </Box>
  ));

  return (
    <List sx={{ height: '460px', overflow: 'auto', width: '100%' }}>{list}</List>
  );
}

function ChatListButton ({ name, avatar, lastMessage, date, isSelected }) {
  return (
    <ListItemButton sx={{ padding: '10px' }} selected={isSelected} >
      <ListItemAvatar>
        <Avatar alt={name} src={avatar}/>
      </ListItemAvatar>
      <ListItemText
        sx={{
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          width: '100px'
        }}
        primary={
          <Grid container item xs justifyContent='space-between'>
            <Grid item>
              <Typography
                color="primary"
              >
                {name}
              </Typography>
            </Grid>
            <Grid item>
              <Typography color='text.secondary' display='block' variant='body2'>{date}</Typography>
            </Grid>
          </Grid>
        }
        secondary={
          <Typography
            sx={{ display: 'inline' }}
            component="span"
            variant="body2"
            color="text.secondary"
          >
            {lastMessage}
          </Typography>
        }
      />
    </ListItemButton>
  );
}
