import { Box, Typography } from '@mui/material';

export function EmptyRoom () {
  return (
    <Box display='grid' sx={{ height: '100%' }}>
      <Typography sx={{ alignSelf: 'center', justifySelf: 'center' }}>
        Choose who would you like to write to...
      </Typography>
    </Box>
  );
}
