import { extendTheme, Theme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      '400': '#999999',
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
        bg: 'gray.50',
        color: 'gray.500',
      },
    },
  },
  breakpoints: {
    '2xl': '1650px',
  },
} as Theme | {});
