import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#454545',
    },
    secondary: {
      main: '#48E5C2',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  shape: {
    borderRadius: 6,
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 32,
      },
    },
  },
});

export default theme;
