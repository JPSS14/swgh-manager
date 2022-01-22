import { Box } from '@mui/material';
import { styled } from '@mui/system';

export const ContentStyled = styled(Box)(({theme}) => {
  return{
    padding: `0 ${theme.spacing(5)}`,
    height: '100vh',
  }
});