import { BoxCtProps } from "./box-ct";
import { styled } from '@mui/system';
import { Box } from '@mui/material';

export const BoxCtStytle = styled(Box)<BoxCtProps>(({ theme }) => (props) => {
  const { swgh } = theme.palette;
  const { md } = props;
  return {
    width: md ? '50%' : '100%',
    background: swgh.light,
    borderRadius: '5px',
    boxShadow: `0 1px 2px 0px ${swgh.dark}`,
    padding: `${theme.spacing(1.5)} ${theme.spacing(2.5)}`,
    '& h1': {
      width: '100%',
      fontSize: '1.3em',
      marginBottom: theme.spacing(2),
    }
  }
});