import { Typography } from "@mui/material";
import { BoxCtStytle } from "./box-ct.style";

export interface BoxCtProps {
  children: React.ReactNode;
  title?: string;
  md?: boolean;
}

export const BoxCt = ({ children, title }: BoxCtProps) => {
  return (
    <BoxCtStytle>
      {title && <Typography component='h1' variant='h1'>{title}</Typography>}
      {children}
    </BoxCtStytle>
  );
}