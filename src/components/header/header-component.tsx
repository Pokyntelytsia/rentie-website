import * as React from 'react';
import { FC } from 'react';
import mainTheme from '../../thems/main-them';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';

import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

// --------------------------------------------------------

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
      textAlign: "left",
      textTransform: 'uppercase'
    },
    mainLogo: {
      width: '40px',
      height: '40px',
      marginRight: '12px',
      marginBottom: '12px'
    }

  }),
);

// ----------------------------------------------
interface HeaderProperties { };

const HeaderComponent: FC<HeaderProperties> = props => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={mainTheme}>
      <AppBar position="static">
        <Toolbar>
          <svg className={classes.mainLogo}>
            <use href="/assets/sprite.svg#main-logo"></use>
          </svg>
          <Typography variant="h6" className={classes.title}>
            Rentie
          </Typography>
          <Button>Login</Button>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  )
}

export default HeaderComponent;