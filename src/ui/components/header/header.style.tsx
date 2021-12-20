import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => {
  return {
    root: {
      background: '#000',
      color: '#fff',
      '& h1':{
        padding: 0,
        margin: 0
      }
    }
  };
});