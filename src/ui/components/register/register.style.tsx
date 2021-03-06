import { Box, BoxProps } from '@mui/material';
import { styled } from '@mui/system';

export const BoxContainer = styled(Box)<BoxProps>(({ theme }) => {
  const {swgh} = theme.palette;
  return {
    background: swgh.dark,
    width: '100%',
    padding: `${theme.spacing(0.5)}`,
    color: swgh.light,
    borderRadius: theme.spacing(1)
  };
});