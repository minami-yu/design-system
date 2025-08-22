// theme.js
import { createTheme } from '@mui/material/styles';
import tokens from './tokens.json';

const colors = tokens.core;
const fonts = tokens.core.fontFamilies;
const fontSizes = tokens.core.fontSize;
const lineHeights = tokens.core.lineHeights;
const letterSpacing = tokens.core.letterSpacing;

const theme = createTheme({
  palette: {
    primary: {
      main: colors.Brand_Chlorophyll.value,
      light: colors.Brand_Sprout.value,
      dark: colors.Accent_Forest.value,
      contrastText: '#ffffff',
    },
    secondary: {
      main: colors.Brand_Sunrise.value,
      light: colors.Brand_Sunset.value,
      dark: colors.Accent_Earth.value,
      contrastText: '#222629',
    },
    background: {
      default: colors.Accent_Sand.value,
      paper: colors.Accent_Spring.value,
    },
    text: {
      primary: '#1C1C1E', // fallback
      secondary: '#8E8E93', // fallback
    },
  },

  typography: {
    fontFamily: `"${fonts.roboto.value}", "Helvetica", "Arial", sans-serif`,
    h1: {
      fontSize: `${fontSizes[0].value}px`,
      fontWeight: 300,
      lineHeight: lineHeights[0].value,
      letterSpacing: `${letterSpacing[0].value}px`,
    },
    h2: {
      fontSize: `${fontSizes[1].value}px`,
      fontWeight: 300,
      lineHeight: lineHeights[1].value,
      letterSpacing: `${letterSpacing[1].value}px`,
    },
    h3: {
      fontSize: `${fontSizes[2].value}px`,
      fontWeight: 400,
      lineHeight: lineHeights[0].value,
      letterSpacing: `${letterSpacing[2].value}px`,
    },
    h4: {
      fontSize: `${fontSizes[3].value}px`,
      fontWeight: 400,
      lineHeight: lineHeights[3].value,
      letterSpacing: `${letterSpacing[3].value}px`,
    },
    h5: {
      fontSize: `${fontSizes[4].value}px`,
      fontWeight: 400,
      lineHeight: lineHeights[4].value,
      letterSpacing: `${letterSpacing[2].value}px`,
    },
    h6: {
      fontSize: `${fontSizes[5].value}px`,
      fontWeight: 500,
      lineHeight: lineHeights[5].value,
      letterSpacing: `${letterSpacing[5].value}px`,
    },
    body1: {
      fontSize: `${fontSizes[7].value}px`,
      fontWeight: 400,
      lineHeight: lineHeights[7].value,
    },
    body2: {
      fontSize: `${fontSizes[6].value}px`,
      fontWeight: 400,
      lineHeight: lineHeights[6].value,
    },
    button: {
      textTransform: 'uppercase',
      fontWeight: 500,
      letterSpacing: `${letterSpacing[10].value}px`,
    },
    caption: {
      fontSize: `${fontSizes[9].value}px`,
      lineHeight: lineHeights[10].value,
      letterSpacing: `${letterSpacing[10].value}px`,
    },
    overline: {
      fontSize: `${fontSizes[9].value}px`,
      textTransform: 'uppercase',
      letterSpacing: `${letterSpacing[9].value}px`,
    },
  },

  shape: {
    borderRadius: 4, // hardcoded for now; could reference tokens.core.shape if needed
  },

  spacing: 8, // could reference tokens.spacing["1"].value if needed
});

export default theme;
