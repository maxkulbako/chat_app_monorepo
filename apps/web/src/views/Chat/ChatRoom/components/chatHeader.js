import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { Grid, Box, Typography } from '@mui/material';
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`
  }
}));

export function ChatHeader ({ name, avatar }) {
  return (
    <Box>
      <Grid item container alignItems='center' justifyContent='space-between' sx={{ padding: '10px 10px 10px 0' }}>
        <Grid container direction='row' sx={{ width: 'fit-content', columnGap: '15px' }} >
          <Grid>
            <Avatar
              alt={name}
              src={avatar}
              sx={{ width: 46, height: 46 }}
            />
          </Grid>
          <Grid>
            <Typography> {name}</Typography>
          </Grid>
          <Grid>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
            >
            </StyledBadge>
          </Grid>
        </Grid>
        <Grid>
          <IconButton size="large" aria-label="search" color="inherit">
            <SearchIcon />
          </IconButton>
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite color={'warning'} />} />
        </Grid>
      </Grid>
    </Box>
  );
}
