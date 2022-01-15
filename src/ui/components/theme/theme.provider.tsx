import { FC } from 'react';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { theme } from './theme-default';

export const SwghThemeProvider: FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};