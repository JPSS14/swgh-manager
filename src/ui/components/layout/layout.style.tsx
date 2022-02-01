import { Box } from '@mui/material';
import { styled } from '@mui/system';

export const ContentStyled = styled(Box)(({theme}) => {
  return{
    margin: `0 ${theme.spacing(5)}`,
    height: 'calc(100vh - 70px)',
  }
});