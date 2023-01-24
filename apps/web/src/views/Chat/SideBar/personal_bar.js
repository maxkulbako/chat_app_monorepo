import { styled } from '@mui/material/styles';
import CreateIcon from '@mui/icons-material/Create';
import { IconButton, Badge, Avatar, Grid, Box, Typography } from '@mui/material';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""'
    }
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0
    }
  }
}));

function BadgeAvatars ({ mainUser }) {
  const name = mainUser.name;
  const avatar = mainUser.avatar;

  return (
    <StyledBadge
      overlap="circular"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      variant="dot"
    >
      <Avatar alt={name}
        src={avatar}
        sx={{ width: 56, height: 56 }}
      />
    </StyledBadge>
  );
}

export function PersonalBar ({ mainUser }) {
  return (
    <Box sx={{ padding: '0 10px' }}>
      <Grid container spacing={2}>
        <Grid item>
          <BadgeAvatars mainUser={mainUser}/>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction='column'>
            <Typography gutterBottom variant="subtitle1" component="div" color='primary'>{mainUser.name}</Typography>
            <Typography variant="body2" color="text.secondary">{mainUser.appointment}</Typography>
          </Grid>
          <Grid>
            <IconButton >
              <CreateIcon fontSize="small"/>
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
