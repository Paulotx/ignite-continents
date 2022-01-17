import { extendTheme, Theme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      '500': '#47585B',
    },
    yellow: {
      '500': '#FFBA08',
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'gray.500',
      },
    },
  },
  breakpoints: {
    '2xl': '1650px',
  },
} as Theme | {});
