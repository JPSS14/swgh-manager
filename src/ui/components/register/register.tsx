import { Box } from '@mui/material';
import { BoxContainer } from './register.style';

export interface RegisterProps {
  title: string;
  value?: number;
}

export const Register = ({ title, value }: RegisterProps) => {
  return (
    <BoxContainer>
      <Box component="span">{title}: </Box>
      {value && <Box component='span'>{value}</Box>}
    </BoxContainer>
  );
};