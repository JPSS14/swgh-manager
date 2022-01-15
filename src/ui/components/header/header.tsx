import { Typography } from '@mui/material';
import { Box } from './header.style';

export const Header = () => {
  return (
    <Box component='header'>
      <Typography component='h1'>SWGH Manager</Typography>
    </Box>
  );
}