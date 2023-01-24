import * as React from 'react';
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import Fab from '@mui/material/Fab';
import SendIcon from '@mui/icons-material/Send';
import { styled } from '@mui/material/styles';

const StyledFab = styled(Fab)({
  width: '36px',
  height: '36px'
});

export function Input ({ sendMessage, roomId }) {
  const [text, setText] = useState('');

  const sendHandler = () => {
    if (text) {
      sendMessage({ text, roomId });
      setText('');
    };
  };

  return (
    <Paper
      component="form"
      sx={{ m: '10px 10px 10px 0', p: '2px 4px', display: 'flex', alignItems: 'center', borderRadius: '10px' }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <AttachFileIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Write Something"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="keyboard">
        <KeyboardIcon color={'primary'} />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <StyledFab color="primary" aria-label="send"
        onClick={sendHandler}
      >
        <SendIcon fontSize={'small'} sx={{ transform: 'rotate(-45deg)' }}/>
      </StyledFab>
    </Paper>
  );
}
