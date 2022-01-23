import { Box } from '@mui/material';
import { styled } from '@mui/system';

export const FooterStyle = styled(Box)(({ theme }) => {
  const {swgh} = theme.palette;
  return {
    display: 'flex',
    justifyContent: 'center',
    width: '100vw',
    position: 'absolute',
    bottom: 0,
    background: swgh.dark,
    color: swgh.white,
    padding: theme.spacing(1),
  }
});