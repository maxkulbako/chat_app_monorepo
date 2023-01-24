import { FormControl, OutlinedInput, Box } from '@mui/material';

export function Search () {
  return (
    <Box sx={{ padding: '0 10px' }} >
      <FormControl sx={{ width: '100%' }} >
        <OutlinedInput placeholder="search" />
      </FormControl>
    </Box>
  );
}
