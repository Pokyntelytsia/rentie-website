import { createMuiTheme } from '@material-ui/core/styles';
import { teal, grey } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[900],
    },
    secondary: {
      main: teal[500],
      light: teal[200],
      dark: teal[50],
      contrastText: teal[50],
    },
  },

  overrides: {
    MuiButton: {
      text: {
        color: 'white',
        background: `linear-gradient(45deg, ${teal[600]} 30%, ${teal[400]} 90%)`,
        transition: 'transform 0.3s',

        '&:hover': {
          transform: 'scale(1.04)'
        }
      },

    },
  }
});

export default theme;