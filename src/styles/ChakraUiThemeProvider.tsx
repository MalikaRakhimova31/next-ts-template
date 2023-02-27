import { ChakraProvider } from "@chakra-ui/react";

// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin']
})

type ComponentWithChildProps = React.PropsWithChildren<{example?: string}>;

export const ChakraUiThemeProvider = ({ children }: ComponentWithChildProps) => {
  // Chakra UI's blue
  const blue = {
    900: "#1A365D",
    800: "#2A4365",
    700: "#2C5282",
    600: "#2B6CB0",
    500: "#3182CE",
    400: "#4299E1",
    300: "#63B3ED",
    200: "#90CDF4",
    100: "#BEE3F8",
    50: "#EBF8FF",
  };


  const colors = {
    brand: {
      900: `#152c4d`,
      800: blue[`900`],
      700: blue[`800`],
      600: blue[`700`],
      500: blue[`600`],
      400: blue[`500`],
      300: blue[`400`],
      200: blue[`300`],
      100: blue[`200`],
      50: blue[`100`],
      10: blue[`50`],
    },
  };

  const theme = extendTheme({
    components: {
      Button: {
        defaultProps: {
          colorScheme: `brand`,
        },
      },
    },
    colors,
    fonts: {
      body: montserrat.style.fontFamily,
      heading:  montserrat.style.fontFamily
    },
    // },
    styles: {
      global: (props: any) => ({
        body: {
          // mode ("color for light mode (string)", "color for dark mode (string)")
          backgroundColor: `#FFFFFF`,
          color: `gray.600`,
          bg: mode(`gray.50`, `gray.50`)(props),
        },
        a: {
          color: colors.brand[`500`],
          _hover: {
            textDecoration: `underline`,
          },
        },
        button: {
          fontWeight: `normal !important`,
        },
      }),
    },
  });

  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
