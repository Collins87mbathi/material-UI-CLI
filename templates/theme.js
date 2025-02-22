function createTheme(options) {
  const { primary, secondary, error, warning, info } = options
  const theme = `
  // Welcome to the Material-UI theming template!
  // This is the starting point for defining your application's unique style.
  // Feel free to adjust the color palette, typography, and layout to suit your needs.
  // Need inspiration or guidance? Dive into the Material-UI theming documentation to explore all the powerful features:
  // https://mui.com/material-ui/customization/theming/
  // Happy theming!  

  const themeConfig = {
    palette: {
      primary: {
        main: "${primary}",
        // light: will be calculated from palette.primary.main if note added,
        // dark: will be calculated from palette.primary.main if not added,
        // contrastText: will be calculated to contrast with palette.primary.main if note added
      },
      secondary: {
        main: "${secondary}",
        // light: will be calculated from palette.secondary.main if note added,
        // dark: will be calculated from palette.secondary.main if not added,
        // contrastText: will be calculated to contrast with palette.secondary.main if note added
      },
      error: {
        main: "${error}",
        // light: will be calculated from palette.error.main if note added,
        // dark: will be calculated from palette.error.main if not added,
        // contrastText: will be calculated to contrast with palette.error.main if note added
      },
      warning: {
        main: "${warning}",
        // light: will be calculated from palette.warning.main if note added,
        // dark: will be calculated from palette.warning.main if not added,
        // contrastText: will be calculated to contrast with palette.warning.main if note added
      },
      info: {
        main: "${info}",
        // light: will be calculated from palette.info.main if note added,
        // dark: will be calculated from palette.info.main if not added,
        // contrastText: will be calculated to contrast with palette.info.main if note added
      },
    },
    typography: {
        fontFamily: [].join(','),
        fontSize: 16,
    },
    spacing: 1, // 8 * 1 = 8 => recommended spacing
    breakpoints: {
        values: {
            xs: "0px", //extra small
            sm: "600px", //small
            md: "900px", //medium
            lg: "1200px", //large
            xl: "1536px", //extra-large
        }
    },
    transitions: {
        duration: {
            shortest: 150,
            shorter: 200,
            short: 250,
            // most basic recommended timing
            standard: 300,
            // this is to be used in complex animations
            complex: 375,
            // recommended when something is entering screen
            enteringScreen: 225,
            // recommended when something is leaving screen
            leavingScreen: 195,
          },
          easing: {
            // This is the most common easing curve.
            easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
            // Objects enter the screen at full velocity from off-screen and
            // slowly decelerate to a resting point.
            easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
            // Objects leave the screen at full velocity. They do not decelerate when off-screen.
            easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
            // The sharp curve is used by objects that may return to the screen at any time.
            sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
          },
    },
    components: {
      // Example customization for the MUI Button base styling
      MuiButtonBase: {
        defaultProps: {
          // Uncomment and set these to change the default button properties
          // disableRipple: true, // No ripple effect
        }
      }
    },
  }

  export default themeConfig
`
  return theme
}

module.exports = createTheme;