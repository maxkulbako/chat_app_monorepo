import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import { ListItem, Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';

export function Message ({ avatar, secondary, name, messageId, deleteMessage, mainUser, roomId }) {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const theme = useTheme();
  const isMainUser = mainUser.name === name;

  const deleteHandler = () => {
    deleteMessage({ roomId, messageId });
  };

  return (
    <Box sx={ isMainUser ? { display: 'flex', justifyContent: 'end' } : {}}>
      <ListItem alignItems='flex-start'
        onMouseEnter={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
        sx={{
          width: '70%',
          display: 'flex',
          flexDirection: isMainUser ? 'row-reverse' : ''
        }} button>
        <ListItemAvatar>
          <Avatar alt={name} src={isMainUser ? mainUser.avatar : avatar} sx={{ marginLeft: isMainUser ? '8px' : '' }} />
        </ListItemAvatar>
        <ListItemText sx={{ width: 'inherit' }} secondary={
          <Typography variant='body2'
            sx={ isMainUser
              ? {
                textAlign: 'end',
                backgroundColor: theme.palette.primary.main,
                borderRadius: '10px',
                padding: '8px',
                paddingLeft: '15px',
                color: '#fff'
              }
              : { padding: '8px' }
            }
          >
            {secondary}
          </Typography>
        }
        />
        <Box sx={{ width: '34px', height: '34px', alignSelf: 'center' }}>
          {isMouseOver &&
          <IconButton
            size='small'
            aria-label="delete"
            onClick={deleteHandler}
          >
            <DeleteIcon />
          </IconButton> }
        </Box>
      </ListItem>
    </Box>
  );
}
