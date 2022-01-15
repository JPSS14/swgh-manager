import { Box as MuiBox, BoxProps } from '@mui/material';
import { styled } from '@mui/system';

export const Box = styled(MuiBox)<BoxProps>(({ theme }) => {
  const { swgh } = theme.palette;
  return {
    width: '100vw',
    color: swgh.white,
    background: swgh.dark,
    padding: `${theme.spacing(1.5)} ${theme.spacing(1)}`,
    '& .MuiTypography-root':{
      fontSize: '20px',
    }
  }
});