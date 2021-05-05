import { mode } from "@chakra-ui/theme-tools";
import { extendTheme } from "@chakra-ui/react";
 

const colors = {
  brand: {
    font: "#F2F2F2",
    headings: "#19276B",
    50: "#dcf4ff",
    100: "#afdcff",
    200: "#7ec4ff",
    300: "#4dacff",
    400: "#2195fe",
    500: "#41A7FF",
    600: "#0060b3",
    700: "#004481",
    800: "#002950",
    900: "#000f20",
    0: "#FFFFFF",
    1: "#f2f2ff",
    2: "#9CA8FF"
  },
  darkBrand: {
    bg: "#000022",
    font: "#333333",
    headings: "#9C9CFF",
    50: "#e2e9ff",
    100: "#b2bcff",
    200: "#7f8fff",
    300: "#4d62ff",
    400: "#1d35fe",
    500: "#3951FF ",
    600: "#0016b3",
    700: "#000f81",
    800: "#000850",
    900: "#000220",
    0: "#222244",
    1: "#111133",
    2: "#151f47"
  }
};

export const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false
  },
  fonts: {
    heading:  '-apple-system, BlinkMacSystemFont, sans-serif',
    body:  '-apple-system, BlinkMacSystemFont, sans-serif',
  },
  colors,

  components: {
    Heading: {
      baseStyle: (props) => ({
        color: mode(colors.brand.headings, colors.darkBrand.headings)(props)
      })
    },

    Box: {
      defaultProps: {
        bg: "red"
      },
      baseStyle: {
        background: "red"
      },

      variants: {
        outline: (props) => ({
          borderColor: mode(colors.brand[500], colors.darkBrand[500])(props),
          color: mode(colors.brand[500], colors.darkBrand[500])(props)
        })
      }
    },
    Button: {
      defaultProps: {
        colorScheme: "brand"
      },
      baseStyle: {
        //fontFamily: "futura-pt",

        fontWeight: "semibold",
        borderRadius: 0
      },

      variants: {
        outline: (props) => ({
          borderColor: mode(colors.brand[500], colors.darkBrand[500])(props),
          color: mode(colors.brand[500], colors.darkBrand[500])(props)
        })
      }
    },

    Input: {
      variants: {
        outline: (props) => ({
          field: {
            borderColor: props.isReadOnly
              ? mode(colors.brand[1], colors.darkBrand[1])(props)
              : "inherit"
          }
        }),
        flushed: (props) => ({
          field: {
            borderColor: mode(colors.brand[1], colors.darkBrand[1])(props)
          }
        })
      }
    },

    Checkbox: {
      baseStyle: (props) => ({
        field: {},
        control: {
          _checked: {
            "&:hover": {
              borderColor: mode(
                colors.brand[700],
                colors.darkBrand[100]
              )(props),
              bg: mode(colors.brand[700], colors.darkBrand[100])(props)
            },
            borderColor: mode(colors.brand[500], colors.darkBrand[500])(props),
            bg: mode(colors.brand[500], colors.darkBrand[500])(props),
            color: colors.brand[0]
          }
        }
      })
    }
  },
  styles: {
    global: (props) => ({
      ":root": {
        "--chakra-colors-brand-0": mode(
          colors.brand[0],
          colors.darkBrand[0]
        )(props),
        "--chakra-colors-brand-1": mode(
          colors.brand[1],
          colors.darkBrand[1]
        )(props),
        "--chakra-colors-brand-2": mode(
          colors.brand[2],
          colors.darkBrand[2]
        )(props),
        "--chakra-colors-brand-50": mode(
          colors.brand[50],
          colors.darkBrand[50]
        )(props),
        "--chakra-colors-brand-100": mode(
          colors.brand[100],
          colors.darkBrand[100]
        )(props),
        "--chakra-colors-brand-200": mode(
          colors.brand[200],
          colors.darkBrand[200]
        )(props),
        "--chakra-colors-brand-300": mode(
          colors.brand[300],
          colors.darkBrand[300]
        )(props),
        "--chakra-colors-brand-400": mode(
          colors.brand[400],
          colors.darkBrand[400]
        )(props),
        "--chakra-colors-brand-500": mode(
          colors.brand[500],
          colors.darkBrand[500]
        )(props),
        "--chakra-colors-brand-600": mode(
          colors.brand[600],
          colors.darkBrand[600]
        )(props),
        " --chakra-colors-brand-700": mode(
          colors.brand[700],
          colors.darkBrand[700]
        )(props),
        "--chakra-colors-brand-800": mode(
          colors.brand[800],
          colors.darkBrand[800]
        )(props),
        "--chakra-colors-brand-900": mode(
          colors.brand[900],
          colors.darkBrand[900]
        )(props)
      },
      body: {
        bg: mode(
          `linear-gradient(45deg,  ${colors.brand[1]}, ${theme.colors.white})`,
          `linear-gradient(45deg, ${theme.colors.black},${colors.darkBrand.bg})`
        )(props),

        ".ag-theme-alpine": {
          "--ag-background-color": colors.brand[1],
          "--ag-row-hover-color": colors.brand[2],
          "--ag-odd-row-background-color": colors.brand[0],
          "--ag-header-background-color": colors.brand[0],
          ".ag-root-wrapper,.ag-row, .ag-header": { border: "none" },

          ".ag-layout-auto-height .ag-center-cols-clipper, .ag-layout-auto-height .ag-center-cols-container, .ag-layout-print .ag-center-cols-clipper, .ag-layout-print .ag-center-cols-container ": {
            background: colors.brand[0]
          }
        },

        ".ag-theme-alpine-dark": {
          "--ag-background-color": colors.darkBrand[1],
          "--ag-row-hover-color": colors.darkBrand[500],
          "--ag-odd-row-background-color": colors.darkBrand[0],
          "--ag-header-background-color": colors.darkBrand[0],
          ".ag-root-wrapper,.ag-row, .ag-header": { border: "none" },
          ".ag-layout-auto-height .ag-center-cols-clipper, .ag-layout-auto-height .ag-center-cols-container, .ag-layout-print .ag-center-cols-clipper, .ag-layout-print .ag-center-cols-container ": {
            background: colors.darkBrand[0]
          }
        },

        backgroundAttachment: "fixed",

        "*": {
          borderColor: mode(colors.brand[500], colors.darkBrand[500])(props)
        },
        "select+div>svg path": {
          fill: mode(colors.brand[500], colors.darkBrand[500])(props)
        }
      }
    })
  }
});