import LatoRegular from '../../../fonts/Lato/Lato-Regular.ttf';
import { uiColors, colors } from "../colors";

const latoregular = {
  fontFamily: 'LatoRegular',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Lato'),
    local('Lato-Regular'),
    url(${LatoRegular}) format('ttf')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const MainTheme = {
  palette: {
    primary: {
      main: colors.blue,
    },
    secondary: {
      main: colors.yellow,
      contrastText: 'white'
    }
  },
  typography: {
    fontFamily: ['Lato', 'Roboto', '"Open Sans"'].join(','),
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [latoregular],
      },
    },
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: uiColors.app.background,
        color: colors.darkBlue,
        fontWeight: 400,
      },
      root: {
        //padding: '50px 0'
      }
    },

    MuiButton: {
      root: {
        borderRadius: 0,
        textTransform: 'none',
        fontWeight: 400,
      },
      contained: {
        boxShadow: 'none',
      },
      containedPrimary: {
        boxShadow: 'none',
      },
      containedSecondary: {
        boxShadow: 'none',
      }
    },

    MuiFormHelperText: {
      root: {
        color: colors.error
      }
    }
  },

  gridTitle: {
    textAlign: "center",
    marginTop: 35,
  },

  subText: {
    color: colors.lightBlue,
  },
  
};

export { MainTheme };
