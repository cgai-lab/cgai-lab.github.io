import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  typography: {
    fontFamily: ['Montserrat', 'sans-serif', 'Roboto'].join(','),
  },
  palette: {
    primary: {
      main: '#1a1b1f',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: '#1a1b1f',
    },
    background: {
      paper: '#fff',
      default: '#fff',
    },
  },
});

export default theme;
