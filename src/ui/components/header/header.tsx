import { useStyles } from './header.style';

export const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.root}>
      <h1>SWGH Manager</h1>
    </header>
  );
}