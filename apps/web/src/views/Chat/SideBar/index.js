import { PersonalBar } from './personal_bar';
import { Search } from './search';
import { ChatList } from './chat_list';
import { Box, Grid } from '@mui/material';

export function Sidebar ({ chatList, mainUser }) {
  return (
    <Box sx={{ padding: '10px 0', height: '100%' }}>
      <Grid
        container item xs={12}
        rowSpacing={2}
        direction='column'
      >
        <Grid item xs>
          <PersonalBar mainUser={mainUser}/>
        </Grid>
        <Grid item xs>
          <Search/>
        </Grid>
        <Grid item xs>
          <ChatList chatList={chatList}/>
        </Grid>
      </Grid>
    </Box>
  );
}
